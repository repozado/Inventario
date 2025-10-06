const service = require('../services/productos.service');

exports.getAll = async (req, res) =>{
    try {
        const data = await service.getAllProductos();
        res.json(data);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const productos = await service.getProductoById(id);
        if (!productos) return res.status(404).json({ message: 'Producto not found'});
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

exports.create = async (req, res) => {
    try {
        const newProducto = await service.createProductos(req.body);
        res.status(201).json(newProducto);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updated = await service.updateProductos(id, req.body);
        if (!updated) return res.status(404).json({ message: 'Producto not found' });
        res.json(updated)
    }catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.remove = async (req, res) => {
    try{
        const id = parseInt(req.params.id, 10);
        const deleted = await service.deleteProductos(id);
        if (!deleted) return res.status(404).json({ message: 'Producto not found' });
        res.status(204).send();
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
};