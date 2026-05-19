import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Globe, Award, ShieldCheck, ChevronRight, PlayCircle, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Home() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.3),transparent)]" />
        <div className="content-width relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Global Excellence in Curriculum Design</span>
            </div>
            <h1 className="text-5xl lg:text-7xl leading-[1.1] text-white">
              Transforming Education Through 
              <span className="text-primary italic block mt-2">Curriculum Innovation.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              We empower institutions worldwide to build future-ready educational frameworks, instructional strategies, and competency-based models that drive academic success.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-semibold group shadow-lg shadow-primary/20 transition-all">
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 rounded-full text-lg font-semibold">
                <Link to="/curriculum">Explore Frameworks</Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white">
                    {/* Placeholder for institution logos */}
                    MIT
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">
                  +50
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium tracking-wide italic">Trusted by 50+ Global Universities</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Digital Education Dashboard" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-primary font-bold text-lg">Next-Gen Frameworks</h4>
                  <p className="text-slate-600 text-sm">2026 Academic Standards Implementation</p>
                </div>
                <PlayCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            {/* Decals */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="content-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Partner Institutions", value: "250+" },
              { label: "Curriculums Published", value: "1.2k" },
              { label: "Educators Trained", value: "15k" },
              { label: "Ministry Collaborations", value: "18" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding content-width">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl">Professional Services for <span className="italic text-primary">Academic Excellence.</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We provide a comprehensive range of academic services designed to modernize teaching and learning environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Curriculum Design", desc: "Custom framework development tailored to institutional goals and accreditation standards.", icon: BookOpen },
            { title: "Accreditation Support", desc: "Expert guidance on preparing for national and international academic reviews.", icon: Award },
            { title: "Teacher Development", desc: "Advanced training modules focusing on instructional design and tech integration.", icon: Users },
            { title: "Digital Transformation", desc: "Converting traditional curriculums into interactive, digital-first learning experiences.", icon: Globe },
            { title: "Outcome Mapping", desc: "Aligning curriculums with global competency frameworks and employability goals.", icon: ShieldCheck },
            { title: "Academic Consulting", desc: "Strategic advice for ministry officials and university leadership on education policy.", icon: GraduationCap }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                {service.title}
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link to="/services" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Learn More</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="section-padding">
        <div className="content-width">
          <div className="relative rounded-[32px] bg-primary overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center space-y-8">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl text-white">Ready to innovate your <span className="italic text-secondary">Academic Framework?</span></h2>
              <p className="text-primary-foreground/80 text-lg">
                Join hundreds of institutions already transforming education with CDD Global. Our specialists are ready to help you plan your next step.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild className="h-12 px-8 bg-white text-primary hover:bg-slate-100 rounded-full font-bold">
                  <Link to="/contact">Schedule a Discovery Call</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10 rounded-full font-bold">
                  <Link to="/about">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
