import { InternshipData } from './types';
import { extractData } from './utils';
import { createFilterContainer, createRadioButton } from './dom';

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

const stipendSortButtonDiv = createRadioButton('Sort By Stipend', 'stipend-sort', 'stipend');
sampleDiv.appendChild(stipendSortButtonDiv);
const durationSortButtonDiv = createRadioButton('Sort By Duration', 'duration-sort', 'duration');
sampleDiv.appendChild(durationSortButtonDiv);

formContainer.prepend(sampleDiv);
