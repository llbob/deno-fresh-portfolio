import { Options } from "$fresh/plugins/twind.ts";
import { Configuration } from "twind";

export default {
  ...({
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Noto Sans"', 'sans-serif'],
          serif: ['Domine', 'serif'],
        },
      },
    },
    preflight: {
      body: {
        fontFamily: '"Noto Sans", sans-serif',
        fontOpticalSizing: 'auto',
        fontVariationSettings: '"wdth" 100',
      },
    },
    plugins: {
      'projects-image': 'w-full h-[600px] object-cover rounded mt-4 transition-all duration-300 ease-in-out hover:opacity-95',
      'page-name': 'pb-2',
      'menu-item': 'text-gray-800 transition-colors duration-300 ease-in-out hover:underline',
      'projects-card': 'overflow-hidden transition-shadow duration-300 ease-in-out mb-16',
      'avatar': 'max-w-full h-auto rounded',
      'link': 'text-gray-400 underline hover:text-gray-800',
      'index-image': 'h-[80vh] w-full object-cover rounded mb-2',
    },
  } as Configuration),
  selfURL: import.meta.url,
} as Options;
