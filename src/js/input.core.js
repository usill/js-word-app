let textarea = document.querySelector('.list__input');
const header = document.querySelector('.header');
const list = document.querySelector('.list');

let isValuePicked = false;
let start = 0;
let end = 0;
let pickedValue = '';
let startValue = '';
let endValue = '';

textarea.addEventListener('mouseup', () => {
  start = textarea.selectionStart;
  end = textarea.selectionEnd;

  if(start === end) {
    isValuePicked = false;
  } else {
    pickedValue = textarea.value.slice(start, end);
    startValue = textarea.value.slice(0, start);
    endValue = textarea.value.slice(end, textarea.value.length);
    isValuePicked = true;
  }
})

textarea.addEventListener('blur', selectValue);

function selectValue() {
  if(isValuePicked) {
    list.removeChild(textarea);
    const span = createNewSpan();
    textarea = createNewArea(span);
    textarea.addEventListener('blur', selectValue);
    list.appendChild(textarea);
    console.log(textarea.textContent)
  }
}


function createNewArea(span) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = '<div>123</div>';
  textarea.classList.add('list__input');

  return textarea;
}

function createNewSpan() {
  const span = document.createElement('span');
  span.classList.add('input__span');
  span.textContent = pickedValue;

  return span;
}