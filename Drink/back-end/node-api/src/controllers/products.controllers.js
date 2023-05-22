import {pool} from '../db.js';

export const getProducts = async (req, res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM producto');
        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

export const getProduct = async (req, res)=> {
    try{
        //throw new Error('Error inesperado');
        console.log(req.params.id);
        const [rows] = await pool.query('SELECT * FROM producto WHERE idproducto=?', [req.params.id])
    
        if (rows.length === 0){
            return res.json('Ingrediente no encontrado');
        }

        res.json(rows[0]);
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

// Agregar un nuevo ingrediente
export const createProduct = async (req, res)=> {
    console.log(req.body);
    const {nombre, ingredientes, precio} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO producto(nombre, ingredientes, precio) VALUES (?, ?, ?)', [nombre, ingredientes, precio]);

        res.send({
            id: rows.insertId,
            nombre,
            ingredientes,
            precio
        });
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};