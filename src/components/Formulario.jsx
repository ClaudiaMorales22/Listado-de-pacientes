import {useState, useEffect} from 'react';
import Error from './Error'


function Formulario({ pacientes, setPacientes, paciente }) {
    const [nombre, setNombre] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
      console.log(paciente);
    }, [paciente])
    

    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([ nombre, nombrePropietario, email, fecha, sintomas ].includes('')){
            setError(true)
            return;
        }
        setError(false)
        
        const objetoPaciente={
            nombre,
            nombrePropietario, 
            email, 
            fecha, 
            sintomas,
            id: generarId()
        }
        
        setPacientes([...pacientes, objetoPaciente])

        //Reiniciar el formulario
        setNombre('');
        setNombrePropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }

  return (
    <div className="mx-5 md:w-1/2 lg:h-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-xl text-center mb-10">
        Añade Pacientes {""}
        <span className="text-indigo-600 font-bold">y Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md px-2 py-10 rounded-lg mb-10">
        
        { error && <Error mensaje={'Todos los campos son obligatorios'}/> }

        <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
        </label>
        <input 
        id="mascota"
        type="text" 
        placeholder="Nombre de la mascota"
        className="border-2 rounded-md p-2 mt-2 w-full placeholder-gray-400"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        </div>

        <div className="mb-5">
        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del Propietario
        </label>
        <input 
        id="propietario"
        type="text" 
        placeholder="Nombre del Propietario"
        className="border-2 rounded-md p-2 mt-2 w-full placeholder-gray-400"
        value={nombrePropietario}
        onChange={(e) => setNombrePropietario(e.target.value)}
        />
        </div>

        <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
        </label>
        <input 
        id="email"
        type="email" 
        placeholder="Escribe Email de contacto"
        className="border-2 rounded-md p-2 mt-2 w-full placeholder-gray-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div className="mb-5">
        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
        </label>
        <input 
        id="alta"
        type="date" 
        className="border-2 rounded-md p-2 mt-2 w-full placeholder-gray-400"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        />
        </div>

        <div className="mb-5">
        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
           Síntomas
        </label>
        <textarea
        id="sintomas"
        type="text" 
        placeholder="Describe sintomas"
        className="border-2 rounded-md p-2 mt-2 w-full placeholder-gray-400"
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
        />
        </div>
        <input
        className="bg-indigo-600 text-white uppercase font-bold w-full p-2
         hover:bg-indigo-700 transition:colors cursor-pointer"
         type="submit"
         value={"Agregar Paciente"}
          />
      </form>
    </div>
  )
}

export default Formulario
