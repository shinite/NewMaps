var React= require('react');
var ReactDOM=require('react-dom');
var mapsapi=require( 'google-maps-api' )( 'Key')

class DCChildGoogle extends React.Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
      distance: '',
    };
  }

  componentDidMount() {

    console.log("mounted")
    var that=this
    mapsapi().then(function(maps){
      console.log("mapsapi")
    // Some sample data plus a helper for the DistanceMatrixService.
    const origin = new google.maps.LatLng(52.516242, 13.377720);
    const destination = 'Potsdam, Germany';
    const matrix = new google.maps.DistanceMatrixService();

    
    // Get distance from Google API, if server responds, call renderDetails().
    matrix.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      }, 
       function(res, status) {
    console.log(res.originAddresses[0] )
    // If the request was successfull, fill our state with the distance data.
    if (status == 'OK') {
      that.setState({
        origin: res.originAddresses[0],
        destination: res.destinationAddresses[0],
        distance: res.rows[0].elements[0].distance.text,
      });
    } else {
      console.log(status);
    }
  }
    );
  })

  }
  
 

  render() {
    return(
      <div>
        <p>Origin: {this.state.origin}</p>
        <p>Destination: {this.state.destination}</p>
        <p>Distance: {this.state.distance}</p>
      </div>
    );
  }
}

module.exports=DCChildGoogle;