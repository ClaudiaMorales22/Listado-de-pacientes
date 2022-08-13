const Paciente = ({ pacientes }) => {

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

        </div>
    )
}

export default Paciente
