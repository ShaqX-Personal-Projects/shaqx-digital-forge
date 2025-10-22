import { Smartphone, Building2, Brain, BarChart3, Briefcase } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Modern, responsive applications built for any device with seamless user experiences.",
  },
  {
    icon: Building2,
    title: "Business Platforms",
    description: "Custom SaaS, e-commerce, and management systems tailored to your workflow.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Intelligent chatbots, automation, and document intelligence that work for you.",
  },
  {
    icon: BarChart3,
    title: "Smart Tools for Teams",
    description: "Intuitive dashboards, CRMs, and data visualization tools that drive decisions.",
  },
  {
    icon: Briefcase,
    title: "Industry-Ready Applications",
    description: "Specialized solutions for Fintech, Healthcare, Education, Real Estate, and more.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions that scale with your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass p-8 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
