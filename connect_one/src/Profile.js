import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Profile.css";
import Random from "./Random_Person.jpeg";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            name: "Sarah Nguyen",
            bio: "Sarah Nguyen: UW IC tutor and software engineer. Passionate educator, mentor, and industry expert. Inspiring students to reach new heights in tech and beyond.",
            profileImage: Random,
            twitterLink: 'https://twitter.com/UW',
            facebookLink: 'https://www.facebook.com/UofWA/',
            instagramLink: 'https://www.instagram.com/uofwa/?hl=en',
            linkedinLink: 'https://www.linkedin.com/school/university-of-washington/mycompany/verification/',
            profileID: "@SarahNguyen"
        };
    }

    handleEditProfile = () => {
        this.setState({ isEditing: true });
    };

    

    handleSaveProfile = () => {
        this.setState({ isEditing: false }, () => {
            console.log("Updated name:", this.state.name);
            console.log("Updated bio:", this.state.bio);
            console.log("Profile image:", this.state.profileImage);
            console.log("Twitter link:", this.state.twitterLink);
            console.log("Facebook link:", this.state.facebookLink);
            console.log("Instagram link:", this.state.instagramLink);
            console.log("LinkedIn link:", this.state.linkedinLink);
        });
    };

    handleImageChange = (e) => {
        const file = e.target.files[0];
        this.setState({ profileImage: URL.createObjectURL(file) });
    };

    render() {
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
        const { isEditing, name, bio, profileImage, twitterLink, facebookLink, instagramLink, linkedinLink, profileID } = this.state;

        return (
            <main>
                <header>
                    <h1>Profile</h1>
                    <p>Welcome to your profile page, you can customize your profile. As well as edit as needed</p>
                </header>
                <div className="ProfileContainer container mt-4 mb-4 p-3 d-flex justify-content-center">
                    <div className="card p-4">
                        <div className="image d-flex flex-column justify-content-center align-items-center">
                            <label htmlFor="profileImage" className={`ProfileImageBtn ${isEditing ? 'EditState' : ''}`}>
                                <img src={profileImage} height="100" width="100" alt="Profile" />
                                {isEditing && <input type="file" id="profileImage" accept="image/*" onChange={this.handleImageChange} style={{ display: 'none' }} />}
                            </label>
                            {isEditing && (
                                <button className="UploadButton" onClick={() => document.getElementById('profileImage').click()}>Upload New Profile Pic</button>
                            )}
                            <span className="ProfileName">{name}</span>
                            {isEditing ? (
                                <div>
                                    <input
                                        type="text"
                                        className="ProfileIDInput"
                                        value={profileID}
                                        onChange={(e) => this.setState({ profileID: escapeHTML(e.target.value) })}
                                    />
                                </div>
                            ) : (
                                <span className="ProfileID">{profileID}</span>
                            )}
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <span><i className="fa fa-copy"></i></span>
                            </div>
                            {!isEditing && (
                                <div className="ProfileInfo">
                                    <span>{bio}</span>
                                </div>
                            )}
                            {!isEditing && (
                               <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                    <a href={twitterLink} target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href={facebookLink} target="_blank">
                                   <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a href={instagramLink} target="_blank">
                                   <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href={linkedinLink} target="_blank">
                                   <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                            )}
                           
                            {isEditing ? (
                                <div className="EditProfileSection">
                                    <textarea
                                        className="EditBioInput"
                                        placeholder="Edit Bio"
                                        value={bio}
                                        onChange={(e) => this.setState({ bio: escapeHTML(e.target.value) })}
                                    />
                                    <input
                                        type="text"
                                        target="_blank"
                                        placeholder="Enter Twitter URL"
                                        value={twitterLink}
                                        onChange={(e) => this.setState({ twitterLink: escapeHTML(e.target.value) })}
                                    />
                                    <input
                                        type="text"
                                        target="_blank"
                                        placeholder="Enter Facebook URL"
                                        value={facebookLink}
                                        onChange={(e) => this.setState({ facebookLink: escapeHTML(e.target.value) })}
                                    />
                                    <input
                                        type="text"
                                        target="_blank"
                                        placeholder="Enter Instagram URL"
                                        value={instagramLink}
                                        onChange={(e) => this.setState({ instagramLink: escapeHTML(e.target.value) })}
                                    />
                                    <input
                                        type="text"
                                        target="_blank"
                                        placeholder="Enter LinkedIn URL"
                                        value={linkedinLink}
                                        onChange={(e) => this.setState({ linkedinLink: escapeHTML(e.target.value) })}
                                    />
                                    <button className="SaveButton" onClick={this.handleSaveProfile}>Save</button>
                                </div>
                            ) : (
                                <div>
                                    <button className="EditButton" onClick={this.handleEditProfile}>Edit Bio</button>
                                </div>
                            )}
                            <div className="ProfileDate">Joined {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>

                        </div>
                    </div>
                </div>
            </main>
        );
};
}