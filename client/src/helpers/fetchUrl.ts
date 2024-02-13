import axios from 'axios';

async function fetchUrl(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching item data:', error);
  }
}

export default fetchUrl;
