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
import AboutArticle from "./AboutArticle";
import Img1 from "./images/image-about-dark.jpg";
import Img2 from "./images/image-about-light.jpg";

const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    width: 100%;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) and (max-height: 600px) {
    grid-template-areas: "aboutImg1 aboutArticle" "aboutImg2 aboutImg2";
    grid-template-columns: repeat(2, 1fr);

    .about-img {
      &:first-of-type {
        grid-area: aboutImg1;
      }
      &:last-of-type {
        grid-area: aboutImg2;
        width: 50%;
        position: relative;
        left: 25%;
      }
    }
  }
`;

export default function About() {
  return (
    <StyledAbout>
      <div className="about-img">
        <img src={Img1} alt="about-img" />
      </div>
      <AboutArticle />
      <div className="about-img">
        <img src={Img2} alt="about-img" />
      </div>
    </StyledAbout>
  );
}
