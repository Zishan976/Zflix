import { useState } from 'react';
import { Link } from 'react-router-dom';
import uniOnPayImg from '../../assets/unionpay.png';
import paypalImg from '../../assets/paypal.png';
import visaImg from '../../assets/visa.png';
import mastercardImg from '../../assets/mastercard.png';
import './Footer.css';

function Footer() {
    const [showButton, setShowButton] = useState(false);
    const [email, setEmail] = useState('');

    const handleInputFocus = () => {
        setShowButton(true);
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendClick = () => {
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }
        alert(`Thank you for subscribing with ${email}!`);
        setEmail('');
        setShowButton(false);
    };

    const paymentImages = [
        { src: uniOnPayImg, alt: 'uniOnPayImg' },
        { src: paypalImg, alt: 'PayPal' },
        { src: visaImg, alt: 'Visa' },
        { src: mastercardImg, alt: 'MasterCard' },
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo footer-logo">ZFlix</div>
                    <p>Welcome to Zishan EcomStore, your ultimate destination for cutting-edge gadgets!</p>
                    <div className="payment-icons">
                        {paymentImages.map((img, index) => (
                            <img key={index} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
                <div className="footer-column">
                    <h3>SHOPPING</h3>
                    <ul>
                        <li><Link to="/computer-store">Computer Store</Link></li>
                        <li><Link to="/laptop-store">Laptop Store</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                        <li><Link to="/sales-discount">Sales & Discount</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Experience</h3>
                    <ul>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/payment-method">Payment Method</Link></li>
                        <li><Link to="/delivery">Delivery</Link></li>
                        <li><Link to="/return-exchange">Return and Exchange</Link></li>
                    </ul>
                </div>
                <div className="footer-column newsletter">
                    <h3>NEWSLETTER</h3>
                    <p>Be the first to know about new arrivals, sales & promos!</p>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="newsletter-input"
                        onFocus={handleInputFocus}
                        value={email}
                        onChange={handleInputChange}
                    />
                    {showButton && (
                        <button className="newsletter-button" onClick={handleSendClick}>
                            Send
                        </button>
                    )}
                </div>
            </div>
            <div className="footer-bottom">
                Design and Code by Zishan Technical
            </div>
        </footer>
    );
}

export default Footer;
