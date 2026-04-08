"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu, X, Search, Bell, ChevronLeft, ChevronRight, Play, Circle,
  Clock, Calendar, MapPin, Facebook, Instagram, Twitter, Youtube, Mail, Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// ==================== DATA ====================

const navItems = [
  { label: "Ana Səhifə", href: "/" },
  { label: "Canlı Nəticələr", href: "/live" },
  { label: "Matçlar", href: "/matches" },
  { label: "Komandalar", href: "/teams" },
  { label: "Oyunçular", href: "/players" },
  { label: "Xəbərlər", href: "/news" },
]

const heroSlides = [
  {
    id: 1,
    title: "QARABAĞ - NEFTÇI",
    subtitle: "Premyer Liqa - 15-ci tur",
    date: "15 Aprel 2026, 20:00",
    stadium: "Tofiq Bəhramov adına Respublika Stadionu",
    badge: "CANLI",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=600&fit=crop"
  },
  {
    id: 2,
    title: "MİLLİ KOMANDA",
    subtitle: "Millətlər Liqası - Seçmə mərhələ",
    date: "Növbəti matç: 20 Aprel",
    stadium: "Bakı Olimpiya Stadionu",
    badge: "YAXINLAŞIR",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1920&h=600&fit=crop"
  },
  {
    id: 3,
    title: "TRANSFER XƏBƏRLƏRİ",
    subtitle: "Yay transfer pəncərəsi açılır",
    date: "1 İyun 2026",
    stadium: "Ən son transferlər haqqında məlumat",
    badge: "XƏBƏR",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=600&fit=crop"
  }
]

const liveMatches = [
  { id: 1, homeTeam: "Qarabağ", awayTeam: "Neftçi", homeScore: 2, awayScore: 1, minute: 67, league: "Premyer Liqa" },
  { id: 2, homeTeam: "Zirə", awayTeam: "Səbail", homeScore: 0, awayScore: 0, minute: 23, league: "Premyer Liqa" },
  { id: 3, homeTeam: "Sumqayıt", awayTeam: "Kəpəz", homeScore: 1, awayScore: 2, minute: 89, league: "Premyer Liqa" },
  { id: 4, homeTeam: "Real Madrid", awayTeam: "Barcelona", homeScore: 3, awayScore: 2, minute: 78, league: "La Liga" },
  { id: 5, homeTeam: "Man City", awayTeam: "Liverpool", homeScore: 1, awayScore: 1, minute: 45, league: "Premier League" },
  { id: 6, homeTeam: "Bayern", awayTeam: "Dortmund", homeScore: 2, awayScore: 0, minute: 56, league: "Bundesliga" }
]

const standings = {
  premyerLiqa: [
    { pos: 1, team: "Qarabağ", played: 25, won: 20, drawn: 3, lost: 2, gd: "+42", points: 63 },
    { pos: 2, team: "Neftçi", played: 25, won: 17, drawn: 4, lost: 4, gd: "+28", points: 55 },
    { pos: 3, team: "Zirə", played: 25, won: 14, drawn: 6, lost: 5, gd: "+18", points: 48 },
    { pos: 4, team: "Sumqayıt", played: 25, won: 12, drawn: 7, lost: 6, gd: "+12", points: 43 },
    { pos: 5, team: "Səbail", played: 25, won: 11, drawn: 5, lost: 9, gd: "+5", points: 38 },
    { pos: 6, team: "Kəpəz", played: 25, won: 9, drawn: 7, lost: 9, gd: "+2", points: 34 },
    { pos: 7, team: "Qəbələ", played: 25, won: 8, drawn: 6, lost: 11, gd: "-8", points: 30 },
    { pos: 8, team: "Turan Tovuz", played: 25, won: 6, drawn: 5, lost: 14, gd: "-15", points: 23 },
  ],
  laLiga: [
    { pos: 1, team: "Real Madrid", played: 32, won: 24, drawn: 5, lost: 3, gd: "+48", points: 77 },
    { pos: 2, team: "Barcelona", played: 32, won: 23, drawn: 6, lost: 3, gd: "+52", points: 75 },
    { pos: 3, team: "Atletico Madrid", played: 32, won: 20, drawn: 7, lost: 5, gd: "+32", points: 67 },
    { pos: 4, team: "Girona", played: 32, won: 18, drawn: 8, lost: 6, gd: "+25", points: 62 },
    { pos: 5, team: "Athletic Bilbao", played: 32, won: 17, drawn: 9, lost: 6, gd: "+22", points: 60 },
  ]
}

