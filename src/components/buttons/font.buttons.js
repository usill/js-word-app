const fontFamilySelect = document.querySelector('.font__family');
const textarea = require('../textarea.js');

fontFamilySelect.addEventListener('click', () => {
  console.log(textarea.wordsArray);
})

const fonts = [
  {
    name: "Calibri, sans-serif",
    shortName: "Calibri",
  },
  {
    name: "'Times New Roman', Times, serif",
    shortName: "Times New Roman",
  },
  {
    name: "Arial, Helvetica, sans-serif",
    shortName: "Arial",
  },
  {
    name: "Geneva, Verdana, sans-serif",
    shortName: "Lucida", 
  },
  {
    name: "Roboto sans-serif",
    shortName: "roboto",
  }
]

fonts.forEach((item, i) => {
  const element = document.createElement('option');
  element.value = item.name;
  element.textContent = item.shortName;
  element.style.fontFamily = item.name;
  element.style.fontSize = "14px";
  if(i === 0) {
    element.default = true;
  }
  fontFamilySelect[i] = element;
})

console.log(fontFamilySelect);


class Font {
  
}