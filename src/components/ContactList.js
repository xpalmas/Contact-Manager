import React from 'react'

function ContactList(props) {
  
    const showContactList = props.contacts.map((contact) => {
        return(
            <div>{contact.name}</div>
        )
    })

    return (
    <div style={{marginTop: '40px'}}>{showContactList}</div>
  )
}

export default ContactList