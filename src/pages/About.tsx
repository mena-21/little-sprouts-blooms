import { Clock, Shield, Users, Award, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import teamDirector from "@/assets/team-director.jpg";
import teamTeacher1 from "@/assets/team-teacher1.jpg";
import teamTeacher2 from "@/assets/team-teacher2.jpg";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Center Director",
      credentials: "M.Ed. Early Childhood Development",
      funFact: "Speaks three languages and loves baking with the kids!",
      image: teamDirector,
    },
    {
      name: "Mike Chen",
      role: "Lead Infant Teacher",
      credentials: "B.A. Child Psychology, CPR Certified",
      funFact: "Former children's book illustrator and guitar player",
      image: teamTeacher1,
    },
    {
      name: "Lisa Rodriguez",
      role: "Toddler Program Coordinator",
      credentials: "15+ years experience, Montessori Certified",
      funFact: "Grows her own vegetables for our garden-to-table activities",
      image: teamTeacher2,
    },
  ];

  const timeline = [
    { year: "2020", event: "Little Sprouts Daycare founded with a vision to nurture every child's potential" },
    { year: "2021", event: "Expanded to serve 60 families, introduced outdoor learning program" },
    { year: "2022", event: "Achieved 5-star state licensing rating, added bilingual curriculum" },
    { year: "2023", event: "Opened second classroom, launched parent-child weekend workshops" },
    { year: "2024", event: "Serving 100+ families, recognized as 'Best Daycare in Seattle' by Seattle Family Magazine" },
  ];

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday through Friday, 6:30 AM to 6:30 PM. We're closed on major holidays and provide advance notice of any closure days."
    },
    {
      question: "What meals do you provide?",
      answer: "We serve nutritious breakfast, lunch, and afternoon snacks prepared fresh daily. Our menu accommodates various dietary restrictions and allergies. Sample menus are available for review."
    },
    {
      question: "What's your sick child policy?",
      answer: "Children must be fever-free for 24 hours before returning. We follow state health guidelines and maintain detailed health logs. Our staff are trained in first aid and CPR."
    },
    {
      question: "Do you offer sibling discounts?",
      answer: "Yes! We offer a 10% discount for second children and 15% for third+ children. Military families and single parents also qualify for additional discounts."
    },
    {
      question: "How do you handle transitions between age groups?",
      answer: "We use gradual transition periods where children visit their new classroom before moving up. Our teachers collaborate closely to ensure continuity in each child's development plan."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/40 to-secondary/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About Little Sprouts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where every child blooms in a nurturing environment designed for growth, learning, and endless possibilities.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded with love and dedication to provide Seattle families with exceptional early childhood care.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-foreground font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified early childhood educators passionate about your child's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary-light"
                  />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                  <p className="text-sm text-foreground italic">"{member.funFact}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Philosophy & Curriculum
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Montessori-Inspired Learning</h4>
                    <p className="text-muted-foreground">Child-led exploration with hands-on materials that encourage independence and critical thinking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Play-Based Discovery</h4>
                    <p className="text-muted-foreground">Learning through play, sensory experiences, and creative expression tailored to each developmental stage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Social-Emotional Growth</h4>
                    <p className="text-muted-foreground">Building confidence, empathy, and communication skills through peer interaction and guided activities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/50 to-accent/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Daily Routine</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">7:00 - 8:30 AM</span>
                  <span className="text-muted-foreground">Arrival & Free Play</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">8:30 - 9:00 AM</span>
                  <span className="text-muted-foreground">Breakfast & Circle Time</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">9:00 - 10:30 AM</span>
                  <span className="text-muted-foreground">Learning Centers</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">10:30 - 11:30 AM</span>
                  <span className="text-muted-foreground">Outdoor Play</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">11:30 - 12:30 PM</span>
                  <span className="text-muted-foreground">Lunch & Quiet Time</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">12:30 - 2:30 PM</span>
                  <span className="text-muted-foreground">Nap Time</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">2:30 - 4:00 PM</span>
                  <span className="text-muted-foreground">Art & Music</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">4:00 - 6:00 PM</span>
                  <span className="text-muted-foreground">Snack & Pickup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Facility */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Safety & Facility
            </h2>
            <p className="text-lg text-muted-foreground">
              Your child's safety and security is our top priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">24/7 Camera Access</h3>
              <p className="text-sm text-muted-foreground">Parents can check in anytime through our secure app</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Secure Check-In/Out</h3>
              <p className="text-sm text-muted-foreground">Keypad entry system with authorized pickup tracking</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Childproofed Spaces</h3>
              <p className="text-sm text-muted-foreground">Age-appropriate environments designed for safety</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Outdoor Play Yard</h3>
              <p className="text-sm text-muted-foreground">Fenced, supervised outdoor learning environment</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Little Sprouts
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light/40 to-secondary/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Visit Little Sprouts?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a tour and see why families trust us with their most precious gifts.
          </p>
          <Button size="xl" variant="cta">
            Schedule Your Tour Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;