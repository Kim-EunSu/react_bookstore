import React from "react";
import styled from "styled-components";
import AboutImg from "../images/about-img.jpg";
import { useMatch } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutHeader = styled.h3`
  padding: 20px 0;
  font-size: 2rem;
  font-weight: 800;
`;

const AboutWrapper = styled.div`
  height: 100%;
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const AboutImage = styled.div`
  max-width: 520px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${AboutImg});
`;
const AboutInfo = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;
const AboutDesc = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

function About() {
  const aboutMatch = useMatch("/about");
  console.log(aboutMatch);

  return (
    <>
      <Wrapper>
        <AboutHeader>About</AboutHeader>
        <AboutWrapper>
          <AboutImage />
          <AboutInfo>
            <AboutTitle>About BookHuB</AboutTitle>
            <AboutDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </AboutDesc>
            <AboutDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </AboutDesc>
            <AboutDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </AboutDesc>
          </AboutInfo>
        </AboutWrapper>
      </Wrapper>
    </>
  );
}

export default About;
