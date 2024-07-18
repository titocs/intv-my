import { createFileRoute, redirect } from '@tanstack/react-router'
import { Token } from '../../utils/token';
import Login from '../../pages/Login';
import AuthLayout from '../../components/layout/AuthLayout';
import Layout from '../../components/layout/Layout';

export const Route = createFileRoute('/login/')({
  beforeLoad: async () => {
		if(Token.getLoggedInIdentifier()){
			throw redirect({ to: '/' });
		}
	},
  component: () => {
    return (
      <Layout >
        <AuthLayout>
          <Login />
        </AuthLayout>
      </Layout>
    )
  }
})