const initState = [
    {
        "id" : 1,
        "content" : "这是第一个默认事项",
        "done" : false
    },
    {
        "id" : 2,
        "content" : "这是第二个默认事项",
        "done" : false
    },
    {
        "id" : 3,
        "content" : "这是第三个默认事项",
        "done" : false
    }
]

export default (state = initState,action) => {
    switch(action.type){
        case "UPDATEITEM": 
            return state.map((item)=>{
                return item.id != action.id ? item : {
                    ...item,
                    "content" : action.content
                }
            })
        case "REMOVEITEM":
            return state.filter((item)=>{
                return item.id == action.id ? false : true
            })
        case "CHANGEITEM":
            return state.map((item)=>{
                return item.id != action.id ? item : {
                    ...item,
                    "done" : !item.done
                }
            })
        case "ADDITEM":
            return[{"id": state.reduce((a,item)=>{
                return item.id > a ? item.id : a
            }, -1) + 1, "content":action.content , "done":false} , ...state]
    }
    return state
}