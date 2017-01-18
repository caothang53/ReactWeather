var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
    <div className="text-center">
      <h3>It is {temp} degree in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
