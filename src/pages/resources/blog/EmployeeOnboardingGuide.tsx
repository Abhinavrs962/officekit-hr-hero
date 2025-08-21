import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployeeOnboardingGuide() {
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
            <Badge className="mb-4">Onboarding</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Complete Guide to Employee Onboarding in 2024
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Emily Rodriguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 10, 2024</span>
              </div>
              <span>6 min read</span>
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
              A well-designed onboarding process is crucial for new employee success. It sets the tone for their 
              entire journey with your organization and significantly impacts retention rates.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              The Modern Onboarding Challenge
            </h2>
            <p className="text-muted-foreground mb-6">
              Today's employees expect a seamless, engaging onboarding experience that goes beyond paperwork 
              and basic introductions. They want to feel valued, prepared, and excited about their new role 
              from day one.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Pre-Onboarding: Setting the Stage
            </h2>
            <p className="text-muted-foreground mb-6">
              The onboarding process should begin before the employee's first day. This pre-boarding phase 
              helps new hires feel prepared and reduces first-day anxiety.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Send welcome packages with company swag and essential information</li>
              <li>Provide access to necessary systems and accounts</li>
              <li>Share the first-week schedule and expectations</li>
              <li>Connect them with their buddy or mentor</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Week One: Making a Great First Impression
            </h2>
            <p className="text-muted-foreground mb-6">
              The first week is critical for setting expectations and helping new employees feel welcome 
              and prepared for success.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Months 1-3: Building Competence and Confidence
            </h2>
            <p className="text-muted-foreground mb-6">
              Extended onboarding helps ensure new employees are fully integrated and productive in their roles.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Measuring Onboarding Success
            </h2>
            <p className="text-muted-foreground mb-6">
              Track key metrics to continuously improve your onboarding process:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Time to productivity</li>
              <li>90-day retention rate</li>
              <li>New hire satisfaction scores</li>
              <li>Manager feedback on readiness</li>
            </ul>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Streamline Your Onboarding Process
            </h3>
            <p className="text-muted-foreground mb-6">
              See how OfficeKit can help you create exceptional onboarding experiences.
            </p>
            <Button size="lg">
              Explore Onboarding Features
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}