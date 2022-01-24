import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Contact() {
  return (
    <div id='faq' className='container'>
        <h1> Frequently Asked Questions </h1>
                
         <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1. How many tinkers will there be</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There will be a total of 3,333 tinkers
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2. When is the mint</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Whitelist mint is likely to be on early February 2022 and Public Mint will be on mid or late February 2022.
			Hop onto our discord server and stay tuned.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>3. What is the mint price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mint price will be announced when it is close to the public mint, currency will be in NEAR
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>4. How many whitelist will there be</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There will be 500 whitelist to be given out
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>5. How do I get a whitelist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
			There will be different challenges announced on our discord. Join our discord server and find out how you could get a whitelist spot.
          </Typography>
        </AccordionDetails>
      </Accordion>
	  
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>6. What is the royalty percentage?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
			5%
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
