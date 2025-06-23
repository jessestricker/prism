import { XyzColorBase } from "./base.js";
import { multiplyMatrixVector } from "./internal/linalg.js";
import { SrgbLinear, XYZ_TO_RGB } from "./srgb.js";

/**
 * A color in the CIE XYZ color space.
 *
 * @public
 */
export class CieXyzD65 extends XyzColorBase {
  declare private readonly nominalTypeId: "CieXyzD65";

  toSrgbLinear(): SrgbLinear {
    const rgb = multiplyMatrixVector(XYZ_TO_RGB, this.values);
    return new SrgbLinear(...rgb);
  }
}
