import {
  nameInput,
  linkInput,
  getSelectCell
} from '../variables/constants.js';

export const callback = function() {
  const selectCell = getSelectCell();
  if (!selectCell) return;

  nameInput.value = selectCell.name;
  linkInput.value = selectCell.link;
}