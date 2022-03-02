import React from "react";
import { Box } from "@mui/material";
import { Controlled as ControlledEditor } from "react-codemirror2";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { boxSizing } from "@mui/system";
import { useState } from "react";


const Editor = ({ heading, icon, color, language, value, onChange }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Box style={Box1} >
      <Box style={Box2}>
        <Box style={Box3}>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              color: "#000",
              display: "flex",
              placeContent: "center",
              paddingBottom: "2px",
              borderRadius: "10",
              margin: "5px",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Box>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center", paddingRight: "5px" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Box>
      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Box>
  );
};

const Box1 = {
  flexGrow: "1",
  display: "flex",
  flexDirection: "column",
  flexBasis: "0",
  padding: ' 0px 8px 8px 0px',
  // boxSizing: "borderbox",
};

const Box2 = {
  display: "flex",
  justifyContent: "space-between",
  background: "#060606",
  color: "#AAAEBC",
  fontWeight: "700",
};

const Box3 = {
  background: "#1d1e22",
  display: "flex",
  padding: "9px 12px",
  alignItems: "center",
};

export default Editor;
