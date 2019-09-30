import React, {Component} from 'react';
import axios from "axios";

// Import Materialize
import M from "materialize-css";


class Form extends Component {
  constructor(props) {
    super(props);
      this.onChangeFechaGasto = this.onChangeFechaGasto.bind(this)
      this.onChangeFechaFactura = this.onChangeFechaFactura.bind(this)
      this.onChangeFolioFiscal = this.onChangeFolioFiscal.bind(this)
      this.onChangeProveedor = this.onChangeProveedor.bind(this)
      this.onChangeRFC = this.onChangeRFC.bind(this)
      this.onChangeImportesinIVA = this.onChangeImportesinIVA.bind(this)
      this.onChangeIVA = this.onChangeIVA.bind(this)
      this.onChangePropina = this.onChangePropina.bind(this)
      this.onChangeOtrosImpuestos = this.onChangeOtrosImpuestos.bind(this)
      this.onChangeDescuentos = this.onChangeDescuentos.bind(this)
      this.onChangeTotal = this.onChangeTotal.bind(this)
      this.onChangeCuentaPrincipal = this.onChangeCuentaPrincipal.bind(this)
      this.onChangeCuentaSecundaria = this.onChangeCuentaSecundaria.bind(this)
      this.onChangeRubro = this.onChangeRubro.bind(this)
      this.onChangeQuienPago = this.onChangeQuienPago.bind(this)
      this.onChangeBanco = this.onChangeBanco.bind(this)
      this.onChangeCuenta = this.onChangeCuenta.bind(this)
      this.onChangeClabe = this.onChangeClabe.bind(this)
      this.onChangeFechaReembolso = this.onChangeFechaReembolso.bind(this)
      this.onChangeFacturarCliente = this.onChangeFacturarCliente.bind(this)
      this.onChangeFacturaEmitida = this.onChangeFacturaEmitida.bind(this)
      this.onChangeFacturaCobrada = this.onChangeFacturaCobrada.bind(this)
      this.onChangeComentarios = this.onChangeComentarios.bind(this)
      this.onSubmit = this.onSubmit.bind(this)

      this.state = {
        fecha_gasto: '',
        fecha_factura: '',
        folio_fiscal: '',
        proveedor: '',
        rfc: '',
        importe_sin_iva: '',
        iva: '',
        propina: '',
        otros_impuestos: '',
        descuentos: '',
        total: '',
        cuenta_principal: '',
        cuenta_secundaria: '',
        rubro: '',
        quien_pago: '',
        banco: '',
        cuenta: '',
        clabe: '',
        fecha_reembolso: '',
        facturar_cliente: '',
        factura_emitida: '',
        factura_cobrada: '',
        comentarios: ''
      }
  }

