export interface AnimatedFooterElements {
  $isactive: boolean;
}

export interface PizzaAnimationImgProps {
  width: number[]; // the first value of array is for mobile devices, and the second for desktop. the same thing for all properties that are array.
  height: number[];
  src: string;
  alt: string;
  top?: number[];
  left?: number[];
  right?: number;
  rotate?: number;
  center?: boolean;
  opacity?: number;
  zindex?: number;
}

export interface AnimatedImages {
  pizza: PizzaAnimationImgProps;
  cheese: PizzaAnimationImgProps;
  bigBacon: PizzaAnimationImgProps;
  pepper: PizzaAnimationImgProps;
  transparentTomato: PizzaAnimationImgProps;
  brown: PizzaAnimationImgProps;
  grape: PizzaAnimationImgProps;
  grass: PizzaAnimationImgProps;
  lettuce: PizzaAnimationImgProps;
  onion: PizzaAnimationImgProps;
  plant: PizzaAnimationImgProps;
  smallBacon: PizzaAnimationImgProps;
  smallLettuce: PizzaAnimationImgProps;
  smallLettuceB: PizzaAnimationImgProps;
  tomato: PizzaAnimationImgProps;
}

export type AnimatedElementsName =
  | "cheese"
  | "pizza"
  | "bigBacon"
  | "pepper"
  | "transparentTomato"
  | "brown"
  | "grape"
  | "grass"
  | "lettuce"
  | "onion"
  | "plant"
  | "smallBacon"
  | "smallLettuce"
  | "smallLettuceB"
  | "tomato";
