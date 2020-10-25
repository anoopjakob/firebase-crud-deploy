/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import fireBaseDb from '../firebase';

const Contact = () => {
	const [contactObjects, setContactObjects] = useState({});
	const [currentId, setCurrentId] = useState('');

	useEffect(() => {
		fireBaseDb.child('contacts').on('value', (snapshot) => {
			if (snapshot.val() != null)
				setContactObjects({
					...snapshot.val(),
				});
			else
				setContactObjects({
					...snapshot.val(),
				});
		});
	}, []);

	const addOrEdit = (obj) => {
		if (currentId === '')
			fireBaseDb.child('contacts').push(obj, (err) => {
				if (err) console.log(err);
				else setCurrentId('');
			});
		else
			fireBaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
				if (err) console.log(err);
				else setCurrentId('');
			});
	};

	const onDelete = (key) => {
		if (window.confirm('Are you sure to delte this record ?')) {
			fireBaseDb.child(`contacts/${key}`).remove((err) => {
				if (err) console.log(err);
				else setCurrentId('');
			});
		}
	};

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4 text-center">Contact Register</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-5">
					<ContactForm {...{ addOrEdit, currentId, contactObjects }} />
				</div>
				<div className="col-md-7">
					<div>
						<table className="table table-borderless table-stripped">
							<thead className="thead-light">
								<tr>
									<th>Full Name</th>
									<th>Mobile</th>
									<th>Email</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(contactObjects).map((id) => (
									<tr key={id}>
										<td>{contactObjects[id].fullName}</td>
										<td>{contactObjects[id].mobile}</td>
										<td>{contactObjects[id].email}</td>
										<td>
											<a
												role="button"
												className="btn text-primary"
												onClick={() => {
													setCurrentId(id);
												}}
											>
												<i className="fas fa-pencil-alt" />
											</a>
											<a className="btn text-danger" onClick={() => onDelete(id)}>
												<i className="fas fa-trash-alt" />
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
