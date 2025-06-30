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

export function multiplyVector(a: Vector3, b: Vector3): Vector3 {
  return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

export function divideVector(a: Vector3, b: Vector3): Vector3 {
  return [a[0] / b[0], a[1] / b[1], a[2] / b[2]];
}

export type Matrix3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

export function multiplyMatrixVector(m: Matrix3, v: Vector3): Vector3 {
  return [
    m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
    m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
    m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2],
  ];
}
