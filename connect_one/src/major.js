import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Interest.css";
import Camera from './Camera3.png'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


export default class Major extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStates: {
                informatics: false,
                education: false,
                history: false,
                computerScience: false,
                publicHealth: false, 
                fiance: false, 
                biochemistry: false, 
                mathematics: false, 
                accouting: false, 
                art: false,
                philosophy: false, 
                journalism: false, 
                physics: false, 
                biology: false,

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
        return(
            <div>
                 <h1 className="Heading">Your Major</h1>
                <p className="Paragraph">If not in your major yet, select your intended major.</p>
                
                <div className='Go_Back'>
                <NavLink to="./InterestPage.js">
                    <button>Go Back</button>
                </NavLink>
                </div>
                
                <div className='Buttons_Interest'>
                <button id={this.state.buttonStates>["informatics"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("informatics")}>Informatics</button>
                    {/* <img className='Camera' src={Camera} alt="Camera icon"></img> ADD ICONS */}
                <button id={this.state.buttonStates>["education"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("education")}>Education</button>
                <button id={this.state.buttonStates>["history"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("history")}>History</button>
                <button id={this.state.buttonStates>["computerScience"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("computerScience")}>Computer Science</button>
                <button id={this.state.buttonStates>["publicHealth"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("publicHealth")}>Public Health</button>
                <button id={this.state.buttonStates>["fiance"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("fiance")}>Fiance</button>
                <button id={this.state.buttonStates>["biochemistry"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("biochemistry")}>Biochemistry</button>
                <button id={this.state.buttonStates>["mathematics"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("mathematics")}>Mathematics</button>
                <button id={this.state.buttonStates>["accouting"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("accounting")}>Accounting</button>
                <button id={this.state.buttonStates>["art"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("art")}>Art</button>
                <button id={this.state.buttonStates>["philosophy"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("philosophy")}>Philosophy</button>
                <button id={this.state.buttonStates>["journalism"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("jounalism")}>Journalism</button>
                <button id={this.state.buttonStates>["physics"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("physics")}>Physics</button>
                <button id={this.state.buttonStates>["biology"] ? "buttonPurpleColor" : ""} onClick={() => this.handleButtonClick("biology")}>Biology</button>
                </div>  

        <NavLink to="/profile">
        <button className="continue-button" onClick={this.props.handleSignInWithEmail}>
            Continue
        </button>
        </NavLink>

            </div>
        )
    }
}