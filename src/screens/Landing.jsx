import React, { useState, useEffect } from 'react';
import '../style/landing.css';
import Why from "../components/Sections/Why";
import FAQ from "../components/Sections/FAQ";
import Team from "../components/Sections/Team";
import About from "../components/Sections/About";
import Footer from "../components/Sections/Footer"
import Header from "../components/Sections/Header";
import TopNavbar from "../components/Nav/TopNavbar";
import Roadmap from "../components/Sections/Roadmap";
import { Modal } from 'react-bootstrap';
import ModalBG from "../assets/img/picture/modal.png";

export default function Landing() {

    // Modal 
    const [modal, setModal] = useState(false);
    const handleModalClose = () => setModal(false);

    // Hook function 
    useEffect(() => {

        // Function to check if minted
        async function checkResponse() {
            let url = new URL(window.location.href);
            if (url.searchParams.get('mint')) 
                setModal(true);        
        }
        checkResponse();

    }, []);



  return (
    <>
        <TopNavbar />
        <Header />
        <About />
        <Why />
        <Roadmap />
        <Team />
        <FAQ />
        <Footer />
        <Modal id='responseModal' show={modal} onHide={handleModalClose} >
            <Modal.Body style={{ background: "url("+ModalBG+")" }}>
                <div className='promptBody'>
                    <p className="font20">Successfuly Minted</p>
                    <div className="promptBtnSection">
                        <button className="promptClose" onClick={handleModalClose}> ✕  </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
  );
}


