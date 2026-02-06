import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-background-light dark:bg-background-dark py-20 px-6 border-b border-slate-200 dark:border-slate-800 pt-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            Our Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
            Beyond Boundaries,<br />
            <span className="text-primary">Shaping Excellence.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Discover our multi-disciplinary approach to solving complex business challenges. We
            combine strategy, technology, and design to drive sustainable growth for modern
            enterprises.
          </p>
        </div>
      </section>

      {/* Services List */}
      <main className="flex-grow">
        {/* Service 1: Strategic Consulting */}
        <section className="bg-white dark:bg-background-dark py-24 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined !text-3xl">insights</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Strategic Consulting
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We help businesses navigate complexity through rigorous analysis and tailored growth
                strategies that deliver measurable impact. Our team identifies untapped
                opportunities and optimizes your core operations for maximum efficiency and scale.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="px-4 py-2 rounded-lg bg-background-light dark:bg-surface-dark text-xs font-semibold">
                  Market Analysis
                </span>
                <span className="px-4 py-2 rounded-lg bg-background-light dark:bg-surface-dark text-xs font-semibold">
                  Growth Strategy
                </span>
                <span className="px-4 py-2 rounded-lg bg-background-light dark:bg-surface-dark text-xs font-semibold">
                  Risk Management
                </span>
              </div>
              <button className="group flex items-center gap-2 text-primary font-bold pt-4 hover:gap-4 transition-all">
                Learn More
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-surface-dark relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                <img
                  alt="Strategic consulting"
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAtrmp8vvWLXzvJ7uOYz3LHzQyuZPltT-AE-kzk4pGZ2L7MAjhdFofErCKDd7o1uLYnKm9lpihNb8O8yT0DNA1fh6AUpfVzbszsc5ty_WnlrCw_iUUMp9ryW33_iOhfWwCNGqPotJOhPf3u88gdlQe8_SdHVOfhZm_T6yr4YsYOWaweaFCkPnaCYmSsxBHMF0CS8VNI1vkojny6p4t1bFpqQO9ThSqe0vI29_Z4lZlD_gChj_62UFwWVcTioRWnRvkrQkR-qRFQg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Digital Transformation */}
        <section className="bg-slate-50 dark:bg-surface-dark/30 py-24 px-6 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined !text-3xl">terminal</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Digital Transformation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Modernize your technological infrastructure with our bespoke software solutions and
                cloud-native integration services. We bridge the gap between legacy systems and
                future-proof digital architectures.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-background-dark text-xs font-semibold">
                  Cloud Architecture
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-background-dark text-xs font-semibold">
                  Bespoke Software
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-background-dark text-xs font-semibold">
                  AI Integration
                </span>
              </div>
              <button className="group flex items-center gap-2 text-primary font-bold pt-4 hover:gap-4 transition-all">
                Learn More
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-background-dark relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img
                  alt="Digital transformation"
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPmbuADQ2PubSb737PgOsaMcdxng5F-q3qD_QOCj_TFSjg_Ds41Wbyme1mUDrvGpNNZqJ4zS2VmbEisPlut1dtAryNuVBQG6XiwBPHp0ajHVuS4pNm3hNlTk2V7FR2fDDhgDbWr4k0iwLkG2WX70oVbavunaw3eekIr-mi-PqX24nYW11nu-srUKpVsy8T-n7B_zsAJguouoRt0eMuTikoFCrHVOjPO4fIVcmIxMcjS-cdCqxjLNQ6QqyqR9c5u1eEVxWosUTIQ"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Design & Innovation */}
        <section className="bg-white dark:bg-background-dark py-24 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined !text-3xl">token</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Design & Innovation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Excellence in design is more than just aesthetics. We build intuitive user
                experiences and iconic brand identities that resonate with your target audience.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="px-4 py-2 rounded-lg bg-background-light dark:bg-surface-dark text-xs font-semibold">
                  UX Research
                </span>
                <span className="px-4 py-2 rounded-lg bg-background-light dark:bg-surface-dark text-xs font-semibold">
                  Visual Identity
                </span>
                <span className="px-4 py-2 rounded-lg bg-background-light dark:bg-surface-dark text-xs font-semibold">
                  Product Design
                </span>
              </div>
              <button className="group flex items-center gap-2 text-primary font-bold pt-4 hover:gap-4 transition-all">
                Learn More
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-surface-dark relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent z-10"></div>
                <img
                  alt="Design and innovation"
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdfyNXGNGiDH-oFg7UivIo1E8YJRFjhOsIv64CbDy-plNk_bKFYNGU_96B05I4Y8CWqFJusUAgNgpkUVx_ByR1eSyx2sTZAnFYd2B8lBX5Xf-_DPDS3G6i3KxX_iUlRL0UhBEOHGRckI50b1_1m7_3EiEU9jjMHaxMGZBTYe82gShYtk5RFxHZC9dnNoEYiN72u4pSODIVRyR2qQjDdMg0LVzAg0vHwsMt-1CtmisBby5g3mH2l_2WytUy5jeIu_xPt72aVDjFXQ"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Operational Excellence */}
        <section className="bg-slate-50 dark:bg-surface-dark/30 py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined !text-3xl">rebase_edit</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Operational Excellence
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Streamline your business functions with our advanced operational management systems.
                From supply chain logistics to internal workflow automation.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-background-dark text-xs font-semibold">
                  Logistics Management
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-background-dark text-xs font-semibold">
                  Process Automation
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-background-dark text-xs font-semibold">
                  SCM Strategy
                </span>
              </div>
              <button className="group flex items-center gap-2 text-primary font-bold pt-4 hover:gap-4 transition-all">
                Learn More
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-background-dark relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                <img
                  alt="Operational excellence"
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANjxqjhrnA8abfo6-fFkHYuQpFEmqhmSNjzaJB7Ael2ZX8NXNJBzPWyNohTUOPdkVsDjyAY0i4jAsoggFAw9Nrk6CAFfdyGDAgluzV4Wfq-F-XuTwUvu4vXgd3zRpbjH5CwZZXC-WqAZJ9ba9pq_odQzCLSWA3wPAsDdoZ-3VNxnYCzuSdwm3fvu7z_gNjWnecD57UPdQBhSV25bPeRaAhVmLnl1X2PBguxt8XtTaxu7fsxRU_qHJDPsMBefMqeEe2avxVxYbkAw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <section className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
            Ready to transcend limits?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
            Contact our consultation team to discuss how Beyond78 can help you achieve your most
            ambitious business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-white font-bold py-4 px-10 rounded-xl hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
            <button className="w-full sm:w-auto border border-slate-300 dark:border-slate-700 font-bold py-4 px-10 rounded-xl hover:bg-slate-50 dark:hover:bg-surface-dark transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
