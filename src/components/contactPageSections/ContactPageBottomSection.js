import React from 'react';
import sectionImg from '../../assets/images/contactPageImg.png'
import '../../assets/css/contactPageBottomSection.css';

const ContactPageBottomSection = () => {
    return (
        <div className="contact-page-bottom-section-container">
            <div className="contact-page-bottom-section-title">
                <h5>Shipping Delay Notice: click here for more info.</h5>
                <p>
                    Whether you’ve got a question about crowdfunding, want to check up on
                    an order, or even get deep into audio fidelity, fill out your details
                    below and we’ll be in touch.
                </p>
            </div>
            <div className="contact-page-bottom-section-form">
                <form>
                    <div className="contact-page-bottom-section-form-group">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" placeholder="Name" required />
                    </div>

                    <div className="contact-page-bottom-section-form-group">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email" placeholder="Email address" required />
                    </div>

                    <div className="contact-page-bottom-section-form-group">
                        <label htmlFor="category">Category*</label>
                        <select id="category" required>
                            <option value="">Category</option>
                            <option value="order">Order Issue</option>
                            <option value="product">Product Question</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    <div className="contact-page-bottom-section-form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" placeholder="Message" rows="5" required></textarea>
                    </div>

                    <div className="contact-page-bottom-section-form-group contact-page-bottom-section-file-upload">
                        <label htmlFor="file-upload" className="contact-page-bottom-section-file-upload-label">
                            <input type="file" id="file-upload" />
                            <span className="contact-page-bottom-section-upload-text">Upload file</span>
                        </label>
                    </div>

                    <div className="contact-page-bottom-section-form-group contact-page-bottom-section-recaptcha">
                        <div className="contact-page-bottom-section-recaptcha-box">
                            {/* This is where the reCAPTCHA will be integrated */}
                            <input type="checkbox" id="captcha" required />
                            <label htmlFor="captcha">I'm not a robot</label>
                        </div>
                    </div>

                    <div className="contact-page-bottom-section-submit-section">
                        <p className="contact-page-bottom-section-processing-time">
                            We are currently experiencing a higher volume of inquiries than normal. Please allow us 3–5 working days to get back to you. Thank you for your patience. <a href="#more-details">More details</a>
                        </p>
                        <button type="submit" className="contact-page-bottom-section-submit-button">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
            <div className='contact-page-bottom-section-img'>
                <img src={sectionImg} className='img-fluid' alt='section-img' />
            </div>
        </div>
    );
};

export default ContactPageBottomSection;
