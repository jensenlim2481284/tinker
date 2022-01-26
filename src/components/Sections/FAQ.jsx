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
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>1. How many tinkers will there be</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    There will be a total of 3,333 tinkers
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>2. When is the mint</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                     Whitelist mint is likely to be on early February 2022 and Public Mint will be on mid or late February 2022.
			        Hop onto our discord server and stay tuned.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>3. What is the mint price wallet</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    Mint price will be announced when it is close to the public mint, currency will be in NEAR
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>4. How many whitelist will there be</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    There will be 500 whitelist to be given out
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>5. How do I get a whitelist</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    There will be different challenges announced on our discord. Join our discord server and find out how you could get a whitelist spot.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderRadius: "0px" ,background:"transparent", padding: "0px 40px"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography  style={{ fontFamily: "VT323" , fontSize:"1.3rem"}}>6. What is the royalty percentage?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{borderBottom:"3px solid #8a5e37"}}>
                <Typography style={{ fontFamily: "VT323" , fontSize:"1rem"}}>
                    5%
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <img src={FAQScroll} id='faqBottom'/>      
    </div>
  );
}
