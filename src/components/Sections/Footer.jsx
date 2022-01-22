
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function Contact() {

    // Get current year
    const getCurrentYear = () => { return new Date().getFullYear();}

    return (
        <Wrapper className="wrapper">
            <div className="darkBg">
                <div className="container">
                <InnerWrapper className="flexSpaceCenter innerWrapper" style={{ padding: "30px 0" }}>
                    <StyleP className="whiteColor font13">
                        © {getCurrentYear()} - <span className="purpleColor font13">Tinker Union</span> All Right Reserved
                    </StyleP>
                    <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
                        Back to top
                    </Link>
                </InnerWrapper>
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;