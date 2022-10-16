const fontFamilySelect = document.querySelector('.font__family');

const fonts = [
  {
    name: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
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
    name: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    shortName: "Lucida", 
  },
  {
    name: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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