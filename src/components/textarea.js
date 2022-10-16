class TextArea {

  wordsList = {};

  getElement() {
    return document.querySelector('.list__input')
  }

  setEvents() {
    document.addEventListener('mouseup', this.focusEvent.bind(this));
  }

  focusEvent() {
    this.wordsList = null;

    const select = window.getSelection();
    if(!select.toString()) {
      return;
    }

    [selectStart, selectEnd] = this.getSelectionStartAndEnd(select);
    this.wordsList = this.getWordsArray(selectStart, selectEnd);

    let a = require('../core/string.build.js');
    let b = new a('test');
    b.build();

    // console.log(selectStart, selectEnd);
  }

  getSelectionStartAndEnd(select) {
    let selectStart = select.focusOffset;
    let selectEnd = select.anchorOffset;

    if(selectStart > selectEnd) {         
      [selectStart, selectEnd] = [selectEnd, selectStart];
    }
    console.log(selectStart, selectEnd);
    return [selectStart, selectEnd];
  }

  getWordsArray(start, end) {
    const textarea = this.getElement();
    const startInputValue = 0;
    const inputValue = textarea.textContent;
    const endInputValue = inputValue.length;

    const leftString = inputValue.slice(startInputValue, start);
    const selectedString = inputValue.slice(start, end);
    const rightString = inputValue.slice(end, endInputValue);

    return {
      left: leftString, 
      selected: selectedString, 
      right: rightString
    };

    // console.log("left: ", leftString, " selected: ", selectedString, " right: ", rightString);
  }
}

module.exports = new TextArea();