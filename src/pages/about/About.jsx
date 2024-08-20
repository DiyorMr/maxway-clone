import React from 'react'
import './About.css'
import aboutimg from '../../img/about-img.webp'

const About = () => {
  return (
    <div className='container'>
      <div className="about-logo">
        <h1 className='about-title'>About company</h1>
        <img className='aboutimg' src={aboutimg} alt="" />
        <p className='about-text'>The company was founded in February 2005 in Tashkent. At the moment, the company has 20 branches in Tashkent.
          The menu consists mainly of club sandwiches, hot dogs, burgers, pita bread and donars.
          Our priorities are the freshness and quality of ingredients, variety of toppings, affordable prices and attention to guests' requests.
          Every day, a large number of different people order from MaxWay. And we try to increase both the number of visitors and the number of branches. With each cooked dish, we refine the details of original recipes and look for the perfect balance of price and continue to be your favorite brand.
          If suddenly you are faced with poor service or low quality of cooked food from our side, be sure to write to us at @maxwaymasterfood_bot. We gladly accept both positive and negative feedbacks.
          A guest's complaint is a gift,
          thanks to which we have room to grow.
        </p>
      </div>
    </div>
  )
}

export default About