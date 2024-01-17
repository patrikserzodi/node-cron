import cron from 'node-cron';
import axios from 'axios';

const urlToFetch = 'https://web-production-6b37.up.railway.app/start_server/';

cron.schedule('0-59/10 * * * *', async () => {
  console.log(`Running the cycle ...`);
  const response = await axios.get(urlToFetch);
  console.log(`Fetched data:`, response.data);
});
