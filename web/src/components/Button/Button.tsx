import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { styled } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonComponent: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 20px;
  text-align: center;
  letter-spacing: 1.68px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  line-height: 1em;
  color: ${({ theme }) => theme.colors.gray["800"]};
  text-transform: uppercase;
  transition: 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray["300"]};
  }

  &:hover {
    transition: 0.3s;
    filter: brightness(85%);
  }
`;

export default ButtonComponent;
