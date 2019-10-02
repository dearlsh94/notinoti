import { observable, action } from 'mobx';

class NotiStore {
    constructor(){
        this.state={
            title: '',
            content: '',
            datetime: '',
            test: 'test'
        }
    }
    @observable title = this.state.title;
    @observable content = this.state.content;
    @observable datetime = this.state.datetime;
    @observable test = this.state.test;
}

export default NotiStore;