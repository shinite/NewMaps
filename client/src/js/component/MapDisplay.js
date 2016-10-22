var React= require('react');
var ReactDOM=require('react-dom');
var MapDisplayChild=require('./MapDisplayChild')

var MapDisplay=React.createClass({

   	 render: function() {
        return (
      		<div>
            <MapDisplayChild iframe='iframe' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1944.2947669055661!2d77.61238195795659!3d12.93408236187857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sforum!5e0!3m2!1sen!2sin!4v1476803918178" width="600" height="450" frameborder="0" style="border:0" />
        	</div>
        	)}
})
	
module.exports=MapDisplay;