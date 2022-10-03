const express = require('express');
const router = express.Router();
const {
        getAll,
        getDeleted,
        getById,
        getByName,
        createProduct,
        updateProduct,
        removeProduct,
        undoDeleteById
    } = require('../controllers/Products');


// PING
router.get('/',(req,res)=>res.send('OK'));

// ALL PRODUCTS
router.get('/product', getAll);
// DELETED PRODUCTS
router.get('/product/deleted', getDeleted);
// PRODUCTS BY ID
router.get('/product/byId/:id',getById);
// PRODUCTS BY NAME
router.get('/product/byName/:name',getByName);
// CREATE PRODUCT
router.post('/product/add',createProduct);
// UPDATE PRODUCT
router.put('/product/update/:_id',updateProduct);
// DELETE PRODUCT
router.delete('/product/delete/:_id',removeProduct);
// UNDO DELETE PRODUCT BY ID
router.put('/product/:_id',undoDeleteById);



module.exports=router;