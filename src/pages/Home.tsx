import IllustrationEmpty from '../assets/images/illustration-empty.svg'
import LinkForm from '../components/link-form/LinkForm';
import { useState } from 'react';
import { useDataLinkStore } from '../store/store';
import { addLinkToLocalStorage } from '../utils/storage/link-storage';
import MockupPhone from '../components/mockup-phone/MockupPhone';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const addLink = useDataLinkStore((state) => state.addLink);
  const links = useDataLinkStore((state) => state.links);

  const [platform, setPlatform] = useState('');

  const handleAddNewLink = () => {
    addLink({
      id: Date.now().toString(),
      platform: 'Github',
      link: ''
    })
  };

  const handleSaveLink = (e) => {
    e.preventDefault();
    toast.success("Succes save link")
    addLinkToLocalStorage(links)
  }

  return (
    <>
      <div className="mx-5 my-4 rounded-lg relative md:my-5">
        <div className='lg:flex lg:gap-4'>
          <div className='hidden lg:block lg:2/5 bg-white p-32'>
            <MockupPhone />
          </div>
          <div className='bg-white lg:basis-3/5 rounded-lg'>
            <div className="p-5 md:px-8 ">
              <h1 className="font-semibold text-xl my-2 md:text-3xl">Customize your links</h1>
              <p className='text-grey-custom-800 mb-7'>Add/edit/remove links below and then share all your profiles with the world!</p>
              <button className="border rounded-lg transition-colors duration-150 font-medium border-purple-custom-800 text-center px-7 py-2 text-purple-custom-800 w-full hover:bg-purple-custom-800 hover:text-white hover:border-white" onClick={handleAddNewLink}>+ Add new link</button>
            </div>
            <form action="" onSubmit={(e) => handleSaveLink(e)}>
              {
                links.length === 0 ? (
                  <div className="bg-grey-custom-100 p-5 mx-5 rounded-md text-center my-5 pb-8 md:p-8 md:mx-8">
                    <img src={IllustrationEmpty} className='w-32 h-32 mx-auto' alt="" />
                    <h1 className='text-center font-semibold text-2xl mb-2 lg:mb-5'>Let's get you started</h1>
                    <p className='text-grey-custom-800 md:w-[30rem] md:mx-auto'>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                  </div>
                ) : (<LinkForm setPlatform={setPlatform} />)
              }
              
              <div className='border-t-2 mt-auto p-5 md:px-8'>
                <button type='submit' className='rounded-lg block text-center px-7 py-3 text-white bg-purple-custom-800 w-full lg:w-fit lg:ml-auto'>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default Home;