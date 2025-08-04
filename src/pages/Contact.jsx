import { Form } from 'react-router-dom';
import './Contact.css';

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data)
        alert("Thank you for contacting us!")
    } catch (error) {
        console.log(error)
        return { error: "Failed to submit form" };
    }
}

const Contact = () => {

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <Form method='POST' action='/contact' className="contact-form" >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </Form>
        </div>
    )
}

export default Contact
