"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

const topPlayers = [
  {
    id: 1,
    name: "Mahir Emreli",
    team: "Qarabağ",
    position: "Hücumçu",
    goals: 18,
    assists: 7,
    rating: 8.2,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Əli Əhmədov",
    team: "Neftçi",
    position: "Yarımmüdafiəçi",
    goals: 12,
    assists: 14,
    rating: 7.9,
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Rəşad Sadıqov",
    team: "Zirə",
    position: "Müdafiəçi",
    goals: 4,
    assists: 8,
    rating: 7.8,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Toral Bayramov",
    team: "Sumqayıt",
    position: "Qapıçı",
    goals: 0,
    assists: 2,
    rating: 7.7,
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&h=200&fit=crop&crop=face"
  }
]

export function TopPlayers() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Ən Yaxşı Oyunçular</h2>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
          Hamısına bax <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topPlayers.map((player, index) => (
          <Card
            key={player.id}
            className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer group overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="flex items-stretch">
                <div className="relative w-32 h-36 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${player.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card" />
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {player.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {player.team} - {player.position}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${
                        player.rating >= 8
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {player.rating}
                    </Badge>
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
