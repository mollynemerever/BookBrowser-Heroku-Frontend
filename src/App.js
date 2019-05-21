import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login.js";
import Homepage from "./components/Homepage.js";
import EditAccount from "./components/EditAccount.js";
import SearchInfluencers from "./components/SearchInfluencers.js";
import SearchBooks from "./components/SearchBooks.js";
import Profile from "./components/Profile.js";
import MyBookList from "./components/MyBookList.js";

export default class App extends Component {
  state = {
    currentUser: "",
    isAuthenticated: false
  };

  handleLogin = user => {
    this.setState({ currentUser: user, isAuthenticated: true });
  };

  handleLogout = () => {
    this.setState({ currentUser: "", isAuthenticated: false });
  };

  updateUserBooks = userbooks => {
    this.setState({ userbooks: userbooks });
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          component={() => (
            <Login
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              state={this.state}
            />
          )}
        />
        <Route
          exact
          path="/homepage"
          component={() => (
            <Homepage state={this.state} handleLogout={this.handleLogout} />
          )}
        />
        <Route
          exact
          path="/editaccount"
          component={() => <EditAccount state={this.state} />}
        />
        <Route
          exact
          path="/searchinfluencers"
          component={() => (
            <SearchInfluencers
              state={this.state}
              handleLogout={this.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/searchbooks"
          component={() => (
            <SearchBooks state={this.state} handleLogout={this.handleLogout} />
          )}
        />
        <Route
          exact
          path="/profile"
          component={() => <Profile state={this.state} />}
        />
        <Route
          exact
          path="/mybooklist"
          component={() => (
            <MyBookList
              state={this.state}
              handleLogout={this.handleLogout}
              updateUserBooks={this.updateUserBooks}
            />
          )}
        />
      </Router>
    );
  }
}
