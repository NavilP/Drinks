import {pool} from '../db.js';

// Recuperar ingredientes
export const getIngredients = async (req, res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM stock');
        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

export const getIngredient = async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.ingred);
        const [rows] = await pool.query('SELECT * FROM stock WHERE ingrediente=?', [req.params.ingred])
    
        if (rows.length === 0){
            return res.status(404).json({
                message: "Ingrediente no encontrado"
            });
        }

        res.json(rows[0]);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

// Agregar un nuevo ingrediente
export const createIngredients = async (req, res)=> {
    console.log(req.body);
    const {nombre, cantidad, categoria, precio} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO stock(ingrediente, cantidad, categoria, precio) VALUES (?, ?, ?, ?)', [nombre, cantidad, categoria, precio]);

        res.send({
            id: rows.insertId,
            nombre,
            cantidad,
            categoria,
            precio
        });
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

// Eliminar un ingrediente
export const deleteIngredients = async (req, res)=> {
    try {
        const [result]= await pool.query('DELETE FROM stock WHERE ingrediente=?', [req.params.ingred]);
    
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "Ingrediente no encontrado"
            });
        }
        
        res.sendStatus(204);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

export const updateIngredients = async (req, res)=> {
    const {nombre} = req.params.ingred;
    console.log(req.params.ingred);
    const {precio, cantidad} = req.body;
    
    try {

        const [rows] = await pool.query('SELECT * FROM stock WHERE ingrediente=?', [req.params.ingred]);
        const id = rows[0].idstock;

        const [result] = await pool.query('UPDATE stock SET precio=IFNULL(?, precio), cantidad=IFNULL(?,cantidad) WHERE idstock=?', [precio, cantidad, id]);
        
        if(result.affectedRows === 0){
            return res.status(404).json({
                message: "Ingrediente no encontrado"
            });
        }

        const [rows_result] = await pool.query('SELECT * FROM stock WHERE ingrediente=?', [req.params.ingred]);
        res.json(rows_result);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};