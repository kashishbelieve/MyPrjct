import { query } from 'linkedin-jobs-api';

const queryOptions = {
  keyword: 'software engineer',
  location: 'India',
  dateSincePosted: 'past Week',
  jobType: 'full time',
  remoteFilter: 'remote',
  salary: '100000',
  experienceLevel: 'entry level',
  limit: '10'
};
upxlXAqhbjoDoosR1BDTNQ
query(queryOptions).then(response => {
	console.log(response); // An array of Job objects
});