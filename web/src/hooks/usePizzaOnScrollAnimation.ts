import { useEffect, useState } from "react";

import {
  ANIMATED_IMAGES_END_POSITION_DEFAULT_VALUE,
  ANIMATED_IMAGES_POSITION_DEFAULT_VALUE,
} from "@/constants";
import { AnimatedImages } from "@/interfaces";
import { calculateAnimatedImagesOnScrollPosition } from "@/utils";

export const usePizzaOnScrollAnimation = () => {
  const [animatedImagesPositions, setAnimatedImagesPositions] =
    useState<AnimatedImages>(ANIMATED_IMAGES_POSITION_DEFAULT_VALUE);
  const [
    isFooterElementsTransitionActive,
    setIsFooterElementsTransitionActive,
  ] = useState(false);

  const handleOnScrollAnimation = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop <= 510) {
      setAnimatedImagesPositions(ANIMATED_IMAGES_POSITION_DEFAULT_VALUE);
    } else if (scrollTop > 510 && scrollTop < 1100) {
      setAnimatedImagesPositions(
        calculateAnimatedImagesOnScrollPosition(scrollTop)
      );
    } else {
      setAnimatedImagesPositions(ANIMATED_IMAGES_END_POSITION_DEFAULT_VALUE);
    }

    setIsFooterElementsTransitionActive(scrollTop > 1160);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScrollAnimation);

    return () => {
      window.removeEventListener("scroll", handleOnScrollAnimation);
    };
  }, []);

  return { animatedImagesPositions, isFooterElementsTransitionActive };
};
