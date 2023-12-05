import Image from 'next/image'
import Header from './_components/header'
import Hero from './_components/hero'
import Network from './_components/network'
import Services from './_components/services'
import CallActions from './_components/call-actions'
import FeaturedResources from './_components/featured-resources'
import Testimonial from './_components/testimonial'
import Infos from './_components/infos'
import Stats from './_components/stats'
import GetStarted from './_components/get-started'
import Footer from './_components/footer'
import Partners from './_components/partners'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Network />
      <CallActions />
      <Stats />
      <Infos />
      <Testimonial />
      <FeaturedResources />
      <GetStarted />
      <Footer />
    </main>
  )
}
