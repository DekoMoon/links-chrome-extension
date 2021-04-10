const header = document.querySelector('header');
const container = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');
const links = document.querySelectorAll('.link');

const outerWrapper = document.querySelector('.outer-wrapper');
const selectOption = document.querySelector('#select-cell');
const nameInput = document.querySelector('.input-name');
const linkInput = document.querySelector('.input-anchor');
const modalTitle = document.querySelector('.title');
const addEditBtn = document.querySelector('.modify-cell');
const modalCloseBtn = document.querySelector('.close-modal');

const cellDeleteBtn = document.querySelector('.delete-cell');
const innerWrapper = document.querySelector('.inner-wrapper');





// Totally not a constant
const cellsStorage = [];

// Helper Functions
const getSelectCell = () => cellsStorage.filter(cell => cell.id == selectOption.value)[0];

export {
  header,
  container,
  cells,
  links,

  outerWrapper,
  selectOption,
  nameInput,
  linkInput,
  modalTitle,
  addEditBtn,
  modalCloseBtn,

  cellDeleteBtn,
  innerWrapper,
  // deleteYesBtn,
  // deleteNoBtn,

  cellsStorage,
  getSelectCell
};