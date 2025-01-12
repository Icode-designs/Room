import About from "./components/About";
import Hero from "./components/Hero";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <About />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: CustomFonts ;
  src: url("/spartan-cufonfonts/Spartan-Medium.ttf");
}
  *,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  body{
    font-family: spar, sans-serif;
    font-size: 12px;
    font-family: "CustomFonts", sans-serif;
  }
`;

export default App;
