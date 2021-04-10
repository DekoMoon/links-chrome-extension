import {
  nameInput,
  linkInput,
  selectOption,
  outerWrapper,
  container,
  cellsStorage,
  getSelectCell
} from '../variables/constants.js';

import {
  tempAddClass
} from '../variables/helper.js';

import { Cell } from '../variables/cell.js';

import { initModalVal } from '../savingsLoadings/initModalVal.js';
import { syncSaveKey } from '../savingsLoadings/storage.js';


export const callback = function() {
  const isAddMode = selectOption.classList.contains('hidden');
  const elArr =  [nameInput, linkInput].concat(isAddMode ? [] : [selectOption])
  const result = elValuesExist(elArr, tempAddClass);
  if (arrayContains(false, result)) return;

  isAddMode ? addCell() : editCell();

  outerWrapper.classList.add('hidden');
  initModalVal();
  syncSaveKey(cellsStorage);
};







function editCell() {
  getSelectCell().editCell();
}

function addCell() {
  cellsStorage.push(new Cell(nameInput.value, linkInput.value, container));
}

function elValuesExist(arr, dontExistFunc = false) {
  return arr.map((el) => el.value ? true : !!dontExistFunc(el));
}

function arrayContains(match, arr) {
  return arr.some((el) => el === match);
}