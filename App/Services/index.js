import axios from 'axios';
import axiosCancel from 'axios-cancel';

const BASE_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';

const headers = {
  'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  'x-rapidapi-key': '6ce9f6b99bmsh2044a17515d963ap1f103ajsn98e19dc6bd7c',
};
const GET_CARDS = 'cards/search/';

export const getCards = () => {
  return axios({
    headers: headers,
    method: 'GET',
    url: BASE_URL + GET_CARDS,
  });
};

export const searchCard = async (text) => {
  try {
    const results = await axios.get(`${BASE_URL}${GET_CARDS}${text}`, {
      headers: headers,
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};
