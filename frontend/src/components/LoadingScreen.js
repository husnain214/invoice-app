import BounceLoader from 'react-spinners/BounceLoader'
import './LoadingScreen.css'
import { useSelector } from 'react-redux'

const LoadingScreen = () => {
  const isLoading = useSelector(state => state.loader)

  return(
    <div className='loading-screen' data-loading={isLoading}>
      <BounceLoader color='hsl( 252 94% 67% )' />
    </div>
  )
}

export default LoadingScreen