const alignLeftButton = document.querySelector('.left');
const alignCenterButton = document.querySelector('.center');
const alignRightButton = document.querySelector('.right');
const input = document.querySelector('.list__input');
const inputCL = input.classList;

const alignsList = {
  left: 'align-left',
  center: 'align-center',
  right: 'align-right'
};

alignLeftButton.addEventListener('click', () => {
  changeAlign(alignsList.left)
})

alignCenterButton.addEventListener('click', () => {
  changeAlign(alignsList.center)
})

alignRightButton.addEventListener('click', () => {
  changeAlign(alignsList.right)
})

function changeAlign(align) {
  if(!inputCL.contains(align)) {
    inputCL.add(align); 
  }

  const values = Object.values(alignsList);
  values.map(item => {
    if(item !== align) {
      inputCL.remove(item);
    }
  })
}