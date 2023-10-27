import {useEffect,useState} from "react"; 
import { TextField, Button } from '@material-ui/core';
import logo from "./logo1.png";
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { color } from "@material-ui/system";
import { Tooltip } from "@mui/material";
const eye = <FontAwesomeIcon icon={faEye} />;




function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
    const togglePasswordVisiblity = () => {
        console.log("hi")
    setPasswordShown(passwordShown ? false : true);
     };
  


    const handleLogin = () => {
       
        if(password.length == 0 || email.length == 0 ){
           console.log(tooltipIsOpen)
            setTooltipIsOpen(true)
        }
        else 
        {
            console.log(tooltipIsOpen)
            setTooltipIsOpen(false)
        }

       
        

        
    
    };

    return (
        <div className="form">
            <center>
            <img src={logo} style={{width:"150px"}}></img>
            </center>
            <label>Email</label>
            <Tooltip 
            disableHoverListener="true"
            disableTouchListener="true"
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            
            title={"This field cannot be empty"} 
            placement="right"  arrow>   
            <TextField 
            onChangeText={text => setEmail(text)}
            inputProps={{ style: { color: "white" } }} 
            className="textfield"  variant="outlined"  type={"email"} placeholder="Enter your Email"fullWidth required 
           />
           </Tooltip>
           
            <div style={{display:"inline"}}>
            <label style={{float:"left"}}>Password</label>
            <a href="" style={{float:"right"}}><u>Reset password</u> </a>
            
            </div>
            <div  className="fieldWrapper"    style={{position:"relative"}}>
            <Tooltip 
             disableHoverListener="true"
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            
            title={"This field cannot be empty"} 
            placement="right"  arrow>    
            <TextField 
            onChangeText={text => setPassword(text)}
            InputProps={{
               
                
                endAdornment: (
                  <InputAdornment position="end">
                    <i  style={{color:"white"}} onClick={togglePasswordVisiblity} >{eye}</i>{" "}
                  </InputAdornment>
                ),
              }}
            inputProps={{ 
                style: { color: "white" }   
            }}  
            placeholder="Enter your Password"className="textfield" 
            type={passwordShown ? "text" : "password"}
              variant="outlined"   fullWidth 
         
           />
           </Tooltip>
          </div>
            <Button variant="contained" color="primary"  onClick={handleLogin}>Log in</Button>
        </div>
    );

}
export default Login;