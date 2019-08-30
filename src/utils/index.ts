import { InternshipData } from '../types';
import parseStipend from './parseStipend';

export const extractData = (html: Element): InternshipData => {
  const stipendText = html.querySelector('.stipend_container_table_cell').textContent.trim();
  const stipendData = parseStipend(stipendText);
  console.log(stipendData);

  const internData: InternshipData = {
    name: '',
    startup: '',
    stipend: stipendData,
    duration: null,
    content: html,
  };
  return internData;
};
