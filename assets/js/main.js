
// Active link
(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.classList.add('active');
    }
  });
})();

// Hamburger toggle
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.hamburger');
  const link = e.target.closest('.menu a');
  const menu = document.querySelector('.menu');
  if(btn){ menu?.classList.toggle('open'); }
  if(link){ menu?.classList.remove('open'); }
});

// Smooth scroll for hash links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// Pause/Play matrix with keyboard (M)
document.addEventListener('keydown', (e)=>{
  if(e.key.toLowerCase() === 'm' && window.Matrix){ Matrix.toggle(); }
});

// Register service worker
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(()=>{});
  });
}
