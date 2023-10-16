import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MenuDetails() {
  return (
    <Card sx={{ maxWidth: 600,marginLeft:42,marginTop:10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nisi culpa enim adipisci unde, 
           illo optio? Exercitationem blanditiis, 
           rerum vero facere consequuntur debitis provident magni dolor asperiores sequi. Est, esse?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
