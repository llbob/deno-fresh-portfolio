export interface Project {
  id: string;
  title: string;
  year: number;
  imageUrls: string[];
  descriptionText: string;
}

export const PROJECTS: Project[] = [
  {
    id: "lorem-ipsum-dolor",
    title: "Lorem Ipsum Dolor",
    year: 2024,
    imageUrls: [
      "/placeholder/image1.jpg",
      "/placeholder/image2.jpg",
      "/placeholder/image3.jpg",
      "/placeholder/image4.jpg",
      "/placeholder/image5.jpg",
      "/placeholder/image6.jpg",
    ],
    descriptionText: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    <br><br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <br><br>
    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <br><br>
    `,
  },
  {
    id: "sit-amet-consectetur",
    title: "Sit Amet Consectetur",
    year: 2023,
    imageUrls: [
      "/placeholder/image7.jpg",
      "/placeholder/image8.jpg",
    ],
    descriptionText: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    <br><br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <br><br>
    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    id: "adipiscing-elit",
    title: "Adipiscing Elit",
    year: 2022,
    imageUrls: [
      "/placeholder/image9.jpg",
      "/placeholder/image10.jpg",
    ],
    descriptionText: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    <br><br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <br><br>
    Consectetur adipiscing elit:<br>
    Lorem Ipsum, Dolor Sit, Amet Consectetur, Adipiscing Elit, Sed Do, Eiusmod Tempor
    <br><br>
    Et dolore magna aliqua:<br>
    Ut Enim, Ad Minim, Veniam Quis
    <br><br>
    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    id: "sed-do-eiusmod",
    title: "Sed Do Eiusmod",
    year: 2021,
    imageUrls: [
      "/placeholder/image11.jpg",
      "/placeholder/image12.jpg",
    ],
    descriptionText: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    <br><br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <br><br>
    Consectetur adipiscing elit:<br>
    Lorem Ipsum, Dolor Sit, Amet Consectetur, Adipiscing Elit, Sed Do, Eiusmod Tempor, Incididunt Ut, Labore Et, Dolore Magna, Aliqua Ut, Enim Ad
    <br><br>
    Et dolore magna aliqua:<br>
    Veniam Quis, Nostrud Exercitation, Ullamco Laboris
    <br><br>
    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    id: "tempor-incididunt",
    title: "Tempor Incididunt",
    year: 2020,
    imageUrls: [
      "/placeholder/image13.jpg",
      "/placeholder/image14.jpg",
    ],
    descriptionText: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    <br><br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <br><br>
    Consectetur adipiscing elit:<br>
    Lorem Ipsum, Dolor Sit, Amet Consectetur, Adipiscing Elit, Sed Do, Eiusmod Tempor, Incididunt Ut
    <br><br>
    Et dolore magna aliqua:<br>
    Labore Et, Dolore Magna, Aliqua Ut
    <br><br>
    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
];
