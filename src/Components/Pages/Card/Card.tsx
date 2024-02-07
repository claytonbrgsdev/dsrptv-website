import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import releasesLogo from '../../../assets/Images/releases.jpg'
import mixesLogo2 from '../../../assets/Images/mix.jpg'
import ImageCarouselMixtapes from '../StandardImageList/ImageCarouselMixtapes';
import ImageCarouselReleases from '../StandardImageList/ImageCarouselReleases';

type truorfal = {
    truorfal: boolean
}

export default function CardBackUpReleases({ truorfal }: truorfal) {
    return (
        <Card style={{ borderRadius: "10px", maxWidth: "1000px", margin: "2.5px", display: 'flex', flexDirection: 'column', justifyContent: "center", overflow: 'hidden', boxShadow: "0px 20px 200px black" }}>
            <CardMedia
                component="img"
                alt="A disruptive records logo"
                height="250px"
                src={(truorfal === true) ? releasesLogo : mixesLogo2}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "monospace"}}>
                    {(truorfal === true) ? "catalog" : "mixtapes"}
                </Typography>
                <Typography variant="body2" style={{ color: "text.secondary" }}>
                    {(truorfal === true) ? "our latest releases" : "our latest radioshows"}
                </Typography>
            </CardContent>
            <CardActions>
                {(truorfal === true) ? <ImageCarouselReleases /> : <ImageCarouselMixtapes />}
            </CardActions>
        </Card>
    );
}
