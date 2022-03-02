import React from 'react'
import { useContext } from 'react'
import { Box } from '@mui/material'
import Editor from './Editor'
import { DataContext } from '../context/Provider'


const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
  return (
    <Box style={boxStyle}>
      <Editor
        heading="Html"
        icon="/"
        color="#FF3C41"
        language="xml"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="Css"
        icon="*"
        color="#0EBEFF"
        language="css"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="Js"
        icon="( )"
        color="#FCD000"
        language="javascript"
        value={js}
        onChange={setJs}
      />
    </Box>
  );
}

const boxStyle = {
  backgroundColor: "#060606",
  height: "50vh",
  color: "white",
  display: "flex",
};

export default Code