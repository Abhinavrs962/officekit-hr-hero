import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function RemoteWorkBestPractices() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/resources/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <Badge className="mb-4">Remote Work</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Remote Work Best Practices: Building a Strong Virtual Team Culture
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Michael Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 12, 2024</span>
              </div>
              <span>7 min read</span>
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

          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-muted-foreground">Featured Image</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Remote work has transformed from a temporary solution to a permanent fixture in the modern workplace. 
              Building a strong virtual team culture requires intentional strategies and the right tools.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              1. Establish Clear Communication Protocols
            </h2>
            <p className="text-muted-foreground mb-6">
              Effective communication is the backbone of successful remote teams. Establish clear guidelines 
              for when and how team members should communicate, ensuring everyone stays connected and informed.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Define response time expectations for different communication channels</li>
              <li>Schedule regular check-ins and team meetings</li>
              <li>Use asynchronous communication for non-urgent matters</li>
              <li>Implement video calls for important discussions</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              2. Foster Team Connection and Engagement
            </h2>
            <p className="text-muted-foreground mb-6">
              Building relationships in a virtual environment requires deliberate effort. Create opportunities 
              for team members to connect on both professional and personal levels.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Host virtual coffee breaks and informal meetups</li>
              <li>Organize online team-building activities</li>
              <li>Celebrate achievements and milestones virtually</li>
              <li>Encourage sharing of personal updates during meetings</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              3. Maintain Work-Life Balance
            </h2>
            <p className="text-muted-foreground mb-6">
              Remote work can blur the boundaries between personal and professional life. Help your team 
              maintain healthy boundaries to prevent burnout and maintain productivity.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              4. Leverage Technology Effectively
            </h2>
            <p className="text-muted-foreground mb-6">
              The right tools can make or break a remote team's success. Invest in technology that 
              facilitates collaboration, communication, and productivity.
            </p>

            <p className="text-muted-foreground mb-6">
              OfficeKit's remote work features help teams stay connected and productive, with tools for 
              attendance tracking, communication, and performance management designed specifically for 
              distributed teams.
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Optimize Your Remote Team Management
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how OfficeKit can help you build stronger remote team culture.
            </p>
            <Button size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}