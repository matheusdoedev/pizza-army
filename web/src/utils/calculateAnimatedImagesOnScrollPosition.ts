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
      top: calculateTheOnScrollTraveledDistance(scrollTop),
      rotate:
        calculateTheOnScrollTraveledDistance(scrollTop) *
        PROPORTION_OF_PIZZA_IMG_ROTATION_DEGREES_PER_ON_SCROOL_DISTANCE,
    },
    cheese: calculateAnimatedElementNewPosition(
      "cheese",
      scrollTop,
      132,
      505,
      0,
      589
    ),
    bigBacon: calculateAnimatedElementNewPosition(
      "bigBacon",
      scrollTop,
      180,
      505,
      220,
      694
    ),
    pepper: calculateAnimatedElementNewPosition(
      "pepper",
      scrollTop,
      316,
      505,
      180,
      694
    ),
    transparentTomato: calculateAnimatedElementNewPosition(
      "transparentTomato",
      scrollTop,
      10,
      505,
      161,
      694
    ),
    smallLettuceB: calculateAnimatedElementNewPosition(
      "smallLettuceB",
      scrollTop,
      153,
      505,
      391,
      694
    ),
    brown: calculateAnimatedElementNewPosition(
      "brown",
      scrollTop,
      321,
      505,
      388,
      694
    ),
    smallBacon: calculateAnimatedElementNewPosition(
      "smallBacon",
      scrollTop,
      285,
      505,
      460,
      694
    ),
    plant: calculateAnimatedElementNewPosition(
      "plant",
      scrollTop,
      858,
      505,
      0,
      694
    ),
    grape: calculateAnimatedElementNewPosition(
      "grape",
      scrollTop,
      1070,
      505,
      0,
      694
    ),
    lettuce: calculateAnimatedElementNewPosition(
      "lettuce",
      scrollTop,
      885,
      505,
      83,
      694
    ),
    smallLettuce: calculateAnimatedElementNewPosition(
      "smallLettuce",
      scrollTop,
      1164,
      505,
      127,
      694
    ),
    tomato: calculateAnimatedElementNewPosition(
      "tomato",
      scrollTop,
      1090,
      505,
      205,
      694
    ),
    grass: calculateAnimatedElementNewPosition(
      "grass",
      scrollTop,
      1051,
      505,
      292,
      694
    ),
    onion: calculateAnimatedElementNewPosition(
      "onion",
      scrollTop,
      875,
      505,
      293,
      694
    ),
  };
};
