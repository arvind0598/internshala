import { InternshipData } from './types';
import { extractData } from './utils';
import { createFilterContainer, createCheckbox } from './dom';

const sampleEventListener = (event: Event): void => {
  console.log(event);
};

const internshipDivArrayPath = '#internship_list_container > .individual_internship';
const internshipDivArray: Array<Element> = Array.from(document.querySelectorAll(internshipDivArrayPath));

const internshipsArray: Array<InternshipData> = internshipDivArray.map((internship) => extractData(internship));
console.log(internshipsArray);

const formContainerPath = '#form-container';
const formContainer = document.querySelector(formContainerPath);

const sampleDiv = createFilterContainer();
const sampleCheckbox = createCheckbox('sample', sampleEventListener);
sampleDiv.appendChild(sampleCheckbox);
formContainer.prepend(sampleDiv);
