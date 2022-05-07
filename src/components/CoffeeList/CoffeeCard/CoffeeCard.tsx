import React from 'react';
import {Button, Card, CardContent, Typography} from "@mui/material";
import classes from './CoffeeCard.module.css';

interface InterfaceCoffeeCard {
    id: number;
    title: string;
    origin: string;
    notes: string;
}

const CoffeeCard: React.FC<InterfaceCoffeeCard> = (props) => {
    const {id, title, origin, notes} = props;
    const notesList = notes.split(",");

    return (
        <Card className={classes.card} key={id}>
            <CardContent className={classes.card__content}>
                <Typography className={classes.card__origin} gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography className={classes.card__origin} gutterBottom variant="h6" component="div">
                    Происхождение: {origin}
                </Typography>
                <Typography className={classes.card__origin} variant="body2" color="text.secondary">
                    {notesList.map((elem: string, index: number) => {
                        return (
                            <Button className={classes.card__notes} variant="contained" size="small" key={index}>
                                {elem}
                            </Button>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CoffeeCard;