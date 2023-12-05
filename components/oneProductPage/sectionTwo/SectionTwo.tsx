import React from "react";
import {
  ContentContainer,
  ContentFirstDiv,
  ContentFirstText,
  ContentSecondDiv,
  ContentTitle,
  StyledSection,
} from "./SectionTwoStyles";

const SectionTwo = () => {
  return (
    <StyledSection>
      <ContentContainer>
        <ContentFirstDiv>
          <ContentTitle>FEATURES</ContentTitle>
          <ContentFirstText>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </ContentFirstText>
          <ContentFirstText>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hourbattery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </ContentFirstText>
        </ContentFirstDiv>
        <ContentSecondDiv>
          <ContentTitle>in the box</ContentTitle>
          <ul>
            <li>
              <span>1x</span>Headphone Unit
            </li>
            <li>
              <span>2x</span>Replacement Earcups
            </li>
            <li>
              <span>1x</span>User Manual
            </li>
            <li>
              <span>1x</span>3.5mm 5m Audio Cable
            </li>
            <li>
              <span>1x</span>Travel Bag
            </li>
          </ul>
        </ContentSecondDiv>
      </ContentContainer>
    </StyledSection>
  );
};

export default SectionTwo;
