// Theme toggle: toggles between dark and light theme and persists choice in localStorage
(function(){
  const STORAGE_KEY = 'rktinoco-theme';
  function setTheme(name){
    if(name === 'light') document.documentElement.classList.add('light-theme');
    else document.documentElement.classList.remove('light-theme');
    try{ localStorage.setItem(STORAGE_KEY, name); }catch(e){}
  }

  function getSaved(){
    try{ return localStorage.getItem(STORAGE_KEY); }catch(e){return null}
  }

  function init(){
    const saved = getSaved();
    if(saved) setTheme(saved);
    else {
      // respect OS preference
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      setTheme(prefers);
    }

    // attach handler when toggle button appears
    function attach(){
      const btn = document.getElementById('theme-toggle');
      if(!btn) return;
      btn.addEventListener('click', ()=>{
        const isLight = document.documentElement.classList.contains('light-theme');
        setTheme(isLight ? 'dark' : 'light');
        btn.setAttribute('aria-pressed', String(!isLight));
        btn.textContent = isLight ? '🌙' : '☀️';
      });
      // set initial label
      const isLight = document.documentElement.classList.contains('light-theme');
      btn.setAttribute('aria-pressed', String(isLight));
      btn.textContent = isLight ? '☀️' : '🌙';
    }

    // if header is not yet present, try again when DOM changes (partial include may insert)
    if(document.getElementById('theme-toggle')) attach();
    else {
      const obs = new MutationObserver((mutations, o)=>{
        if(document.getElementById('theme-toggle')){ attach(); o.disconnect(); }
      });
      obs.observe(document.body, {childList:true, subtree:true});
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
