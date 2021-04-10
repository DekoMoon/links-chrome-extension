import { 
  container,
  cellsStorage
} from '../variables/constants.js';

export const refreshContainer = function() {
  container.innerHTML = '';
  cellsStorage.forEach(cell => container.insertAdjacentElement('beforeend', cell.element));
};