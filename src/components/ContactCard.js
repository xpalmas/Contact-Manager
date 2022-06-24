import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardActions,
  Button,
  }from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';

function ContactCard(props) {
  const {id, firstName, lastName, email, phone, image}= props.contact;
  return (
    <Grid xs={12} sm={6} item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
          src={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
            <br />
            {phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <DeleteIcon />{" "}
          </Button>
          <Button size="small">
            <EditIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ContactCard