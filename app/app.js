import express from 'express';
import init from './config/application';

const app = express();
init(app);

export default app;
