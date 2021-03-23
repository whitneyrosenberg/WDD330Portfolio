function qs(selector) {
    let element = document.querySelectorAll(selector);
    return element[0];
  }
  
  function onTouch(selector, callback) {
    let elements = qs(selector);
    elements.forEach((element) => {
      element.addEventListener('touchend', callback);
      element.addEventListener('click', callback);
    });
  }
  
  export {
    qs,
    onTouch
  }