import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useItems from '../../hooks/useItems';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const {items, setItems}= useItems()

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('itemAct', JSON.stringify(items));
  }, [items]);

  const eliminarElemento = (id:any) => {
    const nuevosItems = items.filter((item) => item.id !== id);
    setItems(nuevosItems);
  };


  const editarElemento = (item:any) => {
    eliminarElemento(item)
    navigate("/items")
  
  };


  return (
    
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
  

    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" >
            Carrito de compras
          </Typography>
          <Demo>
            <List dense={dense}>
              {items.map(item =>(
              <ListItem
              secondaryAction={
                <>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => eliminarElemento(item.id)} />
                 
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                <EditIcon onClick={() => editarElemento(item.id)} />
              </IconButton>
              </>
              }
            >
              <ListItemText
                primary={item.subtitle}
                secondary={item.price}
                
              />
            </ListItem>
              )) }
            </List>
          </Demo>
        </Grid>
    </Box>
  );
}