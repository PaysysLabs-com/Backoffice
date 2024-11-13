import {
    actSetTranList,
    actSetChartTranList,
    actSetChartTranList1,
    actSetLigasNetDebit,
    actSetEkoopNetDebit,
    actSetMassspecNetDebit,
    actSetPfccoNetDebit,
    actSetSgNetDebit,
    actSetSumberNetDebit,
    actSetPancurNetDebit,
    actSetTakeraNetDebit,
    actSetSkkNetDebit,
} from './actions';

export function fetchTranListAction(values) {
    console.log('fetchTranList values: ', values);
    const url = 'http://10.0.70.52:3014/api/v1/mojaloop/getTransaction?country=' + (values.country === 1 ? 'philipines' : 'indonesia');
    return async dispatch => {
        fetch(url)
            // const jsonBody = JSON.stringify(values);
            // console.log('fetchTranList jsonBody: ', jsonBody);
            // const requestParams = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: jsonBody,
            // };
            // fetch('http://localhost:8083/transactions', requestParams)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchTranList res: ", res);
                dispatch(actSetTranList(res));
                return res;
            })
            .catch(error => {
                console.log('fetchTranList error: ', error);
            })
    }
}

export function fetchChartTranListAction() {
    const url = 'http://10.0.70.52:3014/api/v1/mojaloop/getChartTransaction?country=philipines';
    return async dispatch => {
        fetch(url)
            // const jsonBody = JSON.stringify(values);
            // console.log('fetchTranList jsonBody: ', jsonBody);
            // const requestParams = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: jsonBody,
            // };
            // fetch('http://localhost:8083/transactions', requestParams)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchChartTranList res: ", res);
                dispatch(actSetChartTranList(res));
                return res;
            })
            .catch(error => {
                console.log('fetchChartTranList error: ', error);
            })
    }
}

export function fetchChartTranListAction1() {
    const url = 'http://10.0.70.52:3014/api/v1/mojaloop/getChartTransaction?country=indonesia';
    return async dispatch => {
        fetch(url)
            // const jsonBody = JSON.stringify(values);
            // console.log('fetchTranList jsonBody: ', jsonBody);
            // const requestParams = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: jsonBody,
            // };
            // fetch('http://localhost:8083/transactions', requestParams)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchChartTranListAction1 res: ", res);
                dispatch(actSetChartTranList1(res));
                return res;
            })
            .catch(error => {
                console.log('fetchChartTranListAction1 error: ', error);
            })
    }
}

export function fetchLigasNetDebitAction() {
    const url = 'http://central-ledger.local/participants/lkbp/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchLigasNetDebitAction res: ", res);
                dispatch(actSetLigasNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchLigasNetDebitAction error: ', error);
            })
    }
}

export function fetchEkoopNetDebitAction() {
    const url = 'http://central-ledger.local/participants/natcco/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchEkoopNetDebitAction res: ", res);
                dispatch(actSetEkoopNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchEkoopNetDebitAction error: ', error);
            })
    }
}

export function fetchMassPecNetDebitAction() {
    const url = 'http://central-ledger.local/participants/massspec/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchMassPecNetDebitAction res: ", res);
                dispatch(actSetMassspecNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchMassPecNetDebitAction error: ', error);
            })
    }
}

export function fetchPfccoNetDebitAction() {
    const url = 'http://central-ledger.local/participants/pfcco/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchPfccoNetDebitAction res: ", res);
                dispatch(actSetPfccoNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchPfccoNetDebitAction error: ', error);
            })
    }
}

export function fetchSgNetDebitAction() {
    const url = 'http://central-ledger.local/participants/softwaregroup/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchSgNetDebitAction res: ", res);
                dispatch(actSetSgNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchSgNetDebitAction error: ', error);
            })
    }
}

export function fetchSumberNetDebitAction() {
    const url = 'http://central-ledger.local/participants/sunber/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchSumberNetDebitAction res: ", res);
                dispatch(actSetSumberNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchSumberNetDebitAction error: ', error);
            })
    }
}

export function fetchPancurNetDebitAction() {
    const url = 'http://central-ledger.local/participants/pancur/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchPancurNetDebitAction res: ", res);
                dispatch(actSetPancurNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchPancurNetDebitAction error: ', error);
            })
    }
}

export function fetchTakeraNetDebitAction() {
    const url = 'http://central-ledger.local/participants/takera/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchTakeraNetDebitAction res: ", res);
                dispatch(actSetTakeraNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchTakeraNetDebitAction error: ', error);
            })
    }
}

export function fetchSkkNetDebitAction() {
    const url = 'http://central-ledger.local/participants/skk/positions';
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log("fetchSkkNetDebitAction res: ", res);
                dispatch(actSetSkkNetDebit(res[0]));
                return res;
            })
            .catch(error => {
                console.log('fetchSkkNetDebitAction error: ', error);
            })
    }
}