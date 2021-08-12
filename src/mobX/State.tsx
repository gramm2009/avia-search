const axios = require('axios').default;
import { action, makeAutoObservable } from 'mobx';



class State {
    contacts  = 1;


    constructor() {
        makeAutoObservable(this);
    }

}

export default new State();




