import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function FutureOfHRTech() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link to="/resources/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <Badge className="mb-4">HR Technology</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Future of HR Technology: Trends to Watch in 2024
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 15, 2024</span>
              </div>
              <span>5 min read</span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-muted-foreground">Featured Image</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              The HR technology landscape is evolving at an unprecedented pace. As we move through 2024, 
              several key trends are reshaping how organizations manage their most valuable asset: their people.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              1. AI-Powered Recruitment and Talent Acquisition
            </h2>
            <p className="text-muted-foreground mb-6">
              Artificial Intelligence is revolutionizing how companies find, assess, and hire talent. From intelligent 
              resume screening to predictive analytics that identify the best candidates, AI is making recruitment 
              more efficient and effective than ever before.
            </p>
            <p className="text-muted-foreground mb-6">
              Key developments include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Automated candidate sourcing and matching</li>
              <li>AI-driven interview scheduling and coordination</li>
              <li>Bias reduction through algorithmic screening</li>
              <li>Predictive analytics for candidate success</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              2. Enhanced Employee Experience Platforms
            </h2>
            <p className="text-muted-foreground mb-6">
              Modern HR platforms are shifting from administrative tools to comprehensive employee experience 
              platforms. These solutions focus on creating seamless, consumer-grade experiences that employees 
              actually want to use.
            </p>
            <p className="text-muted-foreground mb-6">
              Features driving this trend include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Personalized dashboards and self-service portals</li>
              <li>Mobile-first design and functionality</li>
              <li>Integrated communication and collaboration tools</li>
              <li>Real-time feedback and recognition systems</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              3. Data-Driven People Analytics
            </h2>
            <p className="text-muted-foreground mb-6">
              Organizations are leveraging people analytics to make informed decisions about their workforce. 
              Advanced analytics provide insights into employee engagement, performance trends, and retention risks.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              4. Continuous Performance Management
            </h2>
            <p className="text-muted-foreground mb-6">
              The traditional annual performance review is being replaced by continuous feedback systems. 
              Real-time performance tracking and regular check-ins are becoming the new standard.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Looking Ahead: What This Means for Your Organization
            </h2>
            <p className="text-muted-foreground mb-6">
              As these trends continue to evolve, organizations that embrace modern HR technology will have 
              a significant competitive advantage in attracting, developing, and retaining top talent.
            </p>
            <p className="text-muted-foreground mb-6">
              The key is to choose solutions that not only meet your current needs but can adapt and grow 
              with your organization. OfficeKit is designed with these principles in mind, offering a 
              comprehensive platform that evolves with the latest HR technology trends.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Future of HR?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how OfficeKit can transform your HR operations with cutting-edge technology.
            </p>
            <Button size="lg">
              Schedule a Demo
            </Button>
          </div>

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/resources/blog/remote-work-best-practices" className="group">
                <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Badge className="mb-3">Remote Work</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Remote Work Best Practices: Building a Strong Virtual Team Culture
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Learn proven strategies for maintaining team cohesion and productivity...
                  </p>
                </div>
              </Link>
              <Link to="/resources/blog/employee-onboarding-guide" className="group">
                <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Badge className="mb-3">Onboarding</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    The Complete Guide to Employee Onboarding in 2024
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Transform your onboarding process with modern strategies...
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}