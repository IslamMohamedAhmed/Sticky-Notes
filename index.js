import express, { json } from 'express';
import cors from 'cors';
import { dbConnection } from './Database/dbConnection.js';
import userRouter from './src/modules/user/user.routes.js';
import noteRouter from './src/modules/note/note.routes.js';

const app = express();
const port = 3000;
app.use(json());
app.use(cors());
app.use(userRouter);
app.use(noteRouter);
await dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
