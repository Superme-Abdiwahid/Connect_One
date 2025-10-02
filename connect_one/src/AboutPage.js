import React from 'react';
import "./AboutPage.css";
import Girl from "./Girl.jpg";
import Abdiwahid from "./Abdiwahid.jpg"
import Samuel from "./Samuel.jpg"
import Samatar from "./Samatar.jpg";
import Aasees from "./Aasees.jpg" 
import Abdirahman from "./Abdirahman.jpg"
import Random2 from './Random_Person2.jpg'
import AboutPage from './About_Page.jpg'
 // Note for Abdiwahid / Group prevents DOM XSS attacks
 const escapeHTML = (str) =>
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
class TeamMember extends React.Component {
    render() {
        const { member} = this.props;
        return (
            <div className="team-member">
                <img src={member.image} alt={member.name} />
                <div className="member-info">
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <p>{member.bio}</p> 
                </div>
            </div>
        );
    }
}

export default class AboutTeamPage extends React.Component {
    
    state = {
        teamMembers: [
            { id: 1, name: 'Abdiwahid Bishar Hajir', role: 'Software Engineer / Product Manager', image: Abdiwahid, bio: 
            'Abdiwahid is a motivated student currently pursuing his degree in Informatics at the University of Washington.' +
            'With a strong passion for software engineering, he is currently applying his technical expertise to the ConnectOne application, taking on the role of a software engineer to develop and implement innovative solutions.'
        },
            { id: 2, name: 'Samatar Hashi', role: 'Designer', image: Samatar, bio:
            'Samatar is an ambitious student currently pursuing his degree in Informatics at the University of Washington.' + 
            'With a keen interest in mobile app design, he led the design portion of the connectOne application.' +
        
            'He claims this was an exciting endeavor that will help showcases his skills and creative vision in UI/UX design.'
        },
            
            { id: 3, name: 'Aasees Singh', role: 'Frontend Developer', image: Aasees, bio: 
            'Aasees is a driven student currently pursuing his degree in Informatics at the University of Washington.' + 
            'With a strong affinity for frontend development, he is currently channeling his creativity and technical skills into crafting captivating user interfaces and engaging user experiences for the ConnectOne application.'
        },
            { id: 4, name: 'Samuel Shumeye', role: 'Backend Engineer', image: Samuel, bio: 
        
            'Samuel is a determined student currently pursuing his degree in Informatics at the University of Washington.' +
            'With a strong interest in backend development, he is currently leveraging his technical expertise to drive the backend architecture and implementation for the ConnectOne application'
        }, 
        { id: 5, name: 'Abdirahman Mohamed', role: 'Product Manager', image: Abdirahman, bio: 
            'Abdirahman is a dedicated student currently pursuing his degree in Informatics at the University of Washington.' + 
            'With a strong passion for product management, he is currently overseeing the final project, taking on the role of a product manager to bring the team\'s vision to life.'
        }
        ]
    };

    render() {
       
        return (
            <img src={AboutPage} className='styled-image'></img>
            // <div className="about-team-container">
            //     <h1>About the Capstone Team</h1>
            //     <div className="team-members">
            //         {this.state.teamMembers.map(member => (
            //             <TeamMember key={member.id} member={member} />
            //         ))}
            //     </div>
            // </div>
        );
    }
}