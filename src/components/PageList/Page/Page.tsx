import React from 'react';
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import classes from './Page.module.css';

interface InterfacePage {
    listCoffee: {id: number, blend_name: string, notes: string, origin: string}[][];
    page: number;
}

const Page: React.FC<InterfacePage> = (props) => {
    const {listCoffee, page} = props;

    return (
        <div className={classes.content}>
            {
				listCoffee[page-1].map((elem: { id: number; blend_name: string; origin: string; notes: string; }) => (
					<CoffeeCard
						id={elem.id}
						title={elem.blend_name}
						origin={elem.origin}
						notes={elem.notes}
						price={Number(String(elem.id).slice(0, 2))}
					/>
				))
            }
        </div>
    )
}

export default Page;