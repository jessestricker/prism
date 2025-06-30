import numpy as np
from sympy import Matrix, Rational, matrix2numpy

xy_D50 = Matrix([Rational("0.3457"), Rational("0.3585")])
xy_D65 = Matrix([Rational("0.3127"), Rational("0.3290")])


def xy_to_XYZ(xy):
    x, y = xy
    z = 1 - x - y
    return Matrix([x / y, 1, z / y])


def print_float64(m):
    a = matrix2numpy(m, dtype=np.float64)
    s = np.array2string(a, separator=", ", floatmode="unique")
    print(s)


def divide_elementwise(a, b):
    if a.shape != b.shape:
        raise ValueError("incompatible shapes")

    return Matrix(a.rows, a.cols, lambda i, j: a[i, j] / b[i, j])
