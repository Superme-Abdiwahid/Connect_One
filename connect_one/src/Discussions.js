import React from 'react';
import InterestPage from './InterestPage.js';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Facebook from './Facebook.png';
import Google from "./Google.jpg";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Apple from './Apple.jpg';
import ConnectOne from './Connect-One.png';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ASBASCalendar from './Calendar.js';
import Major from './major.js';
import Profile from './Profile.js';
import SignUp from './SignUp';
import NavBar from './NavBar.js';
import Search from './Search.js';
import AboutTeamPage from "./AboutPage.js";
import TermsOfService from "./TermsOfService";
import Girl from "./Girl.jpg";
import Abdiwahid from "./Abdiwahid.jpg"
import Samuel from "./Samuel.jpg"
import Samatar from "./Samatar.jpg";
import Aasees from "./Aasees.jpg" 
import Abdirahman from "./Abdirahman.jpg"
import Random2 from './Random_Person2.jpg'
import PrivacyPolicy from "./PrivacyPolicy";
import Authentication from './Authentication.js';
import SignInWithApple from './Apple.js';
import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import TweetBox from './CreatePosts.js';
import "firebase/compat/firestore";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { handleSignInWithFacebook, handleSignInWithEmail, handleSignInWithGoogle, handleSignInWithTwitter } from './AuthenticationFunctions.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faComment, faRetweet, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import Random from "./Random_Person.jpeg"
import { NavLink } from 'react-router-dom';


export class CreateTweetForum extends React.Component {
    render() {
      const { author, content, imageUrl } = this.props;
      return (
        <div className="tweet">
          <div className="tweet-header">
          <NavLink to="/discussion">
            <img className="avatar" src={Samatar} alt={author.name} />
            </NavLink>
            
            <div className="author-info">
              <p className="author-name">{author.name}</p>
              <p className="author-handle">@{author.handle}</p>
            </div>
          </div>
          <div className="tweet-content">
            <p>{content}</p>
             <img className="tweet-image" src={Abdiwahid} alt="Tweet" />
          </div>
          <div className="tweet-icons">
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faRetweet} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
      );
    }
  }


class CreateDiscussionTweets extends React.Component {
    render() {
      const tweetData = {
        author: {
          name: 'Sarah Nguyen',
          handle: 'SarahNguyen',
          avatarUrl: 'https://via.placeholder.com/50',
        },
        content: 'I just joined the University of Washington, Im a first gen student looking for study buddies. Feel free to dm me or comment on my post',
        imageUrl: Random2,
      };
  
      const tweetData2 = {
        author: {
          name: 'Aasees Signg',
          handle: 'SarahNguyen',
          avatarUrl: 'https://via.placeholder.com/50' ,
        },
        content: 'I just joined the University of Washington, Im a first gen student looking for study buddies. Feel free to dm me or comment on my post',
        imageUrl: Random2,
      };
  
      return (
        <div className="app">
          <CreateTweetForum author={tweetData.author} content={tweetData.content} imageUrl={Samatar} />
          <CreateTweetForum author={tweetData.author} content={tweetData.content} imageUrl={Abdirahman} />
          <CreateTweetForum author={tweetData.author} content={tweetData.content} imageUrl={Aasees} />
          <CreateTweetForum author={tweetData.author} content={tweetData.content} imageUrl={Samuel} />
        </div>
      );
    }
  } 

export class Discussion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            following: [
                { id: 1, name: "Alice Johnson", handle: "@alice", avatar: Samatar},
                { id: 2, name: "Bob Williams", handle: "@bob", avatar: Aasees },
                { id: 3, name: "Charlie Brown", handle: "@charlie", avatar: Samatar},
                { id: 4, name: "Diana Martinez", handle: "@diana", avatar: Aasees},
                { id: 5, name: "Eva Davis", handle: "@eva", avatar: Samatar},
                { id: 6, name: "Frank Wilson", handle: "@frank", avatar: Aasees }
                
            ]
        };
    }

    render() {
        const { following } = this.state;

        return (
            <div className="following-page">
                <h1>Following</h1>
                <div className="profiles">
                    {following.map(profile => (
                        <div className="profile" key={profile.id}>
                            <img src={profile.avatar} alt={`${profile.name}'s Avatar`} className="avatar" />
                            <div className="info">
                                <h2>{profile.name}</h2>
                                <p>{profile.handle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
  
export class FollowingView2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          following: [
              { id: 1, name: "Alice Johnson", handle: "@alice", avatar: Samatar},
              { id: 2, name: "Bob Williams", handle: "@bob", avatar: Aasees },
              { id: 3, name: "Charlie Brown", handle: "@charlie", avatar: Samatar},
              { id: 4, name: "Diana Martinez", handle: "@diana", avatar: Aasees},
              { id: 5, name: "Eva Davis", handle: "@eva", avatar: Samatar},
              { id: 6, name: "Frank Wilson", handle: "@frank", avatar: Aasees }
              // Add more profile data as needed
          ]
      };
  }

  render() {
      const { following } = this.state;

      return (
          <div className="following-page">
              <h1>Following</h1>
              <div className="profiles">
                  {following.map(profile => (
                      <div className="profile" key={profile.id}>
                          <NavLink to="/discussion">
                              <img src={profile.avatar} alt={`${profile.name}'s Avatar`} className="avatar"/>
                          </NavLink>
                          <div className="info">
                              <h2>{profile.name}</h2>
                              <p>{profile.handle}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  }
}


class ForYouView2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComposeCard: false
    };
  }


  toggleComposeCard = () => {
    this.setState(prevState => ({
      showComposeCard: !prevState.showComposeCard
    }));
  };

  render() {
  const { showComposeCard, selectedClass } = this.state;
  return (
    <div>
      <h1>Welcome back {this.props.user}</h1>
      {showComposeCard && (
        <div className={`tweet-card ${selectedClass}`}>
          {/* <select value={selectedClass} onChange={this.handleClassChange}>
          <option value="">Select a subredit</option>
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          <option value="class2">Class 2</option>
          <option value="class2">Class 2</option>
          <option value="class2">Class 2</option>
        </select> */}
          <textarea placeholder="What's happening?" />
          <button>Post Reply</button>
        </div>
      )}


     
      <div>
       
      </div>
      <button className="compose-button" onClick={this.toggleComposeCard}>+</button>
      <CreateDiscussionTweets user={this.props.user} />
    </div>
  );
}  
}


  export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          view: 'following'
        };
      }
    
      toggleView = () => {
        this.setState(prevState => ({
          view: prevState.view === 'following' ? 'forYou' : 'following'
        }));
      };
      
    render() {
        if (this.props.user != null) {
            const { view } = this.state;
        return(
            <div className="app">
       
            <div className="header">

            <button className={view === 'following' ? 'active' : ''} onClick={() => this.setState({ view: 'following' })}>
                Post
            </button>

            <button className={view === 'forYou' ? 'active' : ''} onClick={() => this.setState({ view: 'forYou' })}>
                Discussion
            </button>
            
            </div>
            <div className="content">
            {view === 'following' ? <ForYouView2  user={this.props.user.displayName}/> : <Discussion user={this.props.user.displayName} />}
            </div>
        </div>
        )
    }
  }
}