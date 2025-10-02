import React, { Component } from 'react';
import './Tweets.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import Random from './Random_Person.jpeg';

import CreateTweets from "./CreateTweets.js"; 
import { Cards } from './Cards.js';
import Java from './java2.jpg'
import Random2 from './Random_Person2.jpg'
import Bio from './Bio.jpg'

import ischool from './ischool.jpg'
import IUGA from './IUGA.jpg'
import Crags from './crags.jpg'
import Math from './math.jpg'
import NSBE from './NSBE.jpg'
import CardsOrganizations from './Help.js';

class Tweet extends Component {
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
        return (
            <div>
            <header>
                <h1 className='Header'>Welcome {this.props.user.displayName} </h1>
            </header>
            <div>
                <div className="header">
                    <button className={this.state.view === 'forYou' ? 'active' : ''} onClick={() => this.setState({ view: 'forYou' })}>Announcements</button>
                    <button className={this.state.view === 'following' ? 'active' : ''} onClick={() => this.setState({ view: 'following' })}>Upcoming Events</button>
                </div>
                {this.state.view === 'following' ? <FollowingView user={this.props.user} /> : <ForYouView user={this.props.user} />}
            </div>
            </div>
        );
    }
}

class FollowingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            following: [
                { id: 1, name: "Alice Johnson", handle: "@alice", avatar: Random },
                { id: 2, name: "Bob Williams", handle: "@bob", avatar: Random },
            ]
        };
    }

    render() {
        let Classes = [
            { "name": "CSE 142", "Classroom": "Classroom: Kane 131", "img": Java },
            { "name": "BIO 180", "Classroom": "Classroom: Kane 130", "img": Bio },
            { "name": "Info 200", "Classroom": "Classroom: GWN 301", "img": ischool },
            { "name": "IUGA", "Classroom": "iSchool", "img": IUGA },
            { "name": "Crags Climbing Center", "Classroom": "UW IMA", "img": Crags },
            { "name": "Math 124", "Classroom": "Classroom: PCAR 192", "img": Math},
            { "name": "NSBE", "Classroom": "Kelly ECC - Unity Room", "img": NSBE}
        ];

        const { following } = this.state;

        return (
            <CardsOrganizations />
        );
    }
}

class ForYouView extends React.Component {
    render() {
        return (
            <div>
                <CreateTweets user={this.props.user} />
               
            </div>
        );
    }
}

export default Tweet;
