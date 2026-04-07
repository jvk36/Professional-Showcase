import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ChevronRight, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Briefcase,
  BookOpen,
  Award,
  GraduationCap,
  LineChart,
  BrainCircuit,
  Building,
  Database,
  ArrowRight
} from "lucide-react";

// Fade in up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => {
  return (
    <motion.div variants={fadeInUp} className="mb-16">
      <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-primary mt-8"></div>
    </motion.div>
  );
};

const RevealSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-white/5">
        <div className="text-lg font-serif tracking-widest text-white">JKV</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
          <a href="#investment-thesis" className="hover:text-primary transition-colors">Research</a>
          <a href="#quantitative-research" className="hover:text-primary transition-colors">AI/ML</a>
          <a href="#published-works" className="hover:text-primary transition-colors">Publications</a>
          <a href="#career" className="hover:text-primary transition-colors">Experience</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {/* Abstract background element */}
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/30 blur-[100px]" />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex items-center space-x-4">
            <span className="px-3 py-1 border border-primary/30 text-primary text-xs tracking-widest uppercase font-medium rounded-full">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-6">
            John Konnayil <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Vincent</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-3xl">
            Financial Researcher <span className="text-primary mx-2">·</span> Software Architect <span className="text-primary mx-2">·</span> Published Author
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 mb-16 text-sm text-muted-foreground">
            <a href="mailto:JohnKonnayilVincent@gmail.com" className="flex items-center hover:text-white transition-colors group">
              <Mail className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" /> JohnKonnayilVincent@gmail.com
            </a>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-primary" /> 1-716-281-9655
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" /> East Setauket, NY
            </span>
            <a href="https://www.linkedin.com/in/john-konnayil-vincent-039511/" target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors group">
              <Linkedin className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" /> LinkedIn Profile
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="prose prose-invert prose-lg max-w-4xl text-gray-400 font-light leading-relaxed border-l-2 border-primary/50 pl-6">
            <p>
              Software Engineer and R&D veteran with 20+ years of experience in database systems and investment research. Expertise in Investment Research through founding and running a business that monitors hedge fund activity and a Substack focused on helping DIY investors generate absolute returns by exploiting inefficiency, volatility, and momentum. Currently specializing in the AI/ML space, developing automated tools for DIY investors.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION I: Investment Thesis & Asymmetric Opportunities */}
      <div id="investment-thesis" className="bg-card/30 border-y border-white/5 relative">
        <RevealSection>
          <SectionHeading 
            subtitle="A collection of deep-dive analyses focused on identifying high-conviction, non-consensus bets by exploiting market inefficiency, volatility, and momentum."
          >
            Investment Thesis &amp; <br/>Asymmetric Opportunities
          </SectionHeading>

          <div className="space-y-24">
            {/* Category: Biotech & Life Sciences */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-8">
                <BrainCircuit className="text-primary w-6 h-6 mr-3" />
                <h3 className="text-2xl font-serif text-white">Biotech &amp; Life Sciences</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Coya Therapeutics",
                    desc: "Focused on the potential of COYA-302 to modulate Regulatory T-Cells to treat neurodegenerative diseases like ALS. Key Focus: Identifying the asymmetry in a platform-based approach to systemic inflammation.",
                    link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=coya"
                  },
                  {
                    title: "CRISPR Therapeutics",
                    desc: "A 'venture-style' deep dive into the scalability of gene-editing technology and its long-term path to blockbuster products. Key Focus: Analyzing the risk-reward profile of transformative genomic medicine.",
                    link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=crispr"
                  },
                  {
                    title: "Nuvation Bio",
                    desc: "Research into oncology pipeline developments and the strategic integration of the AnHeart acquisition. Key Focus: Exploiting 'inefficiency' in the valuation of late-stage oncology assets during market volatility.",
                    link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=nuvation"
                  },
                  {
                    title: "Novo Nordisk",
                    desc: "A secular growth study on GLP-1 dominance (Ozempic/Wegovy) and its impact on the global metabolic health market. Key Focus: Sizing a high-quality growth story as a cornerstone 'absolute return' position.",
                    link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=novo%20nordisk"
                  }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group block bg-background border border-white/5 hover:border-primary/50 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Category: Financial Infrastructure & Digital Assets */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-8">
                <Building className="text-primary w-6 h-6 mr-3" />
                <h3 className="text-2xl font-serif text-white">Financial Infrastructure &amp; Digital Assets</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Circle Internet Group",
                    desc: "Reviewed the stability and institutional adoption of USDC as a backbone for programmable money. Key Focus: Connecting the transition from traditional finance to digital dollar protocols.",
                    link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=circle%20internet"
                  },
                  {
                    title: "Fannie Mae & Freddie Mac",
                    desc: "An exploration of the legal and regulatory landscape surrounding GSE reform. Key Focus: Identifying the 'asymmetric' upside in the common and junior preferred shares based on potential administrative actions.",
                    link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=fannie"
                  },
                  {
                    title: "Demystifying Web3 and Beyond",
                    desc: "Authored Demystifying Crypto (2026) and Demystifying Bitcoin (2025) to bridge the gap between technical complexity and investor utility. Key Focus: Analyzing macro-asset adoption curves and decentralized protocol utility for DIY investors.",
                    link: "https://www.amazon.com/dp/B0GJMVFS6V"
                  }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group block bg-background border border-white/5 hover:border-primary/50 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
              {/* Category: Strategic Resources */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-8">
                  <Database className="text-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif text-white">Strategic Resources</h3>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "NovaGold Resources",
                      desc: "Evaluated the economics of the Donlin Gold project against geopolitical stability and gold price momentum. Key Focus: Utilizing 'Absolute Return' strategies by exploiting inefficiency in how the market values Tier-1 assets in pre-production.",
                      link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=novagold"
                    },
                    {
                      title: "Perpetua Resources",
                      desc: "Analyzed the Stibnite Gold Project as a critical domestic source of Antimony. Key Focus: Evaluating U.S. government backing for critical mineral supply chains as a de-risking mechanism.",
                      link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=perpectua"
                    }
                  ].map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group block bg-background border border-white/5 hover:border-primary/50 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Category: Special Situations */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-8">
                  <LineChart className="text-primary w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-serif text-white">Special Situations</h3>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "SiriusXM",
                      desc: "Explored the inefficiency inherent in the Liberty Media tracker merger, subsequent corporate restructuring, the hidden spectrum value, and the near-term catalysts. Key Focus: Exploiting the 'volatility and inefficiency' inherent in complex corporate spin-offs.",
                      link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=sirius"
                    },
                    {
                      title: "U-Haul (Amerco)",
                      desc: "A study of the 'moat' created by a massive real estate footprint and long-term family stewardship. Key Focus: Viewing U-Haul as a 'compounder' that benefits from market inefficiency in valuing asset-heavy service leaders.",
                      link: "https://diyabsolutereturns.substack.com/publish/posts/published?search=u-haul"
                    }
                  ].map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group block bg-background border border-white/5 hover:border-primary/50 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* SECTION II: Quantitative Research & AI/ML Innovation */}
      <RevealSection className="relative z-10" id="quantitative-research">
        <SectionHeading subtitle="Leveraging a background as a Senior Software Architect and Director to automate the research process.">
          Quantitative Research <br/>&amp; AI/ML Innovation
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-card to-background border border-white/5 rounded-xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BrainCircuit className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Automated SEC 13F Pipeline</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              Architected an end-to-end AI/ML system to analyze 13F filings, automating a previously manual multi-day research process. Engineered a sophisticated multi-model prompting framework to synthesize company-specific investment theses, utilizing Chain-of-Thought reasoning to anchor LLM outputs to verifiable financial facts and asymmetric market signals.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-card to-background border border-white/5 rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <LineChart className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Hedge Fund Monitoring</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10 mb-8">
              A series of quarterly updates for Seeking Alpha monitoring the activity of 'super investors'.
            </p>
            <a href="https://seekingalpha.com/author/john-vincent" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors relative z-10">
              View on Seeking Alpha <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </RevealSection>

      {/* SECTION III: Other Published Works & Technical Foundation */}
      <div id="published-works" className="bg-card/30 border-t border-white/5">
        <RevealSection>
          <SectionHeading>
            Published Works &amp; <br/>Technical Foundation
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Book */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center mb-6 border-b border-white/10 pb-4">
                <BookOpen className="text-primary w-5 h-5 mr-3" />
                <h3 className="text-xl font-serif text-white">Publications</h3>
              </div>
              <a href="https://www.amazon.com/Profiting-Hedge-Funds-Winning-Strategies-ebook/dp/B00FK0ITRG" target="_blank" rel="noreferrer" className="block group">
                <div className="aspect-[3/4] bg-background border border-white/10 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center p-8 group-hover:border-primary/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="text-center z-20 relative transform group-hover:-translate-y-2 transition-transform">
                    <h4 className="text-2xl font-serif text-white mb-2 leading-tight">Profiting from<br/>Hedge Funds</h4>
                    <p className="text-primary text-sm uppercase tracking-wider font-medium">Wiley (2013)</p>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">Profiting from Hedge Funds</h4>
                <p className="text-muted-foreground text-sm">Focusing on winning strategies for the DIY investor.</p>
              </a>
            </motion.div>

            {/* Patents */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <div className="flex items-center mb-6 border-b border-white/10 pb-4">
                <Award className="text-primary w-5 h-5 mr-3" />
                <h3 className="text-xl font-serif text-white">U.S. Patents</h3>
              </div>
              <p className="text-muted-foreground mb-8">Issued four patents for systems involving automated database queries and recursive path analysis.</p>
              
              <div className="space-y-4">
                {[
                  { id: "8019750", year: "2011", title: "System and method for automatically generating database queries" },
                  { id: "7526468", year: "2009", title: "System and Method of Recursive Path Analysis of DBMS Procedures" },
                  { id: "7047249", year: "2006", title: "Continuation application with broader claims on 6108659" },
                  { id: "6108659", year: "2000", title: "Methods and Apparatus for Executing Stored Code Objects in a Database" }
                ].map((patent, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center p-4 rounded-lg bg-background border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-primary font-mono text-sm mb-2 md:mb-0 md:w-32 shrink-0">US {patent.id}</div>
                    <div className="text-white font-medium flex-grow">{patent.title}</div>
                    <div className="text-muted-foreground text-sm mt-2 md:mt-0 ml-auto bg-white/5 px-2 py-1 rounded">{patent.year}</div>
                  </div>
                ))}
              </div>
              <a href="https://patents.google.com/?inventor=John+K+Vincent" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors mt-4">
                View all on Google Patents <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <div className="flex items-center mb-6 border-b border-white/10 pb-4 mt-16">
                <GraduationCap className="text-primary w-5 h-5 mr-3" />
                <h3 className="text-xl font-serif text-white">Education</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-background border border-white/5 rounded-lg">
                  <span className="text-white font-medium">MS in Information & Computer Sciences</span>
                  <span className="text-muted-foreground text-sm sm:text-right mt-2 sm:mt-0">University of Hawaii, Manoa (1993)</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-background border border-white/5 rounded-lg">
                  <span className="text-white font-medium">BTech in Computer Science</span>
                  <span className="text-muted-foreground text-sm sm:text-right mt-2 sm:mt-0">University of Calicut (1990)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </RevealSection>
      </div>

      {/* CAREER TIMELINE */}
      <div id="career" className="relative">
        <RevealSection>
          <SectionHeading>
            Professional Background
          </SectionHeading>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-12">
            {[
              {
                period: "2011 - Present",
                role: "Sole Proprietor",
                company: "Investment Research Venture",
                desc: "Architected and deployed AI/ML pipeline to analyze SEC 13F filings. Engineered multi-model prompting framework for company-specific investment theses using Chain-of-Thought reasoning."
              },
              {
                period: "2006 – 2010",
                role: "Senior Software Architect (Director)",
                company: "CA Inc., South San Francisco",
                desc: "Project Management, Research, and Development of SQL Server Agent technologies in the CA Unicenter Database Performance Management Insight product suite."
              },
              {
                period: "1999 – 2005",
                role: "Development Manager",
                company: "CA Inc., Alameda",
                desc: "Project management, Research, and Development of the Database Monitoring and SQL Tuning components of the SQL-Station product suite."
              },
              {
                period: "1995 – 1998",
                role: "Senior Software Engineer",
                company: "Platinum Technology Inc., San Francisco",
                desc: "Project Management, Research, and Development of the Debugger and Source Control components of the SQL-Station product suite."
              },
              {
                period: "1994",
                role: "Principal Software Engineer",
                company: "SQL Software Corporation",
                desc: "Sole developer of the SQL-Coder product which was sold to Platinum Technology three months after it went GA."
              }
            ].map((job, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-white">{job.role}</h4>
                  <span className="text-primary font-mono text-sm mt-1 md:mt-0 bg-primary/10 px-3 py-1 rounded-full w-fit">{job.period}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-medium text-white/80">{job.company}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </div>

      <footer className="bg-background border-t border-white/5 py-12 text-center">
        <p className="text-muted-foreground text-sm font-light">
          &copy; {new Date().getFullYear()} John Konnayil Vincent. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
