import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import imageAvatar from '../assets/image-avatar.jpg'

const SideBar = ({ toggleTheme }) => {
  return (
    <aside className='sidebar'>
      <Link to='/'><img src={logo} alt='logo'/></Link>

      <button onClick={toggleTheme}><img src={iconSun} alt='sun'/></button>
      <button><img src={imageAvatar} alt='avatar'/></button>
    </aside>
  )
}

export default SideBar