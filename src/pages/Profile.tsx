// Profile.tsx
import { useQuery } from "@tanstack/react-query";
import Input from "../components/ui/Input";
import { authApi } from "../api/auth";
import MockupPhone from "../components/mockup-phone/MockupPhone";
import Loader from "../components/ui/Loader";

const Profile = () => {
  const { data, isPending } = useQuery({
    queryKey: ["data-user"],
    queryFn: async () => authApi.getUser(),
  });

  if (isPending) {
    return <Loader data-testid="loader" />;
  }

  return (
    <>
      <div className="mx-5 my-4 rounded-lg relative md:my-5">
        <div className="lg:flex lg:gap-4">
          <div className="hidden lg:block lg:2/5 bg-white p-32">
            <MockupPhone />
          </div>
          <div className="bg-white lg:basis-3/5 rounded-lg">
            <div className="p-5 md:px-8 ">
              <h1 className="font-semibold text-xl my-2 md:text-3xl">Profile Details</h1>
              <p className="text-grey-custom-800 mb-3">
                Add your details to create a personal touch to your profile.
              </p>
            </div>

            <div className="bg-grey-custom-100 p-5 mx-5 rounded-md my-5 pb-8 md:p-8 md:mx-8">
              <div className="mb-6">
                <Input
                  disabled={true}
                  label="First Name"
                  value={data.data?.firstName || ""}
                  icon=""
                />
              </div>
              <div className="mb-6">
                <Input
                  disabled={true}
                  label="Last Name"
                  value={data.data?.lastName || ""}
                  icon=""
                />
              </div>
              <div className="mb-6">
                <Input
                  disabled={true}
                  label="Email"
                  value={data.data?.email || ""}
                  icon=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
