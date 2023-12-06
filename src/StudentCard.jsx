import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';


function StudentCard(props){

    const [bg, setBg] = useState(false);

    const toggleBg = () => {
        setBg(!bg);
    }

    return(
            <Card sx={{ maxWidth: 300,
                        bgcolor: bg ? "gray" : "white", }}>
                <CardActionArea onClick={toggleBg}>
                    <CardMedia
                    component="img"
                    image={props.pic}
                    alt="Student"
                    />
                    <CardContent align='center'>
                        <Typography gutterBottom variant="h7" component="div" >
                            ID:  {props.id}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Name:  {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Birthday:  {props.bday}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.qq}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}

StudentCard.propType = {
    pic: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    bday: PropTypes.string,
    qq: PropTypes.string,

}


export default StudentCard