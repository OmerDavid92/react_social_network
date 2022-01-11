
class Login extends React.Component 
{
	constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };

		this.handle_click = this.handle_click.bind( this );
		this.handle_change = this.handle_change.bind( this );
	}

    
    handle_change(event) {
        let new_state = { ...this.state };
        
        if (event.target.id === "email") {
            new_state.email = event.target.value;
        } else if (event.target.id === "pass") {
            new_state.pass = event.target.value;
        }
        this.setState(new_state);
    }


	handle_click()
	{
		if ( this.props.handle_delete )
		  this.props.handle_delete( this.props.user.id );
	}

	render() {
		return 	<div className='login'>
                    <input id="email" type="text" value={this.state.email} onChange={this.handle_change}>Email</input>
                    <input id="password" type="text" value={this.state.pass} onChange={this.handle_change}>Password</input>
                    <button id="signin" onclick={this.handle_click}>SignIn</button>
				</div>
	}
}


