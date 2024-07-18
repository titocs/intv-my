import { useQuery } from "@tanstack/react-query"
import PhoneIllustration from "../../assets/images/illustration-phone-mockup.svg"
import ListLinkDisplay from "../ui/ListLinkDisplay"
import { authApi } from "../../api/auth"
import { useDataLinkStore } from "../../store/store"

const MockupPhone = () => {
  const links = useDataLinkStore((state) => state.links);

  const { data, isPending } = useQuery({
    queryKey: ['data-profile'],
    queryFn: async () => await authApi.getUser()
  })

  return (
    <div className='h-full relative'>
      <img className={`m-auto ${isPending ? 'animate-pulse': ''}`} src={PhoneIllustration} alt="" />
      {
        isPending ? null : links.length === 0 ? (
          <div className="absolute top-[58px] left-1/2 -translate-x-1/2">
            <img src={data?.data.image} className="h-28 w-28 mx-auto bg-white rounded-full" alt="" />
            <div className="text-center">
              <h1 className="bg-white text-lg text-black font-semibold">{ data?.data.firstName + " " + data?.data.lastName }</h1>
              <p className="bg-white text-black text-sm mt-2">{ data?.data.email }</p>
            </div>
          </div>) : (
            <>
              <div className="absolute top-[58px] left-1/2 -translate-x-1/2">
                <img src={data?.data.image} className="h-28 w-28 mx-auto bg-white rounded-full" alt="" />
                <div className="text-center">
                  <h1 className="bg-white text-lg text-black font-semibold">{ data?.data.firstName + " " + data?.data.lastName }</h1>
                  <p className="bg-white text-black text-sm mt-2">{ data?.data.email }</p>
                </div>
              </div>
              <ul className="absolute bg-white flex overflow-scroll flex-col gap-4 w-[274px] rounded-3xl mx-auto left-1/2 -translate-x-1/2 p-5 px-5 top-[250px] h-[340px]">
                {
                  links.map((link) => {
                    return (
                      <li className="">
                        <ListLinkDisplay label={link.platform} link={link.link} />
                      </li>
                    )
                  })
                }
              </ul>
            </>
        )
      }
    </div>
  )
}

export default MockupPhone