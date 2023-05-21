import express from 'express';
import ingredientsRoutes from './routes/ingredients.routes.js';
import indexRoutes from './routes/index.routes.js';
import productRoutes from './routes/products.routes.js';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

app.use('/api/', indexRoutes);
app.use('/api/', ingredientsRoutes);
app.use('/api/', productRoutes);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

app.listen(3000);
console.log("Servidor escuchando en el puerto 3000");