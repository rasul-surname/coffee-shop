import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getCoffeeList} from "../../store/action-creators/coffee";

import {Pagination} from "@mui/material";

import Page from "./Page/Page";
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import classes from './PageList.module.css';

const PageList = () => {
	const  dispatch = useDispatch();
    const {listCoffee, loading, error, amountPages} = useTypedSelector(state => state.coffee);
    const [page, setPage] = React.useState<number>(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch<any>(getCoffeeList());
    }, []);

    return (
        <>
            {loading ?
                <Loader />
                :
				error ? 
				<Error children={error} />
				:
				listCoffee.length > 0 ?
                <>
                    <Pagination className={classes.pagination} onChange={handleChange} count={amountPages} color="primary" />
                    <Page listCoffee={listCoffee} page={page} />
                </>
				: 
				<Error children={'Нет данных'} />
            }
        </>
    );
}

export default PageList;