import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { WorkCard } from '../components/WorkCard'

const worksList = [
  {
    title: 'traP Star',
    img: 'works/trapstar.webp',
    link: 'http://trapstar.trap.games/',
    skills: ['Golang', 'PixiJS'],
    description: 'ハッカソンで制作した星空共有サービスです．フロントエンドとバックエンドを担当しました．'
  },
  {
    title: 'tudura',
    img: 'works/tudura.webp',
    link: 'https://github.com/FujishigeTemma/tudura',
    skills: ['Golang', 'React', 'styled-components'],
    description: 'ハッカソンで制作したファイル共有サービスです．フロントエンドの実装を担当しました．諸処の事情で運用は行っていません．'
  }
]

export const Works = () => {
  return (
    <PageBody
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <WorksTitle>Works</WorksTitle>
      <WorksContainer>
        {worksList.map(({ title, img, link, skills, description }) => (
          <WorkCard
            key= { title }
            img={ img }
            link={ link }
            title={ title }
            skills={ skills }
            description={ description }
          />
        ))
        }
      </WorksContainer>
    </PageBody>
  )
}

const PageBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0px auto;
  min-height: 100%;
`

const WorksTitle = styled.div`
  margin-top: 10px;
  font-size: 3.5rem;
`

const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 380px;
  gap: 40px;
  justify-content: center;
  margin-top: 30px;
`
