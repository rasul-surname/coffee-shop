import { Button } from "@mui/material";

interface InterfaceButtonComponent {
	children: any;
	type?: any;
	size?: any;
	color?: any;
	onClick?: () => void;
}

const ButtonComponent: React.FC<InterfaceButtonComponent> = ({children, type, size, color, onClick}) => {

	return (
		<Button variant={type} size={size} color={color} onClick={onClick} >
            {children}
        </Button>
	)
}

export default ButtonComponent;