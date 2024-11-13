import * as actionTypes from './actions';
import config from './../config';

import {
    ACT_SET_TRAN_LIST,
    ACT_SET_CHART_TRAN_LIST,
    ACT_SET_CHART_TRAN_LIST1,
    ACT_SET_LIGAS_NET_DEBIT,
    ACT_SET_EKOOP_NET_DEBIT,
    ACT_SET_MASSSPEC_NET_DEBIT,
    ACT_SET_PFCCO_NET_DEBIT,
    ACT_SET_SG_NET_DEBIT,
    ACT_SET_SUMBER_NET_DEBIT,
    ACT_SET_PANUCR_NET_DEBIT,
    ACT_SET_TAKERA_NET_DEBIT,
    ACT_SET_SKK_NET_DEBIT
} from './constant';

const initialState = {
    isOpen: [], //for active default menu
    isTrigger: [], //for active default menu, set blank for horizontal
    ...config,
    isFullScreen: false, // static can't change
    tranList: [],
    chartTranList: {},
    chartTranList1: {},
    isLogin: false,
    ligasNetDebit: 0,
    ekoopNetDebit: 0,
    massspecNetDebit: 0,
    pfccoNetDebit: 0,
    sgNetDebit: 0,
    sumberNetDebit: 0,
    pancurNetDebit: 0,
    takeraNetDebit: 0,
    skkNetDebit: 0,
    ligasFontColor: '#111',
    ekoopFontColor: '#111',
    massspecFontColor: '#111',
    pfccoFontColor: '#111',
    sgFontColor: '#111',
    sumberFontColor: '#111',
    pancurFontColor: '#111',
    takeraFontColor: '#111',
    skkFontColor: '#111'
};

