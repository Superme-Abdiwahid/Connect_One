import React from 'react';
import "./TermsOfService.css";
import { Link } from "react-router-dom"; 

export default class Terms extends React.Component {
    render() {
        return(
            <body>
                <main>
                    <h1>Terms of Service for Connect-One</h1>
                    <p>Last Updated: [Date]</p>
                    <section>
                        <h2>1. Who Can Use the Services</h2>
                        <p>You may use the Services only if you are a college student with a valid college email address and are not a person barred from receiving services under the laws of any applicable jurisdiction. You must be at least 18 years old to use the Platform. By agreeing to these Terms, you represent and warrant that you meet all the eligibility requirements listed.</p>
                    </section>
                    <section>
                        <h2>2. Privacy</h2>
                        <p>Our Privacy Policy describes how we handle the information you provide to us when you use our Services. You understand that through your use of the Services, you consent to the collection and use (as set forth in the Privacy Policy) of this information.</p>
                    </section>
                    <section>
                        <h2>3. Content on the Services</h2>
                        <p>You are responsible for your use of the Services and for any Content you provide, including compliance with applicable laws, rules, and regulations. You should only provide Content that you are comfortable sharing with others.</p>
                        <p>Any use or reliance on any Content or materials posted via the Services or obtained by you through the Services is at your own risk. We do not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or reliability of any Content or communications posted via the Services nor do we endorse any opinions expressed via the Services.</p>
                    </section>
                    <section>
                        <h2>4. Prohibited Conduct</h2>
                        <ul>
                            <li>Hate Speech and Discrimination: You may not post or promote content that directly or indirectly promotes or condones hate speech or acts of discrimination against individuals or groups based on race, ethnicity, religion, gender, sexual identity, national origin, civil status, disability, or any other characteristic that is typically associated with systemic discrimination or marginalization.</li>
                            <li>Harassment and Bullying: You must not intimidate or harass others, and must not promote violence or harm against any person or group.</li>
                            <li>Impersonation or Misrepresentation: Falsely claiming an affiliation with any person or entity, or misleadingly representing your identity or qualifications, is not allowed.</li>
                        </ul>
                    </section>
                    <section>
                        <h2>5. Rights and Ownership</h2>
                        <p>You retain your rights to any Content you submit, post, or display on or through the Services. However, by submitting, posting, or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such Content in any and all media or distribution methods (now known or later developed).</p>
                    </section>
                    <section>
                        <h2>6. Termination</h2>
                        <p>We may suspend or terminate your account or cease providing you with all or part of the Services at any time for any or no reason, including, but not limited to, if we reasonably believe: (i) you have violated these Terms, (ii) you create risk or possible legal exposure for us; or (iii) our provision of the Services to you is no longer commercially viable.</p>
                    </section>
                    <section>
                        <h2>7. Disclaimers and Limitations of Liability</h2>
                        <p>Please read this section carefully since it limits the liability of Connect-One and its parents, subsidiaries, affiliates, related companies, officers, directors, employees, agents, representatives, partners, and licensors (collectively, the “Entities of Connect-One”). Each of the subsections below only applies up to the maximum extent permitted under applicable law. Some jurisdictions do not allow the disclaimer of implied warranties or the limitation of liability in contracts, and as a result, the contents of this section may not apply to you.</p>
                        <ul>
                            <li>A. Nothing in these Terms shall exclude or limit the liability of Connect-One for losses which may not be lawfully excluded or limited by applicable law.</li>
                            <li>B. The services are available "as-is". Your access to and use of the Services or any Content are at your own risk.</li>
                            <li>C. The Entities of Connect-One shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to, use of, or inability to access or use the services; (ii) any conduct or content of any third party on the services, including without limitation, any defamatory, offensive, or illegal conduct of other users or third parties.</li>
                        </ul>
                    </section>
                    <section>
                        <h2>8. Governing Law and Jurisdiction</h2>
                        <p>These Terms shall be governed by the laws of the jurisdiction of Connect-One without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                    </section>
                    <section>
                        <h2>9. Changes to the Terms</h2>
                        <p>We reserve the right to modify or replace these Terms at any time at our discretion. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    </section>
                    <section>
                        <h2>10. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at [Contact Information].</p>
                    </section>
                    <br />
                 
                    <Link className="signup-button" to="/">Back</Link>
                </main>
            </body>

        )
    }
}