/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const ContactForm = ({ currentId, contactObjects, addOrEdit }) => {
	const initialFieldValues = {
		fullName: '',
		mobile: '',
		email: '',
		address: '',
	};
	const [values, setValues] = useState(initialFieldValues);

	useEffect(() => {
		if (currentId === '')
			setValues({
				...initialFieldValues,
			});
		else
			setValues({
				...contactObjects[currentId],
			});
	}, [currentId, contactObjects]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		addOrEdit(values);
	};

	return (
		<form autoComplete="off" onSubmit={handleOnSubmit}>
			<div className="form-group input-group">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<i className="fas fa-user" />
					</div>
				</div>
				<input
					className="form-control"
					placeholder="Full Name"
					name="fullName"
					value={values.fullName}
					onChange={handleInputChange}
				/>
			</div>

			<div className="form-row">
				<div className="form-group input-group col-md-6">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-mobile-alt" />
						</div>
					</div>
					<input
						className="form-control"
						placeholder="Mobile"
						name="mobile"
						value={values.mobile}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form-group input-group col-md-6">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-envelope" />
						</div>
					</div>
					<input
						onChange={handleInputChange}
						className="form-control"
						placeholder="Email"
						name="email"
						value={values.email}
					/>
				</div>
			</div>
			<div className="form-group">
				<textarea
					className="form-control"
					placeholder="Address"
					name="address"
					value={values.address}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<input
					type="submit"
					value={currentId === '' ? 'save' : 'Update'}
					className="btn btn-primary btn-block"
				/>
			</div>
		</form>
	);
};
export default ContactForm;
