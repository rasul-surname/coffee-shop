import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getCoffeeList} from "../../store/action-creators/coffee";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import {CircularProgress} from "@mui/material";
import classes from './CoffeeList.module.css';

const CoffeeList = () => {
    const {listCoffee, loading} = useTypedSelector(state => state.coffee);
    const  dispatch = useDispatch();

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
                <div className={classes.content}>
                    {listCoffee.map(elem => <CoffeeCard id={elem.id} title={elem.blend_name} origin={elem.origin} notes={elem.notes} />)}
                </div>
            }
        </>
    );
}

export default CoffeeList;