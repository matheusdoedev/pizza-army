import {
  ANIMATED_IMAGES_POSITION_DEFAULT_VALUE,
  PROPORTION_OF_PIZZA_IMG_ROTATION_DEGREES_PER_ON_SCROOL_DISTANCE,
} from "@/constants";
import { AnimatedImages } from "@/interfaces";
import {
  calculateAnimatedElementNewPosition,
  calculateTheOnScrollTraveledDistance,
} from ".";

export const calculateAnimatedImagesOnScrollPosition = (
  scrollTop: number
): AnimatedImages => {
  return {
    pizza: {
      ...ANIMATED_IMAGES_POSITION_DEFAULT_VALUE.pizza,
      width: [234, 409],
      height: [234, 389],
      top: [
        calculateTheOnScrollTraveledDistance(scrollTop),
        calculateTheOnScrollTraveledDistance(scrollTop),
      ],
      rotate:
        calculateTheOnScrollTraveledDistance(scrollTop) *
        PROPORTION_OF_PIZZA_IMG_ROTATION_DEGREES_PER_ON_SCROOL_DISTANCE,
    },
    cheese: calculateAnimatedElementNewPosition(
      "cheese",
      scrollTop,
      [410, 132],
      [505, 505],
      [0, 0],
      [589, 589]
    ),
    bigBacon: calculateAnimatedElementNewPosition(
      "bigBacon",
      scrollTop,
      [480, 180],
      [505, 505],
      [100, 220],
      [694, 694]
    ),
    pepper: calculateAnimatedElementNewPosition(
      "pepper",
      scrollTop,
      [790, 316],
      [505, 505],
      [285, 180],
      [694, 694]
    ),
    transparentTomato: calculateAnimatedElementNewPosition(
      "transparentTomato",
      scrollTop,
      [420, 10],
      [505, 505],
      [161, 161],
      [694, 694]
    ),
    smallLettuceB: calculateAnimatedElementNewPosition(
      "smallLettuceB",
      scrollTop,
      [490, 153],
      [505, 505],
      [240, 391],
      [694, 694]
    ),
    brown: calculateAnimatedElementNewPosition(
      "brown",
      scrollTop,
      [490, 321],
      [505, 505],
      [330, 388],
      [694, 694]
    ),
    smallBacon: calculateAnimatedElementNewPosition(
      "smallBacon",
      scrollTop,
      [445, 285],
      [505, 505],
      [275, 460],
      [694, 694]
    ),
    plant: calculateAnimatedElementNewPosition(
      "plant",
      scrollTop,
      [720, 858],
      [505, 505],
      [0, 0],
      [694, 694]
    ),
    grape: calculateAnimatedElementNewPosition(
      "grape",
      scrollTop,
      [760, 1070],
      [505, 505],
      [0, 0],
      [694, 694]
    ),
    lettuce: calculateAnimatedElementNewPosition(
      "lettuce",
      scrollTop,
      [760, 885],
      [505, 505],
      [56, 83],
      [694, 694]
    ),
    smallLettuce: calculateAnimatedElementNewPosition(
      "smallLettuce",
      scrollTop,
      [750, 1164],
      [505, 505],
      [40, 127],
      [694, 694]
    ),
    tomato: calculateAnimatedElementNewPosition(
      "tomato",
      scrollTop,
      [780, 1090],
      [505, 505],
      [104, 205],
      [694, 694]
    ),
    grass: calculateAnimatedElementNewPosition(
      "grass",
      scrollTop,
      [780, 1051],
      [505, 505],
      [240, 292],
      [694, 694]
    ),
    onion: calculateAnimatedElementNewPosition(
      "onion",
      scrollTop,
      [780, 875],
      [505, 505],
      [185, 293],
      [694, 694]
    ),
  };
};
