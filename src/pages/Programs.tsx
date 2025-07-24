import { useState } from "react";
import { Download, Clock, Users, Heart, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Programs = () => {
  const programs = [
    {
      id: "infant",
      name: "Infant Program",
      age: "6-12 months",
      ratio: "1:3 teacher to child ratio",
      description: "Nurturing care focused on attachment, sensory exploration, and early development milestones.",
      schedule: [
        { time: "7:00 - 8:00 AM", activity: "Arrival & Bottle/Feeding" },
        { time: "8:00 - 9:00 AM", activity: "Tummy Time & Floor Play" },
        { time: "9:00 - 10:00 AM", activity: "Morning Nap" },
        { time: "10:00 - 11:00 AM", activity: "Sensory Play & Music" },
        { time: "11:00 AM - 12:00 PM", activity: "Lunch & Quiet Time" },
        { time: "12:00 - 2:00 PM", activity: "Afternoon Nap" },
        { time: "2:00 - 3:00 PM", activity: "Bottle & Book Time" },
        { time: "3:00 - 4:00 PM", activity: "Outdoor Stroller Walks" },
        { time: "4:00 - 6:00 PM", activity: "Free Play & Pickup" }
      ],
      menu: [
        "Breast milk/formula feeding on demand",
        "Introduction to baby cereals (6+ months)",
        "Pureed fruits and vegetables",
        "Finger foods as developmentally appropriate"
      ],
      rates: {
        fullTime: "$1,800/month",
        partTime: "$1,200/month (3 days)",
        daily: "$90/day"
      }
    },
    {
      id: "toddler",
      name: "Toddler Program", 
      age: "1-2 years",
      ratio: "1:4 teacher to child ratio",
      description: "Active learning through exploration, language development, and beginning social skills.",
      schedule: [
        { time: "7:00 - 8:30 AM", activity: "Arrival & Free Play" },
        { time: "8:30 - 9:00 AM", activity: "Breakfast & Circle Time" },
        { time: "9:00 - 10:00 AM", activity: "Learning Centers & Art" },
        { time: "10:00 - 10:30 AM", activity: "Snack & Music" },
        { time: "10:30 - 11:30 AM", activity: "Outdoor Play" },
        { time: "11:30 - 12:30 PM", activity: "Lunch" },
        { time: "12:30 - 2:30 PM", activity: "Nap Time" },
        { time: "2:30 - 3:00 PM", activity: "Afternoon Snack" },
        { time: "3:00 - 4:30 PM", activity: "Sensory & Water Play" },
        { time: "4:30 - 6:00 PM", activity: "Story Time & Pickup" }
      ],
      menu: [
        "Whole milk, cut-up fruits, whole grain crackers",
        "Mini sandwiches, steamed vegetables, cheese cubes", 
        "Pasta with sauce, soft chicken pieces, yogurt",
        "Rice with beans, mashed sweet potato, applesauce"
      ],
      rates: {
        fullTime: "$1,600/month",
        partTime: "$1,000/month (3 days)",
        daily: "$80/day"
      }
    },
    {
      id: "preschool",
      name: "Preschool Program",
      age: "2-5 years", 
      ratio: "1:8 teacher to child ratio",
      description: "School readiness through structured learning, creativity, and social-emotional development.",
      schedule: [
        { time: "7:00 - 8:30 AM", activity: "Arrival & Centers" },
        { time: "8:30 - 9:00 AM", activity: "Breakfast & Morning Meeting" },
        { time: "9:00 - 10:00 AM", activity: "Literacy & Math Activities" },
        { time: "10:00 - 10:15 AM", activity: "Snack" },
        { time: "10:15 - 11:15 AM", activity: "Outdoor Exploration" },
        { time: "11:15 - 12:00 PM", activity: "Creative Arts & Science" },
        { time: "12:00 - 1:00 PM", activity: "Lunch & Social Time" },
        { time: "1:00 - 2:30 PM", activity: "Rest/Quiet Time" },
        { time: "2:30 - 3:00 PM", activity: "Afternoon Snack" },
        { time: "3:00 - 4:00 PM", activity: "Choice Time & Projects" },
        { time: "4:00 - 6:00 PM", activity: "Outdoor Play & Pickup" }
      ],
      menu: [
        "Whole grain cereal with milk and berries",
        "Turkey and cheese wrap, cucumber slices, hummus",
        "Baked chicken, brown rice, steamed broccoli",
        "Whole grain muffins, string cheese, apple slices"
      ],
      rates: {
        fullTime: "$1,400/month", 
        partTime: "$900/month (3 days)",
        daily: "$70/day"
      }
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/40 to-secondary/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Programs & Rates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Age-appropriate programs designed to nurture every child's unique development journey.
          </p>
          <Button variant="outline" size="lg" className="mb-4">
            <Download className="w-5 h-5 mr-2" />
            Download Fee Sheet
          </Button>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="infant" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-14 bg-muted rounded-full p-1">
              {programs.map((program) => (
                <TabsTrigger 
                  key={program.id} 
                  value={program.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full font-heading font-medium"
                >
                  <div className="text-center">
                    <div className="font-semibold">{program.name}</div>
                    <div className="text-xs opacity-70">{program.age}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="space-y-8">
                {/* Program Overview */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {program.name}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-primary-light/30 px-4 py-2 rounded-full">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium text-primary">{program.ratio}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Daily Schedule */}
                  <Card className="lg:col-span-1">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Daily Schedule</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {program.schedule.map((item, index) => (
                          <div key={index} className="flex flex-col">
                            <span className="text-sm font-medium text-primary">{item.time}</span>
                            <span className="text-sm text-muted-foreground">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sample Menu */}
                  <Card className="lg:col-span-1">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Utensils className="w-5 h-5 text-primary" />
                        <span>Sample Menu</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {program.menu.map((item, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Heart className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          All meals are prepared fresh daily and accommodate dietary restrictions and allergies.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rates */}
                  <Card className="lg:col-span-1">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <span>Monthly Rates</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <div className="font-semibold text-foreground">Full-Time</div>
                          <div className="text-2xl font-heading font-bold text-primary">{program.rates.fullTime}</div>
                          <div className="text-xs text-muted-foreground">5 days/week</div>
                        </div>
                        
                        <div className="p-4 bg-secondary/50 rounded-lg">
                          <div className="font-semibold text-foreground">Part-Time</div>
                          <div className="text-xl font-heading font-bold text-foreground">{program.rates.partTime}</div>
                          <div className="text-xs text-muted-foreground">3 days/week</div>
                        </div>
                        
                        <div className="p-4 bg-accent/30 rounded-lg">
                          <div className="font-semibold text-foreground">Drop-In</div>
                          <div className="text-xl font-heading font-bold text-foreground">{program.rates.daily}</div>
                          <div className="text-xs text-muted-foreground">Per day</div>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <Button variant="outline" size="sm" className="w-full">
                          Request Detailed Pricing
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-2xl font-heading font-bold text-primary mb-2">10%</div>
              <div className="text-sm font-medium text-foreground mb-1">Sibling Discount</div>
              <div className="text-xs text-muted-foreground">Second child</div>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-2xl font-heading font-bold text-primary mb-2">15%</div>
              <div className="text-sm font-medium text-foreground mb-1">Multi-Child Discount</div>
              <div className="text-xs text-muted-foreground">Third+ child</div>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-2xl font-heading font-bold text-primary mb-2">5%</div>
              <div className="text-sm font-medium text-foreground mb-1">Military Discount</div>
              <div className="text-xs text-muted-foreground">Active duty families</div>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-2xl font-heading font-bold text-primary mb-2">$50</div>
              <div className="text-sm font-medium text-foreground mb-1">Registration Fee</div>
              <div className="text-xs text-muted-foreground">One-time only</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light/40 to-secondary/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Enroll Your Little Sprout?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss the perfect program for your child's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta">
              Schedule a Tour
            </Button>
            <Button size="xl" variant="outline">
              Start Enrollment Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;