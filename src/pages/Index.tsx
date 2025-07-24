import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Shield, Users, Award, Calendar, Mail, ArrowRight, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-daycare.jpg";
import classroomSensory from "@/assets/classroom-sensory.jpg";
import outdoorPlayground from "@/assets/outdoor-playground.jpg";
import readingCorner from "@/assets/reading-corner.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Award,
      title: "Certified Early Childhood Educators",
      description: "Our teachers hold advanced degrees and certifications in early childhood development, ensuring your child receives expert care and education."
    },
    {
      icon: Heart,
      title: "Developmental Milestone Programs",
      description: "Age-appropriate curricula designed to meet each child exactly where they are, fostering growth in all developmental areas."
    },
    {
      icon: Shield,
      title: "Secure, Camera-Monitored Classrooms",
      description: "24/7 camera access for parents, secure check-in/out systems, and comprehensive safety protocols for complete peace of mind."
    }
  ];

  const testimonials = [
    {
      quote: "Little Sprouts has been a second home for our daughter Emma. The teachers truly care about each child's individual growth and development.",
      parent: "Jennifer K.",
      child: "Emma, 2 years old",
      rating: 5
    },
    {
      quote: "The communication is outstanding. I love getting daily updates and photos of my son's activities. It makes going to work so much easier.",
      parent: "Marcus T.",
      child: "Tyler, 18 months",
      rating: 5
    },
    {
      quote: "Our twins have thrived at Little Sprouts. The staff is incredibly patient and nurturing. We couldn't ask for a better daycare experience.",
      parent: "Sarah & David M.",
      child: "Lily & Owen, 3 years old",
      rating: 5
    }
  ];

  const instagramPosts = [
    { image: classroomSensory, caption: "Sensory play builds curiosity! 🌈" },
    { image: outdoorPlayground, caption: "Fresh air and active play ☀️" },
    { image: readingCorner, caption: "Story time builds imagination 📚" },
    { image: heroImage, caption: "Learning through play every day! 🎨" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Welcome to Little Sprouts Daycare
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where Every Child Blooms
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Nurturing care, expert education, and endless possibilities in the heart of Seattle
          </p>
          <Button size="xl" variant="cta" asChild>
            <Link to="/contact">
              Schedule a Tour
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Families Choose Little Sprouts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that dedicated care and expert education make in your child's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-primary-light/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Parallax Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${readingCorner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            Our Philosophy
          </h2>
          <blockquote className="text-xl md:text-2xl text-white/95 italic mb-8 leading-relaxed">
            "Every child is unique, curious, and capable of amazing growth. We nurture each little sprout 
            with individualized care, hands-on learning, and endless encouragement to bloom into their fullest potential."
          </blockquote>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from families who trust us with their most precious gifts
            </p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-white to-secondary/20 border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent-bright fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="border-t border-border pt-6">
                  <p className="font-heading font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].parent}
                  </p>
                  <p className="text-muted-foreground">
                    Parent of {testimonials[currentTestimonial].child}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your family and we'll help you find the perfect program for your little one
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary-light/20 to-secondary/30 border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="font-medium">Parent Name *</Label>
                    <Input id="parentName" placeholder="Enter your name" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childAge" className="font-medium">Child's Age</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6-12mo">6-12 months</SelectItem>
                        <SelectItem value="1yr">1 year old</SelectItem>
                        <SelectItem value="2yr">2 years old</SelectItem>
                        <SelectItem value="3yr">3 years old</SelectItem>
                        <SelectItem value="4yr">4 years old</SelectItem>
                        <SelectItem value="5yr">5 years old</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="font-medium">I'm Interested In</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tour">Scheduling a tour</SelectItem>
                        <SelectItem value="enrollment">Enrollment information</SelectItem>
                        <SelectItem value="rates">Program rates</SelectItem>
                        <SelectItem value="waitlist">Joining the waitlist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="xl" variant="cta" type="submit">
                    Request More Information
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    We'll get back to you within 24 hours!
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Follow Our Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              See daily moments of learning, laughter, and growth at Little Sprouts
            </p>
            <Button variant="outline" size="lg">
              @LittleSproutsSeattle
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium leading-tight">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Join the Little Sprouts Family?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Give your child the nurturing start they deserve. Schedule your personal tour today and see why Seattle families choose Little Sprouts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Tour
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/enrollment">
                Start Enrollment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
