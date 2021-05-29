import React from 'react';
import styled from "styled-components";
import Section from '../Section/Section';


const Home = () => {
    return (
        <Container>
           <div id="model-s">
           <Section
            title= "Harly Devinson"
            description="Order Online for Touchless Delevery"
            backgroundImg="model-sa.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
           </div>
            <div id="model-y">
            <Section
            title= "Yamaha MT15"
            description="Order Online for Touchless Delevery"
            backgroundImg="model-ya.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
            </div>
            <div id="model-s">
            <Section
             title= "Royal Enfield"
             description="Order Online for Touchless Delevery"
             backgroundImg="model-3a.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />
            </div>
            <div id="model-x">
            <Section
             title= "X-cel"
             description="Order Online for Touchless Delevery"
             backgroundImg="model-xa.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />
            </div>
            <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panela.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />
            <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof"
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
            />
            
        </Container>
    );
};

export default Home;


const Container = styled.div `
    height: 100vh;
`