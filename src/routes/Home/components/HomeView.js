import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import './HomeView.scss'

export const HomeView = () => (
  <Card>
    <CardHeader
      title='Projecter'
      subtitle='..duck'
      avatar={DuckImage}
    />
    <CardMedia
      overlay={<CardTitle title='Hello there!' subtitle='Quack quack' />}
    >
      <img src={DuckImage} alt='Duck :)' />
    </CardMedia>
    <CardTitle title='Latin latin latin' subtitle='...' />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
)

export default HomeView
