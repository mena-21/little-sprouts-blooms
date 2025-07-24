import { CheckCircle, FileText, Calendar, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Enrollment = () => {
  const steps = [
    {
      number: "1",
      title: "Fill Out Inquiry Form",
      description: "Complete our initial inquiry form with your family's information and childcare needs.",
      icon: FileText,
      status: "active"
    },
    {
      number: "2", 
      title: "Schedule Campus Tour",
      description: "Visit our facility, meet our teachers, and see our programs in action during a personalized tour.",
      icon: Calendar,
      status: "upcoming"
    },
    {
      number: "3",
      title: "Submit Documents & Payment", 
      description: "Provide required paperwork and secure your child's spot with enrollment deposit.",
      icon: CheckCircle,
      status: "upcoming"
    },
    {
      number: "4",
      title: "Welcome Packet",
      description: "Receive your digital welcome packet with start date, supply list, and first-day information.",
      icon: Mail,
      status: "upcoming"
    }
  ];

  const documents = [
    "Child's birth certificate",
    "Current immunization records",
    "Emergency contact information",
    "Physician's health report",
    "Parent/guardian photo ID",
    "Enrollment contract (signed)",
    "Tuition agreement",
    "Emergency medical authorization"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/40 to-secondary/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Enrollment Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to the Little Sprouts family! Our simple enrollment process gets your child started on their learning journey.
          </p>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Simple Steps to Enroll
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process makes it easy to join the Little Sprouts community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center relative hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary-bright rounded-full flex items-center justify-center">
                      <span className="text-sm font-heading font-bold text-secondary-foreground">{step.number}</span>
                    </div>
                    <CardTitle className="text-lg font-heading">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Start Your Enrollment Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your family and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                  <Input id="parentName" placeholder="Enter your full name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="(206) 555-0123" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Name *</Label>
                  <Input id="childName" placeholder="Enter child's full name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="childAge">Child's Age</Label>
                  <Select>
                    <SelectTrigger>
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
                  <Label htmlFor="startDate">Preferred Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="program">Preferred Program</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="infant">Infant Program (6-12 mo)</SelectItem>
                      <SelectItem value="toddler">Toddler Program (1-2 yrs)</SelectItem>
                      <SelectItem value="preschool">Preschool Program (2-5 yrs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schedule">Preferred Schedule</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time (5 days)</SelectItem>
                      <SelectItem value="parttime">Part-time (3 days)</SelectItem>
                      <SelectItem value="dropin">Drop-in (as needed)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Information or Questions</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about any special needs, dietary restrictions, or specific questions you have..."
                  rows={4}
                />
              </div>
              
              <div className="text-center">
                <Button size="xl" variant="cta" type="submit">
                  Submit Inquiry
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  We'll contact you within 24 hours to schedule your tour
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Required Documents
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Please prepare these documents for your enrollment appointment. We'll review everything together during your visit.
              </p>
              
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Enrollment Packet
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/30 to-accent/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Sample Enrollment Timeline
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 1</div>
                    <div className="text-sm text-muted-foreground">Submit inquiry form and schedule tour</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 2</div>
                    <div className="text-sm text-muted-foreground">Campus tour and enrollment meeting</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 3</div>
                    <div className="text-sm text-muted-foreground">Submit documents and secure enrollment</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Week 4</div>
                    <div className="text-sm text-muted-foreground">First day preparation and welcome packet</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">Questions?</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Call us at (206) 555-0123 or email hello@littlesprouts.com for personalized assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light/40 to-secondary/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the Little Sprouts family and give your child the foundation they need to bloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta">
              Start Enrollment Now
            </Button>
            <Button size="xl" variant="outline">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;