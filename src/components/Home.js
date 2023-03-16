import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section
          title="Model S"
          backgroundImg="model-s.jpg"
        />
        <Section 
          title="Model Y"
          backgroundImg="model-y.jpg"
        />
        <Section
          title="Model 3"
          backgroundImg="model-3.jpg"        
        />
        <Section
          title="Model X"
          backgroundImg="model-x.jpg"        
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Solar for New Roafs"
          description="Solar Roof Costs Less Then a New Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
          rightBtnText=""
          withArrow={false}
        />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;