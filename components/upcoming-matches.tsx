"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const upcomingMatches = [
  {
    id: 1,
    homeTeam: "Neftçi",
    awayTeam: "Qarabağ",
    date: "20 Aprel",
    time: "20:00",
    stadium: "Dalqa Arena",
    league: "Premyer Liqa"
  },
  {
    id: 2,
    homeTeam: "Azərbaycan",
    awayTeam: "Slovakiya",
    date: "25 Aprel",
    time: "21:00",
    stadium: "Bakı Olimpiya Stadionu",
    league: "Millətlər Liqası"
  },
  {
    id: 3,
    homeTeam: "Zirə",
    awayTeam: "Sumqayıt",
    date: "28 Aprel",
    time: "18:00",
    stadium: "ASCO Arena",
    league: "Premyer Liqa"
  },
  {
    id: 4,
    homeTeam: "Səbail",
    awayTeam: "Kəpəz",
    date: "28 Aprel",
    time: "20:00",
    stadium: "Səbail Stadionu",
    league: "Premyer Liqa"
  }
]

export function UpcomingMatches() {
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
          <div
            key={match.id}
            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                {match.league}
              </Badge>
              <span className="text-sm font-semibold text-primary">{match.date}</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                  {match.homeTeam.substring(0, 2).toUpperCase()}
                </div>
                <span className="font-medium text-foreground text-sm">{match.homeTeam}</span>
              </div>
              <span className="text-lg font-bold text-accent">{match.time}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground text-sm">{match.awayTeam}</span>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                  {match.awayTeam.substring(0, 2).toUpperCase()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{match.stadium}</span>
            </div>
          </div>
        ))}

        <button className="w-full text-center text-sm text-primary font-medium hover:underline pt-2">
          Bütün matçlara bax
        </button>
      </CardContent>
    </Card>
  )
}
