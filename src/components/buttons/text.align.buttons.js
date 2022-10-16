
class TextAlign {

  alignButtons = document.querySelectorAll('.aligns__button');

  textarea = require('../textarea').getElement();

  alignValues = {
    left: 'align-left',
    center: 'align-center',
    right: 'align-right'
  };

  setEvents() {
    this.alignButtons.forEach(item => {
      item.addEventListener('click', () => {
        for(let val in this.alignValues) {
          if(item.dataset.align === this.alignValues[val]) {
            this.changeAlign(this.alignValues[val]);
          }
        }
      });
    })
  }

  changeAlign(align) {
    const inputClassList = this.textarea.classList;

    if(!inputClassList.contains(align)) {
      inputClassList.add(align); 
    }
  
    const values = Object.values(this.alignValues);
  
    values.map(item => {
      if(item !== align) {
        inputClassList.remove(item);
      }
    })
  }

}


module.exports = new TextAlign();