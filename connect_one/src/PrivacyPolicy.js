import React from 'react';
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom"; 
    export default class Privacy extends React.Component {
        render() {
            return(
                <body>
                    <main>
                        <h1>Privacy Policy for Connect-One</h1>
                        <p>Last Updated: [Date]</p>
                        <section>
                            <h2>1. Information We Collect</h2>
                            <p>We collect several types of information, including information you provide directly, information we collect automatically, and user content.</p>
                        </section>
                        <section>
                            <h2>2. How We Use Your Information</h2>
                            <p>Information we collect is used for providing services, improving our platform, personalizing user experience, and more.</p>
                        </section>
                        <section>
                            <h2>3. Sharing of Your Information</h2>
                            <p>We may share your information with third parties in certain circumstances, such as with service providers and in response to legal requests.</p>
                        </section>
                        <section>
                            <h2>4. How We Store and Protect Your Information</h2>
                            <p>Your information may be stored and processed in the United States or any other country where we have facilities, and we use reasonable safeguards to keep your information secure.</p>
                        </section>
                        <section>
                            <h2>5. Your Choices About Your Information</h2>
                            <p>You can update your profile and settings and unsubscribe from certain communications through your account settings.</p>
                        </section>
                        <section>
                            <h2>6. Children's Privacy</h2>
                            <p>Our platform is not intended for children under the age of 18, and we do not knowingly collect information from children under this age.</p>
                        </section>
                        <section>
                            <h2>7. Changes to Our Privacy Policy</h2>
                            <p>This policy may be updated periodically, and we will notify you of any significant changes by revising the date at the top of the policy.</p>
                        </section>
                        <section>
                            <h2>8. Contact Us</h2>
                            <p>If you have questions about this privacy policy, please contact us using the information provided.</p>
                        </section>
                        <Link className="signup-button" to="/">Back</Link>
                    </main>
                </body>
        )
    }
}

