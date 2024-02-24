import React from 'react'
import { Container, Grid } from '@mui/material';
import Select from 'react-select';
import MechanicCard from './MechanicCard';

const Machanic = () => {
    const options = [
        { value: 'east', label: 'East' },
        { value: 'south', label: 'South' },
        { value: 'west', label: 'West' },
        { value: 'central', label: 'Central' }
    ]
    return (
        <>
            <section>
                <Container>
                    <Grid container maxWidth={'lg'}>
                        <Grid pt={20} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2>Search For Mechanic</h2>
                            <div style={{ width: '100%', fontSize: "2rem", heigh: "5rem" }} className="searchBar">
                                <Select options={options} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <MechanicCard/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Machanic
