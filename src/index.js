import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state={value:''}
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
    this.setState({value: event.target.value})
}  
render() {
  return (
    <div>
      <header className="b1">
        <h1>input</h1>
          <textarea onChange={this.handleChange}  value={this.state.value}></textarea>
          <h1>output</h1>
          <textarea value={this.state.value}></textarea>
      </header>
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Task/>);