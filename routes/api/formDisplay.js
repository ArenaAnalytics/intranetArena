const express = require('express')
const formDisplay = express.Router()

let Reembolso = require('../../models/Forms')

//Definir la ruta
formDisplay.route('/add').post(function (req, res) {
    let reembolso = new Reembolso(req.body);
    reembolso.save()
        .then(reembolso => {
            res.status(200).json({'reembolso' : 'reembolso correctamente creado'})
        })
        .catch(err => {
            res.status(400).send("No se pudo crear reembolso")
        })
})

//Definir get data
formDisplay.route('/').get(function (req,res) {
    Reembolso.find(function(err, reembolsos){
        if(err){
            console.log(err);
        }
        else {
            res.json(reembolsos)
        }
    })
})

//Definir ruta de edición
formDisplay.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Reembolso.findById(id, function(err,reembolso){
        res.json(reembolso)
    })
})

//Definir ruta de update
formDisplay.route('/update/:id').get(function (req,res){
    Reembolso.findById(req.params.id, function(err, reembolso){
        if (!reembolso)
        res.status(404).send("No se encontró reembolso");
        else {
            reembolso.fecha_pago = req.body.fecha_pago;
            reembolso.fecha_factura = req.body.fecha_factura;
            reembolso.folio_fiscal = req.body.folio_fiscal;
            reembolso.proveedor = req.body.proveedor;
            reembolso.rfc = req.body.rfc;
            reembolso.importe_sin_iva = req.body.importe_sin_iva;
            reembolso.iva = req.body.iva;
            reembolso.propina = req.body.propina;
            reembolso.otros_impuestos = req.body.otros_impuestos;
            reembolso.descuentos = req.body.descuentos;
            reembolso.total = req.body.total;
            reembolso.cuenta_principal = req.body.cuenta_principal;
            reembolso.cuenta_secundaria = req.body.cuenta_secundaria;
            reembolso.rubro = req.body.rubro;
            reembolso.quien_pago = req.body.quien_pago;
            reembolso.banco = req.body.banco;
            reembolso.cuenta = req.body.cuenta;
            reembolso.clabe = req.body.clabe;
            reembolso.fecha_reembolso = req.body.fecha_reembolso;
            reembolso.facturar_cliente = req.body.facturar_cliente;
            reembolso.factura_emitida = req.body.factura_emitida;
            reembolso.factura_cobrada = req.body.factura_cobrada;
            reembolso.comentarios = req.body.comentarios;

            reembolso.save().then(reembolso => {
                res.json("Reembolso actualizado");
            })
            .catch(err => {
                res.status(400).send("No se puede modificar el reembolso")
            })
        }
    })
})

//Definir ruta para eliminar
formDisplay.route('/delete/:id').get(function (req,res) {
    Reembolso.findByIdAndRemove({_id: req.params.id}, function(err, reembolso){
        if(err) res.json(err)
        else res.json("Reembolso eliminado")
    })
})

module.exports = formDisplay;