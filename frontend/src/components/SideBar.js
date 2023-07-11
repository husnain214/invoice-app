import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import { useSelector } from 'react-redux'

const SideBar = ({ toggleTheme }) => {
  const user = useSelector(state => state.user)

  console.log(`data:image/jpeg;base64, ${user.profile_pic}`)
  
  return (
    <aside className='sidebar'>
      <Link to='/'><img src={logo} alt='logo'/></Link>

      <button onClick={toggleTheme}><img src={iconSun} alt='sun'/> <span className='sr-only'>Theme Toggler</span> </button>
      <div>
        <img 
          src={`data:image/jpeg;base64, ${user.profile_pic}`} 
          decoding='async' 
          alt='avatar'
        />
      </div>
    </aside>
  )
}

export default SideBar