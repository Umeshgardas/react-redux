import React from 'react'

function Home() {
    return (
        <div>
            <div className="add_to_cart">
                <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg" alt="" />
            </div>
            <h1>Home component</h1>
            <div className='cart_wrapper'>
                <div className='img_wrapper item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFrNgEyc9O3gymTUdWz-vq9dchtF4aFfS3Q&usqp=CAU" alt="" />
                </div>
                <div className='text_wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price:$1000.00
                    </span>
                </div>
                <div className='btn_wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home