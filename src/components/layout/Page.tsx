import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
