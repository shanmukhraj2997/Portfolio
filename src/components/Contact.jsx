import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const handleGmail = (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const formData = new FormData(form);
    const name = formData.get('name');
    const message = formData.get('message');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=shanmukhraj2997@gmail.com&su=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Me</h3>
            <p className="text-gray-300 text-lg font-medium drop-shadow-md">
              If you want to work together or have any questions, feel free to contact me.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shanmukhraj2997@gmail.com" target="_blank" rel="noreferrer" className="block text-lg font-medium hover:text-white transition-colors tracking-tight">
                  shanmukhraj2997@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Phone size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</p>
                <p className="text-lg font-medium uppercase tracking-tight">+91 6302221249</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <MapPin size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Location</p>
                <p className="text-lg font-medium uppercase tracking-tight">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
          <form 
            action="mailto:shanmukhraj2997@gmail.com" 
            method="POST" 
            encType="text/plain"
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Name"
                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 focus:outline-none focus:border-white/20 transition-all font-medium"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Your Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Email"
                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 focus:outline-none focus:border-white/20 transition-all font-medium"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
              <textarea 
                name="message" 
                placeholder="Message"
                rows="5"
                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 focus:outline-none focus:border-white/20 transition-all font-medium resize-none"
                required
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                type="button"
                onClick={handleGmail}
                className="flex-[2] py-4 bg-white/10 rounded-2xl text-center text-sm font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 group"
              >
                Send via Gmail
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button 
                type="submit"
                className="flex-1 py-4 border border-white/10 rounded-2xl text-center text-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                title="Use computer's default mail app (Outlook, Mail, etc)"
              >
                Outlook
                <Mail size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
