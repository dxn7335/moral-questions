import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {

  render() {

    return( 
      <div className="moral-questions">
      </div>
    );
  }
}

ReactDom.render( <App />, document.querySelector('#app') );
