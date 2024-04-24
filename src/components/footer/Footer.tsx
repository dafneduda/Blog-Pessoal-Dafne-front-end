import { FacebookLogo, GithubLogo, InstagramLogo, Link, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-pink-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Blog pessoal Dafne Duda | Copyright: </p>
          <p className='text-lg'>Acesse minhas redes sociais</p>
          <div className='flex gap-2'>
            <a href="https://linkedin.com/in/dafneduda/" target="blank"><LinkedinLogo size={48} weight='bold' /></a>
            <a href="https://github.com/dafneduda" target="blank"><GithubLogo size={48} weight='bold' /></a>
            <a href="https://instagram.com/dafneduda" target="blank"><InstagramLogo size={48} weight='bold' /></a>
            

            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer