const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formsSchema = new Schema ({
    fechaGasto: {
        type: Date,
        default: Date.now,
        required: true
    },
    fechaFactura: {
        type: Date,
        default: Date.now,
        required: true
    },
    folioFiscal: {
        type: String,
        required: true
    },
    razonSocial: {
        type: String,
        default: "AAN180209AB8"
    },
    proveedor: {
        type: String,
        required: true
    },
    rfcProveedor: {
        type: String,
        required: true
    },
    importe: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    propina: {
        type: Number
    },
    impuestos: {
        type: Number
    },
    descuentos: {
        type: Number
    },
    total: {
        type: Number
    },
    cuentaPrincipal: {
        type: String,
        required: true
    },
    cuentaSecundaria: {
        type: String,
        required: true
    },
    rubro: {
        type: String
    },
    quienPago: {
        type: String,
        required: true
    },
    banco: {
        type: String,
        required: true
    },
    cuenta: {
        type: Number,
        required: true
    },
    clabe: {
        type: Number,
        required: true
    },
    fechaReembolso: {
        type: Date,
        default: Date.now,
        required: true
    },
    facturarCliente: {
        type: Boolean,
        required: false
    },
    facturaEmitida: {
        type: Boolean,
        required: false
    },
    facturaCobrada: {
        type: Boolean,
        required: false
    },
    comentarios: {
        type: String
    }
})

module.exports = Forms = mongoose.model("Forms",formsSchema)