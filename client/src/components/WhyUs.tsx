import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, TrendingUp, Users, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Shield,
      title: t.whyUs.quality.title,
      description: t.whyUs.quality.description,
    },
    {
      icon: Clock,
      title: t.whyUs.speed.title,
      description: t.whyUs.speed.description,
    },
    {
      icon: Award,
      title: t.whyUs.professional.title,
      description: t.whyUs.professional.description,
    },
    {
      icon: TrendingUp,
      title: t.whyUs.fairPrice.title,
      description: t.whyUs.fairPrice.description,
    },
    {
      icon: Users,
      title: t.whyUs.reputation.title,
      description: t.whyUs.reputation.description,
    },
    {
      icon: Headphones,
      title: t.whyUs.support.title,
      description: t.whyUs.support.description,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.whyUs.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-3 text-foreground">{t.whyUs.ctaTitle}</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {t.whyUs.ctaSubtitle}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              {t.whyUs.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
