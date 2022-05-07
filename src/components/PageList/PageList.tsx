import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getCoffeeList} from "../../store/action-creators/coffee";
import {CircularProgress, Pagination} from "@mui/material";
import Page from "./Page/Page";
import classes from './PageList.module.css';

const PageList = () => {
    const {listCoffee, loading, amountPages} = useTypedSelector(state => state.coffee);
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
                <>
                    <Pagination className={classes.pagination} onChange={handleChange} count={amountPages} color="primary" />
                    <Page listCoffee={listCoffee} page={page} />
                </>
            }
        </>
    );
}

export default PageList;