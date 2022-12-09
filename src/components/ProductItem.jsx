import React from 'react'


const ProductItem = ({info, total, tasa}) => {
    console.log(info)
    
    let unidades = 0;
    let totalSize =0;
    let subtotal = 0
    let tax = 0;
    let totalFinal = 0;
    info.map((item) => totalSize = totalSize + item.sumaSize)
    info.map((item) => unidades = unidades + item.cantidad)
    subtotal = totalSize *200;
    tax = subtotal * tasa
    totalFinal = subtotal + tax
    
  return (
    
    <div>
        
        <h1>total</h1>
        
        <p>Total items: {unidades} </p>
        <p>Total M2: {totalSize}</p>
        <p>Subtotal {subtotal}</p>
        <p>Tax {tax}</p>
        <p>{totalFinal}</p>
        
        
    </div>
  )
}

export default ProductItem