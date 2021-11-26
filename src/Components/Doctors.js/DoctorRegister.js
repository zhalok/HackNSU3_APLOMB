import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const DoctorRegister = () => {
	return (
		<div>
			<div
				style={{
					width: '30%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '100px',
				}}
			>
				<input
					type='email'
					class='form-control'
					id='exampleFormControlInput1'
					placeholder='Email'
				/>

				<input
					type='password'
					class='form-control'
					id='exampleFormControlInput1'
					placeholder='Password'
					style={{
						marginTop: '20px',
					}}
				/>

				<input
					type='password'
					class='form-control'
					id='exampleFormControlInput1'
					placeholder='Confirm Password'
					style={{
						marginTop: '20px',
					}}
				/>
				<input
					class='form-check-input'
					type='radio'
					name='flexRadioDefault'
					id='flexRadioDefault1'
				/>
			</div>
		</div>
	);
};

export default DoctorRegister;
