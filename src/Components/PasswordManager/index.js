import {Component} from 'react'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
  }

  onAddButton = () => {}

  renderPassdword = () => {
    const {passwordList} = this.state
    let display = 0
    if (passwordList.length === 0) {
      display = (
        <div className="passwordList-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            className="no-password-image"
            alt="no-password"
          />
          <p className="no-password-mgs">No Passwords</p>
        </div>
      )
    }
    return display
  }

  render() {
    return (
      <div className="app-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-img"
          />
          <div className="add-password-container">
            <form className="form" onSubmit={this.onAddButton}>
              <p className="form-desc">Add New Password</p>
              <div className="image-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="image"
                  alt="website"
                />
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Website"
                />
              </div>
              <div className="image-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="image"
                  alt="username"
                />
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Username"
                />
              </div>
              <div className="image-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  className="image"
                  alt="password"
                />
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Password"
                />
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="pm-image"
                alt="password-manager"
              />
            </div>
          </div>
          <div className="add-password-container bottom-container">
            <div className="search-bar-container">
              <h1 className="heading">Your Passwords</h1>
              <div className="search-text-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="image"
                  alt="search"
                />
                <input
                  type="search"
                  className="input-text search-input"
                  placeholder="search"
                />
              </div>
            </div>
            <hr className="line" />
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" />
              <p className="show-password">Show Passwords</p>
            </div>
            {this.renderPassdword()}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
