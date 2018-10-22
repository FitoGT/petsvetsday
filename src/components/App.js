import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {
  constructor(props){
    super();
    this.state={
      citas:[]
    }
  }
  crearCita = nuevaCita =>{
    //creo una copia del state en citas y le paso el objeto nueva cita para crearlo
    const citas = [...this.state.citas,nuevaCita];
    this.setState({
      citas
    })
    
  }

  eliminarCita =id =>{
    //console.log(id);
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita=>cita.id !== id);
    this.setState({
      citas
    })
  }
  componentDidUpdate(){
    localStorage.setItem(
      'citas', JSON.stringify(this.state.citas)
    )
  }

  componentDidMount(){
    const citas = JSON.parse(localStorage.getItem('citas'));
    //console.log(citas);
    if(citas){
      this.setState({
        citas
      })
    }    
  }
  render() {
    return (
      <div className="container">
        <Header titulo='Citas Veterinarias' className="text-center"/>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita = {this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita}/>

          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
