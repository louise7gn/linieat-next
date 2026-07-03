import AuthGuard from '@/components/AuthGuard'
import Layout from '@/components/Layout'
import Organisation from '@/components/Organisation'

export default function OrganisationPage() {
  return (
    <AuthGuard>
      <Layout>
        <Organisation />
      </Layout>
    </AuthGuard>
  )
}