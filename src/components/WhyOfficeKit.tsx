import { BarChart3, Shield, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyOfficeKit = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Reports",
      description: "Access actionable insights instantly with intelligent reporting.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Robust Data Security",
      description: "Enterprise-grade security to keep your data protected.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assured",
      description: "Stay compliant with changing labor laws and regulations.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Quick Connect",
      description: "Lightning-fast support and integration made simple.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why OfficeKit Stands Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why businesses across the globe choose OfficeKit as their HRMS platform of choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card text-center group"
              >
                <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/about-us">
            <Button className="btn-outline group">
              Learn More
              <Zap className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyOfficeKit;