import * as React from "react";
import { TextField, Button } from "@mui/material";

export default function ButtonUsage() {
  return(
  <div>
    <TextField id="outlined-basic" label="Name" variant="outlined" color="primary"/>
    <br/>
    <Button variant="contained">Hello world</Button>
  </div>);
}
