import cuid from 'cuid'

import {
  ADD_AGENT,
  SELECT_AGENT,
  SELECT_DATE,
  UNSELECT_DATE,
  ADD_FLOW,
  ADD_EXCHANGE,
  CANCEL_EXCHANGE,
} from './actionTypes'

import { AnyAction, ReducersMapObject } from 'redux'

import { ExchangeTemplate } from './interfaces.js'

function createExchange () :ExchangeTemplate {
  return {
    id: cuid(),
    type: 'Exchange',
    flows: [],
  }
}

const initial = {
  newExchange: createExchange(),
  units: ['unit', 'kg', 'L'],
  categories: ['currency', 'mobility', 'utilities', 'food'],
  classifications: ['MXN', 'gas (LPG)', 'gasoline (95 RON)']
}

function units (state = initial.units, action :AnyAction) {
  switch(action.type) {
    default:
      return state
  }
}

function categories (state = initial.categories, action :AnyAction) {
  switch(action.type) {
    default:
      return state
  }
}

function classifications (state = initial.classifications, action :AnyAction) {
  switch(action.type) {
    default:
      return state
  }
}

function agents (state = [], action :AnyAction) {
  switch(action.type) {
    case ADD_AGENT:
      return [
        Object.assign({}, action.payload),
        ...state
      ]
    default:
      return state
  }
}

function exchanges (state = [], action :AnyAction) {
  switch(action.type) {
    case ADD_EXCHANGE:
      return [
        Object.assign({}, action.payload),
        ...state
      ]
    default:
      return state
  }
}

function newExchange (state = initial.newExchange, action :AnyAction) {
  switch(action.type) {
    case SELECT_AGENT:
      return {
        ... state,
        agent: action.payload.id
      }
    case SELECT_DATE:
      return {
        ... state,
        date: action.payload
      }
    case UNSELECT_DATE:
      let withoutDate = { ...state } as ExchangeTemplate
      delete withoutDate.date
      return withoutDate
    case ADD_FLOW:
      return {
        ...state,
        flows: [...state.flows, action.payload]
      }
    case CANCEL_EXCHANGE:
    case ADD_EXCHANGE:
      return createExchange()
    default:
     return state
  }
}

export default {
  units,
  categories,
  classifications,
  agents,
  newExchange,
  exchanges
} as ReducersMapObject
