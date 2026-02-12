import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-4">Elite Chauffeur</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium private transportation for discerning clients. Punctuality, comfort, and discretion guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Airport Transfers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Corporate Rides</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Event Transportation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">City Tours</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-primary" />
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </li>
              <li className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-primary" />
                <a href="mailto:info@elitechauffeur.com">info@elitechauffeur.com</a>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>123 Luxury Avenue, Downtown</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Elite Chauffeur Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