    onChangeFechaGasto(e) {
      this.setState({
        fecha_gasto: e.target.value
      })
    }
    onChangeFechaFactura(e) {
      this.setState({
        fecha_factura: e.target.value
      })
    }
    onChangeFolioFiscal(e) {
      this.setState({
        folio_fiscal: e.target.value
      })
    }
    onChangeProveedor(e) {
      this.setState({
        proveedor: e.target.value
      })
    }
    onChangeRFC(e) {
      this.setState({
        rfc: e.target.value
      })
    }
    onChangeImportesinIVA(e) {
      this.setState({
        importe_sin_iva: e.target.value
      })
    }
    onChangeIVA(e) {
      this.setState({
        iva: e.target.value
      })
    }
    onChangePropina(e) {
      this.setState({
        propina: e.target.value
      })
    } 
    onChangeOtrosImpuestos(e) {
      this.setState({
        otros_impuestos: e.target.value
      })
    }
    onChangeDescuentos(e) {
      this.setState({
        descuentos: e.target.value
      })
    }
    onChangeTotal(e) {
      this.setState({
        total: e.target.value
      })
    }
    onChangeCuentaPrincipal(e) {
      this.setState({
        cuenta_principal: e.target.value
      })
    }
    onChangeCuentaSecundaria(e) {
      this.setState({
        cuenta_secundaria: e.target.value
      })
    }
    onChangeRubro(e) {
      this.setState({
        rubro: e.target.value
      })
    }
    onChangeQuienPago(e) {
      this.setState({
        quien_pago: e.target.value
      })
    }
    onChangeBanco(e) {
      this.setState({
        banco: e.target.value
      })
    }
    onChangeCuenta(e) {
      this.setState({
        cuenta: e.target.value
      })
    }
    onChangeClabe(e) {
      this.setState({
        clabe: e.target.value        
      })
    }
    onChangeFechaReembolso(e) {
      this.setState({
        fecha_reembolso: e.target.value
      })
    }
    onChangeFacturarCliente(e){
      this.setState({
        facturar_cliente: e.target.value
      })
    }
    onChangeFacturaEmitida(e) {
      this.setState({
        factura_emitida: e.target.value
      })
    }
    onChangeFacturaCobrada(e){
      this.setState({
        factura_cobrada: e.target.value
      })
    }
    onChangeComentarios(e) {
      this.setState({
        comentarios: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        fecha_gasto: this.state.fecha_gasto,
        fecha_factura: this.state.fecha_factura,
        folio_fiscal: this.state.folio_fiscal,
        proveedor: this.state.proveedor,
        rfc: this.state.rfc,
        importe_sin_iva: this.state.importe_sin_iva,
        iva: this.state.iva,
        propina: this.state.propina,
        otros_impuestos: this.state.otros_impuestos,
        descuentos: this.state.descuentos,
        total: this.state.total,
        cuenta_principal: this.state.cuenta_principal,
        cuenta_secundaria: this.state.cuenta_secundaria,
        rubro: this.state.rubro,
        quien_pago: this.state.quien_pago,
        banco: this.state.banco,
        cuenta: this.state.cuenta,
        clabe: this.state.clabe,
        fecha_reembolso: this.state.fecha_reembolso,
        facturar_cliente: this.state.facturar_cliente,
        factura_emitida: this.state.factura_emitida,
        factura_cobrada: this.state.factura_cobrada,
        comentarios: this.state.comentarios
      };
      axios.post("http://localhost:3000/form", obj)
        .then(res => console.log(res.data));
        
      this.setState({
        fecha_gasto: '',
        fecha_factura: '',
        folio_fiscal: '',
        proveedor: '',
        rfc: '',
        importe_sin_iva: '',
        iva: '',
        propina: '',
        otros_impuestos: '',
        descuentos: '',
        total: '',
        cuenta_principal: '',
        cuenta_secundaria: '',
        rubro: '',
        quien_pago: '',
        banco: '',
        cuenta: '',
        clabe: '',
        fecha_reembolso: '',
        facturar_cliente: '',
        factura_emitida: '',
        factura_cobrada: '',
        comentarios: ''
      })
    }

    componentDidMount() {
        // Auto initialize para Materialize
        M.AutoInit();
    }
    
    render() {
        return(
        <div>
        
        <div class="row">
    <form onSubmit={this.onSubmit} class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <input id="fecha_gasto" 
                 type="date" 
                 class="datepicker" 
                 value={this.state.fecha_gasto} 
                 onChange={this.onChangeFechaGasto} />
          <label for="fecha_gasto">Fecha de Gasto</label>
        </div>
        <div class="input-field col s3">
          <input id="fecha_factura"
                 type="date"
                 class="datepicker"
                 value={this.state.fecha_factura}
                 onChange={this.onChangeFechaFactura}/>
          <label for="fecha_factura">Fecha de Factura</label>
        </div>
        <div class="input-field col s3">
          <input id="folio_fiscal" 
                 type="text" 
                 class="validate"
                 value={this.state.folio_fiscal}
                 onChange={this.onChangeFolioFiscal}/>
          <label for="folio_fiscal">Folio Fiscal</label>
        </div>
        <div class="input-field col s3">
          <input disabled value="AAN180209AB8" id="razon_social" type="text" class="validate"/>
          <label for="disabled">Razón Social</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s3 offset-s3">
          <input id="proveedor"
                 type="text"
                 class="validate"
                 value={this.state.proveedor}
                 onChange={this.onChangeProveedor}/>
          <label for="proveedor">Proveedor</label>
        </div>
        <div class="input-field col s3">
          <input id="rfc_proveedor"
                 type="text"
                 class="validate"
                 value={this.state.rfc}
                 onChange={this.onChangeRFC}/>
          <label for="rfc_proveedor">RFC del proveedor</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s2">
          <i class="material-icons prefix">attach_money</i>
          <input id="importe_sin_iva"
                 type="text" 
                 class="validate"
                 value={this.state.importe_sin_iva}
                 onChange={this.onChangeImportesinIVA}/>
          <label for="importe_sin_iva">Importe sin IVA</label>
        </div>
        <div class="input-field col s2">
          <i class="material-icons prefix">monetization_on</i>
          <input id="iva"
                 type="text"
                 class="validate"
                 value={this.state.iva}
                 onChange={this.onChangeIVA}/>
          <label for="iva">IVA</label>
        </div>
        <div class="input-field col s2">
          <i class="material-icons prefix">payment</i>
          <input id="propina"
                 type="text"
                 class="validate"
                 value={this.state.propina}
                 onChange={this.onChangePropina}/>
          <label for="propina">Propina</label>
        </div>
        <div class="input-field col s2">
          <i class="material-icons prefix">attach_money</i>
          <input id="otros_impuestos"
                 type="text"
                 class="validate"
                 value={this.state.otros_impuestos}
                 onChange={this.onChangeOtrosImpuestos}/>
          <label for="otros_impuestos">Otros impuestos</label>
        </div>
        <div class="input-field col s2">
          <i class="material-icons prefix">monetization_on</i>
          <input id="descuentos"
                 type="text"
                 class="validate"
                 value={this.state.descuentos}
                 onChange={this.onChangeDescuentos}/>
          <label for="descuentos">Descuentos</label>
        </div>
        <div class="input-field col s2">
          <i class="material-icons prefix">payment</i>
          <input id="total"
                 type="text"
                 class="validate"
                 value={this.state.total}
                 onChange={this.onChangeTotal}/>
          <label for="total">Total</label>
        </div>
      </div>

      <div class="row">

      <div class="input-field col s2 offset-s3">
         <select 
                 value={this.state.cuenta_principal}
                 onChange={this.onChangeCuentaPrincipal}>
            <option value="1">OFICINA</option>
            <option value="2">CLIENTE</option>
        </select>
        <label>Cuenta principal</label>
      </div>
      <div class="input-field col s2">
         <select 
                 value={this.state.cuenta_secundaria}
                 onChange={this.onChangeCuentaSecundaria}>
            <option value="1">COMERCIAL</option>
            <option value="2">CARGO A CLIENTE</option>
            <option value="3">OPERACIÓN OFICINA</option>
            <option value="4">VIÁTICOS PREPAGADOS</option>
        </select>
        <label>Cuenta secundaria</label>
      </div>
      <div class="input-field col s2">
          <input id="rubro"
                 type="text"
                 class="validate"
                 value={this.state.rubro}
                 onChange={this.onChangeRubro}/>
          <label for="rubro">Rubro</label>
        </div>
        </div>
     
        <div class="row">
        <div class="input-field col s3">
          <input id="quien_pago"
                 type="text"
                 class="validate"
                 value={this.state.quien_pago}
                 onChange={this.onChangeQuienPago}/>
          <label for="quien_pago">¿Quién pagó el gasto?</label>
        </div>
        <div class="input-field col s3">
          <input id="banco"
                 type="text"
                 class="validate"
                 value={this.state.banco}
                 onChange={this.onChangeBanco}/>
          <label for="banco">Banco</label>
        </div>
        <div class="input-field col s3">
          <input id="cuenta"
                 type="text"
                 class="validate"
                 value={this.state.cuenta}
                 onChange={this.onChangeCuenta}/>
          <label for="cuenta">Cuenta</label>
        </div>
        <div class="input-field col s3">
          <input id="clabe"
                 type="text"
                 class="validate"
                 value={this.state.clabe}
                 onChange={this.onChangeClabe}/>
          <label for="clabe">Clabe</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s3">
          <input id="fecha_reembolso"
                 type="date"
                 class="datepicker"
                 value={this.state.fecha_reembolso}
                 onChange={this.onChangeFechaReembolso}/>
          <label for="fecha_reembolso">Fecha de reembolso</label>
        </div>
        <div class="input-field col s3">
        <select 
                value={this.state.facturar_cliente}
                onChange={this.onChangeFacturarCliente}>
            <option value="1">POR FACTURAR</option>
            <option value="2">NO FACTURABLE</option>
        </select>
        <label>Facturar a cliente</label>
        </div>
        <div class="input-field col s3">
        <select 
                value={this.state.factura_emitida}
                onChange={this.onChangeFacturaEmitida}>
            <option value="1">POR FACTURAR</option>
            <option value="2">NO FACTURABLE</option>
        </select>
        <label>Factura emitida</label>
        </div>
        <div class="input-field col s3">
        <select 
                value={this.state.factura_cobrada}
                onChange={this.onChangeFacturaCobrada}>
            <option value="1">POR FACTURAR</option>
            <option value="2">NO FACTURABLE</option>
        </select>
        <label>Factura cobrada</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6 offset-s3">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="comentarios"
                    class="materialize-textarea"
                    data-length="5"
                    value={this.state.comentarios}
                    onChange={this.onChangeComentarios}></textarea>
          <label for="comentarios">Comentarios</label>
        </div>
      </div>

      <div className="form-group">
                    <input type="submit" value="Reembolso" className="btn btn-primary"/>
                </div>  
      
    </form>
  </div>
        
            

        </div>
        )
    }
}

export default Form;
