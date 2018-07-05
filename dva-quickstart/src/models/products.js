export default {
    //namespace 表示在全局 state 上的 key(当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成)
    namespace: 'products',
    //初始值
    state: [],
    //reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};