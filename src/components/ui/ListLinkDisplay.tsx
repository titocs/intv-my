import { Link } from "@tanstack/react-router"
import ArrowRightIcon from "../../assets/icons/icon-arrow-right.svg"
import GithubLogo from "../../assets/images/icon-github.svg"
import { useEffect, useState } from "react";
import { ListLinks } from "../../data/list-links";

type ListLinkDisplayProps = {
  label: string,
  link: string
}

const ListLinkDisplay = ({ label, link }:ListLinkDisplayProps ) => {
  const [imageIcon, setImageIcon] = useState(GithubLogo);

  useEffect(() => {
    const mapImage = ListLinks.filter((list) => list.value === label)[0].image;
    setImageIcon(mapImage);
  }, [label])

  return (
    <Link to={link} className="text-grey-800 flex items-center justify-between bg-purple-custom-100 px-4 py-4 rounded-lg border-grey-custom-800" >
      <div className="flex items-center gap-2">
        <img src={imageIcon} className="" alt="" />
        <p className="text-sm">{ label }</p>
      </div>
      <img src={ArrowRightIcon} className="w-3 h-3" alt="" />
    </Link>
  )
}

export default ListLinkDisplay