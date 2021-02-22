import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'

export const About = () => {
  return (
    <PageBody
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ProfileContainer>Profile</ProfileContainer>
      <AboutContainer>
        <MyIcon src={'static/trasta.png'} />
        <MyProfile>
          <h1>trasta (とらすた)</h1>
          <p>
            東京工業大学 生命理工学院 B1<br/>
            <a href='https://trap.jp' target='_blank' rel='noreferrer'>
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
  font-size: 3.5em;
`

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 30px auto 0;
  max-width: 1000px;
`

const MyIcon = styled.img`
  flex: 1;
  max-width: 230px;
  margin: auto 40px auto 40px;
  border-radius: 20%;
  border: .3em ${Color.textPrimary} solid;
`

const MyProfile = styled.div`
  flex: 1;
  font-size: 1.2em;
  font-family: 'Helvetica Neue', 'Helvetica', 'Hiragino Sans', 
  'Hiragino Kaku Gothic ProN', 'Arial', 'Yu Gothic', 'Meiryo', sans-serif;
  font-weight: 500;
  min-width: 18em;
`
