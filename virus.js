{
win=open('forms.html','example','width=100,height=100');
let xp=0;
let yp=0;
let dir='right';
setInterval(()=>{
switch (dir){
case 'right':
win.moveBy(10,0);
xp+=5;
if (xp>=100)
dir='down';
break;
case 'down':
win.moveBy(0,10);
yp+=5;
if (yp>=100)
dir='left';
break;
case 'left':
win.moveBy(-10,0);
xp-=5;
if (xp<=0)
dir='up';
break;
case 'up':
win.moveBy(0,-10);
yp-=5;
if(yp<=0)
dir='right';
break;
}
},500)
}
