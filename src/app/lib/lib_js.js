var React = require('react');

var Table = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        // source: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.arrayOf(React.PropTypes.object)]).isRequired,
        // columns: React.PropTypes.arrayOf(React.PropTypes.instanceOf(ColumnBase)).isRequired,

        // rowsPerPage: React.PropTypes.number,
        initialSortColumn: React.PropTypes.number,
        // isDescOrder: React.PropTypes.bool,
        // allowSelection: React.PropTypes.bool,
        // idColumn: React.PropTypes.string,
    },

    getInitialState: function () {
        return {
            rows: []
        }
    },

    getDefaultProps: function () {
        return {
            initialSortColumn: 0,
            // rowsPerPage: 10,
            // isDescOrder: false
        }
    },

    render: function () {
        return (
            <div>
              Table JSX
            </div>
        );
    }
});

//hack
Table.Table = Table;

module.exports = Table;