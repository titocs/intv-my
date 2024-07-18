import { useState, useEffect } from "react";
import GithubIcon from '../../assets/images/icon-github.svg';
import ChevronDown from '../../assets/images/icon-chevron-down.svg';
import { ListLinks } from "../../data/list-links";
import { useDataLinkStore } from "../../store/store";

type defaultValueTypes = {
  platform: string
}

const Select = ({ id, platform, link, setPlatform }) => {
  const updateLink = useDataLinkStore((state) => state.updateLink);
  const [openSelect, setOpenSelect] = useState(false);
  const [defaultSelect, setDefaultSelect] = useState( platform );
  const [imageIcon, setImageIcon] = useState(GithubIcon);

  // useEffect(() => {
  //   const initialIcon = ListLinks.filter((list) => list.value === defaultSelect.value);
  //   setImageIcon(initialIcon[0].image);
  //   console.log(imageIcon)
  // }, [defaultSelect]);

  useEffect(() => {
    const mapImage = ListLinks.filter((list) => list.value === platform)[0].image;
    setImageIcon(mapImage);
  }, [defaultSelect])

  const handleOpenSelect = () => {
    setOpenSelect(!openSelect);
  }

  const handleSetValue = (platform) => {
    setDefaultSelect( platform );
    const updatedLink = {
      id,
      platform,
      link
    }
    updateLink(updatedLink);
    setOpenSelect(false);
  }

  return (
    <div className="mb-3">
      <span className="mb-1 text-sm block">Platform</span>
      <div className="flex items-center bg-white relative justify-between border-grey-custom-500 border py-3 px-4 rounded-lg" onClick={handleOpenSelect}>
        <div className="flex items-center gap-3">
          <img src={imageIcon} className="w-4 h-4 lg:w-5 lg:h-5" alt="" />
          <span>{platform}</span>
        </div>
        <div>
          <img src={ChevronDown} className={`${openSelect ? 'rotate-180' : ''} transition-transform duration-150 w-4 h-4`} alt="" />
        </div>

        <div className={`${openSelect ? 'flex flex-col' : 'hidden'} absolute z-40 overflow-scroll shadow-2xl items-center bg-white top-[55px] w-full left-0 justify-between border-grey-custom-500 border py-3 px-4 rounded-lg`}>
          {
            ListLinks.map((list, index) => (
              <div className="flex items-center gap-3 hover:bg-purple-custom-100 w-full justify-center" key={index} onClick={() => handleSetValue(list.value)}>
                <img src={list.image} className="w-4 h-4 lg:w-5 lg:h-5" alt="" />
                <span>{list.value}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Select;
