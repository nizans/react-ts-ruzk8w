import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion/Accordion';
import * as React from 'react';
import './style.css';
import SVG from './Svg';

export default function App() {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        ONLY WHEN I SEE THIS ONE - I SEE ALL THE OTHERS: <SVG />
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        I SHOULD SEE SVG HERE: <SVG />
      </Accordion>
      <Accordion disabled>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
      I SHOULD SEE SVG HERE: <SVG />
    </div>
  );
}
