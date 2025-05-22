import React from 'react';

const contactSectionStyle: React.CSSProperties = {
  // textAlign: 'center', // Center align the content of the contact section, if desired
  paddingBottom: '2em', 
};

const contactDetailStyle: React.CSSProperties = {
  margin: '0.5em 0', // Spacing for each contact detail line
  fontSize: '1.1em', // Slightly larger font for readability
};

const contactLinkStyle: React.CSSProperties = {
  color: '#007bff', 
  textDecoration: 'none',
};

const contactLinkHoverStyle: React.CSSProperties = {
  textDecoration: 'underline',
};

const Contact: React.FC = () => {
  return (
    <section id="contact" style={contactSectionStyle}>
      <h2>Get in Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      <div style={{ marginTop: '2em' }}>
        <p style={contactDetailStyle}>
          <strong>Email:</strong> 
          <a 
            href="mailto:your.email@example.com" 
            style={contactLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = contactLinkHoverStyle.textDecoration!}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = contactLinkStyle.textDecoration!}
          >
            your.email@example.com
          </a>
        </p>
        <p style={contactDetailStyle}>
          <strong>LinkedIn:</strong> 
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={contactLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = contactLinkHoverStyle.textDecoration!}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = contactLinkStyle.textDecoration!}
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p style={contactDetailStyle}>
          <strong>GitHub:</strong> 
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={contactLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = contactLinkHoverStyle.textDecoration!}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = contactLinkStyle.textDecoration!}
          >
            github.com/yourusername
          </a>
        </p>
      </div>
      {/* Placeholder for a potential future contact form */}
      {/* 
      <form style={{ marginTop: '2em', maxWidth: '500px', margin: '2em auto' }}>
        <div><input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.5em', marginBottom: '1em' }} /></div>
        <div><input type="email" placeholder="Your Email" style={{ width: '100%', padding: '0.5em', marginBottom: '1em' }} /></div>
        <div><textarea placeholder="Your Message" rows={5} style={{ width: '100%', padding: '0.5em', marginBottom: '1em' }}></textarea></div>
        <div><button type="submit" style={projectLinkStyle}>Send Message</button></div>
      </form> 
      */}
    </section>
  );
};

export default Contact;
