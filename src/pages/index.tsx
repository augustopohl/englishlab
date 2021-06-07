import { GetStaticProps } from "next";
import Banner from "../components/Banner";
import Content from "../components/Content";
import ContentTips from "../components/Content/ContentTips";
import Divider from "../components/Content/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getPrismicClient from "../services/prismic";
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom'

type Section = {
  section: {
    image: string,
    title: string,
    text: string,
    challenge_title: string,
    challenge_text: string,
  }[]
}

export interface HomepageProps {
  homepageTips: Section[]
}

export default function Home({ homepageTips }: HomepageProps) {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Divider />
      <ContentTips homepageTips={homepageTips} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'homepage')]
  )

  const homepageTips = response.results.map(homepageTip => {
    return {
      section: homepageTip.data.section.map(tip => {
        return {
          image: tip.image.url,
          title: RichText.asText(tip.title),
          text: RichText.asText(tip.text),
          challenge_title: RichText.asText(tip.challenge_title),
          challenge_text: RichText.asText(tip.challenge_text),
        }
      })
    }
  })

  console.log(JSON.stringify(homepageTips, null, 2))

  return {
    props: {
      homepageTips
    },
    revalidate: 1800,
  }
}