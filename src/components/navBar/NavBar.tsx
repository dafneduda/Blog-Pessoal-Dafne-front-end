import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", 'sucesso');
    navigate("/login");
  }

  return (
    <>
      <div className="w-full bg-pink-900 text-white flex justify-center py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase mb-4 md:mb-0">
            Blog Pessoal
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/postagens" className="hover:underline">Postagens</Link>
            <Link to="/temas" className="hover:underline">Temas</Link>
            <Link to="/cadastroTema" className="hover:underline">Cadastrar tema</Link>
            <Link to="/perfil" className="hover:underline">Perfil</Link>
            <img src={usuario.foto} alt="Perfil" className="w-9 h-9 rounded-full border-purple-400 border-4" />
            <Link to="" onClick={logout} className="hover:underline">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
