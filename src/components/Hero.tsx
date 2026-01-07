import { Button } from "./ui/button";
import { ChevronDown, Award, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-aqua-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Certified Swimming Instructors
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dive Into{" "}
              <span className="text-gradient-aqua">Confidence</span>
              <br />
              Learn to Swim Today
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              At Aqua Learners Hub, we provide personalized swimming lessons for all ages. 
              From water safety to advanced techniques, our expert instructors make learning fun and safe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" asChild>
                <a href="#contact">Book Your First Lesson</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#classes">Explore Classes</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Swimmers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Safety Record</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Swimming instructor teaching a child in the pool"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">★</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">5.0 Rating</div>
                  <div className="text-xs text-muted-foreground">From 200+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#classes" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
