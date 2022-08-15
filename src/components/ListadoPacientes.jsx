
import Paciente from "./paciente"

function ListadoPacientes({pacientes, setPaciente}) {


  return (
    <div className="md:w-1/2 lg:w-3/5">

    {pacientes && pacientes.length ? (
      <>
  <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
  <p className="text-center text-xl mt-5 mb-10">
    Administra tus {""}
    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
  </p>
  <div className="md:h-screen overflow-y-scroll ml-5">
    {pacientes.map( (pacientes) => (
    <Paciente 
      key={pacientes.id}
      pacientes={pacientes}
      setPaciente={setPaciente}
    />))}
    </div>

    </>
    ) : (
      <>
      <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
      <p className="text-center text-xl mt-5 mb-10">
        Comienza agregando pacientes {""}
        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
      </p>
      </>
    )}
     </div>
  )
}

export default ListadoPacientes
