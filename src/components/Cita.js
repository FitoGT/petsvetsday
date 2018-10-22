import React, { Component } from 'react';

class Cita extends Component {
    eliminarCita = (id) =>{
        this.props.eliminarCita(id);
    }
    render() {
        const {fecha,hora,sintomas,nombreDuenio,nombreMascota,id} = this.props.cita 
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Propietario:</span>{nombreDuenio}</p>
                    <p className="card-text"><span>Fecha: </span>{fecha}</p>
                    <p className="card-text"><span>Hora: </span>{hora}</p>
                    <p className="card-text"><span>Sintomas: </span>{sintomas}</p>
                    <button className="btn btn-danger" onClick={() => this.eliminarCita(id)}>BORRAR</button>
                </div>
            </div>
         );
    }
}
 
export default Cita;
