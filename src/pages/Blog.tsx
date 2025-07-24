import { Calendar, User, Download, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Signs Your Toddler is Ready for Daycare",
      excerpt: "Learn the key developmental milestones that indicate your child is prepared for their first daycare experience.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Parenting Tips",
      featured: true
    },
    {
      title: "Building Independence in Young Children",
      excerpt: "Practical strategies to help your little one develop confidence and self-reliance in age-appropriate ways.",
      author: "Mike Chen",
      date: "March 8, 2024", 
      readTime: "7 min read",
      category: "Child Development",
      featured: false
    },
    {
      title: "Seattle Family Fun: Spring Activities for Toddlers",
      excerpt: "Discover the best outdoor and indoor activities around Seattle perfect for families with young children.",
      author: "Lisa Rodriguez",
      date: "March 1, 2024",
      readTime: "6 min read", 
      category: "Local Events",
      featured: false
    },
    {
      title: "Nutrition Tips for Growing Minds",
      excerpt: "How to fuel your child's brain development with the right foods and establish healthy eating habits early.",
      author: "Sarah Johnson",
      date: "February 22, 2024",
      readTime: "8 min read",
      category: "Health & Nutrition",
      featured: false
    },
    {
      title: "Managing Separation Anxiety at Drop-Off",
      excerpt: "Expert strategies to help both you and your child handle those tough goodbye moments with confidence.",
      author: "Mike Chen", 
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Parenting Tips",
      featured: false
    }
  ];

  const resources = [
    {
      title: "Preparing Your Baby for Daycare",
      description: "Complete checklist and timeline for a smooth daycare transition",
      type: "PDF Guide",
      pages: "12 pages"
    },
    {
      title: "Age-Appropriate Developmental Milestones",
      description: "Track your child's growth with our comprehensive milestone chart",
      type: "PDF Chart", 
      pages: "8 pages"
    },
    {
      title: "Healthy Lunch Ideas for Toddlers",
      description: "30 nutritious and fun lunch recipes your little one will love",
      type: "Recipe Book",
      pages: "16 pages"
    },
    {
      title: "Emergency Contact Information Template",
      description: "Keep important contacts organized and easily accessible",
      type: "PDF Template",
      pages: "2 pages"
    }
  ];

  const categories = ["All Posts", "Parenting Tips", "Child Development", "Health & Nutrition", "Local Events"];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/40 to-secondary/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Parenting Resources & Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tips, local events, and practical advice to support your parenting journey and your child's development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Article
            </h2>
          </div>

          {blogPosts
            .filter(post => post.featured)
            .map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary-light/20 to-secondary/30 p-12 flex items-center">
                    <div>
                      <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="default" size="lg">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/20 to-primary-light/30 min-h-[300px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Featured Article Image</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "secondary"} 
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Recent Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest parenting tips and child development insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/20 h-48 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Article Image</p>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Free Downloadable Guides
            </h2>
            <p className="text-lg text-muted-foreground">
              Practical resources to support your parenting journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                          <span>{resource.pages}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary-light/40 to-secondary/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Stay Updated with Little Sprouts
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly parenting tips, developmental insights, and Seattle family event updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" variant="cta" className="px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;