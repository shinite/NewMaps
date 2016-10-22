var React= require('react');
var ReactDOM=require('react-dom');
var DistanceCal=require('./component/DistanceCal')
var MapDisplay=require('./component/MapDisplay')
var DCChildButton=require('./component/DCChildButton')
var DCChildGoogle=require('./component/DCChildGoogle')



var MainComponent=React.createClass({
  render: function() {
    return (
      <div>
      <DCChildGoogle	/>
      
      </div>
    )
  }

})


ReactDOM.render(<MainComponent/>,document.getElementById('View'));