import {
  ANIMATED_IMAGES_POSITION_DEFAULT_VALUE,
  INITIAL_OPACITY_VALUE,
  PROPORTION_OF_ELEMENTS_OPACITY_PER_ON_SCROLL_DISTANCE,
} from "@/constants";
import { AnimatedElementsName } from "@/interfaces";
import {
  calculateElementAndOnScrollTravelledDistanceProportion,
  calculateTheOnScrollTraveledDistance,
} from ".";

/**
 * It's a function that calculate the new animated element position in pizza animation. It is calculate the travelling for the element in horizional and vertical dimensions;
 *
 * @param elementName name of each elements from animation
 * @param scrollTop document scroll top position
 * @param initialLeftPosition element initial horizontal position
 * @param finalLeftPosition element final horizontal position
 * @param initialTopPosition element initial vertical position
 * @param finalTopPosition element final  vertical position
 * @returns
 */
export const calculateAnimatedElementNewPosition = (
  elementName: AnimatedElementsName,
  scrollTop: number,
  initialLeftPosition: number,
  finalLeftPosition: number,
  initialTopPosition: number,
  finalTopPosition: number
) => {
  return {
    ...ANIMATED_IMAGES_POSITION_DEFAULT_VALUE[elementName],
    top: calculatePosition(initialTopPosition, finalTopPosition, scrollTop),
    left: calculatePosition(initialLeftPosition, finalLeftPosition, scrollTop),
    opacity: calculateOpacityFactor(scrollTop),
  };
};

const calculatePosition = (
  initialPosition: number,
  finalPosition: number,
  scrollTop: number
) => {
  return (
    initialPosition +
    calculateTheOnScrollTraveledDistance(scrollTop) *
      calculateElementAndOnScrollTravelledDistanceProportion(
        initialPosition,
        finalPosition
      )
  );
};

const calculateOpacityFactor = (scrollTop: number) => {
  return (
    INITIAL_OPACITY_VALUE -
    calculateTheOnScrollTraveledDistance(scrollTop) *
      PROPORTION_OF_ELEMENTS_OPACITY_PER_ON_SCROLL_DISTANCE
  );
};
