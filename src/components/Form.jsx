import { getImages } from '../api/randomUser';

export default function Form({ number, setNumber, setData, setIsLoading }) {
  const handleSubmit = async e => {
    try {
      e.preventDefault(); 
      if (number <= 0) return alert('El número debe ser mayor de 0');
      setIsLoading(true);

      const images = await getImages(number);
      setData(images);
      setIsLoading(false);
    } catch (err) {
      alert('Hubo un error con la conexión a internet');
    }
  };

  return (
    <form
      className="flex flex-col w-[400px] mx-auto mt-10 gap-4 shadow-sm"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="numberUsers">
          Número de usuarios <b className="text-red-700">*</b>
        </label>
        <input
          autoComplete="none"
          type="number"
          inputMode="text"
          id="numberUsers"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Número de usuarios..."
          className="outline-none ring-1 rounded-md ring-indigo-400 px-1 py-2 focus:outline-indigo-600"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 rounded-lg px-5 w-32 text-white py-1 mx-auto ring-1 ring-indigo-500 hover:bg-indigo-600 hover:scale-105 hover:transition ease-out duration-300"
      >
        Buscar
      </button>
    </form>
  );
}
