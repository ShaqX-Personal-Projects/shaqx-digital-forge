import { Zap, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">ShaqX</span>
            </h2>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              We design and develop modern web and mobile applications, AI-powered tools, 
              and business platforms that help companies automate workflows, enhance user 
              experiences, and scale their operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to deliver smart, secure, and high-performing digital products 
              that transform how businesses operate in the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-scale-in" style={{ animationDelay: "0ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">Cutting-edge technology that keeps you ahead</p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Enterprise-grade security you can trust</p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
              <p className="text-muted-foreground">Your success is our priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
