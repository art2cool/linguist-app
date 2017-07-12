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

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmitForm(e){
    e.preventDefault()
    console.log(this.state)
    this.setState({isLoading: true})
    this.props.signIn(this.state)

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
          <h2>Sing-In</h2>

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
