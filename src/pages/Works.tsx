import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { WorkCard } from '../components/WorkCard'

const worksList = [
  {
    title: 'traP Star',
    img: 'trapstar',
    link: 'http://trapstar.trap.games/',
    skills: ['Golang', 'PixiJS'],
    description: '部内ハッカソンで制作した星空共有サービスです。フロントエンドとバックエンドを担当しました。'
  },
  {
    title: 'tudura',
    img: 'tudura',
    link: 'https://github.com/FujishigeTemma/tudura',
    skills: ['Golang', 'React', 'styled-components'],
    description: '部内ハッカソンで制作したファイル共有サービスです。運用は行っていません。'
  },
  {
    title: 'portfolio',
    img: 'portfolio',
    link: 'https://github.com/trasta298/portfolio',
    skills: ['React', 'Parcel', 'Cloudflare', 'styled-components'],
    description: 'ポートフォリオです。'
  },
  {
    title: 'AtCoder',
    img: 'atcoder',
    link: 'https://atcoder.jp/users/trasta',
    skills: ['Python'],
    description: 'PythonでAtCoderコンテストに参加しています。青(highest:1603)です。'
  },
  {
    title: 'linQ',
    img: 'linq',
    link: 'https://github.com/hackathon21spring-05',
    skills: ['Golang', 'Vue3', 'WindiCSS'],
    description: '部内ハッカソンで，はてなブックマークライクなブックマーク共有サービスを制作しました。'
  },
  {
    title: 'CoeFont',
    img: 'coefont_studio',
    link: 'https://coefont.cloud/',
    skills: ['coefont'],
    description: 'すべてのクリエイターに声のフォントを届ける'
  },
  {
    title: 'Nascalay',
    img: 'nascalay',
    link: 'https://nascalay.trasta.dev/',
    skills: ['Golang', 'WebSocket', 'React', 'emotion'],
    description: '多人数で遊べるWeb上のお絵かきリレーゲームです。'
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
  font-size: 3rem;
`

const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 380px;
  gap: 40px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`
