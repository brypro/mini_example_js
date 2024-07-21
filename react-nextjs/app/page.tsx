import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header>
          <h1>People Manager</h1>
      </header>

      {/* Main */}
      <main>
          {/* Form */}
          <form id="form">
      
              <div className="form-title">
                  <i className="fa-solid fa-user-group"></i>
                  <h2 id="form-title-text">Añadir personal</h2>
              </div>

              <div className="input-container">
                  <label className="label" htmlFor="apellidos">APELLIDOS</label>
                  <input className="input" type="text" id="apellidos" name="apellidos" required />
              </div>

              <div className="input-container">
                  <label className="label" htmlFor="nombres">NOMBRES</label>
                  <input className="input" type="text" id="nombres" name="nombres" required />
              </div>

              <div className="input-container">
                  <p className="label">GÉNERO</p>
                  <div className="gender-label-container">
                      <label className="input" htmlFor="femenino">
                          <input className="gender-radio" type="radio" id="femenino" name="genero" value="Femenino" required />
                          Femenino
                      </label>
                      <label className="input" htmlFor="masculino">
                          <input className="gender-radio" type="radio" id="masculino" name="genero" value="Masculino" />
                          Masculino
                      </label>
                  </div>
              </div>

              <div className="input-container">
                  <label className="label" htmlFor="estadoCivil">ESTADO CIVIL</label>
                  <select className="form-select input" id="estadoCivil" name="estadoCivil" aria-label="Estado civil"
                      required>
                      <option value="">Seleccione</option>
                      <option value="Soltero(a)">Soltero(a)</option>
                      <option value="Casado(a)">Casado(a)</option>
                      <option value="Divorciado(a)">Divorciado(a)</option>
                      <option value="Viudo(a)">Viudo(a)</option>
                  </select>
              </div>

              <div className="input-container">
                  <label className="label" htmlFor="sueldo">SUELDO</label>
                  <input className="input" type="number" id="sueldo" name="sueldo" required />
              </div>

              <div className="btn-container">
                  <button className="cancel-btn btn" type="reset" id="cancel-btn">
                      LIMPIAR
                  </button>
                  <button className="save-btn btn" type="submit" id="save-btn">
                      GUARDAR
                  </button>
              </div>
          </form>

          {/* Table */}
          <div className="table-container">

              <div className="filter-container">
                  <label htmlFor="filterGenero">Filtrar por género</label>
                  <select id="filterGenero">
                      <option value="todos">Todos</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                  </select>
              </div>

              <table>
                  <thead>
                      <tr>
                          <th>Apellidos</th>
                          <th>Nombres</th>
                          <th>Género</th>
                          <th>E. Civil</th>
                          <th>Sueldo</th>
                          <th></th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody id="table-body"></tbody>
              </table>

          </div>
      </main>
    </>
  );
}
