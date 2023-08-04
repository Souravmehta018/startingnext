import style from './styles.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: "Watching Hitesh's live and learning basiscs of Next js",
}

export default function RootLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className= {style.main}>
        {children}
      </main>
    )
  }