
import {
  header,
  container,

  outerWrapper,
  selectOption,
  addEditBtn,

  cellDeleteBtn,
  innerWrapper,

  cellsStorage,
} from './modules/variables/constants.js';

import { callback as loadModal } from './modules/eventHandlers/loadModal.js';
import { callback as modalCloseBtn } from './modules/eventHandlers/closeModal.js';
import { callback as modifyCell } from './modules/eventHandlers/modifyCell.js';
import { callback as updateSelect } from './modules/eventHandlers/optionChanged.js';

import {
  openConfirmPopup,
  confirmNavigator
} from './modules/eventHandlers/deleteCell.js';

import { syncLoadKey } from './modules/savingsLoadings/storage.js';
import { refreshContainer } from './modules/savingsLoadings/refreshContainer.js';

import { Cell } from './modules/variables/cell.js';

import { dragStart } from './modules/dragDrop/dragStart.js';
import { dropped } from './modules/dragDrop/dropped.js';
import { dragEnter } from './modules/dragDrop/dragEnter.js';
import { dragOver } from './modules/dragDrop/dragOver.js';



(function() {
  header.addEventListener('click', loadModal);
  outerWrapper.addEventListener('click', modalCloseBtn);
  addEditBtn.addEventListener('click', modifyCell);
  selectOption.addEventListener('change', updateSelect);

  cellDeleteBtn.addEventListener('click', openConfirmPopup);
  innerWrapper.addEventListener('click', confirmNavigator);

  container.addEventListener('dragstart', dragStart);
  container.addEventListener('drop', dropped);
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragover', dragOver);
})();

(async function() {
  const data = await syncLoadKey();
  const cells = data.map(cell => new Cell(cell.name, cell.link, container));
  cellsStorage.push(...cells);
  refreshContainer();
})();




