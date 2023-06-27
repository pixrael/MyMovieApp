import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import './AddRate.scss'
import { useRateMovieMutation } from '../../store/api/movieApi';
import { useSelector } from 'react-redux';
import { selectSessionId } from '../../store/api/authApi';
import store from '../../store/store';
import { allowExit, blockExit } from '../../store/slice/detailModalSlice';

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

export default function AddRateSlider({ idMovie }: { idMovie: string }) {
    const [rateMovie, response] = useRateMovieMutation()
    const [rateValue, setRateValue] = useState(5);
    const sessionId = useSelector(selectSessionId);
    const [hideSuccessMsg, setHideSuccessMsg] = useState(true);
    const rate = () => {
        store.dispatch(blockExit());
        //dispatch the action to rate the movie
        rateMovie({ idMovie, body: { value: rateValue + '' }, sessionId });
    }

    useEffect(() => {
        let timeout: any;
        if (response.endpointName === 'rateMovie' && response.isSuccess) {
            setHideSuccessMsg(false);
            timeout = setTimeout(() => {
                setHideSuccessMsg(true);
                store.dispatch(allowExit());
            }, 1500);
        }

        return () => { timeout && clearTimeout(timeout); }


    }, [response])

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
                disabled={response.endpointName === 'rateMovie' && (response.isLoading || response.isSuccess)}
            />
            <Button className="rate-button" variant="contained" onClick={rate} disabled={response.endpointName === 'rateMovie' && (response.isLoading || response.isSuccess)} > Rate {rateValue}</Button>
            {response.endpointName === 'rateMovie' && response.isSuccess && !hideSuccessMsg && <Typography fontSize={10}> Rated successfully </Typography>}
            {response.endpointName === 'rateMovie' && response.isError && <Typography fontSize={10}> Error trying to rate {(response.error as any).message}</Typography>}



        </Box>
    );
}