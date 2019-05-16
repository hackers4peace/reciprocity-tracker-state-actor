export interface StateMessage {
  type: 'STATE'
  state: object
}

export interface Action {
  type: string,
  payload?: any
}

export interface Agent {
  id :string
  type :('Agent' | 'Person' | 'Organization')
  name :string
}

export interface Person extends Agent {
  id :string
  type :'Person'
  name :string
}

export interface ExchangeTemplate {
  id :string
  type :'Exchange'
  flows :Flow[]
  agent ?:string
  date ?:string
  note ?:string
}

export interface Exchange extends ExchangeTemplate {
  agent :string
  date :string
}

export interface FlowTemplate {
  id :string
  type :'Flow'
  provider ?:string
  receiver ?:string
  unit ?:string
  quantity ?:number
  category ?:string
  classification ?:string
  note ?:string
}

export interface Flow extends FlowTemplate {
  provider :string
  receiver :string
  unit :string
  quantity :number
  category :string
}

export interface ExchangeRate {
  numeratorFlow :string
  denominatorFlow :string
  fraction :number
}
