import React from "react"
import "../styles/index.scss"
import HeroStyle from "./Hero.module.scss"
import heroRight from "../imgs/heroRight.svg"

const Hero = () => {
    return (
        <div className={HeroStyle.container}>
            <div className={HeroStyle.left}>
                <h1>We help you build positive <br />
                habits for a brighter <br />
                financial future</h1>
                <button>Download</button>
                <button>Download</button>
            </div>
            <div className={HeroStyle.right}>
                <img src={heroRight} />
            </div>
        </div>
    )
}
export default Hero