import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LiveMatches } from "@/components/live-matches"
import { Standings } from "@/components/standings"
import { TopPlayers } from "@/components/top-players"
import { LatestNews } from "@/components/latest-news"
import { UpcomingMatches } from "@/components/upcoming-matches"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LiveMatches />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <LatestNews />
              <TopPlayers />
            </div>
            <div className="space-y-8">
              <Standings />
              <UpcomingMatches />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
