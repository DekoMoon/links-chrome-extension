import {
  outerWrapper,

  selectOption,
  innerWrapper,

  cellsStorage
} from '../variables/constants.js';

import { tempAddClass } from '../variables/helper.js';

import { refreshContainer } from '../savingsLoadings/refreshContainer.js';
import { initModalVal } from '../savingsLoadings/initModalVal.js';
import { syncSaveKey } from '../savingsLoadings/storage.js';

function openConfirmPopup() {
  if (!selectOption.value) return tempAddClass(selectOption);
  innerWrapper.classList.remove('hidden');
}



function confirmNavigator(e) {
  const el = e.target;

  if (el.classList.contains('delete-yes')) deleteCell(el);
  else if (el.classList.contains('delete-no')) closeConfirmPopup(el);
}

function deleteCell() {
  const cell = cellsStorage.filter((cell) => cell.id == selectOption.value)[0]
  if (!cell) throw new Error('Select value doesn\'t match any cell value');

  cellsStorage.splice(cellsStorage.indexOf(cell), 1);
  syncSaveKey(cellsStorage);

  refreshContainer();
  initModalVal();
  outerWrapper.classList.add('hidden');
  closeConfirmPopup();
}

function closeConfirmPopup() {
  innerWrapper.classList.add('hidden');
}








export {
  openConfirmPopup,
  confirmNavigator
}