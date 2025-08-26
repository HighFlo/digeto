import Hero from '../sections/Hero'
import Metrics from '../sections/Metrics'
import Navbar from '../sections/Navbar'
import Mission from '../sections/Mission'
import ForTalent from '../sections/ForTalent'
import About from '../sections/About'
import ForStartups from '../sections/ForStartups'
import ForPartners from '../sections/ForPartners'

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <Hero />
        <Mission />
        <Metrics/>
        <ForTalent />
        <ForStartups />
        <ForPartners />
        <About />
    </main>
  )
}