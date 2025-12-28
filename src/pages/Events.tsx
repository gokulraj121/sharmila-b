import { useState } from "react";
import { Camera, Play, X, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

// Video Card Component
const VideoCard = ({ title, videoSrc }: { title: string; videoSrc: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlayPause = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border hover:border-primary/50 transition-all hover:shadow-lg">
        <video
          src={videoSrc}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handlePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={showControls}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 backdrop-blur-[2px] group-hover:bg-foreground/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-card/90 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-6 h-6 text-primary ml-1" />
            </div>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm font-medium text-foreground text-center">{title}</p>
    </div>
  );
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Events" },
    { id: "color-days", label: "Color Days" },
    { id: "celebrations", label: "Celebrations" },
    { id: "competitions", label: "Competitions" },
    { id: "field-trips", label: "Field Trips" },
    { id: "special-days", label: "Special Days" },
  ];

  const events = [
    // Color Days
    { id: 1, title: "Pink Day - My Family Theme", category: "color-days", color: "bg-blush" },
    { id: 2, title: "Green Day - Nature & Sprout Activity", category: "color-days", color: "bg-mint" },
    { id: 3, title: "Purple Day", category: "color-days", color: "bg-lavender" },
    { id: 4, title: "Blue Day - Seasons Theme", category: "color-days", color: "bg-sky" },
    { id: 5, title: "Red Day", category: "color-days", color: "bg-coral" },
    // Celebrations
    { id: 6, title: "Krishna Jayanthi Celebration", category: "celebrations", color: "bg-sunshine" },
    { id: 7, title: "Onam Celebration", category: "celebrations", color: "bg-sunshine" },
    { id: 8, title: "Raksha Bandhan", category: "celebrations", color: "bg-blush" },
    { id: 9, title: "Pongal Celebration", category: "celebrations", color: "bg-peach" },
    { id: 10, title: "Christmas - Cupcake Activity", category: "celebrations", color: "bg-mint" },
    { id: 11, title: "Diwali - Dry Fruits Ladoo Activity", category: "celebrations", color: "bg-sunshine" },
    { id: 12, title: "Navaratri Pooja", category: "celebrations", color: "bg-lavender" },
    // Competitions
    { id: 13, title: "Fancy Dress - Best Out of Waste", category: "competitions", color: "bg-sky" },
    { id: 14, title: "Rhymes Competition", category: "competitions", color: "bg-blush" },
    { id: 15, title: "Identification Competition", category: "competitions", color: "bg-mint" },
    { id: 16, title: "Sports Day", category: "competitions", color: "bg-coral" },
    // Field Trips
    { id: 17, title: "Moo Dairy Farm Visit", category: "field-trips", color: "bg-mint" },
    { id: 18, title: "Aaliyar Dam Trip", category: "field-trips", color: "bg-sky" },
    // Special Days
    { id: 19, title: "Tiger Day & World Conservation Day", category: "special-days", color: "bg-sunshine" },
    { id: 20, title: "Grandparents Day", category: "special-days", color: "bg-peach" },
    { id: 21, title: "Friendship Day", category: "special-days", color: "bg-blush" },
    { id: 22, title: "Movie Time with Popcorn", category: "special-days", color: "bg-lavender" },
  ];

  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter(e => e.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Events Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Memorable Moments
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of joyful celebrations, colorful events, and learning experiences
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setLightboxImage(event.title)}
              >
                <div className={`aspect-square rounded-2xl ${event.color}/30 border border-border overflow-hidden relative hover:scale-105 transition-transform`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className={`w-12 h-12 rounded-full ${event.color} mb-3 flex items-center justify-center`}>
                      <Camera className="w-5 h-5 text-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{event.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">Click to add photo</p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                        <Camera className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
            Video Highlights
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Watch memorable moments from our events and celebrations
          </p>

          {/* Cultural Celebrations */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Cultural Celebrations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard title="Onam Celebration - Part 1" videoSrc="/video/onam 1.mp4" />
              <VideoCard title="Onam Celebration - Part 2" videoSrc="/video/onam 2.mp4" />
              <VideoCard title="Graduation Day" videoSrc="/video/graduationday 1.mp4" />
            </div>
          </div>

          {/* Special Days & Celebrations */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              Special Days & Celebrations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard title="Children's Day" videoSrc="/video/childrenday 1.mp4" />
              <VideoCard title="Sports Day - Part 1" videoSrc="/video/sports day 1.mp4" />
              <VideoCard title="Sports Day - Part 2" videoSrc="/video/sports day 2.mp4" />
              <VideoCard title="Nutrition Week" videoSrc="/video/nutrition week 1.mp4" />
            </div>
          </div>

          {/* Color Days */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-mint rounded-full"></span>
              Color Days
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard title="Pink Day - Part 1" videoSrc="/video/viedo 1 pink day.mp4" />
              <VideoCard title="Pink Day - Part 2" videoSrc="/video/pinkday2.mp4" />
              <VideoCard title="Green Day - Part 1" videoSrc="/video/greenday1.mp4" />
              <VideoCard title="Green Day - Part 2" videoSrc="/video/greenday2.mp4" />
            </div>
          </div>

          {/* Learning Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-sunshine rounded-full"></span>
              Learning Activities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard title="KG Activity" videoSrc="/video/kg activity 1.mp4" />
              <VideoCard title="Quality Time with Students - Part 1" videoSrc="/video/qtsws 1.mp4" />
              <VideoCard title="Quality Time with Students - Part 2" videoSrc="/video/qtsws 2.mp4" />
              <VideoCard title="Fun with GR Students" videoSrc="/video/fun with gr .mp4" />
              <VideoCard title="Movie Time" videoSrc="/video/movie time 1.mp4" />
            </div>
          </div>

          {/* Field Trips & Outdoor Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-sky rounded-full"></span>
              Field Trips
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard title="Field Trip - Part 1" videoSrc="/video/field 1.mp4" />
              <VideoCard title="Field Trip - Part 2" videoSrc="/video/field 2.mp4" />
            </div>
          </div>

          {/* Competitions & Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-coral rounded-full"></span>
              Competitions & Creative Activities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard title="Best Out of Waste - Fancy Dress" videoSrc="/video/bestoow 1.mp4" />
            </div>
          </div>

          {/* Parent Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-blush rounded-full"></span>
              What Parents Say
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Hear from happy parents sharing their wonderful experiences and thoughts about our teaching approach
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              <VideoCard title="Happy Parents Testimonials" videoSrc="/video/happy parent.mp4" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-card rounded-2xl p-8 animate-scale-in">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="aspect-video bg-muted rounded-xl flex flex-col items-center justify-center">
              <Camera className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-lg font-heading font-bold text-foreground">{lightboxImage}</p>
              <p className="text-muted-foreground mt-2">Photo will appear here</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Events;
