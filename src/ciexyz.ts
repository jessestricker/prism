import { XyzColorBase } from "./base.js";
import { type Matrix3, multiplyMatrixVector } from "./internal/linalg.js";
import { SrgbLinear, XYZ_TO_RGB } from "./srgb.js";

/**
 * A color in the CIE XYZ color space, using CIE D50 as its whitepoint.
 *
 * @public
 */
export class CieXyzD50 extends XyzColorBase {
  declare private readonly nominalTypeId: "CieXyzD50";

  toCieXyzD65(): CieXyzD65 {
    const xyzD65 = multiplyMatrixVector(D50_TO_D65, this.values);
    return new CieXyzD65(...xyzD65);
  }
}

/**
 * A color in the CIE XYZ color space, using CIE D65 as its whitepoint.
 *
 * @public
 */
export class CieXyzD65 extends XyzColorBase {
  declare private readonly nominalTypeId: "CieXyzD65";

  toSrgbLinear(): SrgbLinear {
    const rgb = multiplyMatrixVector(XYZ_TO_RGB, this.values);
    return new SrgbLinear(...rgb);
  }

  toCieXyzD50(): CieXyzD50 {
    const xyzD50 = multiplyMatrixVector(D65_TO_D50, this.values);
    return new CieXyzD50(...xyzD50);
  }
}

// prettier-ignore
const D50_TO_D65: Matrix3 = [
  [ 0.9554734214880752  , -0.023098454948764523, 0.06325924320057066 ],
  [-0.028369709333863583,  1.0099953980813041  , 0.021041441191917306],
  [ 0.012314014864481996, -0.02050764929889898 , 1.330365926242124   ],
];

// prettier-ignore
const D65_TO_D50: Matrix3 = [
  [ 1.0479297925449966  , 0.022946870601609527, -0.050192266289205194],
  [ 0.029627808770055674, 0.99043442675388    , -0.01707379906341879 ],
  [-0.009243040646204521, 0.015055191490298164,  0.751874281428137   ],
];
