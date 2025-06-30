import { RgbColorBase } from "./base.js";
import { CieXyzD65 } from "./ciexyz.js";
import {
  mapVector,
  type Matrix3,
  multiplyMatrixVector,
} from "./internal/linalg.js";

/**
 * A color in the sRGB color space.
 *
 * @public
 */
export class Srgb extends RgbColorBase {
  declare private readonly nominalTypeId: "Srgb";

  toSrgbLinear(): SrgbLinear {
    return new SrgbLinear(
      ...mapVector(this.values, (value) =>
        value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
      ),
    );
  }
}

/**
 * A color in the linear variant of the sRGB color space.
 *
 * @public
 */
export class SrgbLinear extends RgbColorBase {
  declare private readonly nominalTypeId: "SrgbLinear";

  toCieXyzD65(): CieXyzD65 {
    const xyz = multiplyMatrixVector(RGB_TO_XYZ, this.values);
    return new CieXyzD65(...xyz);
  }

  toSrgb(): Srgb {
    return new Srgb(
      ...mapVector(this.values, (value) =>
        value <= 0.0031308 ? 12.92 * value : 1.055 * value ** (1 / 2.4) - 0.055,
      ),
    );
  }
}

// prettier-ignore
const RGB_TO_XYZ: Matrix3 = [
  [0.4123907992659595 , 0.35758433938387796, 0.1804807884018343 ],
  [0.21263900587151036, 0.7151686787677559 , 0.07219231536073371],
  [0.01933081871559185, 0.11919477979462599, 0.9505321522496606 ],
];

// prettier-ignore
export const XYZ_TO_RGB: Matrix3 = [
  [ 3.2409699419045213 , -1.5373831775700935 , -0.4986107602930033 ],
  [-0.9692436362808798 ,  1.8759675015077206 ,  0.04155505740717561],
  [ 0.05563007969699361, -0.20397695888897657,  1.0569715142428786 ],
];
