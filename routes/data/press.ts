export interface PressItem {
  title: string;
  url: string;
}

export interface PressContent {
  title: string;
  items: PressItem[];
}

export const PRESS_CONTENT: PressContent = {
  title: "Lorem",
  items: [
    {
      title: "Lorem ipsum dolor sit amet",
      url: "https://placeholder.com/link1",
    },
    {
      title: "Consectetur adipiscing elit",
      url: "https://placeholder.com/link2",
    },
    // More items can be added as need be! :)
  ],
};

