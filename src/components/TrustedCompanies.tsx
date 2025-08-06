const TrustedCompanies = () => {
  const companies = [
    "TechCorp", "InnovateHub", "DataFlow", "CloudNine", "NextGen",
    "Digital+", "Synergy", "ProActive", "Momentum", "Catalyst",
    "Velocity", "Pinnacle", "Nexus", "Zenith", "Apex"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Companies Across the Globe
          </h2>
          <p className="text-muted-foreground">
            Join thousands of companies that trust OfficeKit for their HR management
          </p>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 logo-scroll">
            {/* First Set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center border border-border hover:border-primary/30 transition-colors">
                  <span className="text-muted-foreground font-semibold text-sm">
                    {company}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-12 w-32 bg-muted rounded-lg flex items-center justify-center border border-border hover:border-primary/30 transition-colors">
                  <span className="text-muted-foreground font-semibold text-sm">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;