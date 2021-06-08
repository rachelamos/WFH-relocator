import React from "react";

class CityWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
    return(
    <div className="border">
        <strong>City: <span className="city-name">{this.props.city}</span></strong>
        <br></br>
        <strong>State: <span>{this.props.state}</span></strong>
        <br></br>
        <strong># of broadband providers: <span className="providerCount">{this.props.providerCount}</span></strong>
        <br></br>
        <strong># of available broadband plans: <span className="planCount">{this.props.planCount}</span></strong>
        <br></br>
        <strong>Highest available broadband speed: <span className="topSpeed">{this.props.topSpeed} Mbps</span></strong>
        <br></br>
        <strong>Avg plan price: <span className="avgPrice"></span>${this.props.avgPrice}</strong>
        <br></br>
        <strong>Cost-of-living index: <span className="costOfLiving">{this.props.costOfLiving}</span></strong>
    </div>
    )
}
}

export default CityWindow;