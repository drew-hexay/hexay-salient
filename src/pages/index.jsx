import Head from 'next/head'

import { HeroWithProduct } from '@/components/HeroWithProduct'
import { Banner } from '@/components/Banner'
import { TestimonialsSimple } from '@/components/TestimonialsSimple'
import { LogoCloud } from '@/components/LogoCloud'
import { Resources } from '@/components/Resources'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { FeatureSectionOne } from '@/components/FeatureSectionOne'
import { FeatureSectionTwo } from '@/components/FeatureSectionTwo'
import { FeatureSectionThree } from '@/components/FeatureSectionThree'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      {/* <HeaderSimple /> */}
      <main>
        <HeroWithProduct />
        {/* <Banner /> */}
        <LogoCloud />
        <TestimonialsSimple />
        <Resources />
        <FeatureSectionTwo />

        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
