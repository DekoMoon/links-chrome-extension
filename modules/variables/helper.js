function tempAddClass(element, className = 'error', time = 1100) {
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), time);
}

export {
  tempAddClass
}