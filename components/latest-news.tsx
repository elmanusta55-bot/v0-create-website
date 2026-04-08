"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ChevronRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Qarabağ Çempionlar Liqasına vəsiqə qazandı",
    excerpt: "Azərbaycan çempionu Qarabağ, növbəti mövsüm Çempionlar Liqasında mübarizə aparacaq...",
    category: "Çempionlar Liqası",
    time: "2 saat əvvəl",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Milli komanda heyəti açıqlandı",
    excerpt: "Baş məşqçi növbəti matç üçün 23 nəfərlik heyəti elan etdi.",
    category: "Milli Komanda",
    time: "4 saat əvvəl",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Neftçi yeni transfer ilə gücləndi",
    excerpt: "Paytaxt klubu Braziliyalı yarımmüdafiəçi ilə müqavilə imzaladı.",
    category: "Transfer",
    time: "6 saat əvvəl",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Premyer Liqa: 15-ci turun icmalı",
    excerpt: "Həftənin ən yaxşı qolları və anları barədə ətraflı məlumat.",
    category: "Premyer Liqa",
    time: "8 saat əvvəl",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=400&fit=crop",
    featured: false
  }
]

export function LatestNews() {
  const featuredNews = news.find((n) => n.featured)
  const otherNews = news.filter((n) => !n.featured)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Son Xəbərlər</h2>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
          Bütün xəbərlər <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured News */}
        {featuredNews && (
          <Card className="md:row-span-2 bg-card border-border overflow-hidden group cursor-pointer">
            <CardContent className="p-0 h-full">
              <div className="relative h-full min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${featuredNews.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-primary text-primary-foreground">
                    {featuredNews.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{featuredNews.time}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Other News */}
        <div className="space-y-4">
          {otherNews.map((item) => (
            <Card
              key={item.id}
              className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className="w-32 h-28 bg-cover bg-center shrink-0 group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="flex-1 p-4">
                    <Badge variant="secondary" className="mb-2 text-xs bg-secondary text-secondary-foreground">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
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
