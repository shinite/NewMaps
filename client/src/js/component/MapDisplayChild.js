var React=require('react')
var ReactDOM=require('react-dom')

var React= require('react');
var ReactDOM=require('react-dom');

var MapDisplayChild=React.createClass({

	 render:function()
  {
    var Iframe=this.props.iframe;

    return(

      <div>

       <Iframe src={this.props.src} height={this.props.height} width={this.props.width}/>

      </div>
      )
  }
});
module.exports=MapDisplayChild;