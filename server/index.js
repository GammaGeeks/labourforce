import dotenv from 'dotenv';
import express from 'express';
import swagger from 'swagger-ui-express';
// import path from 'path';
import cors from 'cors';
// import serverSocket from 'socket.io';

import apiDocumentation from '../swagger.json';

dotenv.config();

const app = express();
const basePath = '/api';
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(`${basePath}/documentation`, swagger.serve, swagger.setup(apiDocumentation));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to LabourForce App' });
});

app.use((req, res) => {
  res.status(404);
  res.json({
    status: 404,
    error: 'Endpoint not found'
  });
});

app.listen(port, () => {
  process.stdout.write(`LabourForce App running on ${port}\n`);
});

export default app;
