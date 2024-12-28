import { TrendingTags } from '../trending/TrendingTags'
import { AboutSection } from './AboutSection'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
    {/* Trending Tags */}
    <div className="flex justify-center">
      <TrendingTags />
    </div>

    {/* Recent Snippets */}
    {/* <div className="flex justify-center">
      <RecentSnippets/>
    </div> */}

    <AboutSection/>
  </div>
  )
}
