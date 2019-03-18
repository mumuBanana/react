import { observable, action } from 'mobx';

class MastSotre {
    @observable navList = null; //导航列表
    @observable conList = null; //内容列表

    @action changeBG = (id) => {
        this.navList.slice().map(item => {
            return item.id !== id ? item.show = false : item.show = true
        })

        this.conList.slice().map(item => {
            return item.id !== id ? item.show = false : item.show = true
        })
    }

    constructor() {
        this.navList = [
            {
                id: 0,
                name: '法甲摩纳哥赞助专题',
                src: 'https://www.yabovip6.com/assets/sponsor/monaco_logo.png',
                show: true
            },
            {
                id: 1,
                name: '克雷斯波代言专题',
                src: 'https://www.yabovip6.com/assets/sponsor/crespo_logo.png',
                show: false
            },
            {
                id: 2,
                name: '德甲柏林赫塔赞助专题',
                src: 'https://www.yabovip6.com/assets/sponsor/hertha_logo.png',
                show: false
            },
            {
                id: 3,
                name: '阿根廷国家队赞助专题',
                src: 'https://www.yabovip6.com/assets/sponsor/argentina_logo.png',
                show: false
            },
            {
                id: 4,
                name: '美国纳斯达克赞助专题',
                src: 'https://www.yabovip6.com/assets/sponsor/nasdaq_logo.png',
                show: false
            }
        ]

        this.conList = [
            {
                id : 0,
                src : 'https://96825edge.man077.com//imgs/banner/219b7fdb37b234ee3bccbd57846b067893e1b2b5.png',
                show: true
            },
            {
                id : 1,
                src : 'https://96825edge.man077.com//imgs/banner/7e33e110e1958d4dccc18d9a88b405f4bdd7f672.png',
                show: false
            },
            {
                id : 2,
                src : 'https://96825edge.man077.com//imgs/banner/aeaab591d2a2e1da2675a9e0136f9f13757ad0f9.png',
                show: false
            },
            {
                id : 3,
                src : 'https://96825edge.man077.com//imgs/banner/41eb2d3303a8e49af052b4b63f8959b5bf1699f5.png',
                show: false
            },
            {
                id : 4,
                src : 'https://96825edge.man077.com//imgs/banner/8778867d0eb1bc9adb1defceb199c6f60cd69cbb.png',
                show: false
            }
        ]
    }

}
const mast = new MastSotre()
export default mast