const topPlayers = [
  { id: 1, name: "Mahir Emreli", team: "Qarabağ", position: "Hücumçu", goals: 18, assists: 7, rating: 8.2, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop&crop=face" },
  { id: 2, name: "Əli Əhmədov", team: "Neftçi", position: "Yarımmüdafiəçi", goals: 12, assists: 14, rating: 7.9, image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=200&h=200&fit=crop&crop=face" },
  { id: 3, name: "Rəşad Sadıqov", team: "Zirə", position: "Müdafiəçi", goals: 4, assists: 8, rating: 7.8, image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=200&h=200&fit=crop&crop=face" },
  { id: 4, name: "Toral Bayramov", team: "Sumqayıt", position: "Qapıçı", goals: 0, assists: 2, rating: 7.7, image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&h=200&fit=crop&crop=face" }
]

const news = [
  { id: 1, title: "Qarabağ Çempionlar Liqasına vəsiqə qazandı", excerpt: "Azərbaycan çempionu Qarabağ, növbəti mövsüm Çempionlar Liqasında mübarizə aparacaq...", category: "Çempionlar Liqası", time: "2 saat əvvəl", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop", featured: true },
  { id: 2, title: "Milli komanda heyəti açıqlandı", excerpt: "Baş məşqçi növbəti matç üçün 23 nəfərlik heyəti elan etdi.", category: "Milli Komanda", time: "4 saat əvvəl", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop", featured: false },
  { id: 3, title: "Neftçi yeni transfer ilə gücləndi", excerpt: "Paytaxt klubu Braziliyalı yarımmüdafiəçi ilə müqavilə imzaladı.", category: "Transfer", time: "6 saat əvvəl", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop", featured: false },
  { id: 4, title: "Premyer Liqa: 15-ci turun icmalı", excerpt: "Həftənin ən yaxşı qolları və anları barədə ətraflı məlumat.", category: "Premyer Liqa", time: "8 saat əvvəl", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=400&fit=crop", featured: false }
]

const upcomingMatches = [
  { id: 1, homeTeam: "Neftçi", awayTeam: "Qarabağ", date: "20 Aprel", time: "20:00", stadium: "Dalqa Arena", league: "Premyer Liqa" },
  { id: 2, homeTeam: "Azərbaycan", awayTeam: "Slovakiya", date: "25 Aprel", time: "21:00", stadium: "Bakı Olimpiya Stadionu", league: "Millətlər Liqası" },
  { id: 3, homeTeam: "Zirə", awayTeam: "Sumqayıt", date: "28 Aprel", time: "18:00", stadium: "ASCO Arena", league: "Premyer Liqa" },
  { id: 4, homeTeam: "Səbail", awayTeam: "Kəpəz", date: "28 Aprel", time: "20:00", stadium: "Səbail Stadionu", league: "Premyer Liqa" }
]

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

// ==================== HEADER COMPONENT ====================

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Futbol<span className="text-primary">AZ</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Daxil ol
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <nav className={cn("lg:hidden overflow-hidden transition-all duration-300", isMenuOpen ? "max-h-96 pb-4" : "max-h-0")}>
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">Daxil ol</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

// ==================== HERO SECTION ====================

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${heroSlides[currentSlide].badge === "CANLI" ? "bg-destructive text-destructive-foreground animate-pulse" : heroSlides[currentSlide].badge === "YAXINLAŞIR" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
            {heroSlides[currentSlide].badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">{heroSlides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">{heroSlides[currentSlide].subtitle}</p>
          <p className="text-lg text-primary font-semibold mb-2">{heroSlides[currentSlide].date}</p>
          <p className="text-muted-foreground mb-8">{heroSlides[currentSlide].stadium}</p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Play className="h-5 w-5" />
              Canlı İzlə
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">Ətraflı</Button>
          </div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/50 hover:bg-muted-foreground"}`} />
        ))}
      </div>
    </section>
  )
}

// ==================== LIVE MATCHES ====================

function LiveMatches() {
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("live-matches-container")
    if (container) {
      const scrollAmount = direction === "left" ? -320 : 320
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-card border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Circle className="h-3 w-3 fill-destructive text-destructive animate-pulse" />
            <h2 className="text-2xl font-bold text-foreground">Canlı Nəticələr</h2>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{liveMatches.length} matç</Badge>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div id="live-matches-container" className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {liveMatches.map((match) => (
            <Card key={match.id} className="min-w-[300px] bg-secondary border-border hover:border-primary/50 transition-colors cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground">{match.league}</span>
                  <div className="flex items-center gap-2">
                    <Circle className="h-2 w-2 fill-destructive text-destructive animate-pulse" />
                    <span className="text-xs font-semibold text-destructive">{match.minute}&apos;</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">{match.homeTeam.substring(0, 2).toUpperCase()}</div>
                      <span className="font-medium text-foreground">{match.homeTeam}</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{match.homeScore}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">{match.awayTeam.substring(0, 2).toUpperCase()}</div>
                      <span className="font-medium text-foreground">{match.awayTeam}</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{match.awayScore}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="w-full text-center text-sm text-primary font-medium group-hover:underline">Matç detalları</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== STANDINGS ====================

function StandingsSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-foreground">Sıralama Cədvəli</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="premyerLiqa">
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent px-4">
            <TabsTrigger value="premyerLiqa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary">Premyer Liqa</TabsTrigger>
            <TabsTrigger value="laLiga" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary">La Liga</TabsTrigger>
          </TabsList>

          <TabsContent value="premyerLiqa" className="mt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-4">#</th>
                    <th className="text-left py-3 px-4">Komanda</th>
                    <th className="text-center py-3 px-4">O</th>
                    <th className="text-center py-3 px-4">Q</th>
                    <th className="text-center py-3 px-4">X</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.premyerLiqa.map((team) => (
                    <tr key={team.pos} className="border-b border-border/50 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <td className="py-3 px-4">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${team.pos <= 2 ? "bg-primary text-primary-foreground" : team.pos <= 4 ? "bg-accent text-accent-foreground" : team.pos >= 7 ? "bg-destructive/20 text-destructive" : "bg-muted text-muted-foreground"}`}>{team.pos}</span>
                      </td>
                      <td className="py-3 px-4 font-medium text-foreground">{team.team}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{team.played}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{team.gd}</td>
                      <td className="text-center py-3 px-4 font-bold text-foreground">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="laLiga" className="mt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-4">#</th>
                    <th className="text-left py-3 px-4">Komanda</th>
                    <th className="text-center py-3 px-4">O</th>
                    <th className="text-center py-3 px-4">Q</th>
                    <th className="text-center py-3 px-4">X</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.laLiga.map((team) => (
                    <tr key={team.pos} className="border-b border-border/50 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <td className="py-3 px-4">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${team.pos <= 2 ? "bg-primary text-primary-foreground" : team.pos <= 4 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{team.pos}</span>
                      </td>
                      <td className="py-3 px-4 font-medium text-foreground">{team.team}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{team.played}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{team.gd}</td>
                      <td className="text-center py-3 px-4 font-bold text-foreground">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
        <div className="p-4 border-t border-border">
          <button className="w-full text-center text-sm text-primary font-medium hover:underline">Tam cədvələ bax</button>
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== TOP PLAYERS ====================

function TopPlayers() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Ən Yaxşı Oyunçular</h2>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">Hamısına bax <ChevronRight className="h-4 w-4" /></button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topPlayers.map((player, index) => (
          <Card key={player.id} className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer group overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-stretch">
                <div className="relative w-32 h-36 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${player.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card" />
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{index + 1}</div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{player.name}</h3>
                      <p className="text-sm text-muted-foreground">{player.team} - {player.position}</p>
                    </div>
                    <Badge variant="secondary" className={`${player.rating >= 8 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>{player.rating}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{player.goals}</p>
                      <p className="text-xs text-muted-foreground">Qol</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{player.assists}</p>
                      <p className="text-xs text-muted-foreground">Assist</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

// ==================== LATEST NEWS ====================

function LatestNews() {
  const featuredNews = news.find((n) => n.featured)
  const otherNews = news.filter((n) => !n.featured)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Son Xəbərlər</h2>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">Bütün xəbərlər <ChevronRight className="h-4 w-4" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredNews && (
          <Card className="md:row-span-2 bg-card border-border overflow-hidden group cursor-pointer">
            <CardContent className="p-0 h-full">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${featuredNews.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-primary text-primary-foreground">{featuredNews.category}</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{featuredNews.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{featuredNews.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{featuredNews.time}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        <div className="space-y-4">
          {otherNews.map((item) => (
            <Card key={item.id} className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-32 h-28 bg-cover bg-center shrink-0 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="flex-1 p-4">
                    <Badge variant="secondary" className="mb-2 text-xs bg-secondary text-secondary-foreground">{item.category}</Badge>
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== UPCOMING MATCHES ====================

function UpcomingMatches() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Yaxınlaşan Matçlar
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingMatches.map((match) => (
          <div key={match.id} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-xs border-border text-muted-foreground">{match.league}</Badge>
              <span className="text-sm font-semibold text-primary">{match.date}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">{match.homeTeam.substring(0, 2).toUpperCase()}</div>
                <span className="font-medium text-foreground text-sm">{match.homeTeam}</span>
              </div>
              <span className="text-lg font-bold text-accent">{match.time}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground text-sm">{match.awayTeam}</span>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">{match.awayTeam.substring(0, 2).toUpperCase()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{match.stadium}</span>
            </div>
          </div>
        ))}
        <button className="w-full text-center text-sm text-primary font-medium hover:underline pt-2">Bütün matçlara bax</button>
      </CardContent>
    </Card>
  )
}

// ==================== FOOTER ====================

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Futbol<span className="text-primary">AZ</span></span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">Azərbaycan futbolunun ən böyük portalı. Canlı nəticələr, xəbərlər, statistika və daha çox.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Sayt</h3>
            <ul className="space-y-3">
              {footerLinks.sayt.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Liqalar</h3>
            <ul className="space-y-3">
              {footerLinks.liqalar.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Əlaqə</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /><span>info@futbolaz.com</span></li>
              <li className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /><span>+994 12 555 55 55</span></li>
              <li className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /><span>Bakı, Azərbaycan</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 FutbolAZ. Bütün hüquqlar qorunur.</p>
          <div className="flex items-center gap-6">
            {footerLinks.digər.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ==================== MAIN PAGE ====================

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LiveMatches />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <LatestNews />
              <TopPlayers />
            </div>
            <div className="space-y-8">
              <StandingsSection />
              <UpcomingMatches />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
