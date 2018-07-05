import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();
//创建应用
const app = dva({
    initialState: {
        products: [
            {name: 'dva', id: 1 },
            {name: 'antd', id: 2 }, 
        ],
    },
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
//注册视图
app.router(require('./router').default);
app.model(require('./models/products').default);
// 5. Start
//启动应用
app.start('#root');
