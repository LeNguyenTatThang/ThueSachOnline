import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart() {
    const [count, setCount] = useState()
    const card = useSelector((state) => state.shop.cart);
    let TotalCart = 0;

    Object.keys(card).forEach(function (item) {
        TotalCart += card[item].gia;
    });
    // const a = card.length
    // count = a
    // setCount(a)
    // console.log(a)

    return (
        <>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <div className="badge badge-sm indicator-item left-3"><span className='absolute text-[14px]'>{card.length}</span></div>
                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 z-[1] card dropdown-content" style={{ width: '200px', height: '130px' }}>
                        <div className="p-2 w-full h-full">
                            <span className="font-bold text-sm">{card.length} Sản phẩm</span> <br />
                            <span className="text-info">Tổng: {TotalCart} vnđ</span>
                            <div className="card-actions mt-2">
                                <Link to="/customer-card"><button className="btn btn-primary btn-block">Xem giỏ hàng</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
