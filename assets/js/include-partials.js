// Small client-side include loader for HTML partials.
// Usage: place an element with `data-include="/partials/header.html"` where you want the HTML inserted.
(function (){
  async function includeAll(){
    const nodes = document.querySelectorAll('[data-include]');
    if(!nodes.length) return;
    for(const node of nodes){
      const url = node.getAttribute('data-include');
      try{
        const res = await fetch(url, {cache: 'no-store'});
        if(!res.ok) throw new Error('HTTP '+res.status);
        const text = await res.text();
        node.innerHTML = text;

        // Re-execute any inline scripts inside the included HTML
        node.querySelectorAll('script').forEach(old => {
          const s = document.createElement('script');
          if(old.src) s.src = old.src;
          else s.textContent = old.textContent;
          // copy type if present
          if(old.type) s.type = old.type;
          document.head.appendChild(s);
          old.remove();
        });
      }catch(e){
        console.warn('include-partials failed to load', url, e);
      }
    }
  }

  // Run on DOMContentLoaded so pages can include the container early in markup
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', includeAll);
  } else {
    includeAll();
  }
})();
