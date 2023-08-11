import { createGlobalStyle } from "styled-components";

export const Animations = createGlobalStyle`
	@keyframes fade-in-center-to-left {
		from {
			transform: translateX(50px);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;
