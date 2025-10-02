import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ConnectOne from './Connect-One.png';
import Facebook from './Facebook.png';
import Google from './Google.jpg';
import Twitter from './Twitter.png';
import Samatar from './Samatar.jpg'
import Aasees from './Aasees.jpg'
import "./SignUpForm.css";
import "./App.css";
import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import InterestPage from './InterestPage';
import CreateTweets from './CreateTweets.js'
import TweetBox from './CreatePosts.js';
export default class SignUp extends Component {
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
   //   const [view, setView] = useState('following');

//   const toggleView = () => {
//     setView(view === 'following' ? 'forYou' : 'following');
//   };

//   return (
//     <div className="app">
//       <div className="header">
//         <button className={view === 'following' ? 'active' : ''} onClick={() => setView('following')}>
//           Following
//         </button>
//         <button className={view === 'forYou' ? 'active' : ''} onClick={() => setView('forYou')}>
//           For You
//         </button>
//       </div>
//       <div className="content">
//         {view === 'following' ? <ForYouView /> : <FollowingView />}
//       </div>
//     </div>
//   );
// }


    render() {
        console.log(this.props)
        if (this.props.user != null) {
            const { view } = this.state;
            const underlineStyle = {
                left: view === 'following' ? '0%' : '50%' // Adjust these values based on your actual button widths
        };


    return (
      <div className="app">
        <div className="header">
          <div class="container">
          <div class="box" id="box1"><button id="navButton" className={view === 'following' ? 'active' : ''} onClick={() => this.setState({ view: 'following' })}>For You</button></div>
          <div class="box" id="box2"><button id="navButton" className={view === 'forYou' ? 'active' : ''} onClick={() => this.setState({ view: 'forYou' })}>Following</button></div> 
          <div className="underline" style={underlineStyle}></div>
          <div class="line"></div>
          </div>
        </div>
        {/* <div className="content">
          {view === 'following' ? <ForYouView  user={this.props.user.displayName}/> : <FollowingView user={this.props.user.displayName} />}
        </div> */}
      </div>
    );
  }

        return (
            <div className="sign-up-form">
                <img src={ConnectOne} className='ConnectOne' alt="ConnectOne Logo" />
                <p>The Networking App for UW First Generation Students!</p>
                <h2>Sign Up to Continue</h2>

                <button className="button-82-pushable" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">SSO</span>
                </button>
                <button className="button-82-pushable" role="button" onClick={this.props.handleSignInWithEmail}>
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">Email</span>
                </button>

                <div className="social-media-section">
                    <p>Sign Up with:</p>
                    <div className="social-media-logos">
                        <img src={Facebook} alt="Facebook Logo" className="facebook-logo" onClick={this.props.handleSignInWithFacebook} />
                        <img src={Google} alt="Google Logo" className="google-logo" onClick={this.props.handleSignInWithGoogle} />
                        <img src={Twitter} alt="Twitter Logo" className="apple-logo" onClick={this.props.handleSignInWithTwitter}/>
                    </div>
                </div>
                <div className="legal-section">
                    <p>By signing up, you agree to our <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>.</p>
                </div>
            </div>
        );
    }
}


export class FollowingView extends React.Component {
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

  
  class ForYouView extends React.Component {
    render() {
      return (
        <div>
         <h1>Welcome back {this.props.user}</h1>
            < TweetBox />
          < CreateTweets user={this.props.user.displayName}/>
        </div>
      );
    }
  }