import express from 'express';
import init from './setup/init';

const app = express();
init(app);

export default app;
