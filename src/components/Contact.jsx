import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Mobile Apps",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your backend or a form service (Formspree, Resend, etc.)
    console.log("Form submitted:", form);
    setSent(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const servicesList = [
    "Mobile Apps",
    "Web Apps",
    "ERP Products",
    "AIML Products",
    "Digital Marketing",
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 md:py-36 bg-ink text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 text-xs tracking-[0.25em] uppercase text-white/50 font-mono">
              <span className="w-6 h-px bg-white/30" />
              <span>Get in touch</span>
            </div>
            <h2 className="font-display font-bold tracking-tightest leading-[1] text-5xl md:text-7xl">
              Tell us
              <br />
              what you're
              <br />
              <span className="text-brand-gradient">making.</span>
            </h2>

            <div className="mt-12 space-y-6 text-white/70">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-1">
                  Email
                </div>
                <a
                  href="mailto:allytechsoft@gmail.com"
                  className="text-xl hover:text-brandGreen transition-colors"
                >
                  allytechsoft@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-1">
                  Studio
                </div>
                <div className="text-xl">Chennai · Remote across Asia</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-1">
                  Hours
                </div>
                <div className="text-xl">Mon — Fri, 10:00 – 19:00 IST</div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7 md:pl-8">
            {sent ? (
              <div className="p-10 rounded-3xl border border-white/15 bg-white/5">
                <div className="text-brandGreen font-mono text-xs tracking-[0.2em] uppercase mb-4">
                  ◆ Message received
                </div>
                <h3 className="font-display font-semibold text-4xl tracking-tightest">
                  Thank you, {form.name || "friend"}.
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  We read every enquiry ourselves and reply within one working
                  day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm underline underline-offset-4 hover:text-brandGreen transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field
                    label="Your name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-3">
                    Service
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setForm({ ...form, service: s })}
                        className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                          form.service === s
                            ? "bg-brandBlue text-white border-brandBlue"
                            : "border-white/20 text-white/70 hover:border-white/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-3">
                    Project brief
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What are you looking to build, and what outcomes would define success for you?"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg placeholder:text-white/30 focus:outline-none focus:border-brandGreen transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-gradient text-white hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
                >
                  Send message
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-3">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-brandGreen transition-colors"
      />
    </div>
  );
}
