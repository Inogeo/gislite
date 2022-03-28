// Importing react
import React from 'react';
import ReactDOM from 'react-dom';

// Adding CSS libraries
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit.js';

// React app writing
class GisLiteBody extends React.Component {
    render() {
        return (
            <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" data-uk-grid>
                <div>
                    <div className="uk-background-muted uk-padding">Item</div>
                </div>
                <div>
                    <div className="uk-background-primary uk-padding uk-light">Item</div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <GisLiteBody />,
    document.getElementById('root')
);