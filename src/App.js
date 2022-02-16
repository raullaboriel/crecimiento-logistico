import react from "react";
import React, { useState } from "react";
import './style.css'
import modelo from './modelo.png'

function App() {

  const k = -0.9906;
  const [days, setDays] = useState(0);
  const [x, setX] = useState((1000 / (1 + (999 * Math.exp(k * days)))));

  react.useEffect(() => {
    setX(Math.round(1000 / (1 + (999 * Math.exp(k * days)))))
  }, [days]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
            Crecimiento logistico
        </span>
      </nav>
      <div className="container mt-5 py-4 d-flex flex-column">
        <div className="d-flex flex-row justify-content-center mb-3">
          <div style={{ backgroundColor: 'whitesmoke' }} className="col-lg-7 rounded-lg p-5">
            <h4>Estudiantes infectados: <span className="text-danger font-weight-bold">{x}</span></h4>
            <div>
              <form>
                <div className="form-group mt-2">
                  <input onChange={(e) => setDays(parseInt(e.target.value))} value={days} type="range" max={30} min={0} className="form-control-range bg-danger" id="formControlRange"></input>
                  <div className="mt-2">
                    <label htmlFor="formControlRange">
                      <span className="h6">Días transcurridos: <span className="font-weight-bold">{days}</span></span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="col-lg-7 p-0">
            <p className="text-justify times-new-roman">
              Suponga que un estudiante es portador del virus de la gripe y regresa a su aislado campus de 1000 estudiantes. Si se supone que la razón con que se propaga el virus es proporcional no sólo a la cantidad x de estudiantes infectados sino también a la cantidad
              de estudiantes no infectados, determine la cantidad de estudiantes infectados después
              de 6 días si además se observa que después de cuatro días x(4) = 50.
            </p>
          </div>
        </div>
        <div className="text-center mb-3">
          <img src={modelo} width='250' height='auto' alt='' />
        </div>
      </div>
      <footer style={{ backgroundColor: 'whitesmoke' }} className="footer rounded mt-auto fixed-bottom py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <p className="small text-muted mb-0">Ecua. Diferenciales</p>
            </div>
            <div>
              <p className="small text-muted mb-0">Jose Laboriel</p>
            </div>
            <div>
              <p className="small text-muted mb-0">CEUTEC</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>

  );
}

export default App;
