const createCheckbox = (labelText: string, eventListener: EventListener): HTMLLabelElement => {
  const labelElement = document.createElement('label');
  labelElement.classList.add('control-label');
  labelElement.innerText = labelText;

  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.addEventListener('change', eventListener, false);

  labelElement.appendChild(checkboxElement);
  return labelElement;
};

export default createCheckbox;
