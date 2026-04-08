"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

export function Standings() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-foreground">Sıralama Cədvəli</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="premyerLiqa">
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent px-4">
            <TabsTrigger
              value="premyerLiqa"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              Premyer Liqa
            </TabsTrigger>
            <TabsTrigger
              value="laLiga"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              La Liga
            </TabsTrigger>
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
                    <tr
                      key={team.pos}
                      className="border-b border-border/50 hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <td className="py-3 px-4">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            team.pos <= 2
                              ? "bg-primary text-primary-foreground"
                              : team.pos <= 4
                              ? "bg-accent text-accent-foreground"
                              : team.pos >= 7
                              ? "bg-destructive/20 text-destructive"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {team.pos}
                        </span>
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
                    <tr
                      key={team.pos}
                      className="border-b border-border/50 hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <td className="py-3 px-4">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            team.pos <= 2
                              ? "bg-primary text-primary-foreground"
                              : team.pos <= 4
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {team.pos}
                        </span>
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
          <button className="w-full text-center text-sm text-primary font-medium hover:underline">
            Tam cədvələ bax
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
