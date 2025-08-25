import Hero from '../sections/Hero'
import Metrics from '../sections/Metrics'
import Navbar from '../sections/Navbar'

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <Hero />
        <Metrics/>
    </main>
  )
}