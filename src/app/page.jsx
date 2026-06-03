import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import HowItWorks from '@/components/HowItWorks'
import StatsBar from '@/components/StatsBar'
import Testimonials from '@/components/Testimonials'
import RecipesPreview from '@/components/RecipesPreview'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '16px' }}>
        <Banner />
        <HowItWorks />
        <StatsBar />
        <Testimonials />
        <RecipesPreview />
        <CTASection />
      </div>
    </Layout>
  )
}