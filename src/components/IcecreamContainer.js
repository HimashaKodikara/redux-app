import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number of iceCreams - {props.iceCream.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    iceCream: state.iceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
