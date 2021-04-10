import { 
  selectOption,
  nameInput,
  linkInput
} from '../variables/constants.js';

export const initModalVal = function() {
  selectOption.innerHTML = '<option value="">Choose A Link</option>';
  nameInput.value = '';
  linkInput.value = '';
};