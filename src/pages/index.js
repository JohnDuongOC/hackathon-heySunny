import React from "react"
import "../styles/index.scss"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import HeroStripe from "../components/HeroStripe"
import HeroCarousel from "../components/HeroCarousel"
import HeroDownload from "../components/HeroDownload"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeroStripe />
      <HeroCarousel />
      <HeroDownload />

    </div>
  )
}
export default Home