import DevlinkLogoSmall from '../../assets/images/logo-devlinks-small.svg'

const AuthLayout = ({ children }) => {
  return (
    <div className='h-full w-full md:w-fit md:h-fit md:m-auto'>
      <div className='hidden select-none md:flex md:items-center md:gap-1 md:justify-center md:mb-9'>
        <img src={DevlinkLogoSmall} className='w-[40px] h-[40px]'  alt="" />
        <span className='font-semibold text-3xl'>devlinks</span>
      </div>
      <div className='px-7 py-8 bg-white h-full md:w-[31rem] md:h-fit md:rounded-lg'>
        <div className='flex items-center gap-1 select-none md:hidden'>
          <img src={DevlinkLogoSmall} className='w-[40px] h-[40px]'  alt="" />
          <span className='font-bold text-3xl'>devlinks</span>
        </div>
        { children }
      </div>
    </div>
  )
}

export default AuthLayout