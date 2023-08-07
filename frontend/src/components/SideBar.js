import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, logout } from '../reducers/userReducer'

import logo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'
import exitIcon from '../assets/exit.svg'

const SideBar = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
    
  return (
    <aside className='sidebar'>
      <Link to='/'><img src={logo} alt='logo' /></Link>

      <button onClick={() => dispatch(changeTheme(user))}>
        <img src={user.theme ? iconSun : iconMoon} role='presentation' alt={user.theme ? 'sun' : 'moon'} />
        <span className='sr-only'>Theme Toggler</span>
      </button>

      <div>
        <img 
          src={`data:image/jpeg;base64, ${user.profile_pic}`} 
          decoding='async' 
          alt='avatar'
        />
      </div>

      <button onClick={() => dispatch(logout())}>
        <img src={exitIcon} role='presentation' alt='exit'/>
        <span className='sr-only'>Log out</span>
      </button>
    </aside>
  )
}

export default SideBar