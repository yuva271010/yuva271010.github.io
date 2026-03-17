(function(){
  function setMode(mode){
    var pills = document.querySelectorAll('.toggle .pill');
    var blocks = document.querySelectorAll('[data-block]');
    pills.forEach(function(p){
      p.classList.toggle('active', p.getAttribute('onclick') && p.getAttribute('onclick').indexOf("'" + mode + "'") !== -1);
    });
    blocks.forEach(function(b){
      b.style.display = (b.getAttribute('data-block') === mode) ? '' : 'none';
    });
    try{ localStorage.setItem('yr_mode', mode); } catch(e){}
  }

  // Expose globally for onclick handlers
  window.setMode = setMode;

  // Restore saved preference on page load
  document.addEventListener('DOMContentLoaded', function(){
    var saved;
    try{ saved = localStorage.getItem('yr_mode'); } catch(e){ saved = null; }
    if(document.querySelector('[data-block]')){
      setMode(saved || 'architect');
    }
  });
})();
