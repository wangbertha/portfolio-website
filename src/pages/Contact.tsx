import SocialsList from "../components/SocialsList";
import backgroundPic from "../assets/page-background.png";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <h1>Get in touch!</h1>
      <SocialsList />
      <img className="accent-img" src={backgroundPic} alt="" />
    </main>
  );
};

export default Contact;
