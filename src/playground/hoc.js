// Higher Order component
  
import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component.
const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is : {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAdmin && <p>This is private info. please dont share</p> }
			<WrappedComponent {...props}/>
		</div>
	);
}

const withAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAuthenticated ? (
				<WrappedComponent {...props} />
				) : (
				<p>please login to view</p>
			)}
		</div>
	)
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="DETAILS" />, document.getElementById('app')); 
ReactDOM.render(<AuthInfo isAuthenticated={false} info="DETAILS" />, document.getElementById('app')); 