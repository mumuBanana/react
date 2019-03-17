import {observable , action} from 'mobx';
 
class MastSotre {
    @observable list; 

    @action
    doubleClickHandle = (id) => {
        return this.list.map((item)=>{
            return item.id != id ? item.aitd=false : item.aitd=true
        })
    }
 
    constructor() {
        this.list = [
            {
                name: '开元棋牌',
                src: 'https://1-company1.oss-cn-shenzhen.aliyuncs.com/GAMEIMAGE/5/KYQP/1535121240540.png',
                id: 0,
                aitd : false
            },
            {
                name: '新世界棋牌',
                src: 'https://1-company1.oss-cn-shenzhen.aliyuncs.com/GAMEIMAGE/5/null/1550032501467.png',
                id: 1,
                aitd : false
            },
            {
                name: '乐游棋牌',
                src: 'https://1-company1.oss-cn-shenzhen.aliyuncs.com/GAMEIMAGE/5/null/1545570036829.png',
                id: 2,
                aitd : false
            },
            {
                name: 'FG棋牌',
                src: 'https://1-company1.oss-cn-shenzhen.aliyuncs.com/GAMEIMAGE/5/null/1545566930629.png',
                id: 3,
                aitd : false
            },
            {
                name: 'VG棋牌',
                src: 'https://1-company1.oss-cn-shenzhen.aliyuncs.com/GAMEIMAGE/5/null/1545392031908.png',
                id: 4,
                aitd : false
            },
            {
                name: '夺宝棋牌',
                src: 'https://1-company1.oss-cn-shenzhen.aliyuncs.com/GAMEIMAGE/5/null/1545570003640.png',
                id: 5,
                aitd : false
            }
        ]
    }

}
const mast = new MastSotre() 
export default mast