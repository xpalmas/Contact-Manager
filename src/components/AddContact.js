import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'


function AddContact() {
  return (
    <div>
        <Card>
            <CardContent>
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
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default AddContact