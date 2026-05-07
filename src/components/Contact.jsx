import { useState, useEffect, useRef } from "react";

const WEB3FORMS_ACCESS_KEY = "0f96453f-9925-4ffa-ace3-d2a103c668d2";

const INITIAL_FORM = {
  name: "",
  email: "",
  service: "Mobile Apps",
  message: "",
};

const RESET_DELAY = 5;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(RESET_DELAY);
  const [form, setForm] = useState(INITIAL_FORM);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!sent) return;
    setCountdown(RESET_DELAY);
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current);
          setSent(false);
          setError("");
          return RESET_DELAY;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [sent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Project Enquiry from ${form.name} — ${form.service}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          replyto: form.email,
          autoresponse: `Hi ${form.name},\n\nThank you for reaching out to AllyTechSoft! We have received your enquiry about "${form.service}" and will get back to you within one working day.\n\nHere's a summary of your message:\n---\nService: ${form.service}\nMessage: ${form.message}\n---\n\nBest regards,\nTeam AllyTechSoft\nallytechsoft@gmail.com`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSentName(form.name);
        setForm(INITIAL_FORM);
        setSent(true);
      } else {
        setError(
          "Something went wrong. Please try again or email us directly.",
        );
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const servicesList = [
    "Mobile Apps",
    "Web Apps",
    "ERP Products",
    "AI Products",
    "IOT Apps",
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
                  Thank you, {sentName || "friend"}.
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  We've sent a confirmation to your email. Our team will reply
                  within one working day.
                </p>
                <p className="mt-4 text-white/40 text-sm font-mono">
                  Returning to the form in {countdown}s…
                </p>
                <button
                  onClick={() => {
                    clearInterval(timerRef.current);
                    setSent(false);
                    setError("");
                  }}
                  className="mt-4 text-sm underline underline-offset-4 hover:text-brandGreen transition-colors"
                >
                  Go back now
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
                    placeholder="What you’d like to build and the results you aim to achieve."
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg placeholder:text-white/30 focus:outline-none focus:border-brandGreen transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-gradient text-white hover:opacity-90 transition-opacity duration-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send message"}
                  {!loading && <span>→</span>}
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
