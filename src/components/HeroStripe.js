import React from "react"
import "../styles/index.scss"
import StripeStyle from "./HeroStripe.module.scss"
import stripeBG from "../imgs/Stripe.svg"
import stripeRight from "../imgs/StripeImg.svg"
const HeroStripe = () => {
    return (
        <div className={StripeStyle.container}>
            <div className={StripeStyle.stripe}>
                <div className={StripeStyle.left}>
                    <h1>101 Finances</h1>
                    <h3>but more fun</h3>
                    <p>We have something for everyone no matter where you are in your financial journey. Beginner or expert, you’ll learn something new everytime you use our app!</p>
                    <h3>Learn More</h3>
                </div>
                <div className={StripeStyle.right}>
                    <img src={stripeRight} />
                </div>
            </div>
        </div>
    )
}
export default HeroStripe