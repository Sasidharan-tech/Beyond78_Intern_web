import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="w-full">
      {/* Hero Section: Split Screen Layout */}
      <section className="relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Our Story
                </span>
                <h1 className="text-5xl md:text-7xl font-black mt-4 leading-[1.1] tracking-tight">
                  Beyond the <br />
                  <span className="text-primary">Horizon</span>
                </h1>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                A multi-disciplinary firm committed to excellence, innovation, and synergy. We
                bridge the gap between vision and reality through a collaborative approach to
                complex challenges. Founded on the principle of pushing boundaries, we redefine
                what's possible in the corporate landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group hover:bg-primary/90 transition-colors">
                  Learn Our Philosophy
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-slate-200 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt="Team member"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1L-pRwWawKkXUBnUzQPaZAZetuVjGKpjVbC__4HRc6OaQ2_6sC2QKMzNJdqtKCPkxk2OmE6YuCAJNT_8aq4qxPEpAWi9a8M_Q2Pi84X-3kJKNvDydQY8S1uSjClc03YmAoQeDwvYylTfYPAChshreiHX8VnNhl8EGz1BwGyxAsWWl-UR3aXnhVhAs1OZ7wFEwxhCpedIUI6WPFiVlODGV1_MnNaMJp5wDoCEbB4BQgZ1H_hYLDlETl0DVvuERpQsjMoIEG-gKgQ"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-slate-300 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt="Team member"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5_nqIW-i6_v415tIBz8XAd035IKONBZENGTRAKFv3qV-SfTmbD1WcqiwUQM4UDVZYlliuawkb0ii3SjzPDZLVKsqVIKHQCIFwgwuuvLoe4FGAA6tj6VsdVAl0HWBnEuIPPwBALQrfWvCpJzjVJg0dYNv2HRT_RNEUtY8hcDa3G9Typ1qGXJ3noVEAfvuyijHKlOZtiK8ephMku5XgBV1_R7_bueSxyYUGI5bYa6toC7aPLZiPYUJJBQo6RTUPsigfT8pEw_fODw"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                      +40
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">Expert Team Members</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                <img
                  className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
                  alt="Professional team collaborating"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF-NXbd52-f-Qn_PF_S0uB7TSErbUiZb2zuCFTtEtlEhmTJ7A924_4Y9k5xij5Lg25pMOBi6E8cNLfVGxbAQgewPK9fx_JyPSK86ziTo2wSSsCfav_H1lFi6l3Qyes5KJCjjIuLk2kxSNdkJbw2lXqgQhcHrDipZemkGMq9tVEXjjT39NnggYFGsW4n0xnBO6rQKgvTogDElFyws8dl1pht67W_iQ9vg9mFwXXgmXOmcnNOVSvzQOLnBz5j-eIKd2qe8W_WHjWvg"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 bg-card-dark border border-slate-700 p-6 rounded-2xl hidden md:block z-20 shadow-xl">
                <p className="text-3xl font-black text-primary">12+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
                  Years of Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50 dark:bg-[#0c121d] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">Our Core Values</h2>
            <p className="text-slate-500 dark:text-slate-400">
              The foundation of everything we do. These four pillars guide our strategy, our
              culture, and our commitment to our partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="group bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">shield_with_heart</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Upholding the highest standards of ethics and transparency in every project we
                undertake.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Continuously pushing boundaries to find creative solutions for the challenges of
                the future.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">group_work</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Synergy</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Harnessing the collective power of collaboration across diverse professional
                disciplines.
              </p>
            </div>

            {/* Value 4 */}
            <div className="group bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">target</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Creating meaningful results that resonate with our clients, our communities, and
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Our Leadership
            </span>
            <h2 className="text-4xl font-black">Meet the Team</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex gap-8 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10">
          {/* Team Member 1 */}
          <div className="min-w-[300px] snap-start group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Marcus Thorne, CEO"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWSu81ZrfJtjUDkYG3-hgsJE1sv8nT-d3neG597DfKxWC08wsKk-76CWqKccwdWZHjmXKzAskOnK4UOTxD0aF_WgWaDMiCQQQz1_Bh-QStqE7s6VYnnw9sczqPvqW_GH1V3CAh5pLytNmAmjPbK0rilO66yipEsjgKTsZpmR2irIFZOkmPqCLCnjxJDmN94WMboFXj8_IQeD1CaSwwzZJde0D3FpXZ5bLx1p8yyFlFVMeQcRMNKU1VPPrulFsr23B5C1RCjW-uVg"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            <h4 className="text-xl font-bold">Marcus Thorne</h4>
            <p className="text-sm text-slate-500 font-medium">CEO & Principal Architect</p>
          </div>

          {/* Team Member 2 */}
          <div className="min-w-[300px] snap-start group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Elena Rodriguez, Director"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFILtSK1pz4A3jtqmYlxjcue3mY8N3JLVOKDXkWS-aIxl09fWDu_PTUxFdM4nkLxD1PMmnuKh7oVLAlTPH54AZz0bVsGNMEX2DcMBiyHZJLmSctB9z7I0_JyrJKI23vBd8ucfGMbRxOtNAArpJhk9Bv7gSmGsa6RjljC52d4kLMc3I3YBl7dec25Pn_ao-q5jcpSRJA4vIBlEO1uGLHuKC85n6LQ-hETPmGCoTegF46kEOy07YzvFPT7Woq2-JMf8tUPZWgf094A"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            <h4 className="text-xl font-bold">Elena Rodriguez</h4>
            <p className="text-sm text-slate-500 font-medium">Director of Strategy</p>
          </div>

          {/* Team Member 3 */}
          <div className="min-w-[300px] snap-start group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="David Chen, Innovation Lead"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKVFunO-EW_s7ckL8sFHNSytbNwvwEpeKgGTRjSrqWnQLthDwsfmPmdLTf3qvkBChFM8QHMtm-KLn3jg7JcLgu_TtaXI7bgJc9a3wCuIwupCcFH1gg9goTdZuthgNx5Oiufr8FEajCW37gRd0w87F8NcWITf1Ptz1bzD0MeakdsIaCxYZaUSVV7CD5GO175lPjlksFyWKYzRbj_FFwpWXc5iXj5hlF-w3IcWVeYaL8tdjH4KHz1sBqW7qUo06g6znnt23uGwzQkg"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            <h4 className="text-xl font-bold">David Chen</h4>
            <p className="text-sm text-slate-500 font-medium">Innovation Lead</p>
          </div>

          {/* Team Member 4 */}
          <div className="min-w-[300px] snap-start group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Sarah Jenkins, Operations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVTNx2vluC6h0lUvJvLAt3q9QnjoFFGZE70OBmgW8QXGJ-FtNVOUNDp8TW0hqvNutUGilLu9FbLmdgTtyvM1e3RL5suY9GQwABZqq9PHNbez0tE3edFmoJXJO_-ISaWJ9krkA9ivpazmOsLmETgt83nwP6O4VZ11aV9FJ8DcCLEA5ul43hVcNt6ECtyDnSeKr48CM8UFq4o0dNVUOeTwUHphfkZeezjfyi-UWQgk0jQteGSVd0BsW14VsW50VlbXHprtqge8F8eA"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a
                  className="w-10 h-10 bg-white dark:bg-background-dark rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            <h4 className="text-xl font-bold">Sarah Jenkins</h4>
            <p className="text-sm text-slate-500 font-medium">Head of Operations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[100px] -ml-48 -mb-48 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10 leading-tight">
            Ready to transcend the <br />
            ordinary with us?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl relative z-10">
            Join our network of innovators and visionaries. Whether you're a potential partner or
            looking for a career that matters, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              to="/contact"
              className="bg-white text-primary px-10 py-4 rounded-xl font-black hover:bg-slate-100 transition-colors"
            >
              Start a Project
            </Link>
            <button className="bg-primary border-2 border-white/30 text-white px-10 py-4 rounded-xl font-black hover:bg-white/10 transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
