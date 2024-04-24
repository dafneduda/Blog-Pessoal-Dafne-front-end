import { useContext } from 'react';
import homeLogo from '../../assets/img/homeLogo.jpg'
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {
const {usuario} = useContext(AuthContext)

  return (
    <>
      <div className="bg-pink-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Olá, {usuario.nome}!</h2>
            <p className='text-xl'>Expresse aqui seus pensamentos e opiniões :)</p>

            <div className="flex justify-around gap-4">
            <ModalPostagem />

             <Link to="/postagens" > <button className='rounded bg-pink text-pink-800 py-2 px-4'>Ver postagens</button></Link>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3 rounded-full' />

          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;