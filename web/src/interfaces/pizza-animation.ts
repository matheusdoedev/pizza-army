export interface AnimatedFooterElements {
  isActive: boolean;
}

export interface PizzaAnimationImgProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  top?: number;
  left?: number;
  right?: number;
  rotate?: number;
  center?: boolean;
  opacity?: number;
  zIndex?: number;
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
