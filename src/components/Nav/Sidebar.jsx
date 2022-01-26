import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CloseIcon from "../../assets/svg/CloseIcon";
import Logo from "../../assets/img/logo/logo.png";
import Twitter from "../../assets/img/picture/twitter.png";
import Discord from "../../assets/img/picture/discord.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" id="sideNav" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
       <div></div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
       <div className="flexNullCenter">
            <img src={Logo} alt="logo" style={{ width: "280px"}} />
        </div>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="whySection"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Why Mint
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="roadmap"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Roadmap
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="team"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Team
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="faq"
            spy={true}
            smooth={true}
            offset={-60}
          >
            FAQ
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
            <a className='topSocial' href=''><img src={Twitter}/></a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
              <a className='topSocial' href=''><img src={Discord}/></a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
