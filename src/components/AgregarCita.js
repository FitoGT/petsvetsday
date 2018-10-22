import React, { Component } from "react";
import uuid from 'uuid';

class AgregarCita extends Component {
    
    constructor(props){
        super()
        this.state = {
            error:false
        }
        this.nombreMascota = React.createRef();
        this.nombreDuenio = React.createRef();
        this.fecha = React.createRef();
        this.hora = React.createRef();
        this.sintomas = React.createRef();
    }
    crearCita = e =>{
        e.preventDefault();

        if(this.nombreMascota.current.value === '' || this.nombreDuenio.current.value=== '' || this.fecha.current.value==='' || this.hora.current.value==='' || this.sintomas.current.value===''){
            this.setState({
                error:true
            })
        }else{
            this.setState({
                error:false
            })
            const cita = {
                id:uuid(),
                nombreMascota : this.nombreMascota.current.value,
                nombreDuenio : this.nombreDuenio.current.value,
                fecha : this.fecha.current.value,
                hora : this.hora.current.value,
                sintomas : this.sintomas.current.value
            }
            this.props.crearCita(cita);
            e.currentTarget.reset();
        }        
    }

    render() {
        const error = this.state.error; 
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <form onSubmit={this.crearCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascota} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreDuenio} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fecha} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.hora} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomas}  className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {error ? <div className="alert alert-danger text-center"><p>Todos los campos son obligatorios</p></div>:''}
                </div>
            </div>
            
          );
    }
}
 
export default AgregarCita;