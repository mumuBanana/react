import {observable , action} from 'mobx';
 
class TestStore {
    @observable name = "mumuBanana"; 
    @observable age = 0;

    @action
    changeAge = () => {
        this.age++;
    }

    @action
    changeName = (e) => {
        if(e.target.value != ""){
            this.name = e.target.value
            e.target.value = ""
        }else{
            return
        }
    }
}
const test = new TestStore() 
export default test