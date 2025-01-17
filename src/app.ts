import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//NOTE parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('I love to work on backend 🚀');
});

export default app;
