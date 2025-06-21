import { RgbColorBase } from "./base.js";
import { mapVector } from "./internal/linalg.js";

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

  toSrgb(): Srgb {
    return new Srgb(
      ...mapVector(this.values, (value) =>
        value <= 0.0031308 ? 12.92 * value : 1.055 * value ** (1 / 2.4) - 0.055,
      ),
    );
  }
}
