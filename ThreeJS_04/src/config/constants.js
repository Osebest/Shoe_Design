import { swatch, fileIcon, ai, logoShoe, stylishShoe, wireframeShoe, shoe, shoe2, shoe3 } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    tooltip: "Color Picker: Change the color of the shoe"
  },
  {
    name: "filepicker",
    icon: fileIcon,
    tooltip: "File Picker: Upload your own image to style the shoe"
  },
  {
    name: "aipicker",
    icon: ai,
    tooltip: "AI Picker: Ask AI style the shoe for you, by generating an image"
  },
];

export const FilterTabs = [
  {
    name: "metallic",
    icon: logoShoe,
    tooltip: "Shiny: Add a metallic and shiny effect to the shoe"
  },
  {
    name: "stylishShirt",
    icon: stylishShoe,
    tooltip: "Stylish: Add a stylish effect to the shoe, by embedding an image"
  },
  {
    name: "wireframe",
    icon: wireframeShoe,
    tooltip: "Wireframe: Add a wireframe effect to the shoe, see the building blocks of the shoe"
  }
];

export const DecalTypes = {
  logo: {
    stateProperty: "metallic",
    filterTab: "metallic",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
  wire: {
    stateProperty: "wireframe",
    filterTab: "wireframe",
  }
};

export const ShoesTab = [
  {
    name: "shoe",
    icon: shoe2,
    tooltip: "Shoe 1: A simple work shoe"
  },
  {
    name: "shoe2",
    icon: shoe,
    tooltip: "Shoe 2: How about some ruggedness?"
  },
  {
    name: "shoe3",
    icon: shoe3,
    tooltip: "Shoe 3: Yea, this is the one!"
  }
]