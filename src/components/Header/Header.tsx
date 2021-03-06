import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {deleteProductBasket, buyAllBasket, deleteAllBasket} from "../../store/action-creators/cash";

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ClearIcon from '@mui/icons-material/Clear';
import {Box, Modal, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import Badge from '@mui/material/Badge';

import AlertComponent from '../AlertComponent/AlertComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

import classes from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const {cash, totalPriceProducts, totalNumberProducts, basket} = useTypedSelector(state => state.cash);
    const [open, setOpen] = React.useState(false);
	
	const [typeAlert, setTypeAlert] = useState<any>("");
	const [valueAlert, setValueAlert] = useState("");
	const [visibleAlert, setVisibleAlert] = useState(false);

    const handleOpen = () => {
		setVisibleAlert(false);
		setOpen(true);
	};
    const handleClose = () => setOpen(false);

    function deleteBasket(id: number) {
		setVisibleAlert(false);
        dispatch(deleteProductBasket(id));
    }

    function buyAllProducts() {
		const sumAllProducts = basket.reduce((sum, product) => {
			return sum += product.price * product.count;
		}, 0);

		if(sumAllProducts === 0) {
			setTypeAlert("warning");
			setValueAlert("Корзина пустая!");
			setVisibleAlert(true);
		} else if(sumAllProducts < cash) {
			dispatch(buyAllBasket());
			
			setTypeAlert("success");
			setValueAlert("Заказ успешно оформлен");
			setVisibleAlert(true);
		} else if(sumAllProducts > cash) {
			setTypeAlert("warning");
			setValueAlert("Недостаточно средств!");
			setVisibleAlert(true);
		}
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
							<AlertComponent type={typeAlert} value={valueAlert} visible={visibleAlert} setVisibleAlert={setVisibleAlert} />
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Корзина
                            </Typography>
                            <div className={classes.modal__tableHead}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell align="right">Цена</TableCell>
                                        <TableCell align="right">Количество</TableCell>
                                    </TableRow>
                                </TableHead>
                                {basket.map((elem: {id: number, title: string, price: number, count: number}) => {
                                        return (
                                            <TableRow className={classes.modal__tableBody}>
                                                <TableCell component="th" scope="row">
                                                    {elem.title}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {elem.price}&nbsp;&#8381;
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
								<TableRow className={classes.modal__tableAmount}>
									<TableCell component="th" scope="row">
										Итого: 
                                	</TableCell>
									<TableCell component="th" scope="row">
										{totalPriceProducts}&nbsp;&#8381;
                                	</TableCell>
									<TableCell component="th" scope="row">
										{totalNumberProducts}
                                	</TableCell>
								</TableRow>
                            </div>
                            <div className={classes.modal__btn}>
								<ButtonComponent 
									children={'Очистить'} 
									type="outlined"
									onClick={() => deleteAllProducts()} 
								/>
								<ButtonComponent 
									children={'Оформить'} 
									type="outlined"
									onClick={() => buyAllProducts()} 
								/>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </header>
    );
}

export default Header;