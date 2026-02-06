import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient"></div>
          <img
            alt="Modern architectural structure"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMSGeEICRyHRgVp7lVQkuGpFiMBjUrVvocSYIt_VC8iG9IPw9EtgCXBULLFu8gtsoReCgs3WZDCqXHxd6XkPY9tRMKshd0xCkJJf31IrwHqfFCvJyKwAJyiBwnaJuRJZ_q1LgVv0elA7IsUEUvSGzRoK_AANofdcUW6Hrplbw01MEV9tULhxlmUYfdSsA9wIKYK61NnXsRcjFeh9OB0FVBJSaAvlmHOZSdwFzWa1aVE-s0AS7ADqJVQ0NgvauYBzt5lnb9yGos4g"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center md:text-left">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold tracking-widest uppercase mb-6">
              Redefining Excellence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 text-white">
              Innovating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Beyond
              </span>{' '}
              the Standard.
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed font-light">
              A multi-disciplinary firm bridging the gap between bold vision and functional
              reality through precision engineering and strategic creative direction.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform">
                Explore Our Projects
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                View Services{' '}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span className="material-symbols-outlined text-3xl">expand_more</span>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-background-light dark:bg-[#1a1f2e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">150+</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Global Projects
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">3</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Indian Cities
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">25+</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Industry Awards
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">99%</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Client Success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                We are architects of change, building the infrastructure of the future.
              </h2>
              <div className="h-1.5 w-24 bg-primary mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Beyond78 was founded on the principle that modern challenges require
                multi-dimensional solutions. We don't just solve problems; we redefine the
                parameters of possibility across physical and digital landscapes.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Through a fusion of engineering rigour and artistic intuition, we deliver results
                that are as sustainable as they are revolutionary.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm5lGdbnAo9SU9XBnR085ss0AiWeP1ZdoIE0xzEQ1WkjnygJn8NrMN6K4k0US0qkQ2uDrxvNuYGu6FGsMIbj-t0ys-peO3ufr6R0I4XNyq5u0Rbe9QanxmQB6_7YPRfB3On7NT9aqNYc2QHF-VJPEFGhCIuH6XQRqBblmTChAHiCgtd8LRKzIc7eWG5KHBdZE6e4sPaY1pJV9qf5K_BuCMtthNitrrkzK9PVm8VMeO2A1bfKeXcUxZGMKso2vstpLtWW_MdgrZOg"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-10 rounded-2xl hidden md:block">
                <span className="material-symbols-outlined text-white text-5xl mb-4">
                  handshake
                </span>
                <p className="text-white font-bold text-xl">Trusted by Industry Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0c101a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
              Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-black">Featured Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#151b29] border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Architecture</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Developing structural masterpieces that harmonize aesthetics with sustainable
                functionality for the next generation.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all"
              >
                Learn More <span className="material-symbols-outlined text-base">east</span>
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#151b29] border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Strategic Consulting</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Expert guidance navigating complex market shifts and organizational scaling with
                data-driven insights.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all"
              >
                Learn More <span className="material-symbols-outlined text-base">east</span>
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#151b29] border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">devices</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Digital Transformation</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Modernizing your digital core to optimize performance and create seamless user
                experiences at every touchpoint.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all"
              >
                Learn More <span className="material-symbols-outlined text-base">east</span>
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#151b29] border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Sustainable Infra</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Building green solutions that minimize environmental footprint while maximizing
                long-term operational value.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all"
              >
                Learn More <span className="material-symbols-outlined text-base">east</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 md:p-24 text-center">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 rounded-full bg-blue-400/20 blur-3xl"></div>
            <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-8">
              Ready to Build the Impossible?
            </h2>
            <p className="relative z-10 text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Contact us today to discuss how our multi-disciplinary approach can elevate your
              next project from concept to legacy.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary font-black px-10 py-4 rounded-xl hover:scale-105 transition-transform">
                Start a Conversation
              </button>
              <button className="bg-primary border border-white/20 text-white font-black px-10 py-4 rounded-xl hover:bg-white/5 transition-colors">
                Download Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
