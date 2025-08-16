import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At EzyBuy, we believe getting dressed should be the easiest part of your day. In a world of fast-moving trends and endless options, we wanted to create a space where shopping for clothes is simple, inspiring, and enjoyable again. We were tired of the clutter and decided to focus on what truly matters: great style, quality you can trust, and pieces you'll want to wear on repeat.</p>
          <p>Our collections are thoughtfully curated to balance timeless essentials with modern, on-trend pieces. We focus on versatility and fit, bringing you a handpicked selection of apparel that builds a wardrobe that feels effortlessly cool and uniquely you. From the perfect pair of jeans to a statement top, every item is chosen to help you express your personal style with confidence.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our collections are thoughtfully curated to balance timeless essentials with modern, on-trend pieces. We focus on versatility and fit, bringing you a handpicked selection of apparel that builds a wardrobe that feels effortlessly cool and uniquely you. From the perfect pair of jeans to a statement top, every item is chosen to help you express your personal style with confidence.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
