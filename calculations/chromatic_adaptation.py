# http://brucelindbloom.com/Eqn_ChromAdapt.html

from _common import divide_elementwise, print_float64, xy_D50, xy_D65, xy_to_XYZ
from sympy import Matrix, Rational

xy_src = xy_D50
xy_dst = xy_D65

# Bradford method
M_A = Matrix(
    [
        [Rational(" 0.8951"), Rational(" 0.2664"), Rational("-0.1614")],
        [Rational("-0.7502"), Rational(" 1.7135"), Rational(" 0.0367")],
        [Rational(" 0.0389"), Rational("-0.0685"), Rational(" 1.0296")],
    ]
)

XYZ_src = xy_to_XYZ(xy_src)
XYZ_dst = xy_to_XYZ(xy_dst)

rgb_src = M_A * XYZ_src
rgb_dst = M_A * XYZ_dst

rho_gamma_beta_dst_src = Matrix.diag(*divide_elementwise(rgb_dst, rgb_src))
M = M_A.inv() * rho_gamma_beta_dst_src * M_A
M_inv = M.inv()

print("src to dst:")
print_float64(M)
print()
print("dst to src:")
print_float64(M_inv)
