import { 
  outerWrapper,
  modalTitle,
  addEditBtn,
  selectOption,

  cellDeleteBtn,

  cellsStorage,
} from '../variables/constants.js';

const addTitle = 'New Link';
const addButton = 'Add';
const editTitle = 'Edit Link';
const editButton = 'Edit';

const loadModal = function(isAdd) {
  outerWrapper.classList.remove('hidden');
  modalTitle.textContent = isAdd ? addTitle : editTitle;
  addEditBtn.textContent = isAdd ? addButton : editButton;

  if (modalTitle.textContent === editTitle) {
    cellsStorage.forEach(cell => {
      const option = `<option value="${cell.id}">${cell.name}</option>`;
      selectOption.insertAdjacentHTML('beforeend', option);
    });
    selectOption.classList.remove('hidden');
    cellDeleteBtn.classList.remove('hidden');
    return;
  }

  selectOption.classList.add('hidden');
  cellDeleteBtn.classList.add('hidden');
};

export const callback = function(e) {
  const btn = e.target;
  const addEdit = btn.classList.contains('add-cell');

  if (btn.tagName !== 'BUTTON') return;

  loadModal(addEdit);
  outerWrapper.classList.remove('hidden');
};







