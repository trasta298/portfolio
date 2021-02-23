import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'
import images from '../static/works/*.webp'

interface WorkCardProps {
  img: string,
  link: string,
  title: string,
  skills: Array<string>,
  description: string
}

export const WorkCard = ({
  img, link, title, skills, description
}: WorkCardProps) => {
  return (
    <CardLink href={link} target='_blank' rel='noreferrer'>
      <Card>
        <Img src={ images[img] } />
        <CardTitle>{ title }</CardTitle>
        <TagsContainer>
          {skills.map((skill) => (
            <Tag key={ skill }>{ skill }</Tag>
          ))}
        </TagsContainer>
        <CardText>{ description }</CardText>
      </Card>
    </CardLink>
  )
}

const CardLink = styled.a`
  text-decoration: none;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1em;
  background-color: #e6e6e3;
  color: ${ Color.textPrimary };
`

const Img = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`

const CardTitle = styled.div`
  text-align: center;
  font-size: 2em;
  margin-top: .2em;
`

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: .3em .6em 0;
`

const Tag = styled.div`
  font-size: .9em;
  border-radius: .8em;
  padding: .3em;
  margin: .1em .2em;
  white-space: nowrap;
  background-color: white;
`

const CardText = styled.div`
  text-align: center;
  font-size: 1.1em;
  font-family: 'Helvetica Neue', 'Helvetica', 'Hiragino Sans', 
  'Hiragino Kaku Gothic ProN', 'Arial', 'Yu Gothic', 'Meiryo', sans-serif;
  margin: auto .6em;
`
