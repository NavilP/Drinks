import {pool} from '../db.js';

export const login = async (req, res)=> {
    try{
        const {dato, password} = req.body;

        const [rows_nombre] = await pool.query('SELECT * FROM usuario WHERE nombre=? AND contraseña = ?', [dato, password]);
        const [rows_correo] = await pool.query('SELECT * FROM usuario WHERE correo=? AND contraseña = ?', [dato, password]);
    
        if (rows_nombre.length === 0 && rows_correo.length === 0){
            return res.json('Usuario no encontrado');
        }

        res.json('Usuario logeado');

    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};


export const createUser = async (req, res)=> {
    const {nombre, correo, password} = req.body;

    const [rows] = await pool.query('SELECT * FROM usuario WHERE correo=?', [correo]);

    try {
        if (rows.length <= 0){
            const [rows] = await pool.query('INSERT INTO usuario(correo, contraseña, nombre, categoria) VALUES (?, ?, ?, ?)', [correo, password, nombre, 'usuario']);

            res.json('Usuario registrado');
        }
        else{
            res.json('El usuario ya tiene una cuenta');
        }
        
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

export const isAdmin = async (req, res)=> {
    const {usuario, password} = req.body;

    console.log(usuario, password);

    const [rows_nombre] = await pool.query('SELECT * FROM usuario WHERE nombre=? AND contraseña=?', [usuario, password]);
    const [rows_correo] = await pool.query('SELECT * FROM usuario WHERE correo=? AND contraseña=?', [usuario, password]);

    try {
        if(rows_nombre.length > 0){
            if(rows_nombre[0].categoria === 'admin'){
                return res.json('El usuario es administrador');
            }
            res.json('El usuario no es administrador');
        }
        else if (rows_correo.length > 0) {
            if(rows_correo[0].categoria === 'admin'){
                return res.json('El usuario es administrador');
            }
            res.json('El usuario no es administrador');
        }
    } catch {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};