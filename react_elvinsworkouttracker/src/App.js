import React, {Component} from 'react';
import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

  callAPI() {
      fetch("http://localhost:9000/home")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render(){  
    return (
        <div className="App">
          <p
              className='App-intro'>{this.state.apiResponse}
          </p>
          <Button variant="contained">Hello World</Button>
        </div>
        
      );
    }
}
export default App;
