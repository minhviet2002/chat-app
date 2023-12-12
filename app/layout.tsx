'use client'
import { Roboto_Serif } from 'next/font/google'
import ThemeRegistry from '../src/config/theme/theme-registry';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@/src/store/store';
import AuthGuard from '@/src/components/auth/authGuard';
const inter = Roboto_Serif({ subsets: ['vietnamese'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'mui' }}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        {/* className={inter.className } */}
        <body >
          <Provider store={store}>
            <AuthGuard>
              {children}
            </AuthGuard>
          </Provider>
        </body>
      </ThemeRegistry>
    </html >
  )
}
