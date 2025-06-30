import { LabColorBase } from "./base.js";
import { CieXyzD50 } from "./ciexyz.js";
import {
  divideVector,
  mapVector,
  multiplyVector,
  type Vector3,
} from "./internal/linalg.js";

/**
 * A color in the CIE Lab color space.
 *
 * @public
 */
export class CieLab extends LabColorBase {
  declare private readonly nominalTypeId: "CieLab";

  static fromCieXyzD50(xyz: CieXyzD50): CieLab {
    const xyzNormalized = divideVector(xyz.values, XYZ_D50);
    const [fXn, fYn, fZn] = mapVector(xyzNormalized, (value) =>
      value > (6 / 29) ** 3 ? Math.cbrt(value) : (841 / 108) * value + 4 / 29,
    );
    const l = 116 * fYn - 16;
    const a = 500 * (fXn - fYn);
    const b = 200 * (fYn - fZn);
    return new CieLab(l, a, b);
  }

  toCieXyzD50(): CieXyzD50 {
    const fYn = (this.l + 16) / 116;
    const fXn = this.a / 500 + fYn;
    const fZn = fYn - this.b / 200;
    const xyzNormalized = mapVector([fXn, fYn, fZn], (value) =>
      value > 6 / 29 ? value ** 3 : (108 / 841) * (value - 4 / 29),
    );
    const xyz = multiplyVector(xyzNormalized, XYZ_D50);
    return new CieXyzD50(...xyz);
  }
}

const XYZ_D50: Vector3 = [0.9642956764295676, 1, 0.8251046025104602];
