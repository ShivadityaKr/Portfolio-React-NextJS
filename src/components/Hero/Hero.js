import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey I'm Shivaditya <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their developement skills to the next level and build awesome apps.
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;