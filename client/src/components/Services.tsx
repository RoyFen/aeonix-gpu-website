import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ShoppingCart, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: DollarSign,
      title: t.services.buy.title,
      description: t.services.buy.description,
      image: "/service-buy.png",
      features: [t.services.buy.feature1, t.services.buy.feature2, t.services.buy.feature3],
    },
    {
      icon: ShoppingCart,
      title: t.services.sell.title,
      description: t.services.sell.description,
      image: "/service-sell.png",
      features: [t.services.sell.feature1, t.services.sell.feature2, t.services.sell.feature3],
    },
    {
      icon: MessageSquare,
      title: t.services.consult.title,
      description: t.services.consult.description,
      image: "/service-consult.png",
      features: [t.services.consult.feature1, t.services.consult.feature2, t.services.consult.feature3],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
