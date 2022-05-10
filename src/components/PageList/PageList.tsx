import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getCoffeeList} from "../../store/action-creators/coffee";
import {CircularProgress, Pagination} from "@mui/material";
import Page from "./Page/Page";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import classes from './PageList.module.css';

const PageList = () => {
    const {listCoffee, loading, error, amountPages} = useTypedSelector(state => state.coffee);
    const [page, setPage] = React.useState<number>(1);
    const  dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch<any>(getCoffeeList());
    }, []);

    return (
        <>
            {loading ?
                <div className={classes.loader}>
                    <CircularProgress />
                </div>
                :
				error ? 
				<div className={classes.error}>
					<ErrorOutlineIcon />
					{error}
				</div> 
				:
				listCoffee.length > 0 ?
                <>
                    <Pagination className={classes.pagination} onChange={handleChange} count={amountPages} color="primary" />
                    <Page listCoffee={listCoffee} page={page} />
                </>
				: 
				<div className={classes.notData}>
					<p>Нет данных</p>
				</div>
            }
        </>
    );
}

export default PageList;