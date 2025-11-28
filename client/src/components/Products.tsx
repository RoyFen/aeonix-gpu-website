import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  const productCategories = [
    {
      brand: "NVIDIA",
      color: "from-green-500 to-green-600",
      models: [
        { name: "RTX 4090", tier: t.products.tierFlagship, hot: true },
        { name: "RTX 4080", tier: t.products.tierHigh, hot: true },
        { name: "RTX 4070 Ti", tier: t.products.tierHigh, hot: false },
        { name: "RTX 4070", tier: t.products.tierMidHigh, hot: false },
        { name: "RTX 4060 Ti", tier: t.products.tierMid, hot: false },
        { name: "RTX 3090", tier: t.products.tierUsedFlagship, hot: false },
      ],
    },
    {
      brand: "AMD",
      color: "from-red-500 to-red-600",
      models: [
        { name: "RX 7900 XTX", tier: t.products.tierFlagship, hot: true },
        { name: "RX 7900 XT", tier: t.products.tierHigh, hot: false },
        { name: "RX 7800 XT", tier: t.products.tierMidHigh, hot: true },
        { name: "RX 7700 XT", tier: t.products.tierMid, hot: false },
        { name: "RX 6900 XT", tier: t.products.tierUsedFlagship, hot: false },
        { name: "RX 6800 XT", tier: t.products.tierUsedHigh, hot: false },
      ],
    },
  ];

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/gpu-collection.png"
          alt="GPU Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.products.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Brand Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category.brand}</h3>
                    <p className="text-sm text-muted-foreground">Graphics Cards</p>
                  </div>
                </div>

                {/* Models List */}
                <div className="space-y-3">
                  {category.models.map((model, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {model.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {model.hot && (
                          <Badge variant="default" className="bg-accent text-accent-foreground">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {t.products.hot}
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-primary/30 text-muted-foreground">
                          {model.tier}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t.products.moreInfo}
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:text-accent transition-colors underline ml-1"
            >
              {t.products.contactUs}
            </button>
            {" "}{t.products.forDetails}
          </p>
        </div>
      </div>
    </section>
  );
}
