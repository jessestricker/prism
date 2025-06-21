/**
 * A 3-dimensional vector.
 *
 * @public
 */
export type Vector3 = [number, number, number];

export function mapVector(
  vector: Vector3,
  transform: (value: number) => number,
): Vector3 {
  return vector.map(transform) as Vector3;
}
