import Hero from '../sections/Hero'
import Metrics from '../sections/Metrics'
import Navbar from '../sections/Navbar'
import Mission from '../sections/Mission'
import ForTalent from '../sections/ForTalent'
import About from '../sections/About'
import ForStartups from '../sections/ForStartups'
import ForPartners from '../sections/ForPartners'
import Footer from '../sections/Footer'


export default function Home() {
  return (
    <main className="">
        <Navbar />
        <Hero />
        <Mission />
        <About />
        <Metrics/>
        <ForTalent />
        <ForStartups />
        <ForPartners />
        <Footer />
    </main>
  )
}