export interface LinkInterface {
  path: string;
  text: string;
}

export interface CategoryInterface {
  title: string;
  links: LinkInterface[];
}

export interface GroupInterface {
  name: string;
  links: LinkInterface[];
}

const navlinks: GroupInterface[] = [
  {
    name: "Group 1",
    links: [
      {
        path: "/dashboard",
        text: "dashboard",
      },
      {
        path: "/user",
        text: "User",
      },
    ],
  },
  {
    name: "Group 2",
    links: [
      {
        path: "/",
        text: "Link 1",
      },
      {
        path: "/",
        text: "Link 2",
      },
    ],
  },
];

export default navlinks;
