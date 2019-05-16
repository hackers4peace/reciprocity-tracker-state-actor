import { Actor, lookup } from 'actor-helpers/lib/actor/Actor'
import { STATE } from './actionTypes'
import { Action, StateMessage } from './interfaces'
import reduxStore from './reduxStore'

declare global {
  interface ActorMessageType {
    state: Action
    ui: StateMessage
  }
}

export default class StateActor extends Actor<Action> {

  private ui = lookup('ui')

  constructor () {
    super()
    reduxStore.subscribe(() => {
      this.ui.send({
        type: STATE,
        state: reduxStore.getState()
      })
    })
  }

  async onMessage (msg: Action) {
    reduxStore.dispatch(msg)
  }
}
