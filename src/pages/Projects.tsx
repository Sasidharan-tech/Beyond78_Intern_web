import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      category: 'Architecture',
      title: 'Neo-Tokyo Urban Hub',
      tags: ['Sustainable', 'Steel'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAfuQQpiIpINFpPkVLP6f1Gd2uyhv3HVI2U0BxcS0QCSuanPk8RHcbzmjJwArn19d9qTOFgFjCFPr7jY2qY3Ftc7jrCd3_7iotJF913LVik5Utqv0xt5SDSfTprp5LPLHRk2K-KUe8AZOyJ-xEBEaP0W2XQ12fA1INhC8jydhScfF-cEFiaS9DLAVWEWrF2d-Z0vpKGvTLRhx1op4NFuoU6bwMACdm2TyITIktuPdtqPf-CxowUaIxzESG1KjycPU46malRR8STlQ',
      size: 'tall',
    },
    {
      id: 2,
      category: 'Tech',
      title: 'Quantum Logic Systems',
      tags: [],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCtC63LVHjcqOb3Ju4AvRjXVGl7UfZ16GOQ82aQssn6QX8QCVeOdCjvK2xDCekBpVJH49C646GjCNYLdNq0KiU8iH-SKIvdDAwcetWjMrDXr40AoVBE0eSrcM8KCb9z57D2-2WIitkLmmy9xPaAJjtUUdu1Eqk9bJ7kiK0CpjgMfgRsK4Y4cKWyIEOvkYgCpDcF0MLJsUoo9R2Y-LkFzo6N19F7q8-9w3RtOc4BI9Ki6Q_oDZLkWl8Z_FEUrGJOn1fcZ_crNq5tHw',
      size: 'medium',
    },
    {
      id: 3,
      category: 'Consulting',
      title: 'Nexus HQ Strategy',
      tags: [],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDXkfrcEXXTbnvUj5XYTdqZWIlNoSCj6-dm0WLYCBxyKk4CjmZfzNW8pXZ1-grauKoT6n9znm25fMSlwyoaJdEGpgRmwYhDmE8_9y2Bm1ZWklWX48S-cKkdAIGWFsPKQubuFxXsMi1Dv-aMQumwjC1ccGRoU1MAb9OwE3t3LfwD_ROcFmRLkhYo6MHOIgd69rY5cFqi3ishcUJQnVJcku9vpI0yGvntfgh_bZaFd4jAxWJkNCMBKvOkjF2JgkWDXumYPE4I4_tPqg',
      size: 'medium',
    },
    {
      id: 4,
      category: 'Sustainability',
      title: 'Eco-Grid Infrastructure',
      tags: [],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDu1jajcPC3NpwvIq0YGdyCmq4mIVNQ0W-KvodItb2BAHwo07-qezFNuX9ew8otyMtW954BkBDISzF1ipUgEf9dOm3t2i6xJJBnoDwwweRCKAjpjbAOEscvt9fFxR2vUoCV2wJza3fS4SueFOMbemA5lr-YKRZ4YxVoNw2h4dpdk_Wj0aVpAASpZoCGdLgKcMzIsozXPYBoQxuXwsnHJupsWFEBRcPzmjqW1HgEP8jU0IID3d8fP8k-54MNbUb2LTUF3NVRcAUj2Q',
      size: 'tall',
    },
    {
      id: 5,
      category: 'Digital',
      title: 'Data Nexus Platform',
      tags: [],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBu3-sKpVTzIyoZPCyFFypliXJSB5g_M-4mRNAQvVRt5moDw94V7pFB8YqssNgykCSd586UwXCj5Lsaqoi6SiN0weJglbkPuIUR-R2S6jINn5xsN5ZF3ZFOVrsMdDpAfIStZOluI5U5mResl4hlzzNW4un8KPydpQPoYYErtN__K4HPnFFTQ2IXJyQYUv02vf3yrMRxnY2SCpo8uS9Kpi9G50nU7QHVWj1141FOtNzarTa-Rtg32sSncXO1aFAj58t3_bOAi-kG7Q',
      size: 'medium',
    },
    {
      id: 6,
      category: 'Infrastructure',
      title: 'Smart Mobility Hub',
      tags: [],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIx2z2gTf-WhDRpuQjWRzNVktZbCfZHd7R55krk6HyAtNvxiPU3MH5K-1Q-0_0qbJOhm-qGQj-lrlOINJ3smI9HvJP6VIrHhRtHj9VtDWkpl9T0q_22jLAKFVYyOf8YnGtXGaSOVapR4A2JnpSIpdNSqNeaJxw8dmQr9VS1QH53ASa-9-GPyMS4viQebwt_1_gLcuqqygcaW3g-jyjmwKSPy9_342U-nOiJ1eq2lN_n4AiA-JH-IpYLqxto9i3STy4aKpowNmR-g',
      size: 'tall',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left pt-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-[-0.04em] mb-6">
            Redefining <span className="text-primary">Boundaries</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
            Explore our portfolio of multi-disciplinary innovation across architecture, high-tech
            infrastructure, and strategic digital transformation.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center gap-3 border-y border-white/5 py-8">
          <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
            All Work
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 dark:text-slate-300 text-sm font-medium transition-all">
            Innovation
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 dark:text-slate-300 text-sm font-medium transition-all">
            Sustainability
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 dark:text-slate-300 text-sm font-medium transition-all">
            Infrastructure
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 dark:text-slate-300 text-sm font-medium transition-all">
            Digital Transformation
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 dark:text-slate-300 text-sm font-medium transition-all">
            Consulting
          </button>
        </div>
      </section>

      {/* Project Masonry Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="masonry-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card masonry-item-${project.size} relative overflow-hidden rounded-xl group cursor-pointer`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700"
                alt={project.title}
                src={project.image}
              />
              <div className="project-overlay absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold leading-tight">{project.title}</h3>
                {project.tags.length > 0 && (
                  <div className="mt-4 flex gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-white/60 text-xs px-2 py-1 rounded border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 dark:text-white px-10 py-4 rounded-lg font-bold transition-all hover:border-primary/50 group">
            Load More Projects
            <span className="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform">
              expand_more
            </span>
          </button>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-primary/5 border-y border-primary/10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Ready to start your next big innovation?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join global leaders who partner with Beyond78 to push the boundaries of what's possible
            in the modern era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-white font-bold h-14 px-10 rounded-xl hover:scale-105 transition-transform">
              Get in Touch
            </button>
            <button className="w-full sm:w-auto bg-white/5 dark:text-white font-bold h-14 px-10 rounded-xl hover:bg-white/10 transition-colors">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
