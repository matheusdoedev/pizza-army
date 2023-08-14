import { ON_SCROLL_ANIMATION_DISTANCE } from "@/constants";

export const calculateElementAndOnScrollTravelledDistanceProportion = (
  initialElementPosition: number,
  endElementPosition: number
) => {
  return (
    (endElementPosition - initialElementPosition) / ON_SCROLL_ANIMATION_DISTANCE
  );
};
