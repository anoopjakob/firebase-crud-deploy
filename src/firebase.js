import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDXZTYxi5kCOpVCMd4fsS8rMoAO5qBlKGs',
	authDomain: 'react-crud-7db5b.firebaseapp.com',
	databaseURL: 'https://react-crud-7db5b.firebaseio.com',
	projectId: 'react-crud-7db5b',
	storageBucket: 'react-crud-7db5b.appspot.com',
	messagingSenderId: '664827191051',
	appId: '1:664827191051:web:fc0be0d065798541e20c0e',
};
// Initialize Firebase
const fireBaseDb = firebase.initializeApp(firebaseConfig);

export default fireBaseDb.database().ref();
