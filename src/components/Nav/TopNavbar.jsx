import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from "../../assets/img/logo/logo.png";

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
      <Wrapper className="flexCenter animate" style={y > 100 ? { height: "100px", background:"black", marginTop:"-15px", paddingBottom:"20px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
               <img src={Logo} alt="logo" style={{ width: "60px", marginLeft: "-20px" }} />
                <h1 style={{ marginLeft: "15px", marginTop:"15px" }} className="font20 extraBold">
                    Tinker <br/> Union
                </h1>
            </Link>
            <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
                <BurgerIcon />
            </BurderWrapper>
          <UlWrapper className="flexNullCenter">
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
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


