import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-hr-tech",
    title: "The Future of HR Technology: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the HR technology landscape and how they'll impact your organization's people management strategies.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "HR Technology",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    slug: "remote-work-best-practices",
    title: "Remote Work Best Practices: Building a Strong Virtual Team Culture",
    excerpt: "Learn proven strategies for maintaining team cohesion, productivity, and employee engagement in a remote work environment.",
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Remote Work",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    slug: "employee-onboarding-guide",
    title: "The Complete Guide to Employee Onboarding in 2024",
    excerpt: "Transform your onboarding process with modern strategies that improve retention, engagement, and time-to-productivity for new hires.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    category: "Onboarding",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    slug: "payroll-compliance-updates",
    title: "Latest Payroll Compliance Updates: What HR Teams Need to Know",
    excerpt: "Stay ahead of regulatory changes with our comprehensive guide to the latest payroll compliance requirements and best practices.",
    author: "David Thompson",
    date: "March 8, 2024",
    category: "Compliance",
    readTime: "4 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    slug: "performance-management-strategies",
    title: "Modern Performance Management: Beyond Annual Reviews",
    excerpt: "Explore innovative approaches to performance management that drive continuous improvement and employee development.",
    author: "Lisa Park",
    date: "March 5, 2024",
    category: "Performance",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    slug: "diversity-inclusion-workplace",
    title: "Building Diversity and Inclusion in the Modern Workplace",
    excerpt: "Practical strategies for creating an inclusive workplace culture that attracts, retains, and empowers diverse talent.",
    author: "James Wilson",
    date: "March 3, 2024",
    category: "Diversity & Inclusion",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  }
];

const categories = ["All", "HR Technology", "Remote Work", "Onboarding", "Compliance", "Performance", "Diversity & Inclusion"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HR Insights & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay ahead with the latest trends, tips, and strategies for HR professionals from the OfficeKit team.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Get weekly insights delivered to your inbox
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-muted-foreground">Blog Image</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/resources/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}