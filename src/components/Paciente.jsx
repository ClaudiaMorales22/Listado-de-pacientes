const Paciente = ({ pacientes, setPaciente }) => {

    return (
        <div className="mb-5 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
                <span className="font-normal normal-case">{pacientes.nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre del propietario: {""}
                <span className="font-normal normal-case">{pacientes.nombrePropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                <span className="font-normal normal-case">{pacientes.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {""}
                <span className="font-normal normal-case">{pacientes.fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: {""}
                <span className="font-normal normal-case">{pacientes.sintomas}</span>
            </p>
        <div className="flex justify-between mt-10">
            <button
            type="button"
            className="py-2 px-10 bg-indigo-600 text-white font-bold hover:bg-indigo-700 rounded-lg uppercase"
            onClick={() => setPaciente(pacientes)}
            >Editar</button>

            <button
            type="button"
            className="py-2 px-10 font-bold text-white rounded-lg bg-red-500 uppercase"
            >Eliminar</button>
        </div>
        </div>
    )
}

export default Paciente