const reducer = (state = initialState, action) => {
    let trigger = [];
    let open = [];
    let ligasColor = '#111';
    let ekoopColor = '#111';
    let massspecColor = '#111';
    let pfccoColor = '#111';
    let sgColor = '#111';
    let sumberColor = '#111';
    let pancurColor = '#111';
    let takeraColor = '#111';
    let skkColor = '#111';
    switch (action.type) {
        case actionTypes.COLLAPSE_MENU:
            return {
                ...state,
                collapseMenu: !state.collapseMenu
            };
        case actionTypes.COLLAPSE_TOGGLE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }

                if (triggerIndex === -1) {
                    open = [...open, action.menu.id];
                    trigger = [...trigger, action.menu.id];
                }
            } else {
                open = state.isOpen;
                const triggerIndex = (state.isTrigger).indexOf(action.menu.id);
                trigger = (triggerIndex === -1) ? [action.menu.id] : [];
                open = (triggerIndex === -1) ? [action.menu.id] : [];
            }

            return {
                ...state,
                isOpen: open,
                isTrigger: trigger
            };
        case actionTypes.NAV_CONTENT_LEAVE:
            return {
                ...state,
                isOpen: open,
                isTrigger: trigger,
            };
        case actionTypes.NAV_COLLAPSE_LEAVE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }
                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger,
                };
            }
            return { ...state };
        case actionTypes.FULL_SCREEN:
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        case actionTypes.FULL_SCREEN_EXIT:
            return {
                ...state,
                isFullScreen: false
            };
        case actionTypes.LOGIN:
            return {
                ...state,
                isLogin: true
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLogin: false
            };
        case actionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layout: action.layout
            };
        case ACT_SET_TRAN_LIST:
            return {
                ...state,
                tranList: action.values.data.mojaloopWebTransactionResponse
            };
        case ACT_SET_CHART_TRAN_LIST:
            return {
                ...state,
                chartTranList: action.values.data.mojaloopTransaction
            };
        case ACT_SET_CHART_TRAN_LIST1:
            return {
                ...state,
                chartTranList1: action.values.data.mojaloopTransaction
            };
        case ACT_SET_LIGAS_NET_DEBIT:
            if (state.ligasNetDebit !== undefined) {
                if (state.ligasNetDebit === Math.abs(action.values.value))
                    ligasColor = '#111';
                else if (state.ligasNetDebit < Math.abs(action.values.value))
                    ligasColor = 'green';
                else if (state.ligasNetDebit > Math.abs(action.values.value))
                    ligasColor = 'red';
            }
            return {
                ...state,
                ligasFontColor: ligasColor,
                ligasNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_EKOOP_NET_DEBIT:
            if (state.ekoopNetDebit !== undefined) {
                if (state.ekoopNetDebit === Math.abs(action.values.value))
                    ekoopColor = '#111';
                else if (state.ekoopNetDebit < Math.abs(action.values.value))
                    ekoopColor = 'green';
                else if (state.ekoopNetDebit > Math.abs(action.values.value))
                    ekoopColor = 'red';
            }
            return {
                ...state,
                ekoopFontColor: ekoopColor,
                ekoopNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_MASSSPEC_NET_DEBIT:
            if (state.massspecNetDebit !== undefined) {
                if (state.massspecNetDebit === Math.abs(action.values.value))
                    massspecColor = '#111';
                else if (state.massspecNetDebit < Math.abs(action.values.value))
                    massspecColor = 'green';
                else if (state.ekoopNetDebit > Math.abs(action.values.value))
                    massspecColor = 'red';
            }
            return {
                ...state,
                massspecFontColor: massspecColor,
                massspecNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_PFCCO_NET_DEBIT:
            if (state.pfccoNetDebit !== undefined) {
                if (state.pfccoNetDebit === Math.abs(action.values.value))
                    pfccoColor = '#111';
                else if (state.pfccoNetDebit < Math.abs(action.values.value))
                    pfccoColor = 'green';
                else if (state.pfccoNetDebit > Math.abs(action.values.value))
                    pfccoColor = 'red';
            }
            return {
                ...state,
                pfccoFontColor: pfccoColor,
                pfccoNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_SG_NET_DEBIT:
            if (state.sgNetDebit !== undefined) {
                if (state.sgNetDebit === Math.abs(action.values.value))
                    sgColor = '#111';
                else if (state.sgNetDebit < Math.abs(action.values.value))
                    sgColor = 'green';
                else if (state.sgNetDebit > Math.abs(action.values.value))
                    sgColor = 'red';
            }
            return {
                ...state,
                sgFontColor: sgColor,
                sgNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_SUMBER_NET_DEBIT:
            if (state.sumberNetDebit !== undefined) {
                if (state.sumberNetDebit === Math.abs(action.values.value))
                    sumberColor = '#111';
                else if (state.sumberNetDebit < Math.abs(action.values.value))
                    sumberColor = 'green';
                else if (state.sumberNetDebit > Math.abs(action.values.value))
                    sumberColor = 'red';
            }
            return {
                ...state,
                sumberFontColor: sumberColor,
                sumberNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_PANUCR_NET_DEBIT:
            if (state.pancurNetDebit !== undefined) {
                if (state.pancurNetDebit === Math.abs(action.values.value))
                    pancurColor = '#111';
                else if (state.pancurNetDebit < Math.abs(action.values.value))
                    pancurColor = 'green';
                else if (state.pancurNetDebit > Math.abs(action.values.value))
                    pancurColor = 'red';
            }
            return {
                ...state,
                pancurFontColor: pancurColor,
                pancurNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_TAKERA_NET_DEBIT:
            if (state.takeraNetDebit !== undefined) {
                if (state.takeraNetDebit === Math.abs(action.values.value))
                    takeraColor = '#111';
                else if (state.takeraNetDebit < Math.abs(action.values.value))
                    takeraColor = 'green';
                else if (state.takeraNetDebit > Math.abs(action.values.value))
                    takeraColor = 'red';
            }
            return {
                ...state,
                takeraFontColor: takeraColor,
                takeraNetDebit: Math.abs(action.values.value)
            };
        case ACT_SET_SKK_NET_DEBIT:
            if (state.skkNetDebit !== undefined) {
                if (state.skkNetDebit === Math.abs(action.values.value))
                    skkColor = '#111';
                else if (state.skkNetDebit < Math.abs(action.values.value))
                    skkColor = 'green';
                else if (state.skkNetDebit > Math.abs(action.values.value))
                    skkColor = 'red';
            }
            return {
                ...state,
                skkFontColor: skkColor,
                skkNetDebit: Math.abs(action.values.value)
            };
        default:
            return state;
    }
};

export default reducer;