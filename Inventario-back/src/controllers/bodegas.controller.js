const service = require('../services/bodegas.service');

exports.getAll = async (req, res) =>{
    try {
        const data = await service.getAllBodegas();
        res.json(data);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const bodega = await service.getBodegaById(id);
        if (!bodega) return res.status(404).json({ message: 'Bodega not found'});
        res.json(bodega);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

exports.create = async (req, res) => {
    try {
        const newBodega = await service.createBodega(req.body);
        res.status(201).json(newBodega);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updated = await service.updateBodega(id, req.body);
        if (!updated) return res.status(404).json({ message: 'Bodega not found' });
        res.json(updated)
    }catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.remove = async (req, res) => {
    try{
        const id = parseInt(req.params.id, 10);
        const deleted = await service.deleteBodega(id);
        if (!deleted) return res.status(404).json({ message: 'Bodega not found' });
        res.status(204).send();
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
};