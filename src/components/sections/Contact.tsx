"use client";

import { useState } from "react";
import { Mail, MapPin, Send, HelpCircle, Check } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Reset success state after a few seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      <div className="absolute top-1/3 left-10 w-[20rem] h-[20rem] bg-green/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-bg border border-border-github text-gold text-xs font-sans">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-serif">
            Let's Collaborate on Data
          </h2>
          <p className="text-base text-text-muted">
            Have a complex data pipeline, machine learning model, or full-stack web integration to build? Let's talk about how I can add value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (Left side) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-card-bg border border-border-github rounded-xl space-y-6">
              <h3 className="text-lg font-bold text-foreground font-mono border-b border-border-github pb-3">
                Contact Information
              </h3>
              
              <p className="text-sm text-text-muted leading-relaxed">
                Whether you have an immediate opening, contract consulting work, or simply want to chat about data architectures and LLMs, feel free to drop a message.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-text-muted font-mono">
                  <div className="w-9 h-9 rounded-lg bg-background border border-border-github flex items-center justify-center text-gold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase">Email Address</p>
                    <a href="mailto:otienorodricks8@gmail.com" className="text-foreground hover:text-gold transition-colors">
                      otienorodricks8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-text-muted font-mono">
                  <div className="w-9 h-9 rounded-lg bg-background border border-border-github flex items-center justify-center text-green">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase">Base Location</p>
                    <span className="text-foreground">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Quick links block */}
              <div className="pt-4 border-t border-border-github/70 space-y-3">
                <p className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                  Social Repository Channels
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/rodricks-ochieng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-background border border-border-github hover:border-gold/50 hover:text-foreground text-xs font-mono text-text-muted rounded-md transition-all w-full justify-center"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/rodricks-otieno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-background border border-border-github hover:border-gold/50 hover:text-foreground text-xs font-mono text-text-muted rounded-md transition-all w-full justify-center"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Block (Right side) */}
          <div className="lg:col-span-7">
            <div className="bg-card-bg border border-border-github rounded-xl p-4 sm:p-6">
              
              {/* Form Title */}
              <div className="border-b border-border-github pb-4 mb-6">
                <h3 className="text-lg font-bold text-foreground font-mono">Send a Message</h3>
                <p className="text-xs text-text-muted mt-1">
                  Inputs are validated and encrypted.
                </p>
              </div>

              {/* Form success message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green/10 border border-green/30 text-foreground rounded-lg flex items-center gap-2.5 font-mono text-sm">
                  <Check className="w-5 h-5 text-green flex-shrink-0" />
                  <span>Success! Your message has been sent. I will get back to you shortly.</span>
                </div>
              )}

              {/* Form fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono font-bold text-text-muted uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-border-github focus:border-gold focus:ring-1 focus:ring-gold text-sm text-foreground px-3.5 py-2.5 rounded-md outline-none transition-all"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-text-muted uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-border-github focus:border-gold focus:ring-1 focus:ring-gold text-sm text-foreground px-3.5 py-2.5 rounded-md outline-none transition-all"
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono font-bold text-text-muted uppercase">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background border border-border-github focus:border-gold focus:ring-1 focus:ring-gold text-sm text-foreground px-3.5 py-2.5 rounded-md outline-none transition-all"
                    placeholder="e.g. Predictive Analytics Consulting"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-text-muted uppercase">
                    Detailed Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-border-github focus:border-gold focus:ring-1 focus:ring-gold text-sm text-foreground px-3.5 py-2.5 rounded-md outline-none transition-all resize-none"
                    placeholder="Describe your project, timeline, or inquiries..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-sm font-semibold text-dark bg-gold hover:bg-gold-light disabled:opacity-50 border border-gold/50 rounded-md transition-all shadow-sm font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
