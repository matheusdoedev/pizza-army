import { ON_SCROLL_ANIMATION_START_POSITION } from "@/constants";

export const calculateTheOnScrollTraveledDistance = (scrollTop: number) =>
  scrollTop - ON_SCROLL_ANIMATION_START_POSITION;
