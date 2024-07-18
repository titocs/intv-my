import { create } from "zustand";
import { DataLinkState, Link } from "../data-types/common";
import { initData } from "../utils/storage/link-storage";

export const useDataLinkStore = create<DataLinkState>((set) => ({
  links: initData(),
  
  addLink: (link: Link) => set((state) => {
    const newLinks = [...state.links, link];
    return { links: newLinks };
  }),
  
  updateLink: (updatedLink: Link) => set((state) => {
    const newLinks = state.links.map((link) =>
      link.id === updatedLink.id ? updatedLink : link
    );
    return { links: newLinks };
  }),
  
  removeLink: (id: string) => set((state) => {
    const newLinks = state.links.filter((link) => link.id !== id);
    return { links: newLinks };
  })
}));
