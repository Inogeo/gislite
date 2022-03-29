// Importing react
import React from 'react';
import LeafletMapManager from '../assets/js/LeafletMapManager.js'

// GisLiteBody component
class GisLite extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            status:'ready',
        }
        this.API = {}
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount(){

        // Création du manager leaflet
        this.API["mapManager"] = new LeafletMapManager("map_container", this.props.config)
        
    }

    render() {
        
        var domToRender 
        if (this.state.status != 'ready'){
            domToRender = (
                <div id="preloader" className="uk-overlay-default uk-height-1-1" style={{ height: "100vh" }}>
                    <div className="uk-position-center">
                        <h3 className="uk-text-center uk-text-muted"><span data-uk-spinner="ratio: 2"></span> &nbsp; Loading catalogue...</h3>
                    </div>
                </div>
            )
        }
        else {
            domToRender = (
                <div id="component" className="uk-height-1-1" style={{ height: "100vh" }}>
                    <div data-uk-grid className="uk-child-width-expand uk-grid-column-collapse uk-grid-row-collapse uk-height-1-1" style={{ height: "100vh" }}> 
                        <div>
                            <div id="map_container" className="uk-height-1-1 uk-width-1-1 uk-padding-remove" style={{ height: "100vh" }}></div>
                        </div>
                        <div className="uk-width-1-6 uk-height-1-1 spade-custom-scroller spade-custom-scroller spade-custom-panel"
                            id="right-panel">
                            <div id="legend_container" className="uk-height-1-1 uk-width-1-1 uk-padding-small"></div>
                        </div>
                    </div>
                </div>
            )
        }
        return domToRender;
    }
}

export default GisLite;