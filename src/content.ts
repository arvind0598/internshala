import { InternshipData } from './types';
import { extractData } from './utils';

const internshipDivArrayPath = '#internship_list_container > .individual_internship';
const internshipDivArray: Array<Element> = Array.from(document.querySelectorAll(internshipDivArrayPath));

const internshipsArray: Array<InternshipData> = internshipDivArray.map((internship) => extractData(internship));
console.log(internshipsArray);
