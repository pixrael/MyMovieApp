import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import './AddRate.scss'

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

export default function AddRateSlider() {
    const [rateValue, setRateValue] = useState(5);
    const rate = () => {
        console.log('rate: ', rateValue);
        //dispatch the action to rate the movie

    }
    return (
        <Box >
            <Typography gutterBottom>Rate this movie</Typography>
            <Slider
                valueLabelDisplay="auto"
                slots={{
                    valueLabel: ValueLabelComponent,
                }}
                aria-label="custom thumb label"
                defaultValue={rateValue}
                min={0.0}
                max={10.0}
                value={rateValue}
                onChange={(evt: any) => setRateValue(evt.target?.value)}
                step={0.5}
            />
            <Button className="rate-button" variant="contained" onClick={rate}> Rate it!</Button>
        </Box>
    );
}