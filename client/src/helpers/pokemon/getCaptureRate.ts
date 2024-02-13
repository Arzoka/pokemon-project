import axios from 'axios';

async function getCaptureRate(speciesURL: string) {
  return await axios.get(speciesURL)
    .then(response => {
      return response.data.capture_rate;
    })
    .catch(error => {
      return error;
    })
}

export default getCaptureRate;
