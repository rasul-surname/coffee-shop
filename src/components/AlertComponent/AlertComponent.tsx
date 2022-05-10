import React, { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { Modal } from '@mui/material';

import ButtonComponent from '../ButtonComponent/ButtonComponent';

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
						<ButtonComponent 
							children={'Хорошо, спасибо'} 
							type="contained"
							onClick={() => handleClose()} 
						/>
					</Stack>
				</Modal>
			
			): ''
		}
		</>
	)
}

export default AlertComponent;