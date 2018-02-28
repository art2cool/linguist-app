import React from 'react';

export default class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  componentDidMount() {
  }
  componentWillReceiveProps(nextProps){
    this.setState({isLoading: false})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmitForm(e){
    e.preventDefault()
    this.setState({isLoading: true})
    const {email, password } = this.state
    this.props.signIn({ email, password })
    // setInterval( () => console.log(this.props), 5000)
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
          <h2>Sing-In</h2>
          {this.props.user.error && <div className="alert alert-danger" role="alert"><b>Ooops!</b>{' '}{this.props.user.error}</div>}

          <form onSubmit={this.handleSubmitForm.bind(this)}>
            <div className="form-group">
              <label >Email address</label>
              <input type="email" className="form-control" onChange={this.handleEmailChange.bind(this)} placeholder="example@email.com" />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
            </div>


            <button type="submit" className="btn btn-default">Submit</button>{this.state.isLoading && <div>loading...</div>}
          </form>
          </div>
        </div>
      </div>
    )
  }
}
