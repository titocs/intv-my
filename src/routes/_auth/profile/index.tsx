import { createFileRoute } from '@tanstack/react-router'
import Layout from '../../../components/layout/Layout'
import MainLayout from '../../../components/layout/MainLayout'
import Profile from '../../../pages/Profile'

export const Route = createFileRoute('/_auth/profile/')({
  component: () => (
    <Layout >
      <MainLayout >
        <Profile />
      </MainLayout>
    </Layout>
  )
})