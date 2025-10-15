
// Matrix-style falling code background
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
let w, h, columns, drops, fontSize = 14;
const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%^&*{}[]<>/\\+-|=~'.split('');

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  columns = Math.floor(w / fontSize);
  drops = new Array(columns).fill(0).map(()=> Math.random()*h);
}
window.addEventListener('resize', resize);
resize();

function draw(){
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = '#19ff74';
  ctx.font = fontSize + 'px JetBrains Mono, monospace';
  for(let i=0; i<drops.length; i++){
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    if (drops[i]*fontSize > h && Math.random() > 0.975){
      drops[i] = 0;
    }
    drops[i] += 0.95 + Math.random()*0.5;
  }
  requestAnimationFrame(draw);
}
draw();
