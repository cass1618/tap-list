import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {

    return (
        <React.Fragment>
            <hr/>
            {props.kegList.map((keg) =>
                <Keg 
                    whenKegClicked = {props.onSelectingKeg}
                    brewery = {keg.brewery}
                    name = {keg.name}
                    location = {keg.location}
                    abv = {keg.abv}
                    price = {keg.price}
                    pints = {keg.pints}/>
            )};
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onSelectingKeg: PropTypes.func
};

export default KegList;