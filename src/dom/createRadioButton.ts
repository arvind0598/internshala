const createRadioButton = (labelText: string, radioID: string, radioValue: string): HTMLDivElement => {
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', radioID);
  labelElement.classList.add('control-label');
  labelElement.innerText = labelText;

  const radioElement = document.createElement('input');
  radioElement.setAttribute('type', 'radio');
  radioElement.setAttribute('name', 'internshala-sorter');
  radioElement.setAttribute('id', radioID);
  radioElement.setAttribute('value', radioValue);

  const divElement = document.createElement('div');
  divElement.appendChild(radioElement);
  divElement.appendChild(labelElement);
  return divElement;
};

export default createRadioButton;
