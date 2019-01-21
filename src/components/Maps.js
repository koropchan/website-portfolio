import React, { Component } from 'react'
import axios from 'axios' /*For fetching api*/

class Maps extends Component {

  state = {
    venues: []
  }

  /*After react component mounts we will call renderMap function*/
  componentDidMount (){
    this.getVenues()
  }

  /*Loading script with url */
  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCWuLe3GR-h65zxUNVFLyogC5HLd71pwy4&callback=initMap")
    window.initMap=this.initMap/*Converting to the window object so it can render*/
  }

  /*Setting parameters for axios*/
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "SWJGCU2SYWMCMYZYWXVYD2OLO3USZNX32JGABK2VHASUMDIQ",
      client_secret: "JLC3DSUXBSEXUUIIB2T5ZPYR1SYCGZLD5SDISCE0GN3TSC24",
      query: "",
      near: "Moncton",
      v: "20181030"
    }
    axios.get(endPoint + new URLSearchParams(parameters))
      .then (response => {
        this.setState({
          venues: response.data.response.groups[0].items /*Storing our places in the state */
        }, this.renderMap()) /*Rendering map after fetching all data */
      })
      .catch(error => {
          console.log(`Error! ${error}`)
      })
  }


  /*Function from google api. Creating a map */
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 46.087, lng: -64.778},
      zoom: 13
    })

    /*Creating an infowindow*/
    var infowindow = new window.google.maps.InfoWindow()

    /*Adding dynimic markers in venues state*/
    this.state.venues.map(myVenue =>   {

      var contentString = `${myVenue.venue.name}`

      /*Creating markers*/
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      /*Clicking on the marker*/
      marker.addListener('click', function() {

        /*Setting content*/
        infowindow.setContent(contentString)

        /*Opening windowInfo*/
        infowindow.open(map, marker)
      })

    })
  }

  
  render() {
      return (
          <div id="map"></div>
      )
  }
}


  /*JS function to get our script*/
  function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)/*Keep this script at the beginnig of the list of scripts*/
  }

export default Maps;