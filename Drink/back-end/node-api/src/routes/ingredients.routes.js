import {Router} from 'express';
import {getIngredients, createIngredients, updateIngredients, deleteIngredients, getIngredient} from '../controllers/ingredients.controllers.js';

const router = Router();

router.get('/ingredients', getIngredients);

router.get('/ingredients/:ingred', getIngredient);

router.post('/ingredients', createIngredients);

router.patch('/ingredients/:ingred', updateIngredients);

router.delete('/ingredients/:ingred', deleteIngredients);


export default router