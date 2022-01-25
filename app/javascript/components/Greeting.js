import React from "react"
import PropTypes from "prop-types"
const Greeting = (props) => {
  const { message } = props;
    return (
      <React.Fragment>
        Message: {message}
      </React.Fragment>
    );
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
