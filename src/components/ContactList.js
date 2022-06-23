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
            <Card>
                <CardContent>
                <List>
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
                                    {contact.name} <br/>
                                    {contact.email} <br/>
                                    {contact.phone}
                            </ListItem>,
                        </List>
                </CardContent>
            </Card>
        );
    })

    return (
    <div style={{marginTop: '40px', maxWidth: 800, boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', margin: '0 auto', padding: '20px 5px'}}>{showContactList}</div>
  )
}

export default ContactList