import React from 'react';
import NVD3Chart from 'react-nvd3';
import { connect } from 'react-redux';
import { fetchChartTranListAction } from '../../../store/saga';
import { withRouter } from 'react-router-dom';

function getDatum(chartTranList) {
    var kaya = [];
    var natcco = [];
    var lkbp = [];
    var masspec = [];
    if (chartTranList !== undefined) {
        if (chartTranList.softwaregroup !== undefined && chartTranList.softwaregroup.length > 0) {
            for (var i = 1; i <= chartTranList.softwaregroup.length; i++) {
                kaya.push({
                    'x': i,
                    'y': chartTranList.softwaregroup.length > 0 ? parseInt(chartTranList.softwaregroup[chartTranList.softwaregroup.length - i].amount, 10) : 0
                });
            }
        }

        if (chartTranList.natcco !== undefined && chartTranList.natcco.length > 0) {
            for (var j = 1; j <= chartTranList.natcco.length; j++) {
                natcco.push({
                    'x': j,
                    'y': chartTranList.natcco.length > 0 ? parseInt(chartTranList.natcco[chartTranList.natcco.length - j].amount, 10) : 0
                });
            }
        }
        if (chartTranList.lkbp !== undefined && chartTranList.lkbp.length > 0) {
            for (var k = 1; k <= chartTranList.lkbp.length; k++) {
                lkbp.push({
                    'x': k,
                    'y': chartTranList.lkbp.length > 0 ? parseInt(chartTranList.lkbp[chartTranList.lkbp.length - k].amount, 10) : 0
                });
            }
        }
        if (chartTranList['0101'] !== undefined && chartTranList['0101'].length > 0) {
            for (var l = 1; l <= chartTranList['0101'].length; l++) {
                masspec.push({
                    'x': l,
                    'y': chartTranList['0101'].length > 0 ? parseInt(chartTranList['0101'][chartTranList['0101'].length - l].amount, 10) : 0
                });
            }
        }
        return [
            {
                values: kaya,
                key: 'KAYA',
                color: '#036914'
            },
            {
                values: natcco,
                key: 'eKoop',
                color: '#04a9f5'
            },
            {
                values: lkbp,
                key: 'Ligas',
                color: '#ffc107'
            },
            {
                values: masspec,
                key: 'MASS-SPEC',
                color: '#dc3545'
            },
        ];
    } else
        return [];
}

class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }
    componentWillMount() {
        this.props.fetchChartTranList();
    }
    componentDidMount() {
        // setInterval(() => {
        this.props.fetchChartTranList();
        // }, 10000);
    }

    componentWillReceiveProps() {
        this.setState({ data: getDatum(this.props.chartTranList) });
    }

    render() {
        return (
            <div>
                {
                    React.createElement(NVD3Chart, {
                        xAxis: {
                            tickFormat: function (d) { return d; },
                            axisLabel: 'Transactions (Last 100)'
                        },
                        yAxis: {
                            axisLabel: 'Amount (PHP)',
                            tickFormat: function (d) { return d; }
                        },
                        type: 'lineChart',
                        datum: this.state.data,
                        x: 'x',
                        y: 'y',
                        height: 450,
                        renderEnd: function () {
                            console.log('renderEnd');
                        }
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        chartTranList: state.chartTranList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchChartTranList: () => { dispatch(fetchChartTranListAction()); },
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LineChart));