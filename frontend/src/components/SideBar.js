import logo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import imageAvatar from '../assets/image-avatar.jpg'
import { Link } from 'react-router-dom'

const SideBar = ({ toggleTheme }) => {
  return (
    <aside className='sidebar bg-oxford-blue'>
      <Link to='/'><img src={logo} alt='logo'/></Link>

      <button onClick={toggleTheme}><img src={iconSun} alt='sun'/></button>
      <button><img src={imageAvatar} alt='avatar'/></button>
    </aside>
  )
}

export default SideBar