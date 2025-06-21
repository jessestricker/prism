import type { Vector3 } from "./internal/linalg.js";

/**
 * A base type for colors using the RGB color model.
 *
 * @public
 */
export abstract class RgbColorBase {
  constructor(
    readonly r: number,
    readonly g: number,
    readonly b: number,
  ) {}

  get values(): Vector3 {
    return [this.r, this.g, this.b];
  }
}
