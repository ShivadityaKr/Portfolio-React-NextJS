import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a techonogies inthe web developement world.
      Form Back-end to Design
    </SectionText>
    <List> 
      <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.JS
      </ListParagraph>
      </ListContainer>
      
      </ListItem>
      
      <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node.JS and DataBases
      </ListParagraph>
      </ListContainer>
      
      </ListItem>

      <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br />
        Tools like Illustrator 
      </ListParagraph>
      </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
