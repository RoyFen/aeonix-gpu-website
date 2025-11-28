import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  const navItems = [
    { id: "services", label: t.nav.services },
    { id: "products", label: t.nav.products },
    { id: "why-us", label: t.nav.whyUs },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold leading-none">Aeonix</span>
              <span className="text-xs text-muted-foreground leading-none">Technology</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary"
              >
                {item.label}
              </Button>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2 text-foreground hover:text-primary"
              title={language === "zh" ? "Switch to English" : "切換至繁體中文"}
            >
              <Languages className="w-5 h-5" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              {t.nav.consultNow}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-foreground hover:text-primary"
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Mobile Language Toggle */}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="justify-start text-foreground hover:text-primary"
              >
                <Languages className="w-5 h-5 mr-2" />
                {language === "zh" ? "English" : "繁體中文"}
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                {t.nav.consultNow}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
