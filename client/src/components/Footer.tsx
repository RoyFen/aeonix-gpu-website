import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "services", label: t.nav.services },
    { id: "products", label: t.nav.products },
    { id: "why-us", label: t.nav.whyUs },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">A</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-bold leading-none">Aeonix</span>
                <span className="text-xs text-muted-foreground leading-none">Technology</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h3 className="text-lg font-bold mb-4 text-foreground">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
