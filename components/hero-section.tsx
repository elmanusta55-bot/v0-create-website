"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span
            className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${
              heroSlides[currentSlide].badge === "CANLI"
                ? "bg-destructive text-destructive-foreground animate-pulse"
                : heroSlides[currentSlide].badge === "YAXINLAŞIR"
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {heroSlides[currentSlide].badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            {heroSlides[currentSlide].subtitle}
          </p>
          <p className="text-lg text-primary font-semibold mb-2">
            {heroSlides[currentSlide].date}
          </p>
          <p className="text-muted-foreground mb-8">
            {heroSlides[currentSlide].stadium}
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Play className="h-5 w-5" />
              Canlı İzlə
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              Ətraflı
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
