// import { Switch,Button, Grid, Paper, Typography } from "@material-ui/core";
// import { green, yellow } from "@material-ui/core/colors";
// import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
// import React,{useState} from "react";
//
//
// const DarkTheme = () => {
//     const [darkMode,setDarkMode]=useState(false);
//
//
//     const theme=createMuiTheme({
//         palette:{
//             type:darkMode?"dark":"light",
//         }
//     })
//
//     const greenTheme=createMuiTheme({
//         palette:{
//             primary:green,
//             secondary:yellow
//         }
//     })
//
//     return (
//         <ThemeProvider theme={darkMode ?theme:greenTheme}>
//             <Paper style={{height:"1000vh"}} >
//                 <Grid container direction="column">
//                     <Typography variant="h1">This is my App!</Typography>
//                     <Button variant="contained" color="primary">
//                         This is button
//                     </Button>
//                     <Button variant="contained" color="secondary">
//                         This is another butoon
//                     </Button>
//
//
//                     <Switch
//                         checked={darkMode}
//                         onChange={()=>setDarkMode(!darkMode)}
//                     />
//
//
//                 </Grid>
//             </Paper>
//         </ThemeProvider>
//     );
// };
//
// export default DarkTheme;