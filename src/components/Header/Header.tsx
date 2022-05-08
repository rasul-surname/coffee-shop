import React from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ClearIcon from '@mui/icons-material/Clear';
import {Box, Button, Modal, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import Badge from '@mui/material/Badge';

import {deleteProductBasket, buyAllBasket, deleteAllBasket} from "../../store/action-creators/cash";
import classes from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const {cash, basket} = useTypedSelector(state => state.cash);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function deleteBasket(id: number) {
        dispatch(deleteProductBasket(id));
    }

    function buyAllProducts() {
        dispatch(buyAllBasket());
    }

    function deleteAllProducts() {
        dispatch(deleteAllBasket());
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h1>Наш суперкофе</h1>
                <div className={classes.header__cash}>
                    <div className={classes.header__cashTitle}>
                        <h3>{cash}</h3>
                        <CurrencyRubleIcon />
                    </div>
                    <Badge color="secondary" badgeContent={basket.length} onClick={handleOpen}>
                        <ShoppingBasketIcon />
                    </Badge>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className={classes.modal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Корзина
                            </Typography>
                            <div className={classes.modal__table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell align="right">Цена</TableCell>
                                        <TableCell align="right">Количество</TableCell>
                                    </TableRow>
                                </TableHead>
                                {basket.map((elem: {id: number, title: string, price: number, count: number}) => {
                                        return (
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    {elem.title}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {elem.price}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {elem.count}
                                                </TableCell>
                                                <TableCell component="th" scope="row" onClick={() => deleteBasket(elem.id)}>
                                                    <ClearIcon />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </div>
                            <div className={classes.modal__btn}>
                                <Button variant="outlined" onClick={() => deleteAllProducts()}>
                                    Удалить все
                                </Button>
                                <Button variant="outlined" onClick={() => buyAllProducts()}>
                                    Купить все
                                </Button>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </header>
    );
}

export default Header;