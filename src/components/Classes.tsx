import { Baby, User, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const classes = [
  {
    icon: Baby,
    title: "Kids Swimming",
    age: "Ages 4-12",
    description: "Fun, safe lessons designed to build water confidence and essential swimming skills in young learners.",
    duration: "45 min",
    price: "KSh 1,500",
    features: ["Water safety basics", "Floating & kicking", "Stroke introduction", "Fun water games"],
    popular: true,
  },
  {
    icon: User,
    title: "Adult Beginners",
    age: "Ages 13+",
    description: "Never too late to learn! Patient, personalized instruction for adults new to swimming.",
    duration: "60 min",
    price: "KSh 1,500",
    features: ["Overcome water fear", "Breathing techniques", "Basic strokes", "Build confidence"],
    popular: false,
  },
  {
    icon: Users,
    title: "Private Lessons",
    age: "All Ages",
    description: "One-on-one attention tailored to your specific goals and learning pace.",
    duration: "60 min",
    price: "KSh 1,500",
    features: ["Personalized curriculum", "Flexible scheduling", "Faster progress", "Any skill level"],
    popular: false,
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 bg-gradient-wave">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Swimming Classes for Everyone
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're starting from scratch or looking to improve, we have the perfect class for you.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-lg border border-border card-hover ${
                classItem.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {classItem.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <classItem.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold text-card-foreground mb-1">
                {classItem.title}
              </h3>
              <span className="text-sm text-primary font-medium">{classItem.age}</span>

              <p className="text-muted-foreground mt-4 mb-6">{classItem.description}</p>

              <div className="flex items-center justify-between text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{classItem.duration} per session</span>
                </div>
                <span className="text-lg font-bold text-primary">{classItem.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {classItem.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-card-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={classItem.popular ? "coral" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Enroll Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
