import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Home = () => {
  const highlights = [
    { icon: BookOpen, label: "19 Years Experience", color: "bg-sunshine" },
    { icon: Users, label: "Student-Centric Approach", color: "bg-blush" },
    { icon: Award, label: "Certified Educator", color: "bg-mint" },
    { icon: Heart, label: "Passionate Leader", color: "bg-lavender" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-sunshine/30 animate-float" />
        <div className="absolute bottom-32 right-20 w-16 h-16 rounded-full bg-blush/40 animate-float animation-delay-200" />
        <div className="absolute top-40 right-32 w-12 h-12 rounded-full bg-mint/30 animate-float animation-delay-400" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-muted-foreground">Primary Academic Head</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight">
                Nurturing Young Minds with{" "}
                <span className="text-gradient">Passion & Care</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Dedicated educator with 19 years of experience in shaping the future 
                through child-centric learning, experiential methods, and holistic development.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full shadow-warm">
                  <Link to="/about">
                    Discover My Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {highlights.map((item, index) => (
                  <div 
                    key={item.label}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl ${item.color}/20 animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-xs font-medium text-center text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decorations */}
                <div className="absolute -inset-4 bg-gradient-to-br from-sunshine/30 via-blush/30 to-primary/20 rounded-3xl blur-2xl" />
                
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] rounded-3xl bg-card border-2 border-border overflow-hidden shadow-warm">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-secondary/50 to-card">
                    <div className="w-32 h-32 rounded-full bg-muted mb-6 flex items-center justify-center">
                      <Users className="w-16 h-16 text-muted-foreground/50" />
                    </div>
                    <p className="text-muted-foreground font-medium">Profile Photo</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">Add your photo here</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-warm border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">19+ Years</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              My Teaching Philosophy
            </h2>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "In my journey as an educator and academic leader, I have always believed 
              in the power of collaboration, innovation, and compassion to shape young minds 
              and strengthen academic environments."
            </blockquote>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-muted-foreground">
              — Mrs. Sharmila B
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Connect?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            I would love to discuss how my experience and passion can contribute 
            to your esteemed institution.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full shadow-warm">
            <Link to="/contact">
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
