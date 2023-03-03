const p = document.querySelectorAll('p');

console.log(p);

// script qo'shish uchun dinamik function:
// bu function imizda async default o'zi bo'ladi.
function loadScript(src) {
  const script = document.createElement('script');
  // script.async = false; // async ni o'chirib qo'yish.
  script.src = src;
  document.body.append(script);
}

loadScript('js/second.js');
loadScript('js/third.js');