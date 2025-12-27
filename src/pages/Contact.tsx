import { Mail, Phone, Download, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const handleDownloadResume = () => {
    // Placeholder - this will download a resume when available
    alert("Resume download will be available soon. Please add your resume PDF to enable this feature.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I would love to discuss how my experience and passion can contribute 
              to your esteemed institution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a 
                href="mailto:sharmibalu2021@gmail.com"
                className="p-8 rounded-2xl bg-background border border-border hover:shadow-warm hover:border-primary/30 transition-all group animate-slide-in-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-sunshine/20 mb-6 flex items-center justify-center group-hover:bg-sunshine/30 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Email Me
                </h3>
                <p className="text-muted-foreground mb-4">
                  Drop me an email anytime
                </p>
                <p className="text-primary font-medium">
                  sharmibalu2021@gmail.com
                </p>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+919626456960"
                className="p-8 rounded-2xl bg-background border border-border hover:shadow-warm hover:border-primary/30 transition-all group animate-slide-in-right"
              >
                <div className="w-16 h-16 rounded-2xl bg-blush/20 mb-6 flex items-center justify-center group-hover:bg-blush/30 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Call Me
                </h3>
                <p className="text-muted-foreground mb-4">
                  Available for a conversation
                </p>
                <p className="text-primary font-medium">
                  +91 9626456960
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="p-8 rounded-2xl bg-card border border-border animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-mint/20 mx-auto mb-6 flex items-center justify-center">
                <Download className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Download My Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my qualifications, experience, and achievements
              </p>
              <Button 
                size="lg" 
                className="rounded-full shadow-warm"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heart className="w-12 h-12 text-primary mx-auto animate-float" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Thank You for Your Interest
            </h2>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
              "Thank you for taking time to review my portfolio. I look forward to the 
              opportunity to contribute my passion, experience, and leadership to your 
              esteemed institution."
            </blockquote>
            <p className="text-foreground font-heading font-bold">
              Warm regards,<br />
              Mrs. Sharmila B
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
