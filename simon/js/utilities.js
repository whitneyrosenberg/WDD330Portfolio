function qs(selector) {
    let elements = document.querySelectorAll(selector);
    return elements;
  }
  
  function onTouch(element, callback) {
    element.addEventListener('touchend', callback);
    element.addEventListener('click', callback);
  }
  
  export {
    qs,
    onTouch
  }