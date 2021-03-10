import { API_URL } from './config';
import axios from 'axios';

const getData = async (dispatch, type) => {
  try {
    dispatch({type: 'REQUEST_DATA'});

    const data = await axios.get(API_URL)
      .then(res => {
        const entries = res.data.entries;
        const firstEntries = entries.slice(0, 21);
        const items = firstEntries.filter(item => item.programType === type && item.releaseYear >= 2010);

        dispatch({
          type: 'GET_DATA',
          programType: type,
          [type]: alphaNumericSort(items)
        });
      });

  } catch (e) {
    dispatch({
      type: 'REQUEST_ERROR',
      errorMessage: 'Oops, something went wrong...'
    })
  }
}

export const alphaNumericSort = entries => {
  const newEntries = entries.map((entry, index) => {
    return { index, value: entry.title.toLowerCase() };
  })

  newEntries.sort((a, b) => {
    if(a.value < b.value) return -1;
    if(a.value > b.value) return 1;

    return 0;
  })

  const result = newEntries.map(entry => {
    return entries[entry.index]
  })

  return result;
}

export default getData;
