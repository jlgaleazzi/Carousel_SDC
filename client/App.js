import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Item from './Components/Item';
import Style from './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [],
      title: []
    }
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get()
    document.currentProduct = 1;
  }

  get () {
    axios.get('/carousel')
      .then((res) => {
        this.setState({
          data: res.data
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Deployed?</h1>
        {this.state.data.map(product => {
          return (
            <Item key={product.id} item={product} />
          )
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('Carousel'));