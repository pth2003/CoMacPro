import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
export const FAQitem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Accordion expanded={expanded} onChange={handleExpand}>
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveCircleIcon sx={{ color: "#FFA21A" }} />
          ) : (
            <AddCircleIcon sx={{ color: "#FFA21A" }} />
          )
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          padding: "15px 10px",
          borderRadius: "20px",
        }}
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
