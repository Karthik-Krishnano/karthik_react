import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "rgb(0,0,0)",
};

export const darkTheme = {
  body: "rgb(29, 30, 30);",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
