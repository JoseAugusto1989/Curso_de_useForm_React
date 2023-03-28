import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Initial } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Formularios React Hook Forms</title>
      </Head>
      <main>
        <p>Initial Page</p>
        <Initial />
      </main>
    </>
  )
}
