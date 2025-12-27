import { 
  BookOpen, ClipboardCheck, Eye, Users, Calendar, Lightbulb,
  MessageCircle, Target, Heart, TrendingUp, Puzzle, GraduationCap
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const Experience = () => {
  const professionalSkills = [
    { 
      icon: BookOpen, 
      title: "Curriculum Design & Execution",
      description: "Creating comprehensive curricula aligned with educational standards"
    },
    { 
      icon: ClipboardCheck, 
      title: "Lesson Planning Supervision",
      description: "Guiding teachers in developing effective lesson plans"
    },
    { 
      icon: Eye, 
      title: "Classroom Observation",
      description: "Regular classroom visits to ensure quality teaching"
    },
    { 
      icon: Users, 
      title: "Teacher Mentoring",
      description: "Supporting and developing teaching staff"
    },
    { 
      icon: ClipboardCheck, 
      title: "Assessment Creation & Analysis",
      description: "Designing and analyzing student assessments"
    },
    { 
      icon: Calendar, 
      title: "Event Organization",
      description: "Planning academic and cultural events"
    },
    { 
      icon: Lightbulb, 
      title: "Student Guidance",
      description: "Mentoring students for their success"
    },
    { 
      icon: MessageCircle, 
      title: "Parent & Student Counselling",
      description: "Providing guidance and support to families"
    },
  ];

  const leadershipGoals = [
    { 
      icon: Users, 
      title: "Empower Teachers",
      description: "Providing resources, training, and support for continuous growth",
      color: "bg-sunshine"
    },
    { 
      icon: Heart, 
      title: "Foster Love for Learning",
      description: "Creating an environment where curiosity thrives",
      color: "bg-blush"
    },
    { 
      icon: TrendingUp, 
      title: "Improve Learning Outcomes",
      description: "Implementing strategies for measurable academic progress",
      color: "bg-mint"
    },
    { 
      icon: Puzzle, 
      title: "Enhance Engagement",
      description: "Making every classroom session interactive and meaningful",
      color: "bg-lavender"
    },
    { 
      icon: GraduationCap, 
      title: "Build Foundational Skills",
      description: "Strengthening literacy and numeracy from the start",
      color: "bg-sky"
    },
  ];

  const focusAreas = [
    "Fundamental literacy and numeracy development",
    "Experiential and activity-based learning methods",
    "Emotional and social well-being of students",
    "Spoken language skill development",
    "Holistic development approach",
    "Building strong parent partnerships",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Experience & Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              19 Years of Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A dedicated journey in primary education, shaping young minds 
              and building strong academic foundations
            </p>
          </div>
        </div>
      </section>

      {/* Professional Skills */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
            Professional Skills
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Core competencies developed through years of experience in academic leadership
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {professionalSkills.map((skill, index) => (
              <div 
                key={skill.title}
                className="p-6 rounded-2xl bg-background border border-border hover:shadow-warm hover:border-primary/30 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Goals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
            Leadership Goals
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            My mission as an Academic Head is to create lasting positive impact
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {leadershipGoals.map((goal, index) => (
              <div 
                key={goal.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:scale-105 transition-transform animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-full ${goal.color} mx-auto mb-4 flex items-center justify-center`}>
                  <goal.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-base font-heading font-bold text-foreground mb-2">
                  {goal.title}
                </h3>
                <p className="text-xs text-muted-foreground">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
              Teaching Focus Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div 
                  key={area}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
            Watch Me in Action
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            See my teaching approach and classroom interactions
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl bg-card border-2 border-dashed border-border flex flex-col items-center justify-center p-8">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-muted-foreground font-medium">Video Placeholder</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Add your introduction or teaching video here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
