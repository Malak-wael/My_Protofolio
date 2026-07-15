import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    const SERVICE_ID = 'service_i7epph9'; 
    const TEMPLATE_ID = 'template_3si62gs'; 
    const PUBLIC_KEY = 'i2RBLXLs1LROn2I02'; 

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setIsSending(false);
        setStatus({ 
          type: 'success', 
          message: '🚀 Your message was sent successfully! I will get back to you soon.' 
        });
        formRef.current.reset();
      }, (error) => {
        setIsSending(false);
        setStatus({ 
          type: 'error', 
          message: '❌ Oops! Something went wrong. Please try again or email me directly.' 
        });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-[#FAF6F0] dark:bg-burgundy-dark text-slate-900 dark:text-white relative overflow-hidden flex items-center px-6 transition-colors duration-500">

      {/* Background Big Text */}
      <div className="absolute left-10 bottom-10 select-none pointer-events-none opacity-[0.02] font-mono text-[10rem] font-black tracking-widest text-burgundy-main dark:text-white">
        PING
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        <div className="flex flex-col justify-center">
          <span className="text-neon-pink font-mono text-xs uppercase tracking-widest mb-3 block">// Let's Build Something Great</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Get In <span className="text-neon-pink">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-md font-sans">
            Whether you want to build a secure Laravel backend, discuss MVC architecture, or just say hello, my inbox is always open.
          </p>

          <div className="space-y-4 max-w-sm">
            {/* Email Card */}
            <a href="mailto:waelmalak873@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-burgundy-main/20 border border-slate-200 dark:border-burgundy-light/20 transition-all duration-300 hover:border-neon-pink hover:translate-x-2 group">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-burgundy-dark text-neon-pink group-hover:text-neon-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">Drop an Email</span>
                <span className="text-xs md:text-sm font-bold font-mono">waelmalak873@gmail.com</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/malak-wael-abdelrahman-b4b518422/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-burgundy-main/20 border border-slate-200 dark:border-burgundy-light/20 transition-all duration-300 hover:border-neon-pink hover:translate-x-2 group">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-burgundy-dark text-neon-pink group-hover:text-neon-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">Let's Connect</span>
                <span className="text-xs md:text-sm font-bold font-mono">linkedin.com/in/malak-wael-abdelrahim</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/Malak-wael" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-burgundy-main/20 border border-slate-200 dark:border-burgundy-light/20 transition-all duration-300 hover:border-neon-pink hover:translate-x-2 group">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-burgundy-dark text-neon-pink group-hover:text-neon-gold transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">Discover my projects</span>
                <span className="text-xs md:text-sm font-bold font-mono">github.com/Malak-wael</span>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-burgundy-main/10 border border-slate-200 dark:border-burgundy-light/20 rounded-3xl p-8 md:p-10 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-pink/10 blur-3xl rounded-full pointer-events-none"></div>

          {status.message && (
            <div className={`mb-6 p-4 rounded-xl text-center text-xs font-mono border ${
              status.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400'
            }`}>
              {status.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-neon-gold mb-2">Your Name</label>
              <input
                type="text"
                name="from_name" 
                required
                className="w-full bg-slate-50 dark:bg-burgundy-dark/60 border border-slate-200 dark:border-burgundy-light/20 rounded-xl p-4 text-sm focus:outline-none focus:border-neon-pink transition-colors text-slate-900 dark:text-white"
                placeholder="Alex Morgan"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-neon-gold mb-2">Email Address</label>
              <input
                type="email"
                name="reply_to" 
                required
                className="w-full bg-slate-50 dark:bg-burgundy-dark/60 border border-slate-200 dark:border-burgundy-light/20 rounded-xl p-4 text-sm focus:outline-none focus:border-neon-pink transition-colors text-slate-900 dark:text-white"
                placeholder="alex@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-neon-gold mb-2">Message</label>
              <textarea
                rows="4"
                name="message" 
                required
                className="w-full bg-slate-50 dark:bg-burgundy-dark/60 border border-slate-200 dark:border-burgundy-light/20 rounded-xl p-4 text-sm focus:outline-none focus:border-neon-pink transition-colors resize-none text-slate-900 dark:text-white"
                placeholder="Tell me about your amazing project idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-neon-pink hover:bg-neon-pink/90 text-white font-mono text-xs uppercase tracking-widest py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,46,147,0.3)] cursor-pointer disabled:opacity-50"
            >
              {isSending ? 'Sending Message...' : 'Send Message </>'}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}