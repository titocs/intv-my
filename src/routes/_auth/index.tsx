import { createFileRoute } from '@tanstack/react-router'
import Layout from '../../components/layout/Layout'
import Home from '../../pages/Home'
import MainLayout from '../../components/layout/MainLayout'

export const Route = createFileRoute('/_auth/')({
  component: () => (
    <Layout >
      <MainLayout >
        <Home />
      </MainLayout>
    </Layout>
  )
})
