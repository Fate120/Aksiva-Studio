"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MessageSquare, Instagram, MapPin, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "Next.js Web Application",
    budget: "IDR 15.000.000 - 30.000.000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instant validated submission
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-aksiva-navy-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-aksiva-orange font-bold font-mono">
                // GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mt-2">
                Let’s Build Something Exceptional Together
              </h2>
              <p className="text-base text-slate-300 mt-4 leading-relaxed">
                Have a new project in mind or want to revamp an existing website? Tell us your vision and we will formulate a personalized proposal within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Instagram Card */}
              <a
                href="https://instagram.com/aksivastudio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-aksiva-orange/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-aksiva-orange/10 border border-aksiva-orange/30 flex items-center justify-center text-aksiva-orange group-hover:bg-aksiva-orange group-hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-aksiva-orange transition-colors">
                    Instagram Direct
                  </h4>
                  <p className="text-xs text-slate-400">@aksivastudio</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/628562872671"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-aksiva-orange/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Consultation
                  </h4>
                  <p className="text-xs text-slate-400">+62 856-2872-671</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contact@aksivastudio.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-aksiva-orange/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Official Inquiries
                  </h4>
                  <p className="text-xs text-slate-400">contact@aksivastudio.com</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Studio Location</h4>
                  <p className="text-xs text-slate-400">Surabaya &amp; Jakarta, Indonesia (Serving Worldwide)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel-glow p-6 sm:p-10 border border-aksiva-orange/30 shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-aksiva-orange/20 border border-aksiva-orange/40 flex items-center justify-center text-aksiva-orange mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. The Aksiva Studio team will review your project brief and reply within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display mb-1">
                      Project Consultation Form
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in the details below to receive our technical proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Budi Santoso"
                        className="w-full px-4 py-2.5 rounded-xl bg-aksiva-navy-800/90 border border-white/10 text-white text-sm focus:outline-none focus:border-aksiva-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="budi@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-aksiva-navy-800/90 border border-white/10 text-white text-sm focus:outline-none focus:border-aksiva-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+62 812 3456 7890"
                        className="w-full px-4 py-2.5 rounded-xl bg-aksiva-navy-800/90 border border-white/10 text-white text-sm focus:outline-none focus:border-aksiva-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-aksiva-navy-800/90 border border-white/10 text-white text-sm focus:outline-none focus:border-aksiva-orange transition-colors"
                      >
                        <option value="Next.js Web Application">Next.js Web Application</option>
                        <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                        <option value="Brand Identity & Design System">Brand Identity &amp; Design System</option>
                        <option value="Landing Page & Conversion Tuning">Landing Page &amp; Conversion Tuning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-aksiva-navy-800/90 border border-white/10 text-white text-sm focus:outline-none focus:border-aksiva-orange transition-colors"
                    >
                      <option value="Under IDR 10.000.000 (&lt; $700)">Under IDR 10.000.000 (&lt; $700)</option>
                      <option value="IDR 10.000.000 - 25.000.000 ($700 - $1,700)">IDR 10.000.000 - 25.000.000 ($700 - $1,700)</option>
                      <option value="IDR 25.000.000 - 50.000.000 ($1,700 - $3,500)">IDR 25.000.000 - 50.000.000 ($1,700 - $3,500)</option>
                      <option value="IDR 50.000.000+ ($3,500+) Enterprise">IDR 50.000.000+ ($3,500+) Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Project Summary &amp; Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, target audience, timeline, or links to references..."
                      className="w-full px-4 py-3 rounded-xl bg-aksiva-navy-800/90 border border-white/10 text-white text-sm focus:outline-none focus:border-aksiva-orange transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-aksiva-orange hover:bg-aksiva-orange-hover shadow-xl shadow-aksiva-orange/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Project Brief</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
