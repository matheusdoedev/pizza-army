import {
  BigBaconImg,
  BrownImg,
  CheeseImg,
  GrapeImg,
  GrassImg,
  LettuceImg,
  OnionImg,
  PepperImg,
  PizzaAnimationImg,
  PlantImg,
  SmallBaconImg,
  SmallLettuceBImg,
  SmallLettuceImg,
  TomatoImg,
  TomatoTransparentImg,
} from "@/assets";
import { AnimatedElementsName, AnimatedImages } from "@/interfaces";

export const OTHER_ELEMENTS_DEFAULT_END_VALUE = (
  elementName: AnimatedElementsName
) => ({
  ...ANIMATED_IMAGES_POSITION_DEFAULT_VALUE[elementName],
  top: 694,
  left: 505,
  opacity: 0,
});

export const ANIMATED_IMAGES_POSITION_DEFAULT_VALUE: AnimatedImages = {
  pizza: {
    src: PizzaAnimationImg,
    top: 0,
    rotate: 0,
    alt: "Pizza",
    width: 409,
    height: 389,
    center: true,
    zIndex: 3,
  },
  cheese: {
    src: CheeseImg,
    alt: "Cheese",
    width: 241,
    height: 138,
    left: 132,
    opacity: 1,
    top: 0,
    zIndex: 2,
  },
  bigBacon: {
    src: BigBaconImg,
    alt: "BigBacon",
    width: 124,
    height: 124,
    left: 180,
    opacity: 1,
    top: 220,
    zIndex: 2,
  },
  pepper: {
    src: PepperImg,
    alt: "Pepper",
    width: 125,
    height: 157,
    left: 316,
    opacity: 1,
    top: 180,
    zIndex: 2,
  },
  transparentTomato: {
    src: TomatoTransparentImg,
    alt: "Transparent tomato",
    width: 199,
    height: 199,
    left: 10,
    opacity: 1,
    top: 161,
    zIndex: 2,
  },
  smallLettuceB: {
    src: SmallLettuceBImg,
    alt: "Small Lettuce b",
    width: 47,
    height: 47,
    left: 153,
    opacity: 1,
    top: 391,
    zIndex: 2,
  },
  brown: {
    src: BrownImg,
    alt: "Brown",
    width: 47,
    height: 47,
    left: 321,
    opacity: 1,
    top: 388,
    zIndex: 2,
  },
  smallBacon: {
    src: SmallBaconImg,
    alt: "Small bacon",
    width: 116,
    height: 116,
    left: 285,
    opacity: 1,
    top: 460,
    zIndex: 2,
  },
  plant: {
    src: PlantImg,
    alt: "Plant",
    width: 92,
    height: 92,
    left: 858,
    opacity: 1,
    top: 0,
    zIndex: 2,
  },
  grape: {
    src: GrapeImg,
    alt: "Grape",
    width: 119,
    height: 91,
    left: 1070,
    opacity: 1,
    top: 0,
    zIndex: 2,
  },
  lettuce: {
    src: LettuceImg,
    alt: "Lettuce",
    width: 243,
    height: 257,
    left: 885,
    opacity: 1,
    top: 83,
    zIndex: 2,
  },
  smallLettuce: {
    src: SmallLettuceImg,
    alt: "Small lettuce",
    width: 54,
    height: 54,
    left: 1164,
    opacity: 1,
    top: 127,
    zIndex: 2,
  },
  tomato: {
    src: TomatoImg,
    alt: "Tomato",
    width: 177,
    height: 177,
    left: 1090,
    opacity: 1,
    top: 205,
    zIndex: 2,
  },
  grass: {
    src: GrassImg,
    alt: "Grass",
    width: 128,
    height: 85,
    left: 1051,
    opacity: 1,
    top: 292,
    zIndex: 1,
  },
  onion: {
    src: OnionImg,
    alt: "Onion",
    width: 203,
    height: 189,
    left: 875,
    opacity: 1,
    top: 293,
    zIndex: 2,
  },
};

export const ANIMATED_IMAGES_END_POSITION_DEFAULT_VALUE: AnimatedImages = {
  pizza: {
    ...ANIMATED_IMAGES_POSITION_DEFAULT_VALUE.pizza,
    top: 589,
    rotate: 45,
  },
  cheese: OTHER_ELEMENTS_DEFAULT_END_VALUE("cheese"),
  bigBacon: OTHER_ELEMENTS_DEFAULT_END_VALUE("bigBacon"),
  pepper: OTHER_ELEMENTS_DEFAULT_END_VALUE("pepper"),
  brown: OTHER_ELEMENTS_DEFAULT_END_VALUE("brown"),
  grape: OTHER_ELEMENTS_DEFAULT_END_VALUE("grape"),
  grass: OTHER_ELEMENTS_DEFAULT_END_VALUE("grass"),
  lettuce: OTHER_ELEMENTS_DEFAULT_END_VALUE("lettuce"),
  onion: OTHER_ELEMENTS_DEFAULT_END_VALUE("onion"),
  plant: OTHER_ELEMENTS_DEFAULT_END_VALUE("plant"),
  smallBacon: OTHER_ELEMENTS_DEFAULT_END_VALUE("smallBacon"),
  smallLettuce: OTHER_ELEMENTS_DEFAULT_END_VALUE("smallLettuce"),
  smallLettuceB: OTHER_ELEMENTS_DEFAULT_END_VALUE("smallLettuceB"),
  tomato: OTHER_ELEMENTS_DEFAULT_END_VALUE("tomato"),
  transparentTomato: OTHER_ELEMENTS_DEFAULT_END_VALUE("transparentTomato"),
};

export const ON_SCROLL_ANIMATION_START_POSITION = 510;

export const ON_SCROLL_ANIMATION_END_POSITION = 1100;

export const PIZZA_IMG_ANIMATIONS_ROTATION_DEGREES = 45;

export const INITIAL_OPACITY_VALUE = 1;

export const ON_SCROLL_ANIMATION_DISTANCE =
  ON_SCROLL_ANIMATION_END_POSITION - ON_SCROLL_ANIMATION_START_POSITION;

export const PROPORTION_OF_PIZZA_IMG_ROTATION_DEGREES_PER_ON_SCROOL_DISTANCE =
  PIZZA_IMG_ANIMATIONS_ROTATION_DEGREES / ON_SCROLL_ANIMATION_DISTANCE;

export const PROPORTION_OF_ELEMENTS_OPACITY_PER_ON_SCROLL_DISTANCE =
  INITIAL_OPACITY_VALUE / ON_SCROLL_ANIMATION_DISTANCE;
