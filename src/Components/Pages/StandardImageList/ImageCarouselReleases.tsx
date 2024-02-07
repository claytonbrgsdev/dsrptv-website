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
        img: 'https://i1.sndcdn.com/artworks-Npd8U4FTrloztR75-yfaiaQ-t500x500.jpg',
        title: 'Best of VA',
        link: "https://hypeddit.com/dsrptv/bestof2023va"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-ALFOjF7nL7Noe6YI-z3tVFQ-t500x500.jpg',
        title: 'casa profunda bruno afterall',
        link: "https://hypeddit.com/dsrptv030"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-2bH4XAfjftSbNZ5y-vP9c4w-t500x500.jpg',
        title: 'partes b meduna',
        link: "https://hypeddit.com/meduna/partesb"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-PcoRIzoMvdgKy9Jw-zjAhXw-t500x500.jpg',
        title: 'patchwork cobogó craca',
        link: "https://hypeddit.com/dsrptv028"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-T2K3CpLKMJf0mKdZ-l8rrzw-t500x500.jpg',
        title: 'rifts ARMENIATEK',
        link: "https://hypeddit.com/armeniatek/rifts"
    },
    {
        img: 'https://i1.sndcdn.com/artworks-vu7gC1iWZgrqETIM-yEymXw-t500x500.jpg',
        title: 'animal virtual aucna',
        link: "https://hypeddit.com/aucna/animalvirtual"
    },
]

export default function ImageCarouselReleases() {
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
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden',  }}>
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