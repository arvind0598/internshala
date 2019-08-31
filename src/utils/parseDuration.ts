import {
  DurationData,
} from '../types';

const parseDuration = (durationText: string): DurationData => {
  const durationTime = parseInt(durationText, 10);
  if (durationText.includes('Month')) {
    return {
      time: durationTime,
      type: 'MONTH',
    };
  }

  return {
    time: durationTime,
    type: 'WEEK',
  };
};

export default parseDuration;
