import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'
import trastaImage from '../static/trasta.png'

export const About = () => {
  return (
    <PageBody
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ProfileContainer>About</ProfileContainer>
      <AboutContainer>
        <MyIcon src={ trastaImage } />
        <MyProfile>
          <h2>trasta (とらすた)</h2>
          <p>
            灘高校 → 東京工業大学 情報通信系 B2<br/>
            <a href='https://trap.jp/author/trasta/' target='_blank' rel='noreferrer'>
              東京工業大学デジタル創作同好会traP
            </a>
          </p>
          <ul>
            <li>代表補佐</li>
            <li>SysAd, Algorithm, Graphic, Game</li>
          </ul>
          <p>バックエンドやフロントエンドを書いていたり，ゲームを作ったり，
            Pythonでいろいろやっていたりしています．</p>
        </MyProfile>
      </AboutContainer>
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

const ProfileContainer = styled.div`
  margin-top: 10px;
  font-size: 3em;
`

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 30px auto 0;
  max-width: 1000px;
`

const MyIcon = styled.img`
  width: min(230px, 60vw);
  height: min(230px, 60vw);
  margin: auto 40px auto 40px;
  border-radius: 20%;
  border: .3em ${Color.textPrimary} solid;
`

const MyProfile = styled.div`
  flex: 1;
  font-size: 1.1em;
  font-family: 'Helvetica Neue', 'Helvetica', 'Hiragino Sans', 
  'Hiragino Kaku Gothic ProN', 'Arial', 'Yu Gothic', 'Meiryo', sans-serif;
  font-weight: 500;
  min-width: min(18em, 80vw);
  h2 {
    font-size: 2em;
  }
`
