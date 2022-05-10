import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import {Button, Card, CardContent, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import {addProductBasket, buyProduct} from "../../../store/action-creators/cash";
import AlertComponent from '../../AlertComponent/AlertComponent';
import classes from './CoffeeCard.module.css';

interface InterfaceCoffeeCard {
    id: number;
    title: string;
    origin: string;
    notes: string;
    price: number;
}

const CoffeeCard: React.FC<InterfaceCoffeeCard> = (props) => {
    const dispatch = useDispatch();
    const {cash} = useTypedSelector(state => state.cash);
    const {id, title, origin, notes, price} = props;
    const [count, setCount] = useState<number>(1);
    const notesList = notes.split(",");

	const [typeAlert, setTypeAlert] = useState<any>("");
	const [valueAlert, setValueAlert] = useState("");
	const [visibleAlert, setVisibleAlert] = useState(false);

	
	useEffect(() => {
		setCount(1);
	}, [id])

    function addCount() {
        setCount(count + 1);
    }

    function deleteCount() {
        if(count !== 1) {
            setCount(count - 1);
        }
    }
    
    function buyCoffee(price: number) {
		const sumProducts = price * count;

		if(sumProducts < cash) {
			dispatch(buyProduct(count * price));
			
			setTypeAlert("success");
			setValueAlert("Заказ успешно оформлен");
			setVisibleAlert(true);
		} else if(sumProducts > cash) {	
			setTypeAlert("warning");
			setValueAlert("Недостаточно средств!");
			setVisibleAlert(true);
		}
    }

    function addBasket(id: number, title: string, price: number) {
        dispatch(addProductBasket(id, title, price, count));
    }

    return (
        <Card className={classes.card} key={id}>
			<AlertComponent type={typeAlert} value={valueAlert} visible={visibleAlert} setVisibleAlert={setVisibleAlert} />
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
                            <Button key={index} size="small" color="success">
                                #{elem}
                            </Button>
                        )
                    })}
                </Typography>
                <Typography className={classes.card__origin + ' ' + classes.card__cash} variant="body2" color="text.secondary">
                    <div className={classes.card__cashCount}>
                        <Button variant="text" onClick={deleteCount}>
                            <RemoveIcon />
                        </Button>
                        <div>
                            {count}
                        </div>
                        <Button variant="text" onClick={addCount}>
                            <AddIcon />
                        </Button>
                    </div>
                    <div className={classes.card__cashBasket}>
                        <Button variant="outlined" onClick={() => buyCoffee(price)}>
                            <p>{price} &#8381;</p>
                        </Button>
                        <Button variant="outlined" onClick={() => addBasket(id, title, price)}>
                            <ShoppingBasketIcon />
                        </Button>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CoffeeCard;