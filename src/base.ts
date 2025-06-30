import type { Vector3 } from "./internal/linalg.js";

/**
 * A base type for colors.
 *
 * @public
 */
export abstract class ColorBase {
  abstract get values(): Vector3;
}

/**
 * A base type for colors using the Lab color model.
 *
 * @public
 */
export abstract class LabColorBase extends ColorBase {
  constructor(
    readonly l: number,
    readonly a: number,
    readonly b: number,
  ) {
    super();
  }

  override get values(): Vector3 {
    return [this.l, this.a, this.b];
  }
}

/**
 * A base type for colors using the RGB color model.
 *
 * @public
 */
export abstract class RgbColorBase extends ColorBase {
  constructor(
    readonly r: number,
    readonly g: number,
    readonly b: number,
  ) {
    super();
  }

  override get values(): Vector3 {
    return [this.r, this.g, this.b];
  }
}

/**
 * A base type for colors using the XYZ color model.
 *
 * @public
 */
export abstract class XyzColorBase extends ColorBase {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly z: number,
  ) {
    super();
  }

  override get values(): Vector3 {
    return [this.x, this.y, this.z];
  }
}
