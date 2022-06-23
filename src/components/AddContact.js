import { Button, Card, CardContent, Grid, TextField, Typography, } from '@mui/material'
import React from 'react'


function AddContact() {
  return (
    <div style={{marginTop: '20px'}}>
        <Card style={{maxWidth: 800, boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', margin: '0 auto', padding: '20px 5px'}}>
            <CardContent>
                <Typography gutterBottom variant='h5'>Fill out all the informations</Typography>
                <form>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label='Frist Name'
                                placeholder='Enter first name'
                                variant='outlined'
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label='Last Name'
                                placeholder='Enter last name'
                                variant='outlined'
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='email'
                                label='Email'
                                placeholder='Enter email'
                                variant='outlined'
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='tel'
                                label='Phone number'
                                placeholder='Enter phone number'
                                variant='outlined'
                                fullWidth
                                required
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

export default AddContact