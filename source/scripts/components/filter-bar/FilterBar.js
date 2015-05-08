var React = require('react');
var ClientStats = require('./ClientStats');
var StatusFilter = require('./StatusFilter');
var SearchBox = require('./SearchBox');
var UIActions = require('../../actions/UIActions');

var FilterBar = React.createClass({

    getInitialState: function() {

        return null;
    },

    render: function() {

        return (
            <nav className="filter-bar">
                <SearchBox searchChangeHandler={this._onSearchChange} />
                <ClientStats />
                <StatusFilter />
            </nav>
        );
    },

    _onSearchChange: function(event) {
        UIActions.searchTorrents(event.target.value);
    }

});


module.exports = FilterBar;