import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import albumsController from './controllers/albums.js';

const app = express();

app.use(express.json());

app.use('/api/v1/albums', albumsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
