import { Link } from "../../data-types/common";

const LINKS_STORAGE_KEY = "links";

export const initData = (): Link[] => {
  const storedLinks = localStorage.getItem(LINKS_STORAGE_KEY || []);
  return storedLinks ? JSON.parse(storedLinks) : [];
}

export const saveToLocalStorage = (links: Link[]): void => {
  localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(links));
};

export const addLinkToLocalStorage = (link: Link): void => {
  const links = initData();
  // links.push(link);
  saveToLocalStorage(link);
};

export const updateLinkInLocalStorage = (updatedLink: Link): void => {
  const links = initData().map((link) =>
    link.id === updatedLink.id ? updatedLink : link
  );
  saveToLocalStorage(links);
};

export const removeLinkFromLocalStorage = (id: string): void => {
  const links = initData().filter((link) => link.id !== id);
  saveToLocalStorage(links);
};