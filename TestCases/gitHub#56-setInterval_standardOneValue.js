t=0;a=a.cloneNode(p=[s=5]);cc=a.getContext("2d");e=cc.getImageData(0,0,150,150);d=e.data;setInterval(function(x,y,z=0){if(t%1275<1){cc.fillStyle=n=cc.createRadialGradient(225,75,25,225,75,60);n.addColorStop(x=y=f=0,"rgb("+[50,31+s%15&255,15+s%32&255]);n.addColorStop(1,"#000");cc.fillRect(150,0,150,150);for(;f<256*256;)p[f++]=Math.min(0,3*Math.cos((f&255)/20)-3*Math.cos(f/12800)-s%7+2);for(n=3e5;--n;s*=(256-s)/65)for(x+=[0,1,0,-1][s&3],y+=[0,1,0,-1][3-s&3],t=-6;++t;)for(i=0;++i-6;)p[256*(y+t&255)+(x+i&255)]+=.01}f=Math.cos(++t/200);for(y=-75;++y<75;)for(x=-(u=Math.sqrt(75*75-y*y)&255),q=4*((y+75)*150+75-u);++x<u;){w=Math.sqrt(75*75-y*y-x*x);i=p[((128*Math.atan2(n=y*Math.sin(f)+Math.cos(f)*w,x)+t)/Math.PI&255)+256*(Math.acos((-w*Math.sin(f)+Math.cos(f)*y)/75)*256/Math.PI&255)];n=.1+.008*Math.max(0,n-x);d[q++]=n*(i<0?128-s%128:s%128+s%25*i)&255;d[q++]=n*(i<0?-7*i:75+s%50*i)&255;d[q++]=n*(i<0?s%128:s%75*i)&255;d[q++]=255}cc.putImageData(e,0,0);c.fillStyle="hsl(256,25%,"+Math.max(0,100-t)+"%";c.fillRect(0,0,a.width,a.height);c.save(c.fillStyle="#fff");c.translate(.5*a.width,a.height/2);c.rotate(-.2-.2*Math.cos(Math.max(0,Math.min(t-100,300))*Math.PI/300));c.translate(u=800*Math.cos(Math.max(0,Math.min(t-90,300))*Math.PI/300)-400,500-500*Math.cos(Math.max(0,Math.min(t-1000,300))*Math.PI/300));for(i=0;++i-7500;)c.fillRect(i*i%7525-1500,i%2525-1500,Math.max(i%15/7,t-1200),Math.max(1,t-1100));n=250-75*Math.cos(Math.max(0,Math.min(t-350,300))*Math.PI/300)-150*Math.cos(Math.max(0,Math.min(t-1000,300))*Math.PI/300);c.drawImage(a,0,0,150,150,1200-n,-n,2*n,2*n);n=s|40;c.globalCompositeOperation="lighter";for(i=0;++i-12;)c.drawImage(a,150,0,150,150,-n,-25-n,2*n,2*n);for(i=0;++i-75;)n=25*(i&6),c.drawImage(a,150,0,150,150,-u*i-n,25*i-n,2*n,2*n);c.restore()},33)