import { Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'
import React from 'react'


class AddContact extends React.Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
    };

    add =(e)=>{
        e.preventDefault();
        if(this.state.firstName=== '' && this.state.lastName=== '' && this.state.email=== '' && this.state.phone=== ''){
            alert('All the fields are mandatory!');
            return
        }
        console.log(this.state)
    }
    render(){

        return (
            <div style={{marginTop: '20px'}}>
                <Card style={{maxWidth: 800, boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', margin: '0 auto', padding: '20px 5px'}}>
                    <CardContent>
                        <Typography gutterBottom variant='h5'>Fill out all the informations</Typography>
                        <form onSubmit={this.add}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField onChange={(e)=> this.setState({firstName: e.target.value})}
                                        label='Frist Name'
                                        placeholder='Enter first name'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        value={this.state.firstName}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField onChange={(e)=> this.setState({lastName: e.target.value})}
                                        label='Last Name'
                                        placeholder='Enter last name'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        value={this.state.lastName}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField onChange={(e)=> this.setState({email: e.target.value})}
                                        type='email'
                                        label='Email'
                                        placeholder='Enter email'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        value={this.state.email}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField onChange={(e)=> this.setState({phone: e.target.value})}
                                        type='number'
                                        label='Phone number'
                                        placeholder='Enter phone number'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        value={this.state.tel}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type='submit' variant='outlined' color='primary' fullWidth>ADD CONTACT</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
          )
        }

    }


export default AddContact