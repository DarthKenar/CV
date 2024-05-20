import ContactLink from "./ContactLink/ContactLink";

export default function ContactSection(){
  return(
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Trabajemos juntos...</h2>
      </div>
      <div className="contact-links">
        <ContactLink name="LinkedIn" icon="fab fa-linkedin" link="https://www.linkedin.com/in/federico-juan-vega/"/>
        <ContactLink name="GitHub" icon="fab fa-github" link="https://github.com/DarthKenar"/>
        <ContactLink name="E-mail" icon="fas fa-at" link="mailto:federico_vega22@hotmail.com"/>
        <ContactLink name="WhatsApp" icon="fas fa-mobile-alt" link="https://api.whatsapp.com/send/?phone=%2B5492615880318&text&type=phone_number&app_absent=0"/>
      </div>
    </section>
  )
}