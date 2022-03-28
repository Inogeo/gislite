// Importing react
import React from 'react';

// GisLiteBody component
class MainBody extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            status:'ready',
        }

    }

    render() {
        
        var domToRender 
        if (this.state.status != 'ready'){
            domToRender = (
                <div id="preloader" className="uk-overlay-default uk-height-1-1" style={{"display":"inline-block"}}>
                    <div className="uk-position-center">
                        <h3 className="uk-text-center uk-text-muted"><span data-uk-spinner="ratio: 2"></span> &nbsp; Loading catalogue...</h3>
                    </div>
                </div>
            )
        }
        else {
            domToRender = (
                <div id="" className="uk-height-1-1">
                    <div id="component" className="uk-height-1-1" style={{ "display": "none" }}>
                        <div data-uk-grid className="uk-child-width-expand uk-grid-column-collapse uk-grid-row-collapse uk-height-1-1">
                            <div className="uk-width-1-3 uk-height-1-1 spade-custom-panel" id="left-panel">
                                <div className="uk-card uk-card-default uk-card-body uk-height-1-1 uk-padding-small">
                                    <ul data-uk-tab>
                                        <li className="uk-active"><a href="#">Layers</a></li>
                                        <li><a href="#" className="uk-disabled">Surveys</a></li>
                                    </ul>
                                    <div id="search_filter_container" className="uk-width-1-1 uk-margin-bottom">
                                    </div>
                                    <div data-uk-grid className="uk-grid-column-collapse uk-grid-row-collapse">
                                        <div className="uk-width-1-4">
                                            <div className="uk-padding-remove spade-custom-scroller">
                                                <p className="uk-margin-small-top uk-margin-small-bottom">Location:</p>
                                                <div id="adb_geospatdivision_filter_container"></div>
                                                <p className="uk-margin-top uk-margin-small-bottom">Category:</p>
                                                <div id="adb_theme_filter_container"></div>
                                                <p className="uk-margin-top uk-margin-small-bottom">Date:</p>
                                                <form id="search_filter_container"
                                                    className="uk-search uk-search-default uk-width-1-1 uk-form-small uk-margin-small-bottom uk-padding-remove">
                                                    <input className="uk-search-input uk-form-small uk-padding-small uk-margin-small-bottom" id="flatpickr-after" type="search" placeholder="Published after" />
                                                    <input className="uk-search-input uk-form-small uk-padding-small" id="flatpickr-before" type="search" placeholder="Published before" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="uk-width-3-4 uk-padding-remove" id="result_container"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="map" className="uk-height-1-1 uk-width-1-1 uk-padding-remove"></div>
                            </div>
                            <div className="uk-width-1-6 uk-height-1-1 spade-custom-scroller spade-custom-scroller spade-custom-panel"
                                id="right-panel">
                                <div id="legend_container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return domToRender;
    }
}

export default MainBody;