import express from 'express';
import setupExpress from './setup/express';

const app = express();
setupExpress(app);

export default app;
