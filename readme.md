#3D转换属性

_____
1.transform
2.transform-origin
3.perspective
4.perspective-origin
5.transform-style
6.backface-visibility/hidden
______
##极坐标和直角坐标系转换公式
####极坐标转直角坐标
θ代表天顶角 theta
φ代表方位角 phi

<code>var x=radiusMath.sin(θ)Math.cos(φ);var z=radiusMath.sin(θ)Math.sin(φ);
var y=radiusMath.cos(θ);<code>

###直角坐标转极坐标
<code>var r=Math.sqrt(x²+y²+z²); var θ=Math.atan(√x²+y²/z) var φ=Math.atan(y/x);<code>

#向量的概念
1.向量是有大小方向的量
2.向量的模，指的是向量的大小
  <pre>mo=√x²+y²+z²<pre>
3.单位向量指的是模等于1的向量
  x=x轴向量/模；
  y=y轴向量/模；
  z=z轴向量/模；
4.css3 rotate3d(x,y,z,角度)

 .x,y,z分别指各轴的单位向量
 .角度指的是旋转的角度；
5.角度和弧度的转换公式
  角度=弧度180/PI  弧度=角度PI/180;
  
#javascript 三角函数
 1.sin/con/tan
 2.asin/acos/atan/atan2;
 3.只接受弧度作为参数
 ##4.Math.atan2(x,y)用于精确计算个象限的角度
 


