var React= require('react');
var ReactDOM=require('react-dom');

var DCChildButton=React.createClass({

		getInitialState:function(){
			return({start:"" , end:" "})
		},

		setStart:function(event){
	    return(
			this.setState({start:event.target.value})
	    )
		},

		setEnd:function(event){
	    return(
			this.setState({end:event.target.value})
	    )
		},

	  sendtoParent:function(){
	    this.props.click(this.state.start,this.state.end)
	  },

	  	render: function() { 
	    return (
	      <div>
	        <input type="text" className="form-control" placeholder='Enter Start Location' id='searchBox' value={this.state.start} onChange={this.setStart}/>
	       	<input type="text" className="form-control" placeholder='Enter Destination' id='searchBox' value={this.state.end} onChange={this.setEnd}/>
	        <a className="btn btn-primary btn-medium" href="#" id='searchButton' onClick={this.sendtoParent} >
	         <b> Search..   </b>
	       	</a>
      </div>  
    )
  }

})

module.exports=DCChildButton;