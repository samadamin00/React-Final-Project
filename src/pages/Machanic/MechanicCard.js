import React from 'react';
import { Grid } from '@mui/material';
import mechanic from '../../assets/img/mechanic.png';
const MechCard = () => {
    return (
        <>
                <Grid container columnSpacing={5} className="bot" pt={5} pb={10} >
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <div className="ch">
                        <img src={mechanic} alt="icon" />
                        <h4>Umar</h4>
                        <p style={{ color: `var(--dGray)` }}>I am Specialist Car Mechanic</p>

                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <div className="ch">
                        <img src={mechanic} alt="" />
                        <h4>Usman</h4>
                        <p style={{ color: `var(--dGray)` }}>I am Specialist Vehicle Mechanic</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <div className="ch">
                        <img src={mechanic} alt="" />
                        <h4>Hamza</h4>
                        <p style={{ color: `var(--dGray)` }}>I am Specialist Bike Repairing</p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default MechCard
