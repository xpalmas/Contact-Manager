import React from 'react'
import {
    Card,
    CardContent,
    Grid,
    }from '@mui/material';
import ContactCard from './ContactCard';


function ContactList(props) {
  
    const showContactList = props.contacts.map((contact) => {
        return (
               <ContactCard contact={contact}></ContactCard>
        );
    })

    return (
      <Card
        style={{
          maxWidth: 800,
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          margin: "20px auto 0",
          padding: "10px",
          alignItems: 'center',
        }}
      >
        <CardContent>
          <Grid container spacing={1} direction="row">
            {showContactList}
          </Grid>
        </CardContent>
      </Card>
    );
}

export default ContactList