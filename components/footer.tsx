import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  sayt: [
    { label: "Ana Səhifə", href: "/" },
    { label: "Canlı Nəticələr", href: "/live" },
    { label: "Matçlar", href: "/matches" },
    { label: "Xəbərlər", href: "/news" },
  ],
  liqalar: [
    { label: "Premyer Liqa", href: "/leagues/premier" },
    { label: "Birinci Liqa", href: "/leagues/first" },
    { label: "Çempionlar Liqası", href: "/leagues/champions" },
    { label: "Avropa Liqası", href: "/leagues/europa" },
  ],
  digər: [
    { label: "Haqqımızda", href: "/about" },
    { label: "Əlaqə", href: "/contact" },
    { label: "Reklam", href: "/advertising" },
    { label: "Məxfilik", href: "/privacy" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                Futbol<span className="text-primary">AZ</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Azərbaycan futbolunun ən böyük portalı. Canlı nəticələr, xəbərlər, statistika və daha çox.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Sayt</h3>
            <ul className="space-y-3">
              {footerLinks.sayt.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Liqalar</h3>
            <ul className="space-y-3">
              {footerLinks.liqalar.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Əlaqə</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@futbolaz.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+994 12 555 55 55</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bakı, Azərbaycan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 FutbolAZ. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.digər.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
