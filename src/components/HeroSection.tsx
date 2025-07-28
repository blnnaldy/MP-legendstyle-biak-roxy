import { Button } from '@/components/ui/button';
import { Play, Star, Users, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-karaoke.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium Karaoke Lounge Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground mb-4">
            <span className="text-primary">MASTERPIECE</span>
            <br />
            <span className="text-accent">LEGEND STYLE</span>
            <br />
            <span className="text-gold text-4xl md:text-5xl lg:text-6xl">Biak Roxy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Premium Karaoke & KTV Lounge Experience in the Heart of Jakarta
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
            <Star className="w-5 h-5 text-gold mr-2" />
            <span className="text-foreground font-medium">Premium Rooms</span>
          </div>
          <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
            <Users className="w-5 h-5 text-primary mr-2" />
            <span className="text-foreground font-medium">VIP Service</span>
          </div>
          <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
            <Calendar className="w-5 h-5 text-accent mr-2" />
            <span className="text-foreground font-medium">Open 24/7</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="premium" size="xl" className="animate-glow-pulse">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Room
          </Button>
          <Button variant="neon" size="xl">
            <Play className="w-5 h-5 mr-2" />
            Virtual Tour
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Equalizer Animation */}
      <div className="absolute bottom-4 right-4 flex items-end space-x-1 opacity-70">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-primary rounded-full animate-equalizer"
            style={{
              animationDelay: `${i * 0.2}s`,
              height: '20px'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;