import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const DataTable = () => {

  const [empresas, setEmpresas] = useState([]);

  const peticionGet = async () => {
    //console.log("en petición get")
    await axios.get("/api/empresa/obtenerempresas").then((response) => {
      setEmpresas(response.data);
      // console.log(empresas);
    });
  };

  useEffect(() => {
    //console.log("En el effect")
    peticionGet();
  }, []);

  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/empresa/borrarempresa/${id}`);
    peticionGet();
  };
  const eliminar = async (id) => {
    Swal.fire({
      title: "Está seguro de borrar el registro?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Borrar",
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        eliminar_completo(id);
        Swal.fire("Empresa borrada!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("La empresa no ha sido borrado", "", "info");
      }
    });
  };
  return (
    <div>
        <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      Empresas registradas
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Nombre
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Teléfono
                          </th>
                          
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            País
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Sector
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Acciones
                          </th>
                         
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                       {empresas.map((empresa) => (
                        <tr key={empresa._id}>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="avatar avatar-sm me-3 border-radius-lg"
                                  alt="user1"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">{empresa.nombre}</h6>
                                <p className="text-xs text-secondary mb-0">
                                  {empresa.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Teléfono
                            </p>
                            <p className="text-xs text-secondary mb-0">
                            {empresa.telefono}
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                          {empresa.pais}
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                            {empresa.sector}
                            </span>
                          </td>
                          <td className="align-middle">
                          <Link
                          to={`/editempresa/${empresa._id}`}
                          className="btn btn-info"
                        >
                          Editar
                        </Link>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminar(empresa._id)}
                        >
                          {" "}
                          Borrar
                        </button>
                          </td>
                        </tr>
                          ))}
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

    </div>
  )
}

export default DataTable