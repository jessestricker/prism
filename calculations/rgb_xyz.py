# http://brucelindbloom.com/Eqn_RGB_XYZ_Matrix.html

from _common import print_float64, xy_to_XYZ
from sympy import Matrix, Rational

S = Rational

# sRGB
xy_r = Matrix([S("0.6400"), S("0.3300")])
xy_g = Matrix([S("0.3000"), S("0.6000")])
xy_b = Matrix([S("0.1500"), S("0.0600")])

# D65
xy_w = Matrix([S("0.3127"), S("0.3290")])

XYZ_r = xy_to_XYZ(xy_r)
XYZ_g = xy_to_XYZ(xy_g)
XYZ_b = xy_to_XYZ(xy_b)
XYZ_w = xy_to_XYZ(xy_w)

XYZ_rgb = XYZ_r.row_join(XYZ_g).row_join(XYZ_b)
S_rgb = XYZ_rgb.inv() * XYZ_w
SSS_rgb = S_rgb.T.col_join(S_rgb.T).col_join(S_rgb.T)
M = SSS_rgb.multiply_elementwise(XYZ_rgb)

print_float64(M)
