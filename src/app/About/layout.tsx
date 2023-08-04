import style from './styles.module.css'

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