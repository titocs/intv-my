import { Link, useNavigate } from '@tanstack/react-router'
import DevlinkLogoSmall from '../../assets/images/logo-devlinks-small.svg'
import LogoutIcon from "../../assets/images/logout.svg"
import { Token } from '../../utils/token';

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Token.removeLoggedInIdentifier();
    navigate({
      to: '/login'
    })
  }

  return (
    <>
      <header className='md:px-5'>
        <div className='px-5 bg-white py-4 flex items-center justify-between'>
          <img src={DevlinkLogoSmall} className='w-[40px] h-[40px]' alt="" />
          <div className='flex items-center gap-2'>
            <Link to={'/'} activeProps={{ className:'rounded-lg flex items-center gap-2 bg-purple-custom-100 !text-purple-custom-800 py-3 px-6' }} className='rounded-lg flex items-center gap-2  py-3 px-6' >
              <svg className='w-6 h-6 fill-[#633cff]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16"><path fill="" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"/></svg>
              <span className='hidden md:block text-grey-custom-800 font-semibold'>Links</span>
            </Link>
            <Link to={'/profile'} activeProps={{ className:'rounded-lg flex items-center gap-2 !text-purple-custom-800 bg-purple-custom-100 py-3 px-6'}} className='rounded-lg flex items-center gap-2 py-3 px-6'>
              <svg className='w-6 h-6 fill-[#633cff]' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="" d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"/></svg>
              <span className='hidden md:block text-grey-custom-800 font-medium'>Profile Details</span>
            </Link>
          </div>
          <button className='rounded-lg border border-purple-custom-800 px-4 transition-colors duration-150 hover:text-white hover:bg-purple-custom-800 py-3 md:px-6 md:py-3 group' onClick={handleLogout}>
            <img src={LogoutIcon} className='w-4 h-4 md:hidden' alt="" />
            <h1 className='text-purple-custom-800 font-medium text-sm hidden md:block group-hover:text-white' onClick={handleLogout}>Logout</h1>
          </button>
        </div>
      </header>
      { children }
    </>
  )
}

export default MainLayout