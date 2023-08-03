import BounceLoader from 'react-spinners/BounceLoader'
import './LoadingScreen.css'
import { useImperativeHandle, useRef, forwardRef } from 'react'

const LoadingScreen = forwardRef((ref) => {
  const loadingRef = useRef()

  useImperativeHandle(ref, () => ({
    openLoading: () => {
      loadingRef.current.animate(
        [
          { display: 'grid' },
          { opacity: '0' },
          { opacity: '1' }
        ],
        { duration: 100, iterations: 1 }
      )
    },
    closeLoading: () => {
      loadingRef.current.animate(
        [
          { opacity: '1' },
          { opacity: '0' },
          { display: 'none'}
        ],
        { duration: 100, iterations: 1 }
      )
    }
  }))

  return (
    <div className='loading-screen' ref={loadingRef}>
      <BounceLoader color='hsl( 252 94% 67% )' />
    </div>
  )
})

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen