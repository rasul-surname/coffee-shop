import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import classes from './Error.module.css';

interface InterfaceError {
	children?: any;
}

const Error: React.FC<InterfaceError> = ({children}) => {

    return (
		<div className={classes.error}>
			<ErrorOutlineIcon />
			{children}
		</div> 
    );
}

export default Error;