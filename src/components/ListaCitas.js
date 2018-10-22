import React,{Component} from 'react';
import Cita from './Cita'

class ListaCitas extends Component {
    state = {  }
    
    render() { 
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar Citas' 

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(key =>(
                            <Cita 
                                key={key} 
                                cita={this.props.citas[key]}
                                eliminarCita={this.props.eliminarCita}
                            />

                        ))}
                    </div>  
                </div>
            </div>
          );
    }
}
 
export default ListaCitas;