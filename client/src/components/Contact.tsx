import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t.contact.successMessage);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.emailInfo,
      value: "info@aeonix.tech",
      href: "mailto:info@aeonix.tech",
    },
    {
      icon: Phone,
      label: t.contact.phoneInfo,
      value: "+852 1234 5678",
      href: "tel:+85212345678",
    },
    {
      icon: MapPin,
      label: t.contact.addressInfo,
      value: "Hong Kong",
      href: null,
    },
    {
      icon: Clock,
      label: t.contact.hoursInfo,
      value: t.contact.hoursValue,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t.contact.nameLabel}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t.contact.emailLabel}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t.contact.phoneLabel}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t.contact.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    rows={5}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6"
                >
                  {isSubmitting ? t.contact.submitting : t.contact.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t.contact.infoTitle}</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={index} href={info.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
