import sampleSize from 'lodash/sampleSize';
import SMILEY_EMOJIS from './emojis';

const randomSmiley = (c: number = 1) => {
  return sampleSize(SMILEY_EMOJIS, c)
};

export default randomSmiley;
