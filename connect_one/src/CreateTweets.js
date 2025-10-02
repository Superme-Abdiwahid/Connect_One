import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, faShare, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Random from "./Random_Person.jpeg";
import Capstone from "./Capstone.jpg";
import iSchoolLogo from "./ischool.jpg";
import { NavLink } from 'react-router-dom';
import "./Tweets.css";
import IschoolCommunity from './Informatics_Community.jpg'
import { Link } from "react-router-dom"; 
import Button from "@mui/material/Button";
import Iuga from './IUGA.jpg'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Gradution from './convo2022.jpg'
import Iuga_Team from './Iuga_Team.jpg';
class CreateTweets extends Component {
  render() {
    const tweetData = [
      {
        author: {
          name: 'Uw Ischool',
          handle: 'ischool',
          avatarUrl: iSchoolLogo,
          postId: "First Tweet"
        },
        content: 'Join us as we celebrate iSchool students projects at our annual gala event.' +  
        'The iSchool will be implementing a 2-night design that includes an online experience on the first night, followed by an on campus event in the HUB on the second night.',
        imageUrl: Capstone,
      },
      {
        author: {
          name: 'Uw Ischool',
          handle: 'ischool',
          avatarUrl: iSchoolLogo,
          postId: "Second Tweet"
        },
        content: 'Is the Informatics program a good fit for you? Informatics students drive innovation as they explore the intersection of technology' +  
        'and human values. Come to one of our Informatics Program Overview sessions and find out why our students and alumni enthusiastically recommend this program to friends!',
        imageUrl: IschoolCommunity,
      },
      {
        author: {
          name: 'Uw Ischool',
          handle: 'ischool',
          avatarUrl: iSchoolLogo,
          postId: "Third Tweet"
        },
        content: 'Join us in person or via livestream as we celebrate the graduating classes of iSchool degree programs on Saturday, June 1, 2024!' + 

        'Please note that photographs will be taken during this event for documentary and marketing purposes.' + 
        
        'Each year, we celebrate the graduating classes of Informatics, MLIS, MSIM and Ph.D. students at Convocation.' +
        'Residential and online students are invited to participate. Families do not need tickets to attend, but students do need to register.'
        ,
        imageUrl: Gradution,
      },
      {
        author: {
          name: 'Iuga',
          handle: 'iuga',
          avatarUrl: Iuga,
          postId: "Fourth Tweet"
        },
        content: "The Informatics Undergraduate Association's first diversity committee presents an evening of coloring and some cozy hot cups of coffee, tea, hot" +  
        "chocolate and other snacks! Come chill and destress with us before finals!"
        ,
        imageUrl: Iuga_Team,
      }
    ];

    return (
      <div className="app">
        {tweetData.map((tweet, index) => (
          <Tweet key={index} author={tweet.author} content={tweet.content} imageUrl={tweet.imageUrl} user={this.props.user} postId={tweet.postId} />
        ))}
      </div>
    );
  }
} 

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCommentForm: false,
      showDialog: false
    };
  }
  
   fetchJSON = async(url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }
  
  handleThumbsUp = async () => {

  }
  

  likePost = async (postID) => { 
    // await this.fetchJSON(`/posts/like`, {
    //     method: "POST",
    //     body: {name: this.props.user.displayName}
    // });
    console.log("HHEHHEHEHEE");
    
}

  toggleCommentForm = () => {
    this.setState(prevState => ({
      showCommentForm: !prevState.showCommentForm
    }));
  };

  toggleDialog = () => {
    this.setState(prevState => ({
      showDialog: !prevState.showDialog
    }));
  };

  render() {
    const { author, content, imageUrl, postId } = this.props;
    const { showCommentForm, showDialog } = this.state;
    return (
      <div className="post">
        <div className="tweet-header">
          <NavLink to="/profile">
            <img className="post__avatar" src={author.avatarUrl} alt={author.name} />
          </NavLink>
          <div className="author-info">
            <p className="author-name">{author.name}</p>
            <p className="author-handle">@{author.handle}</p>
          </div>
        </div>
        <div className="tweet-content">
          <p>{content}</p>
          <img className="tweet-image" src={imageUrl} alt="Tweet" />
        </div>
        <br />
        {/* <div className="icon-group">
          <FontAwesomeIcon icon={faThumbsUp} onClick={this.likePost} size="lg" />
          <span className="thumbs-count">100</span>
        </div>
        <div className="icon-group">
          <FontAwesomeIcon icon={faThumbsDown} onClick={this.likePost} size="lg"/>
          <span className="thumbs-count">50</span>
        </div>
        <div className="icon-group">
        
        </div> */}
      </div>
    );
  }
}

export class CommentDialog extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    setOpen: true,
    message: ""
  };
}
fetchJSON = async(url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

 displaySuccess = async (successMessage)  =>{
  let success = document.createElement("div");
  success.classList.add("alert");
  success.classList.add("alert-success");
  success.classList.add("fade");
  success.classList.add("show");
  success.setAttribute("id", "SUCESS");
  success.innerText = "Succesfully posted :  " + successMessage;
  success.style.opacity = 1;
  document.getElementById("root").prepend(success);

  // pause 4 seconds
  await new Promise((resolve) => setTimeout(resolve, 4 * 1000));
  success.innerText = "";
  success.style.opacity = 0;
  document.getElementById("SUCESS").remove();
}
escapeHTML = (str) =>
  !str
    ? str
    : str.replace(
        /[&<>'"]/g,
        (tag) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;",
          }[tag])
      );

displayErrorPostError = async (error) =>{
  let errorDiv = document.createElement("div");
  errorDiv.classList.add("alert");
  errorDiv.classList.add("alert-danger");
  errorDiv.classList.add("fade");
  errorDiv.classList.add("show");
  errorDiv.setAttribute("id", "ERROR");
  errorDiv.innerText = "Error: cannot submit post action failed " + error;
  errorDiv.style.opacity = 1;
  document.getElementById("root").prepend(errorDiv);

  // pause 4 seconds
  await new Promise((resolve) => setTimeout(resolve, 4 * 1000));
  errorDiv.innerText = "";
  errorDiv.style.opacity = 0;
  document.getElementById("ERROR").remove();
}

handleClose = () => {
  this.setState({ setOpen: false });
};
formatDate(date) {
  let me = "" + date;
  let index = me.indexOf(":");
  let datePosted = me.substring(0, index - 3);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return datePosted + " " + strTime;
}


handleSubmit = async (event) => {
  let me = this.formatDate(new Date());
  let message = this.state.message;
  console.log("Ogre", );
  this.setState({ setOpen: false });

  const requestBody = JSON.stringify({
    username: this.escapeHTML(this.props.user.displayName),
    description: this.escapeHTML(message),
    date: this.escapeHTML(me),
    postId: this.props.postId
  });

  try {
    const response = await fetch(`/postTweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (response.ok) {
      this.setState({ message: "" });
    } else {
      console.error("Failed to post tweet:", response.statusText);
    }
  } catch (error) {
    console.error("Error posting tweet:", error);
  }
};

 handleChange = (event) => {
  this.setState({message: event.target.value})
  console.log(event.target.value)
  // setInputValue(event.target.value);
};


render() {
  console.log(this.state.setOpen)
  return (
    <div className="dialogBox">
      <Dialog open={this.state.setOpen} onClose={this.handleClose}>
        <DialogTitle>Comment on this Post </DialogTitle>
        <DialogContent>
          <DialogContentText onChange={this.handleChange}>
            <textarea type="text"></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleSubmit} onChange={this.handleChange}>Submit Comment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default CreateTweets;
