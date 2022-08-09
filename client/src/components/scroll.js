import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 100,
        position: 'fixed !important',
        bottom: '2vh',
        backgroundColor: '#DCDCDC !important',
        color: 'black !important',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.2s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
        },
        right: '4%',
        animation: 'fadeIn 0.5s',
    }
}))

const Scroll = ({
    showBelow
}) => {

    const [show, setShow] = useState(showBelow ? false : true);

    const classes = useStyles();

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) {
                setShow(true);
            }
        } else {
            if (show) {
                setShow(false);
            }
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    })
    
    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop}>
                    <ExpandLessIcon />
                </IconButton>
            }
        </div>
    )

}


export default Scroll