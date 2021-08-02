import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import albumsController from './controllers/albums.js';
import fruitsController from './controllers/fruits.js';
import piesController from './controllers/pies.js';
import moviesController from './controllers/movies.js';

const app = express();

app.use(express.json());

app.use('/api/v1/albums', albumsController);
app.use('/api/v1/fruits', fruitsController);
app.use('/api/v1/pies', piesController);
app.use('/api/v1/movies', moviesController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
