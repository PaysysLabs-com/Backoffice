import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';
import {
    fetchTranListAction,
    fetchLigasNetDebitAction,
    fetchEkoopNetDebitAction,
    fetchMassPecNetDebitAction,
    fetchPfccoNetDebitAction,
    fetchSgNetDebitAction,
    fetchSumberNetDebitAction,
    fetchPancurNetDebitAction,
    fetchTakeraNetDebitAction,
    fetchSkkNetDebitAction
} from '../../store/saga';
import Aux from "../../hoc/_Aux";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BootstrapTableLocal extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.indonCurrFormat = this.indonCurrFormat.bind(this);
        this.philipCurrFormat = this.philipCurrFormat.bind(this);
        this.getBoldCell = this.getBoldCell.bind(this);
        this.getBoldAndBigCell = this.getBoldAndBigCell.bind(this);
        this.getFSP = this.getFSP.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.getTranType = this.getTranType.bind(this);
        this.getFormattedDate = this.getFormattedDate.bind(this);
        this.state = {
            country: 2,
        };
    }
    componentWillMount() {

        this.props.fetchTranList({ country: this.state.country });
        if (this.state.country === 1) {
            this.props.fetchLigasNetDebit();
            this.props.fetchEkoopNetDebit();
            this.props.fetchMassPecNetDebit();
            this.props.fetchPfccoNetDebit();
            this.props.fetchSgNetDebit();
        } else if (this.state.country === 2) {
            this.props.fetchSumberNetDebit();
            this.props.fetchPancurNetDebit();
            this.props.fetchTakeraNetDebit();
            this.props.fetchSkkNetDebit();
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.props.fetchTranList({ country: this.state.country });
            if (this.state.country === 1) {
                this.props.fetchLigasNetDebit();
                this.props.fetchEkoopNetDebit();
                this.props.fetchMassPecNetDebit();
                this.props.fetchPfccoNetDebit();
                this.props.fetchSgNetDebit();
            } else if (this.state.country === 2) {
                this.props.fetchSumberNetDebit();
                this.props.fetchPancurNetDebit();
                this.props.fetchTakeraNetDebit();
                this.props.fetchSkkNetDebit();
            }
        }, 10000);
    }

    indonCurrFormat(value) {
        let currFormat = 0;
        if (value !== undefined) {
            currFormat = new Intl.NumberFormat('ID', {
                style: 'currency',
                currency: 'IDR'
            }).format(value).substring(2);
        }
        return currFormat;
    }

    philipCurrFormat(value) {
        let currFormat = 0;
        if (value !== undefined) {
            currFormat = new Intl.NumberFormat('en-PHL', {
                style: 'currency',
                currency: 'PHP'
            }).format(value).substring(4);
        }
        return currFormat;
    }

    handleCountryChange(event) {
        if (event.target.value === 'Philippines') {
            this.setState({ country: 1 });
            this.props.fetchTranList({ country: 1 });
            this.props.fetchLigasNetDebit();
            this.props.fetchEkoopNetDebit();
            this.props.fetchMassPecNetDebit();
            this.props.fetchPfccoNetDebit();
            this.props.fetchSgNetDebit();
        }
        else if (event.target.value === 'Indonesia') {
            this.setState({ country: 2 });
            this.props.fetchTranList({ country: 2 });
            this.props.fetchSumberNetDebit();
            this.props.fetchPancurNetDebit();
            this.props.fetchTakeraNetDebit();
            this.props.fetchSkkNetDebit();
        }
    }
    getBoldCell = (cell) => {
        return <label style={{ fontWeight: 'bold' }}>{cell}</label>;
    };
    getBoldAndBigCell = (cell) => {
        return <label style={{ fontWeight: 'bold', fontSize: '18px' }}>{cell}</label>;
    };
    getFormattedDate = (cell) => {
        return <label style={{ fontWeight: 'bold' }}>{moment(cell).format('DD-MM-YYYY hh:mm:ss')}</label>;
    };
    getFSP = (cell) => {
        let str = '';
        if (cell === 'skk') {
            str = <label style={{ fontWeight: 'bold' }}>SKK</label>;
        } else if (cell === 'sunber' || cell === '022008') {
            str = <label style={{ fontWeight: 'bold' }}>Sumber Kasih</label>;
        } else if (cell === 'takera' || cell === '010074') {
            str = <label style={{ fontWeight: 'bold' }}>Takera</label>;
        } else if (cell === 'pancur' || cell === '030003') {
            str = <label style={{ fontWeight: 'bold' }}>Pancur Kasih</label>;
        } else if (cell === 'lkbp') {
            str = <label style={{ fontWeight: 'bold' }}>Ligas</label>;
        } else if (cell === 'natcco') {
            str = <label style={{ fontWeight: 'bold' }}>eKoop</label>;
        } else if (cell === 'massspec' || cell === '0101') {
            str = <label style={{ fontWeight: 'bold' }}>Toril MASS-SPECC</label>;
        } else if (cell === 'pfcco') {
            str = <label style={{ fontWeight: 'bold' }}>PFCCO</label>;
        } else if (cell === 'softwaregroup') {
            str = <label style={{ fontWeight: 'bold' }}>KAYA</label>;
        } else {
            str = <label style={{ fontWeight: 'bold' }}>{cell}</label>;
        }
        return str;
    };

    getStatus = (cell) => {
        let str = '';
        if (cell === 'Success') {
            str = <label style={{ color: 'green', fontWeight: 'bold' }}>SUCCESS</label>;
        } else
            str = <label style={{ color: 'red', fontWeight: 'bold' }}>{cell}</label>;
        return str;
    };

    getTranType = (cell) => {
        if (cell === 'P2P')
            return 'P2P transfer';
        else if (cell === 'Merchant')
            return 'Merchant payment';
    };

    render() {
        const tableOptions = {
            noDataText: 'No Data Found',
            // page: 1,  // which page you want to show as default
            // hideSizePerPage: true,
            // sizePerPage: 10,
        };
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={6}>
                                        <Form inline>
                                            <Form.Group className="mb-2">
                                                <Form.Label srOnly>paticipants</Form.Label>
                                                <Form.Control plaintext readOnly style={{ color: '#111', fontWeight: 'bold' }} defaultValue="Participants" />
                                            </Form.Group>
                                            <Form.Group className="mb-2 ml-4">
                                                <Form.Label srOnly>netDebit</Form.Label>
                                                <Form.Control plaintext readOnly style={{ color: '#111', fontWeight: 'bold' }} defaultValue="Net Debit position" />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={3}></Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 ml-3">
                                            <Form.Label srOnly>country</Form.Label>
                                            <Form.Control plaintext readOnly style={{ color: '#111', fontWeight: 'bold' }} defaultValue="Country" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    {this.state.country === 1 &&
                                        <Col md={6}>
                                            <Form inline>
                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>ligasLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="Ligas" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>ligas</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.ligasFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.philipCurrFormat(this.props.ligasNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>ekoopLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="eKoop" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>ekoop</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.ekoopFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.philipCurrFormat(this.props.ekoopNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>masspecLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="Toril MASS-SPECC" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>masspec</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.massspecFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.philipCurrFormat(this.props.massspecNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>pfccoLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="PFCCO" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>pfcco</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.pfccoFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.philipCurrFormat(this.props.pfccoNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>sgLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="KAYA" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>sg</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.sgFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.philipCurrFormat(this.props.sgNetDebit)} />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    }
                                    {
                                        this.state.country === 2 &&
                                        <Col md={6}>
                                            <Form inline>
                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>sumberLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="Sumber Kasih" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>sumber</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.sumberFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.indonCurrFormat(this.props.sumberNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>takeraLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="Takera" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>takera</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.takeraFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.indonCurrFormat(this.props.takeraNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>pancurLabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="Pancur Kasih" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>pancur</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.pancurFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.indonCurrFormat(this.props.pancurNetDebit)} />
                                                </Form.Group>

                                                <Form.Group className="mb-2">
                                                    <Form.Label srOnly>skklabel</Form.Label>
                                                    <Form.Control plaintext readOnly style={{ color: '#111' }} defaultValue="SKK" />
                                                </Form.Group>
                                                <Form.Group className="mb-2 ml-6">
                                                    <Form.Label srOnly>skk</Form.Label>
                                                    <Form.Control disabled defaultValue={0} style={{ color: `${this.props.skkFontColor}`, textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }} value={this.indonCurrFormat(this.props.skkNetDebit)} />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    }

                                    <Col md={3}></Col>
                                    <Col md={3}>
                                        <Form.Group controlId="countries" className="mb-2 ml-3">
                                            <Form.Control as="select" onChange={this.handleCountryChange}>
                                                <option>Indonesia</option>
                                                <option>Philippines</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                {/* <Scrollbars autoHeight autoHeightMax={400} style={{ width: '100%' }} > */}
                                <BootstrapTable
                                    data={this.props.tranList}
                                    keyField="id"
                                    options={tableOptions}
                                    // pagination
                                    striped
                                    height='400'
                                // search
                                >
                                    <TableHeaderColumn dataField="id" hidden>ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField="stampDate" dataFormat={this.getFormattedDate} tdStyle={{ whiteSpace: 'normal' }} thStyle={{ whiteSpace: 'normal', backgroundColor: '#17a2b8', color: 'white' }} width="20%">DateTime (DD-MM-YYY)</TableHeaderColumn>
                                    <TableHeaderColumn dataField="transaction_Type" dataFormat={(cell) => this.getBoldCell(this.getTranType(cell))} tdStyle={{ whiteSpace: 'normal' }} thStyle={{ whiteSpace: 'normal', backgroundColor: '#17a2b8', color: 'white' }} width="17%">Transaction Type</TableHeaderColumn>
                                    <TableHeaderColumn dataField="amount" headerAlign="left" dataAlign="right" dataFormat={(cell) => this.state.country === 1 ? this.getBoldAndBigCell(this.philipCurrFormat(cell)) : this.getBoldAndBigCell(this.indonCurrFormat(cell))} tdStyle={{ whiteSpace: 'normal' }} thStyle={{ whiteSpace: 'normal', backgroundColor: '#17a2b8', color: 'white' }} width="16%">Amount</TableHeaderColumn>
                                    <TableHeaderColumn dataField="instituton_code" dataFormat={this.getFSP} tdStyle={{ whiteSpace: 'normal' }} thStyle={{ whiteSpace: 'normal', backgroundColor: '#17a2b8', color: 'white' }} width="16%">Payer FSP</TableHeaderColumn>
                                    <TableHeaderColumn dataField="targetInstitutionCode" dataFormat={this.getFSP} tdStyle={{ whiteSpace: 'normal' }} thStyle={{ whiteSpace: 'normal', backgroundColor: '#17a2b8', color: 'white' }} width="16%">Payee FSP</TableHeaderColumn>
                                    <TableHeaderColumn dataField="status" dataFormat={this.getStatus} tdStyle={{ whiteSpace: 'normal' }} thStyle={{ whiteSpace: 'normal', backgroundColor: '#17a2b8', color: 'white' }} width="15%">Status</TableHeaderColumn>
                                </BootstrapTable>
                                {/* </Scrollbars> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux >
        );
    }
}

function mapStateToProps(state) {
    return {
        tranList: state.tranList,
        ligasNetDebit: state.ligasNetDebit,
        ekoopNetDebit: state.ekoopNetDebit,
        massspecNetDebit: state.massspecNetDebit,
        pfccoNetDebit: state.pfccoNetDebit,
        sgNetDebit: state.sgNetDebit,
        sumberNetDebit: state.sumberNetDebit,
        pancurNetDebit: state.pancurNetDebit,
        takeraNetDebit: state.takeraNetDebit,
        skkNetDebit: state.skkNetDebit,
        ligasFontColor: state.ligasFontColor,
        ekoopFontColor: state.ekoopFontColor,
        massspecFontColor: state.massspecFontColor,
        pfccoFontColor: state.pfccoFontColor,
        sgFontColor: state.sgFontColor,
        sumberFontColor: state.sumberFontColor,
        pancurFontColor: state.pancurFontColor,
        takeraFontColor: state.takeraFontColor,
        skkFontColor: state.skkFontColor,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTranList: (value) => { dispatch(fetchTranListAction(value)); },
        fetchLigasNetDebit: (value) => { dispatch(fetchLigasNetDebitAction()); },
        fetchEkoopNetDebit: (value) => { dispatch(fetchEkoopNetDebitAction()); },
        fetchMassPecNetDebit: (value) => { dispatch(fetchMassPecNetDebitAction()); },
        fetchPfccoNetDebit: (value) => { dispatch(fetchPfccoNetDebitAction()); },
        fetchSgNetDebit: (value) => { dispatch(fetchSgNetDebitAction()); },
        fetchSumberNetDebit: (value) => { dispatch(fetchSumberNetDebitAction()); },
        fetchPancurNetDebit: (value) => { dispatch(fetchPancurNetDebitAction()); },
        fetchTakeraNetDebit: (value) => { dispatch(fetchTakeraNetDebitAction()); },
        fetchSkkNetDebit: (value) => { dispatch(fetchSkkNetDebitAction()); }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BootstrapTableLocal));