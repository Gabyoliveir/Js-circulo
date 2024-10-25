
1
let cor;
2
let posicaoHorizontal;//x
3
let posicaoVertical;//y
4
​
5
function setup() {
6
  createCanvas(400, 400);
7
  background(color(100,0,0));
8
  cor = color(random(0,255),random(0,255),random(0,255));
9
  posicaoHorizontal = 200
10
  posicaoVertical = 200
11
}
12
​
13
function draw() {
14
  fill(cor)
15
  circle(posicaoHorizontal,posicaoVertical,50);
16
  if(mouseX<posicaoHorizontal){
17
    posicaoHorizontal = posicaoHorizontal -1;
18
  }
19
  if(mouseX>posicaoHorizontal){
20
    posicaoHorizontal = posicaoHorizontal +1;
21
  }
22
  if(mouseY<posicaoVertical){
23
    posicaoVertical--;
24
  }
25
  if(mouseY>posicaoVertical){
26
    posicaoVertical++;
27
  }
28
   if (mouseIsPressed){
29
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
30
  }
31
