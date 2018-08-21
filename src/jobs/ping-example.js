import request from 'request-promise-native';

const options = {
  resolveWithFullResponse: true,
  time: true,
  timeout: 5000,
  headers: {
    'User-Agent': 'Metricio - Ping Example',
  },
};

export const interval = '* * * * *'; // See https://crontab.guru/
export const perform = async () => {
  const men = await request(Object.assign(options, { uri: 'https://www.mentechmedia.nl' }));
  const reddit = await request(Object.assign(options, { uri: 'https://www.reddit.com' }));

  return [
    {
      target: 'MENPing',
      data: {
        status: men.statusCode,
        time: men.elapsedTime,
      },
    },
    {
      target: 'RedditPing',
      data: {
        status: reddit.statusCode,
        time: reddit.elapsedTime,
      },
    },
  ];
};
