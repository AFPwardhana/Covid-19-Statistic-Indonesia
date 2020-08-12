var React = require('react');
var ReactDOM = require('react-dom');

class Peta extends React.Component {
    render(){
        return <h1 className ="font-italic">Peta</h1> ;   
    } 
}

ReactDOM.render(<Peta />,document.getElementById('peta'));
