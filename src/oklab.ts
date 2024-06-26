import { CieXyzD65 } from "./ciexyz.js";
import { Matrix3, Vector3 } from "./util/linalg.js";

/**
 * A value in the Oklab color space.
 * @public
 */
export class Oklab {
  private declare readonly nominalTypeId: symbol;

  constructor(
    /** The lightness component _L_, in the range [0, 1]. */
    readonly l: number,
    /** The green/red component _a_, practically in the range [-0.5, +0.5]. */
    readonly a: number,
    /** The blue/yellow component _b_, practically in the range [-0.5, +0.5]. */
    readonly b: number,
  ) {}

  static fromCieXyzD65(xyz: CieXyzD65): Oklab {
    const lms = Matrix3.multiply(XYZ_TO_LMS, xyz.toVector3());
    const lmsNL = Vector3.map(lms, (c) => Math.cbrt(c));
    return new Oklab(...Matrix3.multiply(LMS_TO_OKLAB, lmsNL));
  }

  toCieXyzD65(): CieXyzD65 {
    const lmsNL = Matrix3.multiply(OKLAB_TO_LMS, this.toVector3());
    const lms = Vector3.map(lmsNL, (c) => c ** 3);
    return new CieXyzD65(...Matrix3.multiply(LMS_TO_XYZ, lms));
  }

  toOklch(): Oklch {
    const c = Math.hypot(this.a, this.b);
    const h = Math.atan2(this.b, this.a);
    return new Oklch(this.l, c, h);
  }

  /** @internal */
  toVector3(): Vector3 {
    return [this.l, this.a, this.b];
  }
}

/**
 * A value in the polar Oklab color space (a.k.a. OkLCh).
 * @public
 */
export class Oklch {
  private declare readonly nominalTypeId: symbol;

  constructor(
    /** The lightness component _L_, in the range [0, 1]. */
    readonly l: number,
    /** The chroma component _C_, practically in the range [0, 0.5]. */
    readonly c: number,
    /** The hue component _h°_, in the range [0, τ). */
    readonly h: number,
  ) {}

  toOklab(): Oklab {
    const a = this.c * Math.cos(this.h);
    const b = this.c * Math.sin(this.h);
    return new Oklab(this.l, a, b);
  }
}

// prettier-ignore
const XYZ_TO_LMS: Matrix3 = [
  [ 0.819022437996703 ,  0.3619062600528904, -0.1288737815209879],
  [ 0.0329836539323885,  0.9292868615863434,  0.0361446663506424],
  [ 0.0481771893596242,  0.2642395317527308,  0.6335478284694309],
];

// prettier-ignore
const LMS_TO_OKLAB: Matrix3 = [
  [ 0.210454268309314 ,  0.7936177747023054, -0.0040720430116193],
  [ 1.9779985324311684, -2.42859224204858  ,  0.450593709617411 ],
  [ 0.0259040424655478,  0.7827717124575296, -0.8086757549230774],
];

// prettier-ignore
const LMS_TO_XYZ: Matrix3 = [
  [ 1.2268798758459243, -0.5578149944602171,  0.2813910456659647],
  [-0.0405757452148008,  1.112286803280317 , -0.0717110580655164],
  [-0.0763729366746601, -0.4214933324022432,  1.5869240198367816],
];

// prettier-ignore
const OKLAB_TO_LMS: Matrix3 = [
  [ 1.                ,  0.3963377773761749,  0.2158037573099136],
  [ 1.                , -0.1055613458156586, -0.0638541728258133],
  [ 1.                , -0.0894841775298119, -1.2914855480194092],
];
