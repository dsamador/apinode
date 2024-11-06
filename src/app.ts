import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import marcaPiezaRoutes from './routes/MarcaPieza.route';
import piezaRoutes from './routes/Pieza.route';


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use("/marcasdepiezas", marcaPiezaRoutes);
app.use("/pieza", piezaRoutes);


export default app;