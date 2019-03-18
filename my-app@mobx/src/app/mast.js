import React from 'react'
import { observer, inject } from 'mobx-react'
import './mast.css'

@inject('stores')
@observer
class Mast extends React.Component {
    //导航列表显示
    onShowList() {
        const { mast } = this.props.stores;
        if (mast.navList != null && mast.navList.slice().length > 0) {
            var htmlArr = [];
            mast.navList.slice().forEach((item, index) => {
                htmlArr.push(
                    <li key={index} className={item.show === true ? 'cur' : ''} onClick={mast.changeBG.bind(this, item.id)}>
                        <div className="zt">
                            <img src={item.src} alt="" />
                        </div>
                        <b className={item.show === true ? 'bcur' : ''}>{item.name}</b>
                    </li>
                );
            });
            return (
                <div>
                    {htmlArr}
                </div>
            );
        }
        return null;
    }

    //内容列表显示
    onShowConList() {
        const { mast } = this.props.stores;
        if (mast.conList != null && mast.conList.slice().length > 0) {
            return mast.conList.slice().map((item, index) => {
                return <li key={index} style={{ display: item.show === true ? 'block' : 'none' }}>
                    <img src={item.src} alt=""/>
                </li>
            })
        }
    }

    render() {
        return (
            <div className="con">
                <div className="navList">
                    <ul>{this.onShowList()}</ul>
                </div>
                <div className="conList">
                    <ul>{this.onShowConList()}</ul>
                </div>
            </div>
        )
    }
}

export default Mast;
