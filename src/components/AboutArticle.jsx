import styled from "styled-components";
import {
  col_10,
  col_20,
  col_30,
  col_40,
  regular,
  semiBold,
  bold,
} from "./styles";

const AboutArtStyle = styled.article`
  margin: auto;
  margin-top: 56px;
  max-width: 500px;
  padding: 32px;

  @media (min-width: 768px) {
    width: 100%;
  }

  h1 {
    line-height: 22px;
    letter-spacing: 5px;
    font-weight: ${bold};
    margin-bottom: 9px;
  }
  p {
    color: ${col_10};
    line-height: 20px;
    letter-spacing: -0.25px;
    margin-bottom: 56px;

    @media (min-width: 1200px) {
      margin-bottom: 0;
    }
  }
`;

export default function AboutArticle() {
  return (
    <AboutArtStyle>
      <h1>ABOUT OUR FURNITURE</h1>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.{" "}
      </p>
    </AboutArtStyle>
  );
}
