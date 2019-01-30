const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Trygve Mjelde", "location": "Norway"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2000", "yearTo": "2019", "place": "Uni Micro", "comment": "Software developer"}, {"yearFrom": "1996", "yearTo": "2000", "place": "Borge Garveri", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1998", "yearTo": "2000", "place": "University 1", "comment": "Studying"}, {"yearFrom": "1993", "yearTo": "1996", "place": "High school", "comment": "Made coffee"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
