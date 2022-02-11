import react from "react";
import React, { useState } from "react";

function App() {

  const k = -0.9906;
  const [days, setDays] = useState(0);
  const [x, setX] = useState((1000 / (1 + (999 * Math.exp(k * days)))));

  react.useEffect(() => {
    setX(Math.round(1000 / (1 + (999 * Math.exp(k * days)))))
  }, [days]);

  return (
    <React.Fragment>
      <div className="container mt-5 py-5 d-flex flex-row justify-content-center">
        <div className="col-lg-7">
          <h2>Estudiantes infectados: <span className="text-danger font-weight-bold">{x}</span></h2>
          <div>
            <form>
              <div className="form-group mt-2">
                <input onChange={(e) => setDays(parseInt(e.target.value))} value={days} type="range" max={30} min={0} className="form-control-range bg-danger" id="formControlRange"></input>
                <div className="mt-2">
                  <label htmlFor="formControlRange">
                    <span className="h5">Dias transcurridos: <span className="font-weight-bold">{days}</span></span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="footer mt-auto fixed-bottom py-3">
        <div class="container">
          <div className="d-flex justify-content-between">
            <div>
              <p class="small text-muted mb-0">Ecuaciones diferenciales</p>
            </div>
            <div>
              <p class="small text-muted mb-0">Jose Laboriel</p>
            </div>
            <div>
              <p class="small text-muted mb-0">CEUTEC</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>

  );
}

export default App;
