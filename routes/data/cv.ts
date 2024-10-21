export interface CVContent {
  title: string;
  subtitle: string;
  sections: {
    title: string;
    items: string[];
  }[];
}

export const CV_CONTENT: CVContent = {
  title: "Lorem Ipsum",
  subtitle: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  sections: [
    {
      title: "Consectetur",
      items: [
        "2024: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "2023: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "2022: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        "2021: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        "2021: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
        "2020: Officia deserunt mollit anim id est laborum"
      ]
    },
    {
      title: "Adipiscing Elit",
      items: [
        "2023-2024: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "2020-2023: Sed do eiusmod tempor incididunt ut labore et dolore magna",
        "2023: Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "2022-2023: Duis aute irure dolor in reprehenderit in voluptate velit",
        "2021: Excepteur sint occaecat cupidatat non proident, sunt in culpa"
      ]
    },
    {
      title: "Tempor Incididunt",
      items: [
        "2023: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      ]
    },
    {
      title: "Ut Labore",
      items: [
        "2020-2022: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "2016-2020: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "2019: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
      ]
    }
  ]
};
