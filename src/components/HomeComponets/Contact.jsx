import React from "react";

import {
  Mail,
  Github,
  Send,
  Linkedin,
  Copy,
  SquareArrowOutUpRight,
  Check,
} from "lucide-react";

const inputStyles =
  "mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500";

const contactItemStyles =
  "flex items-center gap-4 rounded-xl bg-black/40 border border-white/10 px-4 py-3";

const iconBoxStyles =
  "w-10 h-10 flex items-center justify-center rounded-lg bg-white/5";

export default function Contact() {
  const [copied, setCopied] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aneuville99@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mnqldjvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await response.json();
      setStatus("SUCCESS");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-gray-200"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Contacto</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría
            escucharte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Conéctate conmigo</h3>

            <div className="space-y-4">
              <div className={contactItemStyles}>
                <div className={iconBoxStyles}>
                  <Mail className="text-gray-300" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">aneuville99@gmail.com</p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  {copied ? (
                    <Check size={18} className="text-blue-400 animate-pulse" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              <div className={contactItemStyles}>
                <div className={iconBoxStyles}>
                  <Github className="text-gray-300" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-medium">@AdrianNQ99</p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    window.open("https://github.com/AdrianNQ99", "_blank")
                  }
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  <SquareArrowOutUpRight size={18} />
                </button>
              </div>

              <div className={contactItemStyles}>
                <div className={iconBoxStyles}>
                  <Linkedin className="text-gray-300" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/adrianneuville</p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/adrianneuville/",
                      "_blank"
                    )
                  }
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  <SquareArrowOutUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>

            <form className="space-y-4" onSubmit={handelSubmit} onChange={handleChange}>
              <div>
                <label className="text-sm text-gray-400">Nombre *</label>
                <input
                  name="name"
                  value={formData.name}
                  className={inputStyles}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  className={inputStyles}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Asunto</label>
                <input
                  name="subject"
                  value={formData.subject}
                  className={inputStyles}
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  rows={5}
                  className={inputStyles}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 font-medium text-black hover:opacity-90 transition"
                disabled={loading}
              >
                <Send size={18} />
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "SUCCESS" && (
                <p className="text-green-400 text-center mt-2">
                  ¡Mensaje enviado con éxito!
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-400 text-center mt-2">
                  Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </p>
              )}

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas que me comunique contigo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
