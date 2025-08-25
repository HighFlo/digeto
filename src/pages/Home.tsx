import Hero from '../sections/Hero'
import Metrics from '../sections/Metrics'
import Navbar from '../sections/Navbar'
import About from '../sections/About'
import Structure from '../sections/Structure'
import ForTalent from '../sections/ForTalent'
import ForBusinesses from '../sections/ForBusinesses'

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <Hero />
        <About />
        <Metrics/>
        <Structure />
        <ForTalent />
        <ForBusinesses />
    </main>
  )
}