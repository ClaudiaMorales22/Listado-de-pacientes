import Paciente from "./paciente"

function ListadoPacientes({pacientes}) {

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-center text-xl mt-5 mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll ml-5">

        {pacientes.map( (pacientes, index) => (
        <Paciente 
          key={index}
          pacientes={pacientes}
        />))}
        
      
     
      </div>
      </div>
   
  )
}

export default ListadoPacientes
