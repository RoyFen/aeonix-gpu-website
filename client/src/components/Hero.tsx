import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-gpu.png"
          alt="High-end GPU"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">{t.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.hero.title1}
            </span>
            <br />
            <span className="text-foreground">{t.hero.title2}</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed whitespace-pre-line">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
            >
              {t.hero.consultBtn}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            >
              {t.hero.learnMore}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.hero.stat1}</div>
              <div className="text-sm text-muted-foreground">{t.hero.stat1Label}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t.hero.stat2}</div>
              <div className="text-sm text-muted-foreground">{t.hero.stat2Label}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.hero.stat3}</div>
              <div className="text-sm text-muted-foreground">{t.hero.stat3Label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
