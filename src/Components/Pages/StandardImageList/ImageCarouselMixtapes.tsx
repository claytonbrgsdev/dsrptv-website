import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, IconButton, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface CarouselItem {
    img: string;
    title: string;
    link: string;
}


const items: CarouselItem[] = [
    {
        img: 'https://i1.sndcdn.com/artworks-mfmk3XDeurnLrxiJ-aH8buA-t500x500.jpg',
        title: 'Palmer Veneno',
        link: "https://soundcloud.com/dsrptvrec/dsrptv_files_027-dsrptv-soundsystem-on-radio-veneno"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-yHcONIDuMdV6yJgl-DusE3g-t500x500.jpg',
        title: 'Bruno Veneno',
        link: "https://soundcloud.com/dsrptvrec/dsrptv_files_026-bruno-afterall-on-radio-veneno"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-ALJgxc3Mtn5vOe49-WgQSKA-t500x500.jpg',
        title: 'ARMENIATEK dsrptv files',
        link: "https://soundcloud.com/dsrptvrec/dsrptv-files-armeniatek"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-G66vthjjdEWzboA1-zvzoIg-t500x500.jpg',
        title: 'craca veneno',
        link: "https://soundcloud.com/dsrptvrec/dsrptv_files_025-craca-on-radio-veneno"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-vy9NDzmWkykWPt2K-J9JLzA-t500x500.jpg',
        title: 'aucna veneno',
        link: "https://soundcloud.com/dsrptvrec/dsrptv_files_023-aucna-on-radio-veneno"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-fXEtID9Yl83MTHgl-nOskdw-t500x500.jpg',
        title: 'Kair veneno',
        link: "https://soundcloud.com/dsrptvrec/dsrptv_files_022-kair-on-veneno"
    },

];


export default function ImageCarouselMixtapes() {
    const [activeStep, setActiveStep] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % items.length);
        }, 3000);
    
        return () => {
            clearInterval(timer);
        };
    }, [activeStep]);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % items.length);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + items.length) % items.length);
    };

    // Create a chunk of items to be displayed as pairs
    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 2) {
        chunkedItems.push(items.slice(i, i + 2));
    }

    return (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <IconButton onClick={handleBack} style={{ position: 'absolute', left: 0, zIndex: 1 }}>
                <ArrowBackIosIcon />
            </IconButton>
            <Carousel
                index={activeStep}
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                animation="slide"
                cycleNavigation={true}
                interval={3000}
                onChange={(index, activeIndex) => {
                    if (activeIndex === activeStep) {
                        // Check if index is undefined and provide a fallback value
                        setActiveStep(index !== undefined ? index : 0);
                    }
                }}
                navButtonsWrapperProps={{
                    style: {
                        top: 'calc(50% - 20px)',
                        position: 'absolute',
                    }
                }}
            >
                {chunkedItems.map((chunk, index) => (
                    <Paper key={index} elevation={10} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Grid container spacing={1} style={{ width: 'auto', margin: '0' }}>
                            {chunk.map((item, index) => (
                                <Grid item xs={6} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '100%' }}>
                                        <img
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                            style={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                ))}
            </Carousel>
            <IconButton onClick={handleNext} style={{ position: 'absolute', right: 0, zIndex: 1 }}>
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    );
}