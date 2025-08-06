import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="section-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Simplify HR for Everyone — 
              <span className="gradient-text"> Smart, Fast & Intuitive</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              OfficeKit makes human resource management easy and seamless, so your team can focus on what truly matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="btn-cta group">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Button variant="outline" className="btn-outline group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">5000+</span>
                Companies Trust Us
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">99.9%</span>
                Uptime Guarantee
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">24/7</span>
                Expert Support
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="section-fade-in lg:pl-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-card rounded-3xl shadow-strong p-8 border border-border">
                <div className="space-y-4">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">HR Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-light rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary">1,247</div>
                      <div className="text-sm text-muted-foreground">Total Employees</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-muted-foreground">Attendance Rate</div>
                    </div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 70, 55, 80, 65, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-primary rounded-sm flex-1 opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">Weekly Performance</div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex space-x-2">
                    <div className="bg-blue-50 text-blue-700 text-xs px-3 py-2 rounded-full">
                      Add Employee
                    </div>
                    <div className="bg-purple-50 text-purple-700 text-xs px-3 py-2 rounded-full">
                      Generate Report
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;