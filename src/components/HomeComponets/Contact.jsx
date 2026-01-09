import { Mail, Github, Send, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen text-gray-200 flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl">
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
              <div className="flex items-center gap-4 rounded-xl bg-black/40 border border-white/10 px-4 py-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                  {<Mail className="text-gray-300" />}
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">aneuville99@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-black/40 border border-white/10 px-4 py-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                  {<Github className="text-gray-300" />}
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-medium">@AdrianNQ99</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-black/40 border border-white/10 px-4 py-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                  {<Linkedin className="text-gray-300" />}
                </div>
                <div>
                  <p className="text-sm text-gray-400">Linkedin</p>
                  <p className="font-medium">
                    https://www.linkedin.com/in/adrianneuville/
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>

            <form className="space-y-4">
              <Input label="Nombre *" placeholder="Tu nombre completo" />
              <Input label="Email *" placeholder="tu@email.com" type="email" />
              <Input label="Asunto" placeholder="¿De qué quieres hablar?" />

              <div>
                <label className="text-sm text-gray-400">Mensaje *</label>
                <textarea
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 font-medium text-black hover:opacity-90 transition"
              >
                <Send size={18} />
                Enviar mensaje
              </button>

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

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  );
}
