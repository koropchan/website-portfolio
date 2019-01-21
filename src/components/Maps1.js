import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
  };

  export class Maps extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 46.087,
           lng: -64.778
          }}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAhD3957QJHZIWJz7iANjCG007FRgPs7jM'
  })(Maps);
  