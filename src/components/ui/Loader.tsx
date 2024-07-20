import { HashLoader } from "react-spinners"

const Loader = () => {
  return (
    <div data-testid="loader" className="h-dvh flex flex-col bg-white w-full justify-center items-center ">
      <HashLoader color="#633cff" />
    </div>
  )
}

export default Loader