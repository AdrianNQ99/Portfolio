import { useState } from "react";

const Contacto=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar un servicio de envío de emails como Formspree, EmailJS, etc.
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" aria-label="Contacto">
      <div className="container contact-container">
        <h2>Contacto</h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "1.1rem",
          }}
        >
          ¿Tienes un proyecto en mente? Estoy disponible para colaborar.
        </p>

        {submitted && (
          <div
            style={{
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgb(16, 185, 129)",
              color: "rgb(16, 185, 129)",
              padding: "1rem",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            ✓ ¡Gracias por tu mensaje! Me pondré en contacto pronto.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="¿De qué se trata?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Cuéntame más sobre tu proyecto..."
            />
          </div>

          <button type="submit" className="btn-submit">
            Enviar Mensaje
          </button>
        </form>

        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p style={{ marginBottom: "1rem" }}>O contactame directamente:</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="mailto:tu-email@ejemplo.com" className="btn-secondary">
              📧 Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contacto;