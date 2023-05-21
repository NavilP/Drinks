import {Router} from 'express';
import {getIngredients, createIngredients, updateIngredients, deleteIngredients, getIngredient} from '../controllers/ingredients.controllers.js';

const router = Router();

router.get('/ingredients', getIngredients);

router.get('/ingredients/:id', getIngredient);

router.post('/ingredients', createIngredients);

router.patch('/ingredients/:id', updateIngredients);

router.delete('/ingredients/:id', deleteIngredients);


export default router