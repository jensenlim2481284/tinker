import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQScroll from "../../assets/img/picture/faqTop.png";
import FAQContent from "../../assets/img/picture/faqContent.png";
import FAQBanner from "../../assets/img/picture/faqBanner.png";

export default function Contact() {
  return (
    <div id='faq' className='container'>
        <img src={FAQScroll} id='faqTop'/>
        <div id='faqContent'>
            <div id='faqBannerSection'>
                <img src={FAQBanner} id='faqBanner'/>
                <h1> FAQ </h1>
            </div>        
            <Accordion style={{ borderRadius: "0px" , background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>Where can I get one? And how do I buy?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                  The Baepes collection: Public Minting begins at 23:00 HKT on 21 Dec 2021 on our Baepes website.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>Here's how to buy Solana:</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    Solana also known as SOL is a cryptocurrency. This project will be on the Solana Blockchain. As a newbie in the crypto space we recommend that you sign up to Binance on your desktop.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>Here's how to send Solana from your Binance wallet to your Phantom wallet</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderRadius: "0px" ,background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>What is the supply?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <img src={FAQScroll} id='faqBottom'/>
    </div>
  );
}
