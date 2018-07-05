import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        //Dispatch方法：一个函数，发送Action到state
        dispatch({
            type: 'products/delete', //如果在 model 外调用，需要添加 namespace
            payload: id, //需要传递的信息
        });
    }
    return (
        <div>
            <h2>你好</h2>
            <ProductList onDelete={handleDelete} products={products} />
        </div>
    );
};
//Connect方法：一个函数，绑定state到view
//connect 方法返回的也是一个 React 组件，通常称为容器组件。因为它是原始 UI 组件的容器，即在外面包了一层 State。
export default connect(({ products }) => ({
    products,
}))(Products)
// export default Products

