import {
  modalCloseBtn,
  outerWrapper
} from '../variables/constants.js';

import { initModalVal } from '../savingsLoadings/initModalVal.js';

export const callback = function(e) {
  const target = e.target;
  if (target !== modalCloseBtn) return;

  outerWrapper.classList.add('hidden');
  initModalVal();
};