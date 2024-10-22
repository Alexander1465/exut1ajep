import React, { useState } from 'react';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';  
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography'; 
import CardActionArea from '@mui/material/CardActionArea';  
import Box from '@mui/material/Box';  
import '../App.css';  
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import {IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'


function Noticia({ noticia }) { 
    const [isFavorite, setIsFavorite] = useState(false);  
    const [open, setOpen] = React.useState(false); 

        const handle = () => {
            setOpen(false);
        };

        const handleIconClick = () => {
            setIsFavorite(prev => !prev); 
        };
        const handleSubmit = () => {
            setOpen(true); 
        };

    return (
        <Box sx={{ margin: "20px" }}>  
            <Card sx={{ maxWidth: 800 }}> 
                <CardActionArea>
                <CardContent> 
                <Grid container spacing={3} sx={{ margin: '3px' }}>
                    <Grid  xs={12} sm={4} md={4}>
                    </Grid>
                    <Grid  xs={12} sm={4} md={4}>
                        <Grid>
                        <Typography variant="">
                            {noticia.name}
                        </Typography>
                        </Grid>
                        <Grid>
                        <Typography variant="">
                            {noticia.fecha}
                        </Typography>
                        </Grid>
                    </Grid>    
                </Grid>
                </CardContent>
                    <CardMedia sx={{ height: 194 }}  
                        component="img"  
                        image={noticia.imgSrc}  
                        alt={noticia.alt} 
                    />
                    <CardContent>
                        <Typography variant="body2">  
                            {noticia.descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Grid container spacing={2} sx={{ margin: '3px' }}>
                    <Grid  xs={8} sm={1} md={1}>
                    <IconButton onClick={handleIconClick} sx = {{marginRight: 100 }}>  
                        {isFavorite ? (  
                            <FavoriteRoundedIcon sx={{ color: "red" }}/>  
                        ) : ( 
                            <FavoriteBorderRoundedIcon sx={{ color: "grey" }}/> 
                        )}
                    </IconButton>
                    </Grid>
                    <ShareIcon onClick={handleSubmit}>

                    </ShareIcon>
                    <Grid  xs={8} sm={1} md={1}>
                </Grid>
                </Grid>
            </Card>
            <Dialog open={open}>
                <DialogTitle>Compartir</DialogTitle>
                <DialogContent>
                    <DialogContentText>¿A través de qué plataforma quieres compartir?</DialogContentText>
                 </DialogContent>
                 <DialogActions>
                    <WhatsAppIcon onClick={handle}></WhatsAppIcon>
                    <TelegramIcon onClick={handle}></TelegramIcon>
                 </DialogActions>
                 
            </Dialog>
        </Box>
        
    );
}

export default Noticia;

