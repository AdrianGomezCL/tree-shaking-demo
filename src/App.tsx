// import TextField from "@mui/material/TextField"
// import Button from "@mui/material/Button"

import { TextField, Button } from "@mui/material"

import * as mui from "@mui/material"

function App() {

  return (
    <div>
      <TextField label="Lorem ipsum" variant="outlined" />
      <Button variant="outlined">Dolor</Button>

      <mui.TextField label="Lorem ipsum" variant="outlined" />
      <mui.Button variant="outlined">Dolor</mui.Button>
    </div>
  )
}

export default App
