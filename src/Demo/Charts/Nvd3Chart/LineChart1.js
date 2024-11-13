import React from 'react';
import NVD3Chart from 'react-nvd3';
import { connect } from 'react-redux';
import { fetchChartTranListAction1 } from '../../../store/saga';
import { withRouter } from 'react-router-dom';

function getDatum(chartTranList) {
    var sumber = [];
    var pancur = [];
    var takera = [];
    if (chartTranList !== undefined) {
        if (chartTranList['022008'] !== undefined && chartTranList['022008'].length > 0) {
            for (var i = 1; i <= chartTranList['022008'].length; i++) {
                sumber.push({
                    'x': i,
                    'y': chartTranList['022008'].length > 0 ? parseInt(chartTranList['022008'][chartTranList['022008'].length - i].amount, 10) : 0
                });
            }
        }
        if (chartTranList['030003'] !== undefined && chartTranList['030003'].length > 0) {
            for (var j = 1; j <= chartTranList['030003'].length; j++) {
                pancur.push({
                    'x': j,
                    'y': chartTranList['030003'].length > 0 ? parseInt(chartTranList['030003'][chartTranList['030003'].length - j].amount, 10) : 0
                });
            }
        }
        if (chartTranList['010074'] !== undefined && chartTranList['010074'].length > 0) {
            for (var k = 1; k <= chartTranList['010074'].length; k++) {
                takera.push({
                    'x': k,
                    'y': chartTranList['010074'].length > 0 ? parseInt(chartTranList['010074'][chartTranList['010074'].length - k].amount, 10) : 0
                });
            }
        }
        return [
            {
                values: sumber,
                key: 'Sumber',
                color: '#04a9f5'
            },
            {
                values: pancur,
                key: 'Pancur',
                color: '#ffc107'
            },
            {
                values: takera,
                key: 'Takera',
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
        this.props.fetchChartTranList1();
    }
    componentDidMount() {
        // setInterval(() => {
        this.props.fetchChartTranList1();
        // }, 10000);
    }

    componentWillReceiveProps() {
        this.setState({ data: getDatum(this.props.chartTranList1) });
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
                            axisLabel: 'Amount (IDR)',
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
        chartTranList1: state.chartTranList1,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchChartTranList1: () => { dispatch(fetchChartTranListAction1()); },
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LineChart));