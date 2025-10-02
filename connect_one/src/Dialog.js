
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import ConnectOneLogo from "./Connect-One.png";  
import { Link } from "react-router-dom"; 
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default class CommentDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
           setOpen: false
        }
    }
    render() {
        const handleClickOpen = () => {
            this.setState({setOpen: true})
          };
        
          const handleClose = () => {
            this.setState({setOpen: false})
          };
    return(

<div className="dialogBox">
      <Button variant="outlined" onClick={handleClickOpen}>
        Create a suggestion
      </Button>
      <Dialog open={this.state.setOpen} onClose={handleClose}>
        <DialogTitle>Suggestions for</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <textarea
              type="text"
            ></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              
              
            }}
          >
            Submit Suggestion
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

}