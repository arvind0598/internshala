import { InternshipData } from '../types';
import parseStipend from './parseStipend';
import parseDuration from './parseDuration';

export const extractData = (html: Element): InternshipData => {
  const stipendText = html.querySelector('.stipend_container_table_cell').textContent.trim();
  const stipendData = parseStipend(stipendText);
  // console.log(stipendData);

  const durationText = html.querySelectorAll('td')[1].textContent.trim();
  const durationData = parseDuration(durationText);
  // console.log(durationText);

  const internData: InternshipData = {
    stipend: stipendData,
    duration: durationData,
    content: html,
  };
  // console.log(internData);
  return internData;
};
