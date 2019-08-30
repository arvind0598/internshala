import {
  StipendData,
} from '../types';

/**
 * @description
 * these are the following cases for the input value that are expected:
 * 1. Unpaid
 * 2. Lumpsum stipend
 * 3. Monthly stipend
 * 4. Weekly stipend
 * 5. Performance Based
 * 6. Periodic stipend with incentives
 *
 * @returns { StipendData } stipend
 * @param stipendText the trimmed text of the stipend data html td
 */
/* eslint-disable no-param-reassign */
const parseStipend = (stipendText: string): StipendData => {
  console.log(stipendText);
  if (stipendText === 'Unpaid') {
    return {
      amount: 0,
      type: 'UNPAID',
      isPerformanceBased: false,
      hasIncentives: false,
    };
  }

  if (stipendText === 'Performance Based') {
    return {
      amount: 0,
      type: 'OTHER',
      isPerformanceBased: true,
      hasIncentives: false,
    };
  }

  const baseStipend = parseInt(stipendText, 10);

  const stipendData: StipendData = {
    amount: baseStipend,
    type: 'OTHER',
    isPerformanceBased: false,
    hasIncentives: false,
  };

  if (stipendText.includes('Incentives')) {
    console.log('has incentives');
    stipendData.hasIncentives = true;
    const plusLocation = stipendText.indexOf('+');
    stipendText = stipendText.slice(0, plusLocation);
  }

  // we check this before checking range because Lump-Sum also contains a -
  if (stipendText.includes('Lump')) {
    console.log('is a lump sum');
    stipendData.type = 'LUMPSUM';
    stipendText = stipendText.slice(0, -9);
  }

  // is a range and not an absolute amount
  if (stipendText.includes('-')) {
    console.log('is a range');
    const minusLocation = stipendText.indexOf('-');
    const maxStipend = stipendText.slice(minusLocation + 1);
    stipendData.maxAmount = parseInt(maxStipend, 10);
  }

  if (stipendText.includes('Month')) {
    console.log('monthly');
    stipendData.type = 'MONTHLY';
  } else if (stipendText.includes('Week')) {
    console.log('weekly');
    stipendData.type = 'WEEKLY';
  }

  return stipendData;
};

export default parseStipend;
