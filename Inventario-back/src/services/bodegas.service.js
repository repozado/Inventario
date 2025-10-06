const model = require("../models/bodegas.model");

exports.getAllBodegas = async () => {
  return await model.findAll();
};

exports.getBodegaById = async (id) => {
  return await model.findById(id);
};

exports.createBodega = async (bodegaData) => {
  return await model.insert(bodegaData);
};

exports.updateBodega = async (id, fieldsToUpdate) => {
  return await model.update(id, fieldsToUpdate);
};

exports.deleteBodega = async (id) => {
  return await model.remove(id);
};
