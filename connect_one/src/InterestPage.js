import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Interest.css";
import Camera from './Camera3.png'
import { NavLink } from 'react-router-dom';


export default class InterestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStates: {
                photography: false,
                basketball: false,
                videoGames: false,
                yoga: false,
                volleyball: false, 
                tennis: false, 
                coding: false,
                running: false, 
                swimming: false,
                art: false,
                football: false, 
                soccer: false, 
                music: false,
                hiking: false,

            }
        };
    }

    handleButtonClick = (buttonId) => {
        this.setState(prevState => ({
            buttonStates: {
                ...prevState.buttonStates,
                [buttonId]: !prevState.buttonStates[buttonId]
            }
        }));
    };
    render() {
        console.log(this.props.user)
        return(
            <div>
                 <h1 className="Heading">Your Interests {this.props.user}</h1>
    <p className="Paragraph">Select a few of your interests. We'll use it to cater your feed and give updates on events that could interest you!</p>
                <div className='Go_Back'>
                    <button>Go Back</button>
                </div>
                <div className='Buttons_Interest '>
                <button id={this.state.buttonStates["photography"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("photography")}><img className='Camera' src={Camera} alt="Camera icon" />Photography</button>
                <button id={this.state.buttonStates["basketball"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("basketball")}>Basketball</button>
                <button id={this.state.buttonStates["videoGames"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("videoGames")}>Video Games</button>
                <button id={this.state.buttonStates["yoga"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("yoga")}>Yoga</button>
                <button id={this.state.buttonStates["volleyball"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("volleyball")}>Volleyball</button>
                <button id={this.state.buttonStates["tennis"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("tennis")}>Tennis</button>
                <button id={this.state.buttonStates["coding"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("coding")}>Coding</button>
                <button id={this.state.buttonStates["running"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("running")}>Running</button>
                <button id={this.state.buttonStates["swimming"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("swimming")}>Swimming</button>
                <button id={this.state.buttonStates["art"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("art")}>Art</button>
                <button id={this.state.buttonStates["football"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("football")}>Football</button>
                <button id={this.state.buttonStates["soccer"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("soccer")}>Soccer</button>
                <button id={this.state.buttonStates["music"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("music")}>Music</button>
                <button id={this.state.buttonStates["hiking"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("hiking")}>Hiking</button>

            </div>   
    <NavLink to="/major">
    <button className="continue-button" onClick={this.props.handleSignInWithEmail}>
        Continue
    </button>
    </NavLink>

            </div>
        )
    }
}


