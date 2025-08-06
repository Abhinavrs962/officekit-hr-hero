import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is OfficeKit suitable for small businesses?",
      answer: "Absolutely! OfficeKit is designed to scale with your business. Our Starter plan is perfect for small teams (up to 25 employees) and includes all core HR features. As your team grows, you can easily upgrade to our Growth or Enterprise plans."
    },
    {
      question: "Can I integrate OfficeKit with existing tools?",
      answer: "Yes, OfficeKit offers robust integration capabilities with popular tools like Slack, Microsoft Teams, Google Workspace, QuickBooks, and many more. Our API also allows for custom integrations with your existing systems."
    },
    {
      question: "Is there customer support available?",
      answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our Enterprise customers also get dedicated account managers and priority support with guaranteed response times."
    },
    {
      question: "How secure is my employee data?",
      answer: "Security is our top priority. OfficeKit uses enterprise-grade encryption (AES-256), complies with GDPR, SOC 2, and ISO 27001 standards. We also provide regular security audits, role-based access controls, and automatic data backups."
    },
    {
      question: "What's included in the free trial?",
      answer: "Our 14-day free trial includes full access to all features across all plans - no restrictions. You can test recruitment management, payroll processing, attendance tracking, performance reviews, and more with up to 25 employees."
    },
    {
      question: "How long does implementation take?",
      answer: "Most organizations are up and running within 1-2 weeks. Our implementation team provides data migration assistance, training sessions, and ongoing support to ensure a smooth transition from your current system."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't see your question here, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto section-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;