
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import cardData from '../../data/products';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import AddCircleIcon from '@mui/icons-material/AddCircle';

  
  const ItemsPage: React.FC = () => {
  
  const { setItems}= useItems();
    const navigate = useNavigate();
    const buy = ( subtitle:string, price:number) => {
      setItems((items:any) =>[...items, {subtitle, price}])
      navigate("/home");
    };
    return (
        <Grid container spacing={2}>
        {cardData.map(card => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card >
                <CardActionArea>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {card.subtitle}
                </Typography>
                <Typography variant="body2" component="p">
                  {card.description}
                </Typography>
                <Typography variant="body1" component="p">
                  {card.price} Bs.
                </Typography>
           
              </CardContent>
              </CardActionArea>
              <CardActions>
        <AddCircleIcon onClick={()=>buy(card.subtitle, card.price)}/>
         
      </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
        
    );
  };
  
  export default ItemsPage;