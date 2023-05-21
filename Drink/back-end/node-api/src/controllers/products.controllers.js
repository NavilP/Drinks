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