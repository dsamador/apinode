import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
//import estudiantesRoutes from './routes/estudiantesRoutes';


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//app.use("/estudiantes", estudiantesRoutes);


export default app;