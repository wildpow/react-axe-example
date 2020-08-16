import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"
// import { HelmetDatoCms } from "gatsby-source-datocms";
import TabBox from "./TabBox"
import HeaderButtons from "./HeaderButtons"
import { FadeIn } from "../../theme"

export const Para = styled.p`
  margin-right: auto;
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 54px;
  max-width: 700px;
  color: #00103b;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6rem;
  text-align: center;
  font-family: ${props => props.theme.MainFont3};
  @media screen and (max-width: 375px) {
    font-size: 16px;
    /* margin-top: 36px; */
  }
`
const Header = styled.div`
  padding-top: 2em;
  margin-bottom: 2em;
  max-width: 662px;
  max-height: 116px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin-right: 30px;
    margin-left: 30px;
  }
`

const Container = styled.section`
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    padding-top: 20px;
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const Hero = styled(Img)`
  width: 100%;
  height: auto;

  @media only screen and (max-width: 768px) {
    height: 210px;
    overflow: hidden;
    /* width: 100vw; */
    margin-left: 0px;
  }
`
const LandingRoot = styled.article`
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
`
const Hr = styled.hr`
  border-top: 1px solid #eee;
  border-bottom: 2px solid #7ea9c8;
  margin-bottom: 3em;
  display: block;
`
const Landing = ({ data, buttonName, buttonURL }) => {
  const { headingImg, heroImg, description, tabBox, seoLink } = data
  return (
    <LandingRoot style={{ maxWidth: "1440px", backgroundColor: "white" }}>
      {/* <HelmetDatoCms seo={seoLink.seoMetaTags} /> */}
      <Header>
        <Img fluid={headingImg.fluid} alt={headingImg.alt} />
      </Header>
      <Container>
        <Hero fluid={heroImg.fluid} alt={heroImg.alt} />
      </Container>
      <Container
        style={{ marginTop: "3em", paddingRight: "15px", paddingLeft: "15px" }}
      >
        <Para style={{ marginBottom: "10px" }}>{description}</Para>
        <HeaderButtons buttonName={buttonName} buttonURL={buttonURL} />
        {tabBox.map(item => (
          <div key={item.id}>
            <Hr />
            <TabBox
              tabs={item.box}
              hero={item.topImage}
              heroText={item.topText}
              topButtonName={item.topButtonName}
              topButtonUrl={item.topButtonUrl}
            />
          </div>
        ))}
        <div style={{ paddingBottom: "20px" }}>
          <Hr style={{ marginBottom: 0, marginTop: 0 }} />
        </div>
      </Container>
    </LandingRoot>
  )
}

Landing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  buttonName: PropTypes.string,
  buttonURL: PropTypes.string,
}

Landing.defaultProps = {
  buttonName: undefined,
  buttonURL: undefined,
}

export default Landing
