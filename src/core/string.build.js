
class StringBuild {
  
  constructor(cssClass) {
    this.cssClass = cssClass;
  }

  build() {
    const wordsList = require('../components/textarea.js').wordsList;
    const textarea = require('../components/textarea.js').getElement();
    
    textarea.innerHTML = `${wordsList.left}<span class="${this.cssClass}">${wordsList.selected}</span>${wordsList.right}`;
  }

}

module.exports = StringBuild;