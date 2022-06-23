import React from 'react'
import {
    Card,
    List,
    ListItem,
    IconButton,
    ListItemAvatar,
    Avatar,
    CardContent,
    }from '@mui/material';
    import ContactsIcon from '@mui/icons-material/Contacts';
    import DeleteIcon from '@mui/icons-material/Delete';


function ContactList(props) {
  
    const showContactList = props.contacts.map((contact) => {
        return (
          <List style={{borderBottom: '1px solid rgba(0, 0, 0, .5)'}}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ContactsIcon />
                </Avatar>
              </ListItemAvatar>
              {contact.name} <br />
              {contact.email} <br />
              {contact.phone}
            </ListItem>
          </List>
        );
    })

    return (
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', maxWidth: 800, margin: '20px auto 0'}}>{showContactList}</div>
  )
}

export default ContactList