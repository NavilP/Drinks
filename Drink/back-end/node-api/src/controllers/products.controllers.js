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