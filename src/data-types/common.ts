export type Link = {
  id: string;
  platform: string;
  link: string;
};

export type DataLinkState = {
  links: Link[];
  addLink: (link: Link) => void;
  updateLink: (updatedLink: Link) => void;
  removeLink: (id: string) => void;
};

export type Profile = {
  id: number,
  firstName: string,
  lastName: string,
  email: string
}