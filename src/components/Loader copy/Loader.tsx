import { CircularProgress } from "@mui/material";
import classes from './Loader.module.css';

const Loader = () => {

    return (
		<div className={classes.loader}>
			<CircularProgress />
		</div>
        
    );
}

export default Loader;