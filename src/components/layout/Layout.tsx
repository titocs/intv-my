import type { ReactNode } from "react";
import DevlinkLogoSmall from '../../assets/images/logo-devlinks-small.svg'

const Layout = ({ children }: ReactNode) => {
  return (
    <div className="h-dvh bg-grey-custom-100 flex w-full flex-col overflow-scroll md:py-4">
      { children }
    </div>
  )
}

export default Layout;