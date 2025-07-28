import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Clock, Gift, Percent, Star } from 'lucide-react';

const PromoSection = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  const promos = [
    {
      id: 1,
      title: 'Weekend Party Package',
      description: '50% OFF for groups of 8+ people on weekends',
      discount: '50%',
      validUntil: 'Dec 31, 2024',
      terms: 'Valid for VIP & Deluxe rooms only',
      bgColor: 'from-primary to-accent',
      icon: Star,
    },
    {
      id: 2,
      title: 'Birthday Special',
      description: 'Free cake + 30% discount for birthday celebrations',
      discount: '30%',
      validUntil: 'Ongoing',
      terms: 'ID verification required',
      bgColor: 'from-accent to-gold',
      icon: Gift,
    },
    {
      id: 3,
      title: 'Midnight Session',
      description: 'Special rates for late night sessions (11PM - 6AM)',
      discount: '40%',
      validUntil: 'Limited time',
      terms: 'Advance booking required',
      bgColor: 'from-gold to-primary',
      icon: Clock,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promos.length]);

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promos.length);
  };

  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promos.length) % promos.length);
  };

  return (
    <section id="promo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Special <span className="text-accent">Promotions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exclusive offers and seasonal discounts
          </p>
        </div>

        {/* Promo Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-r shadow-elegant border-border">
            <CardContent className="p-0">
              <div className="relative h-80 md:h-96">
                {promos.map((promo, index) => {
                  const IconComponent = promo.icon;
                  return (
                    <div
                      key={promo.id}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentPromo 
                          ? 'opacity-100 transform translate-x-0' 
                          : index < currentPromo 
                            ? 'opacity-0 transform -translate-x-full'
                            : 'opacity-0 transform translate-x-full'
                      }`}
                    >
                      <div className={`h-full bg-gradient-to-br ${promo.bgColor} p-8 md:p-12 flex flex-col justify-center`}>
                        <div className="flex items-center mb-6">
                          <IconComponent className="w-8 h-8 text-white mr-4" />
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            Limited Time
                          </Badge>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <span className="text-6xl md:text-8xl font-heading font-black text-white mr-4">
                              {promo.discount}
                            </span>
                            <Percent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                            {promo.title}
                          </h3>
                          <p className="text-xl text-white/90 mb-4">
                            {promo.description}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div className="text-white/80 mb-4 sm:mb-0">
                            <p className="text-sm">Valid until: {promo.validUntil}</p>
                            <p className="text-xs">{promo.terms}</p>
                          </div>
                          <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                            Claim Offer
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevPromo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 border border-border hover:bg-background hover:shadow-neon-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextPromo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 border border-border hover:bg-background hover:shadow-neon-primary transition-all"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPromo 
                    ? 'bg-primary shadow-neon-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;