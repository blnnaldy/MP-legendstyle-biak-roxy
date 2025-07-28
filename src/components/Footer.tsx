import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  MessageCircle,
  Mic
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-accent' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-primary' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Room Types', href: '#rooms' },
    { name: 'Promotions', href: '#promo' },
    { name: 'Booking', href: '#booking' },
  ];

  const services = [
    'VIP Karaoke Rooms',
    'Private Events',
    'Corporate Bookings',
    'Birthday Packages',
    'Group Reservations',
    'Food & Beverage',
  ];

  return (
    <footer id="contact" className="bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Mic className="w-8 h-8 text-primary mr-3" />
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  MASTERPIECE
                </h3>
                <p className="text-accent font-semibold">LEGEND STYLE</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Premium karaoke and KTV lounge experience in the heart of Jakarta. 
              Where memories are made and voices are heard.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`text-muted-foreground ${social.color} transition-colors p-2 rounded-lg hover:bg-muted/20`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">
                    Roxy Square Mall, Floor 3<br />
                    Jl. Kyai Tapa No. 1, Jakarta Barat<br />
                    DKI Jakarta 11750
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+62 821-1234-5678</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">info@masterpieceroxy.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-1">Operating Hours</p>
                  <div className="text-muted-foreground text-sm">
                    <p>Monday - Sunday</p>
                    <p className="text-gold font-semibold">24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Masterpiece Legend Style Biak Roxy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <Button variant="premium" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Equalizer Animation */}
        <div className="flex justify-center mt-8 opacity-30">
          <div className="flex items-end space-x-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary rounded-full animate-equalizer"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  height: '8px'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;