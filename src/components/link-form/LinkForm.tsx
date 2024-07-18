import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragAndDropIcon from '../../assets/images/icon-drag-and-drop.svg';
import Select from "../ui/Select";
import LinkIcon from "../../assets/images/icon-link.svg";
import { useDataLinkStore } from "../../store/store";
import { useState } from "react";
import { removeLinkFromLocalStorage } from "../../utils/storage/link-storage";
import toast from "react-hot-toast";

const LinkForm = ({setPlatform}) => {
  const links = useDataLinkStore((state) => state.links);
  const updateLink = useDataLinkStore((state) => state.updateLink);
  const removeLink = useDataLinkStore((state) => state.removeLink);
  const [isFocus, setIsFocus] = useState(false);

  const handleOnFocus = ():void => {
    setIsFocus(true);
  }

  const handleOnBlur = ():void => {
    setIsFocus(false);
  }

  const handleChangeInputLink = (e, id, platform) => {
    const updatedLink = {
      id,
      platform,
      link: e.target.value
    }
    updateLink(updatedLink);
  }

  const handleRemoveLink = (id) => {
    removeLink(id);
    removeLinkFromLocalStorage(id);
    toast.success('Link has been deleted');
  }

  const handleDragEnd = (result) => {
    // if (!result.destination) return;

    // // const items = Array.from(dummy);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);

    // console.log(items);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="rounded-md mt-5 py-1 p-5 md:px-8 ">
            {
              links.map((link, index) => (
                <Draggable key={link.id.toString()} draggableId={link.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-grey-custom-100 p-4 mb-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <img src={DragAndDropIcon} className="w-4 h-4" alt="" />
                          <span className="text-grey-custom-800 font-semibold">Link #{index + 1}</span>
                        </div>
                        <button className="text-grey-custom-800" onClick={() => handleRemoveLink(link.id)}>Remove</button>
                      </div>
                      <Select id={link.id} platform={link.platform} link={link.link} setPlatform={setPlatform} />
                      <div>
                        <label htmlFor="" className="text-sm mb-1 block">Link</label>
                        <div className="flex items-center gap-3 border-grey-custom-500 border py-3 pl-4 rounded-lg bg-white" onFocus={handleOnFocus} onBlur={handleOnBlur}>
                          <img src={LinkIcon} alt="" />
                          <input value={link.link} className={`w-full outline-none ${isFocus ? 'border-purple-custom-800 shadow-purple-custom-800 input-active': ''}`} type="text" placeholder="e.g. https://www.github.com/johnappleseed" onChange={(e) => handleChangeInputLink(e, link.id, link.platform)} />
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default LinkForm;
