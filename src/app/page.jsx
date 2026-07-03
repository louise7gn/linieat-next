import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import HowItWorks from '@/components/HowItWorks'
import StatsBar from '@/components/StatsBar'
import RecipesPreview from '@/components/RecipesPreview'
import CTASection from '@/components/CTASection'
import MiniFeatures from '@/components/MiniFeatures'
import FeatureCards from '@/components/FeatureCards'

export default function Home() {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '16px' }}>
        <Banner />
        <MiniFeatures />
        <FeatureCards />
        <StatsBar />
        <HowItWorks />
        <RecipesPreview />
        <CTASection />
      </div>
    </Layout>
  )
}