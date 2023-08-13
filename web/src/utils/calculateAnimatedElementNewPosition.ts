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
  initialLeftPosition: [number, number],
  finalLeftPosition: [number, number],
  initialTopPosition: [number, number],
  finalTopPosition: [number, number]
) => {
  const top = [
    calculatePosition(initialTopPosition[0], finalTopPosition[0], scrollTop),
    calculatePosition(initialTopPosition[1], finalTopPosition[1], scrollTop),
  ];
  const left = [
    calculatePosition(initialLeftPosition[0], finalLeftPosition[0], scrollTop),
    calculatePosition(initialLeftPosition[1], finalLeftPosition[1], scrollTop),
  ];

  return {
    ...ANIMATED_IMAGES_POSITION_DEFAULT_VALUE[elementName],
    top,
    left,
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
