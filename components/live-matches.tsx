"use client"

import { useState } from "react"
import { Circle, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const liveMatches = [
  {
    id: 1,
    homeTeam: "Qarabağ",
    awayTeam: "Neftçi",
    homeScore: 2,
    awayScore: 1,
    minute: 67,
    status: "live",
    league: "Premyer Liqa"
  },
  {
    id: 2,
    homeTeam: "Zirə",
    awayTeam: "Səbail",
    homeScore: 0,
    awayScore: 0,
    minute: 23,
    status: "live",
    league: "Premyer Liqa"
  },
  {
    id: 3,
    homeTeam: "Sumqayıt",
    awayTeam: "Kəpəz",
    homeScore: 1,
    awayScore: 2,
    minute: 89,
    status: "live",
    league: "Premyer Liqa"
  },
  {
    id: 4,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: 3,
    awayScore: 2,
    minute: 78,
    status: "live",
    league: "La Liga"
  },
  {
    id: 5,
    homeTeam: "Man City",
    awayTeam: "Liverpool",
    homeScore: 1,
    awayScore: 1,
    minute: 45,
    status: "live",
    league: "Premier League"
  },
  {
    id: 6,
    homeTeam: "Bayern",
    awayTeam: "Dortmund",
    homeScore: 2,
    awayScore: 0,
    minute: 56,
    status: "live",
    league: "Bundesliga"
  }
]

export function LiveMatches() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("live-matches-container")
    if (container) {
      const scrollAmount = direction === "left" ? -320 : 320
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setScrollPosition(container.scrollLeft + scrollAmount)
    }
  }

  return (
    <section className="bg-card border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Circle className="h-3 w-3 fill-destructive text-destructive animate-pulse" />
            <h2 className="text-2xl font-bold text-foreground">Canlı Nəticələr</h2>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              {liveMatches.length} matç
            </Badge>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          id="live-matches-container"
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {liveMatches.map((match) => (
            <Card
              key={match.id}
              className="min-w-[300px] bg-secondary border-border hover:border-primary/50 transition-colors cursor-pointer group"
            >
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
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                        {match.homeTeam.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium text-foreground">{match.homeTeam}</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{match.homeScore}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                        {match.awayTeam.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium text-foreground">{match.awayTeam}</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{match.awayScore}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <button className="w-full text-center text-sm text-primary font-medium group-hover:underline">
                    Matç detalları
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
