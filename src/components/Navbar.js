import React from 'react'
import {BsFillBasketFill} from "react-icons/bs"
import {useSelector} from "react-redux"

function Navbar() {

    // store daki reducer nın keyi ulaşmak isteidğim quantity
    const {quantity} = useSelector((store) => store.card);
    // artık bu değeri verebilirim
    console.log(useSelector((store) => store.card))

  return (
    <nav>
        <div className='navbar'>
            <h3>Kurs Uygulaması</h3>
            <div className='navDiv'>
                <div className='itemsDiv'>
                    <p>{quantity}</p>
                </div>
                <BsFillBasketFill className='itemsIcon'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;