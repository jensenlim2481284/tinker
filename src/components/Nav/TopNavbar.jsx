import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from "../../assets/img/logo/logo.png";
import Twitter from "../../assets/img/picture/twitter.png";
import Discord from "../../assets/img/picture/discord.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate" style={y > 40 && window.innerWidth > 760 ? y > 40  ?{ height: "125px", background:"black", marginTop:"-55px", paddingBottom:"20px" } : { height: "80px" } : { height: "80px",  background:"black" } }>
        <NavInner className="container flexSpaceCenter" style={{padding:"0"}}>
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
               <img id="topLogo" src={Logo} alt="logo" style={{ width: "280px", marginLeft: "-60px", marginTop:"75px" }} />
            </Link>
            <BurderWrapper id="burgerIcon" className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
                <BurgerIcon />
            </BurderWrapper>
          <UlWrapper className="flexNullCenter" style={{marginTop:"80px"}}>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="aboutSection" spy={true} smooth={true} offset={-80}>
                About
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="whySection" spy={true} smooth={true} offset={-80}>
                Why Mint
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="roadmap" spy={true} smooth={true} offset={-80}>
                Roadmap
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="team" spy={true} smooth={true} offset={-80}>
                Team
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="faq" spy={true} smooth={true} offset={-80}>
                FAQ
              </Link>
            </li>
          </UlWrapper>       
          <UlWrapper className="flexNullCenter" style={{marginTop:"80px"}}>
            <li className="semiBold font15 pointer">
                <a target="_blank" rel="noreferrer" className='topSocial' style={{ padding: "15px 25px" }} href='https://twitter.com/NearTinkerUnion'><img src={Twitter} alt="twitter"/></a>
            </li>
            <li className="semiBold font15 pointer">
                <a target="_blank" rel="noreferrer" className='topSocial' href='https://discord.gg/9D5V5j5nWr'><img src={Discord} alt="discord"/></a>
            </li>
            
          </UlWrapper>       
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
  margin-top:20px;  
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;


