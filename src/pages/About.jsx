import React from "react";
import styled from "styled-components";
import AboutImg from "../images/about-img.jpg";

const AboutWrapper = styled.div`
  width: 100%;
  height: 70vh;
  padding: 3rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const AboutImage = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-right: 3rem;
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
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

function About() {
  return (
    <AboutWrapper>
      About
      <Wrapper>
        <AboutImage />
        <AboutInfo>
          <AboutTitle>About BookHuB</AboutTitle>
          <AboutDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dignissimos consequuntur vero commodi provident maiores, iusto atque
            corrupti voluptate vel sequi consectetur unde aliquam corporis saepe
            animi non, tempora reiciendis molestias sed laudantium dolores.
            Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita
            voluptas delectus.
          </AboutDesc>
          <AboutDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dicta, possimus inventore eveniet atque voluptatibus repellendus
            aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
            dolore amet neque modi quas eum!
          </AboutDesc>
        </AboutInfo>
      </Wrapper>
    </AboutWrapper>
  );
}

export default About;
