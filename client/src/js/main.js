var React= require('react');
var ReactDOM=require('react-dom');
var google=require( 'google-maps-api' )( 'MY_KEY' );

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
      distance: '',
    };
  }


  componentDidMount() {
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
      this.renderDetails.bind(this)
    );
  }
  
  renderDetails(res, status) {
    // If the request was successfull, fill our state with the distance data.
    if (status == 'OK') {
      this.setState({
        origin: res.originAddresses[0],
        destination: res.destinationAddresses[0],
        distance: res.rows[0].elements[0].distance.text,

      });
    } else {
      console.log(status);
    }
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

ReactDOM.render(<Example/>, document.getElementById('View'));