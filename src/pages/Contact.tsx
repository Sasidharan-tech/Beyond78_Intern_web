import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    inquiry_type: 'Consultancy Services',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init('ei1-obqk4yW7fG-0l'); // Replace with your actual public key
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual EmailJS service ID and template ID
      const result = await emailjs.sendForm(
        'service_3qceul1',    // Replace with your EmailJS service ID
        'template_e5v2fno',   // Replace with your EmailJS template ID
        form.current,
        'ei1-obqk4yW7fG-0l'     // Replace with your EmailJS public key
      );
      
      console.log('EmailJS Success:', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        inquiry_type: 'Consultancy Services',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center lg:text-left pt-32">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
          Let's Build the <span className="text-primary">Next Frontier</span> Together
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Whether you have a specific project in mind or just want to explore possibilities, our
          team of specialists is ready to help you navigate your journey.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white dark:bg-[#1c222d] p-8 lg:p-10 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">send</span>
              Send us a Message
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Corporate Email
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                    placeholder="john@company.com"
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Inquiry Type
                </label>
                <select
                  className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all"
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                >
                  <option>Consultancy Services</option>
                  <option>Strategic Partnerships</option>
                  <option>Media & Press</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Your Message
                </label>
                <textarea
                  className="w-full bg-slate-50 dark:bg-[#101622] border border-slate-200 dark:border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all placeholder:text-slate-400 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-300 text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined">error</span>
                    Failed to send message. Please try again or email us directly.
                  </p>
                </div>
              )}
              
              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center gap-2"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">refresh</span>
                    Sending...
                  </>
                ) : (
                  'Schedule Consultation'
                )}
              </button>
            </form>
          </div>

          {/* Right: Office Details & Map */}
          <div className="space-y-8">
            {/* Office Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-[#1c222d] rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Head Office
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  MASS Complex, Sarakki Industrial Layout<br />
                  JP Nagar 3rd Phase, 15th Cross Road<br />
                  Bangalore – 560078, India
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-[#1c222d] rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Direct Contact</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Phone: +91 80 4567 8900<br />
                  Email: contact@beyond78.com
                </p>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVRow91ULFp6ZV_2t6vhntjZ52wOUG_w1uOtGsoeCDT694yHDgBOnWgQcskIBEWZonvAZSQyny_NsM-hJcPjEJXxUk_q0cuL3yqXt71IcPdbfQTIO566LY7W6KIc838ZtKo8Hz-HYxQTEsl9SoWjMyt787nWsoJC4iFGfV9YmKHLPab-cDfTOzVXSJwLplxFVEGToJ_i8Rh8EYGgkvDMjPw30Dpf9quIY0KL3U07Twx4CoTGQjwvGGahgGDWgmmwb8ED23wMpWHw')",
                }}
              >
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
              </div>
              {/* Custom Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-primary p-3 rounded-full shadow-2xl animate-bounce">
                  <span className="material-symbols-outlined text-white text-3xl">
                    corporate_fare
                  </span>
                </div>
                <div className="mt-2 bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-slate-200 dark:border-slate-700">
                  Beyond78 Bangalore
                </div>
              </div>
              {/* Map Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-lg shadow-xl border border-white/20">
                <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tighter mb-1">
                  Office Hours
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Mon - Sat: 09:00 - 18:00 IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <section className="border-t border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-black/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h5 className="text-lg font-bold text-slate-900 dark:text-white">Follow Beyond78</h5>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Join our community for the latest insights and updates.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1c222d] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1c222d] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1c222d] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
