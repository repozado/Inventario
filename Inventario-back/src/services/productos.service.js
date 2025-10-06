const model = require("../models/productos.model");

exports.getAllProductos = async () => {
  return await model.findAll();
};

exports.getProductoById = async (id) => {
  return await model.findById(id);
};

exports.createProductos = async (productoData) => {
  return await model.insert(productoData);
};

exports.updateProductos = async (id, fieldsToUpdate) => {
  return await model.update(id, fieldsToUpdate);
};

exports.deleteProductos = async (id) => {
  return await model.remove(id);
};
