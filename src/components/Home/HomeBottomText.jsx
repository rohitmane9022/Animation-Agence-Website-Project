
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-10 mt-32 '>
      
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 flex items-center px-3 pt-1 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[7vw] lg:mt-7.5' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 flex items-center px-3 pt-1 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[7vw] lg:mt-7.5' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText