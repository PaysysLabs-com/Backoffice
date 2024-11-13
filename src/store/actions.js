
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

export const COLLAPSE_MENU = 'COLLAPSE_MENU';
export const COLLAPSE_TOGGLE = 'COLLAPSE_TOGGLE';
export const FULL_SCREEN = 'FULL_SCREEN';
export const FULL_SCREEN_EXIT = 'FULL_SCREEN_EXIT';
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const NAV_CONTENT_LEAVE = 'NAV_CONTENT_LEAVE';
export const NAV_COLLAPSE_LEAVE = 'NAV_COLLAPSE_LEAVE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export function actSetTranList(values) {
  return {
    type: ACT_SET_TRAN_LIST,
    values,
  };
}

export function actSetChartTranList(values) {
  return {
    type: ACT_SET_CHART_TRAN_LIST,
    values,
  };
}

export function actSetChartTranList1(values) {
  return {
    type: ACT_SET_CHART_TRAN_LIST1,
    values,
  };
}

export function actSetLigasNetDebit(values) {
  return {
    type: ACT_SET_LIGAS_NET_DEBIT,
    values,
  };
}

export function actSetEkoopNetDebit(values) {
  return {
    type: ACT_SET_EKOOP_NET_DEBIT,
    values,
  };
}

export function actSetMassspecNetDebit(values) {
  return {
    type: ACT_SET_MASSSPEC_NET_DEBIT,
    values,
  };
}

export function actSetPfccoNetDebit(values) {
  return {
    type: ACT_SET_PFCCO_NET_DEBIT,
    values,
  };
}

export function actSetSgNetDebit(values) {
  return {
    type: ACT_SET_SG_NET_DEBIT,
    values,
  };
}

export function actSetSumberNetDebit(values) {
  return {
    type: ACT_SET_SUMBER_NET_DEBIT,
    values,
  };
}

export function actSetPancurNetDebit(values) {
  return {
    type: ACT_SET_PANUCR_NET_DEBIT,
    values,
  };
}

export function actSetTakeraNetDebit(values) {
  return {
    type: ACT_SET_TAKERA_NET_DEBIT,
    values,
  };
}

export function actSetSkkNetDebit(values) {
  return {
    type: ACT_SET_SKK_NET_DEBIT,
    values,
  };
}
