

# css3中的颜色渐变和透明度           11.17  
## 颜色的透明度
 1. rgba()   **a** 代表的透明通道，取值范围 0-1      
    `通过改变整体容器的透明度来世线透明，但是她会影响容器里面的内容`        
    opacity:0~1
    filter:alpha(opacity=0~100); 适用于IE  运用IE所特有的滤镜       

2. background:transparent;      
   可以直接使用该值，实现背景完全透明            
  2.1 background-color:hsl(120,65%,75%);
  2.2 background-color:hsla(120,65%,75%,a);
   H:色调
   S:饱和度
   L:亮度
   色调(H)、饱和度 (S)、亮度(L)三个颜色通道的变化以及它们相互之间的叠加来得到各式 各样的颜色的,HSL即是代表色调,饱和度,亮度三个通道的颜色
   2.1 取值说明:Hue(色调),取值范围为:(0-360,) 0(或360)表示红 色,120表示绿色,240表示蓝色,当然可取其他数值来确定其它颜 色;
   2.2 Saturation (饱和度)的值形式为百分比(0%:gray ,100%:full color);
   2.3 Lightness (亮度)值形式也为为百分比(0%:black,100%: white);
   2.4 Alpha(透明度)的取值(0 -1)
   
## 渐变 
### 径向渐变
1.
### 线性渐变
1.  background:linear-gradient(red,blue);     /*标准语法*/
  background:-webkit-linear-gradient(red,blue);     /*标准语法*/
  background:-moz-linear-gradient(red,blue);     /*标准语法*/
  background:-o-linear-gradient(red,blue);     /*标准语法*/
  1.1 平均分布的渐变，只需要在参数里面，写入相应的颜色值就可以
2.background:linear-gradient(red 0%,blue 56%,yellow 80%);
  2.1 颜色以及颜色的停靠位置，只需要在颜色的后面写上百分比即可
  **注意：相应的颜色以及他所对的位置是一个参数，用`空格`隔开，多个参数之间用 ， 隔开**
3.设置渐变的角度
  3.1 background: linear-gradient(to left top,red 0%, blue 10%,green 70%,yellow 80%); 通过关键字的方式: to 方向 **
  3.2 background: linear-gradient(45deg,red 0%, blue 10%,green 70%,yellow 80%); **通过设置角度的方式