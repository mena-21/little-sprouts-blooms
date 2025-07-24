import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = {
    address: "123 Cherry Blossom Lane, Seattle, WA 98101",
    phone: "(206) 555-0123",
    email: "hello@littlesproutsdaycare.com",
    hours: {
      weekdays: "Monday - Friday: 6:30 AM - 6:30 PM",
      weekends: "Weekends: Closed",
      holidays: "Closed on major holidays"
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }, 
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/40 to-secondary/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch to schedule a tour, ask questions, or learn more about Little Sprouts.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Visit Our Center
                    </h3>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Located in the heart of Seattle, easily accessible by public transportation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Call or Text
                    </h3>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Available during business hours for tours and enrollment questions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Send an Email
                    </h3>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      We respond to all emails within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Operating Hours
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p>{contactInfo.hours.weekends}</p>
                      <p className="text-sm">{contactInfo.hours.holidays}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(206) 555-0123" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button size="lg" variant="cta" type="submit" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours during business days
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Find Us in Seattle
            </h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located with parking available and public transit nearby
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gradient-to-br from-primary-light/20 to-secondary/30 rounded-2xl p-12 text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Interactive Map
            </h3>
            <p className="text-muted-foreground mb-4">
              {contactInfo.address}
            </p>
            <Button variant="outline" size="lg">
              Get Directions
            </Button>
          </div>

          {/* Parking & Transit Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Free Parking</h3>
              <p className="text-sm text-muted-foreground">
                On-site parking lot with dedicated spots for quick drop-off and pickup
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Public Transit</h3>
              <p className="text-sm text-muted-foreground">
                Bus routes 15, 18, and 21 stop within 2 blocks of our center
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Need Directions?</h3>
              <p className="text-sm text-muted-foreground">
                Call us at {contactInfo.phone} and we'll guide you to our location
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light/40 to-secondary/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Visit Little Sprouts?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The best way to experience our caring environment is to see it for yourself. Schedule your personal tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta">
              Schedule a Tour
            </Button>
            <Button size="xl" variant="outline">
              Call Now: {contactInfo.phone}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;