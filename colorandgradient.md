

# css3�е���ɫ�����͸����           11.17  
## ��ɫ��͸����
 1. rgba()   **a** �����͸��ͨ����ȡֵ��Χ 0-1      
    `ͨ���ı�����������͸����������͸������������Ӱ���������������`        
    opacity:0~1
    filter:alpha(opacity=0~100); ������IE  ����IE�����е��˾�       

2. background:transparent;      
   ����ֱ��ʹ�ø�ֵ��ʵ�ֱ�����ȫ͸��            
  2.1 background-color:hsl(120,65%,75%);
  2.2 background-color:hsla(120,65%,75%,a);
   H:ɫ��
   S:���Ͷ�
   L:����
   ɫ��(H)�����Ͷ� (S)������(L)������ɫͨ���ı仯�Լ������໥֮��ĵ������õ���ʽ ��������ɫ��,HSL���Ǵ���ɫ��,���Ͷ�,��������ͨ������ɫ
   2.1 ȡֵ˵��:Hue(ɫ��),ȡֵ��ΧΪ:(0-360,) 0(��360)��ʾ�� ɫ,120��ʾ��ɫ,240��ʾ��ɫ,��Ȼ��ȡ������ֵ��ȷ�������� ɫ;
   2.2 Saturation (���Ͷ�)��ֵ��ʽΪ�ٷֱ�(0%:gray ,100%:full color);
   2.3 Lightness (����)ֵ��ʽҲΪΪ�ٷֱ�(0%:black,100%: white);
   2.4 Alpha(͸����)��ȡֵ(0 -1)
   
## ���� 
### ���򽥱�
1.
### ���Խ���
1.  background:linear-gradient(red,blue);     /*��׼�﷨*/
  background:-webkit-linear-gradient(red,blue);     /*��׼�﷨*/
  background:-moz-linear-gradient(red,blue);     /*��׼�﷨*/
  background:-o-linear-gradient(red,blue);     /*��׼�﷨*/
  1.1 ƽ���ֲ��Ľ��䣬ֻ��Ҫ�ڲ������棬д����Ӧ����ɫֵ�Ϳ���
2.background:linear-gradient(red 0%,blue 56%,yellow 80%);
  2.1 ��ɫ�Լ���ɫ��ͣ��λ�ã�ֻ��Ҫ����ɫ�ĺ���д�ϰٷֱȼ���
  **ע�⣺��Ӧ����ɫ�Լ������Ե�λ����һ����������`�ո�`�������������֮���� �� ����**
3.���ý���ĽǶ�
  3.1 background: linear-gradient(to left top,red 0%, blue 10%,green 70%,yellow 80%); ͨ���ؼ��ֵķ�ʽ: to ���� **
  3.2 background: linear-gradient(45deg,red 0%, blue 10%,green 70%,yellow 80%); **ͨ�����ýǶȵķ�ʽ