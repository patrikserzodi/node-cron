import cron from 'node-cron';

const urlToFetch = 'https://web-production-6b37.up.railway.app/start_server/';

cron.schedule('0-59/10 * * * 1-5', async () => {
  console.log(`Running the cycle ...`);
  const response = await fetch(urlToFetch);
  console.log(`Fetched data:`, response.json());
});


cron.schedule('0-59/20 * * * 6,0', async () => {
  console.log(`Running the cycle ...`);
  const response = await fetch(urlToFetch);
  console.log(`Fetched data:`, response.json());
});
