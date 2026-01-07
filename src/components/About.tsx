import { Heart, Award, Target, Sparkles } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpeg";

const values = [
  {
    icon: Heart,
    title: "Safety First",
    description: "Every lesson prioritizes water safety with certified lifeguard instructors.",
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Our team is professionally trained with years of teaching experience.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We set clear milestones to track your swimming journey progress.",
  },
  {
    icon: Sparkles,
    title: "Fun Learning",
    description: "We make swimming enjoyable with engaging activities and positive reinforcement.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={gallery4}
                alt="Swimming lesson in progress at Aqua Learners Hub"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-display font-bold text-3xl">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Where Learning to Swim Becomes an Adventure
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aqua Learners Hub was founded with a simple mission: to make swimming accessible, 
                enjoyable, and safe for everyone. Our experienced instructors create a supportive 
                environment where students of all ages can build water confidence at their own pace.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                From first-time swimmers to those refining their technique, we're committed to 
                helping you achieve your aquatic goals.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
