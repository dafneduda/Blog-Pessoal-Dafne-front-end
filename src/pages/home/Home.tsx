import { useContext } from 'react';
import login2 from '../../assets/img/login2.jpg';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Home.css';

function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="bg-pink-300 flex justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-white p-4">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center">Olá, {usuario.nome}!</h2>
            <p className="text-lg md:text-xl text-center">Expresse aqui seus pensamentos e opiniões :)</p>
            <div className="flex flex-col md:flex-row justify-around gap-4">
              <ModalPostagem />
              <Link to="/postagens">
                <button className="rounded bg-pink-500 text-white py-2 px-4 border-white">
                  Ver postagens
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-4 md:py-0">
            <img src={login2} alt="login" className="w-2/3 md:w-full rounded-full" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
