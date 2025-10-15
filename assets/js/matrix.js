
// Matrix "digital rain" background
(function(){
  const canvas = document.getElementById('matrix-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, columns, drops, animationId;
  let running = true;

  const glyphs = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    columns = Math.floor(w / 16);
    drops = Array(columns).fill(0).map(()=> Math.floor(Math.random()*h));
  }
  window.addEventListener('resize', resize);
  resize();

  function step(){
    if(!running){ animationId = requestAnimationFrame(step); return; }
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0,0,w,h);

    for(let i=0;i<columns;i++){
      const char = glyphs[Math.floor(Math.random()*glyphs.length)];
      const x = i * 16;
      const y = drops[i] * 16;

      ctx.fillStyle = '#00ff7f';
      ctx.fillText(char, x, y);
      ctx.shadowColor = '#00ff7f';
      ctx.shadowBlur = 8;

      if(y > h && Math.random() > 0.975){ drops[i] = 0; } else { drops[i]++; }
    }
    animationId = requestAnimationFrame(step);
  }
  ctx.font = '16px Consolas, monospace';
  step();

  // Expose controls
  window.Matrix = {
    pause(){ running = false; },
    play(){ running = true; },
    toggle(){ running = !running; },
    isRunning(){ return running; }
  };
})();
