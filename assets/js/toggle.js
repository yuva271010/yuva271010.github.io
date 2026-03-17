(function(){
  const pills = document.querySelectorAll('[data-mode]');
  const blocks = document.querySelectorAll('[data-block]');
  if(!pills.length || !blocks.length) return;

  function setMode(mode){
    pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-mode')===mode));
    blocks.forEach(b => {
      const show = b.getAttribute('data-block')===mode;
      b.style.display = show ? '' : 'none';
    });
    try{ localStorage.setItem('yr_mode', mode); } catch(e){}
  }

  pills.forEach(p => p.addEventListener('click', ()=> setMode(p.getAttribute('data-mode'))));
  const saved = (()=>{ try{ return localStorage.getItem('yr_mode'); }catch(e){ return null; }})();
  setMode(saved || 'architect');
})();
