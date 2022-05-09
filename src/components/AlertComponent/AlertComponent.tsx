import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { Button, Modal } from '@mui/material';

interface InterfaceAlertComponent {
	type: any;
	value: any;
	visible: any;
	setVisibleAlert?: any;
}

const AlertComponent: React.FC<InterfaceAlertComponent> = (props) => {
	const {type, value, visible, setVisibleAlert} = props;
	const [open, setOpen] = React.useState(true);

	useEffect(() => {
		setOpen(true);
	}, [visible]);

    const handleClose = () => {
		setVisibleAlert(false);
		setOpen(false);
	};
	
	return (
		<>
			{visible ? (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center' }} spacing={2}>
						<Alert style={{ }} severity={type}>{value}</Alert>
						<Button onClick={handleClose} variant="contained">Хорошо, спасибо</Button>
					</Stack>
				</Modal>
			
			): ''
		}
		</>
	)
}

export default AlertComponent;