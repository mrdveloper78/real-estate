import React from 'react';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import ava from "../../Images/ava1.png";
import { Box } from '@mui/material';


const ProgressBar = ({imgUrl,id}) => {

    const [progress, setProgress] = React.useState(0);
    const [turn, setTurn] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        const turner = setInterval(() => {
            setTurn((prevTurn) => (prevTurn >= 2 ? 0 : prevTurn + 1));
        }, 8000);

        return () => {
            clearInterval(turner);
            clearInterval(timer);
        };
    }, []);

    return (
        <div className=''>
            <div className='relative'>
                <Box sx={{ position: 'relative' }}>
                    <CircularProgress
                        variant="determinate"
                        sx={{
                            color: (theme) =>
                                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                        }}
                        size={60}
                        thickness={4}
                        
                        value={100}
                    />
                    <CircularProgress
                        variant={ id === turn ? "determinate" :""}
                        disableShrink
                        sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                            animationDuration: '0ms',
                            position: 'absolute',
                            left: 0,
                            [`& .${circularProgressClasses.circle}`]: {
                                strokeLinecap: 'round',
                            },
                        }}
                        size={60}
                        thickness={4}
                        value={progress}
                    />
                </Box>

                <img
                    src={imgUrl}
                    className='w-[40px] absolute top-[8px] left-[10px]'
                />
            </div>
        </div>
    )
}

export default ProgressBar
