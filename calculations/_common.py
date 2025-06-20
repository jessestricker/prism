import numpy as np
from sympy import Matrix, matrix2numpy


def xy_to_XYZ(xy):
    x, y = xy
    z = 1 - x - y
    return Matrix([x / y, 1, z / y])


def print_float64(m):
    a = matrix2numpy(m, dtype=np.float64)
    s = np.array2string(a, separator=", ", floatmode="unique")
    print(s)
