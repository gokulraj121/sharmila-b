import { GraduationCap, Award, BookOpen, Users, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const qualifications = [
    { title: "M.COM", description: "Master of Commerce" },
    { title: "B.ED", description: "Bachelor of Education" },
    { title: "D.EL.ED", description: "Diploma in Elementary Education" },
  ];

  const certifications = [
    { title: "Jolly Phonics", icon: BookOpen },
    { title: "Montessori Training", icon: Sparkles },
  ];

  const coreValues = [
    { 
      title: "Child-Centric Learning", 
      description: "Putting children at the center of every educational decision",
      color: "bg-sunshine/20 border-sunshine"
    },
    { 
      title: "Experiential Methods", 
      description: "Learning through hands-on activities and real-world experiences",
      color: "bg-blush/20 border-blush"
    },
    { 
      title: "Holistic Development", 
      description: "Nurturing mind, body, and spirit for complete growth",
      color: "bg-mint/20 border-mint"
    },
    { 
      title: "Emotional Well-being", 
      description: "Caring for the emotional and social development of students",
      color: "bg-lavender/20 border-lavender"
    },
    { 
      title: "Language Development", 
      description: "Building strong spoken language skills from an early age",
      color: "bg-sky/20 border-sky"
    },
    { 
      title: "Parent Satisfaction", 
      description: "Building strong partnerships with families for student success",
      color: "bg-peach/20 border-peach"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">About Me</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Mrs. Sharmila B
            </h1>
            <p className="text-xl text-muted-foreground">
              Primary Academic Head
            </p>
          </div>
        </div>
      </section>

      {/* About Image & Bio */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative animate-slide-in-left">
              <div className="absolute -inset-4 bg-gradient-to-br from-sunshine/20 via-primary/10 to-blush/20 rounded-3xl blur-xl" />
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-muted border-2 border-border overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-secondary mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                  <p className="text-muted-foreground font-medium">Profile Photo</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">Add your photo here</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                A Passionate Educator
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In my journey as an educator and academic leader, I have always believed 
                  in the power of collaboration, innovation, and compassion to shape young minds 
                  and strengthen academic environments.
                </p>
                <p>
                  As an Academic Head, I am committed to nurturing a culture of excellence, 
                  supporting teachers, and ensuring that every child receives a meaningful 
                  and enriching learning experience.
                </p>
                <p>
                  With 19 years of experience in primary education, I have dedicated my career 
                  to fostering a love for learning and helping students build strong foundational skills.
                </p>
              </div>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-sunshine/10 border border-sunshine/30">
                <div className="w-14 h-14 rounded-full bg-sunshine flex items-center justify-center">
                  <Award className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-foreground">19+</p>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Qualifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {qualifications.map((qual, index) => (
              <div 
                key={qual.title}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-warm transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {qual.title}
                </h3>
                <p className="text-sm text-muted-foreground">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="flex items-center gap-4 px-6 py-4 rounded-full bg-secondary border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <cert.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-foreground">{cert.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
            Core Values & Teaching Approach
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            The principles that guide my educational philosophy and daily practice
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className={`p-6 rounded-2xl border-2 ${value.color} hover:scale-105 transition-transform animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
