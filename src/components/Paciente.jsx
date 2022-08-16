const Paciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
    const { nombre, nombrePropietario, email, fecha, sintomas, id } = pacientes

    const handleEliminarPaciente = () => {
        const respuesta = confirm('Deseas eliminar el paciente?');
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mb-5 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre del propietario: {""}
                <span className="font-normal normal-case">{nombrePropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
        <div className="flex justify-between mt-10">
            <button
            type="button"
            className="py-2 px-10 bg-indigo-600 text-white font-bold
             hover:bg-indigo-700 rounded-lg uppercase"
            onClick={() => setPaciente(pacientes)}
            >Editar</button>

            <button
            type="button"
            className="py-2 px-10 font-bold text-white rounded-lg bg-red-500 uppercase"
            onClick={ handleEliminarPaciente }
            >Eliminar</button>
        </div>
        </div>
    )
}

export default Paciente
