var React= require('react');
var ReactDOM=require('react-dom');
var DCChildButton=require('./DCChildButton')
var DCChildGoogle=require('./DCChildGoogle')


var DistanceCal=React.createClass({

	getInitialState:function(){
		return(
			{start:'',end:''}
			)
		},
	

	HandleClick:function(begin,stop){
		console.log(begin)
		return(
		this.setState({start: begin, end :stop})
		)
	},

   	 render: function() {
        return (
      		<div>
           		<DCChildButton click={this.HandleClick}/>
           		<DCChildGoogle start={this.state.start} end={this.state.end}/>
        	</div>
        	)}
})
	
module.exports=DistanceCal;