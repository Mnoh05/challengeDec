import React, { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { TYPES } from "../actions/actions";
import { menuInitial, reduces } from "../reducers/reduce";
import ProductItem from "./ProductItem";
import Productos from "./Productos"


const Container = () => {
    //const [beds, setBeds] = useState(0);
    //const suma =() => setBeds(beds +1)

   // const restar = () => {
     //   if(beds > 0) setBeds(beds - 1)
    //}

    let tasa = 0.16;
    const [state, dispatch] = useReducer(reduces, menuInitial)
    const {productos, sumatotal} = state; //nombres deben ser iguales a la inicializacion en reduce
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const calculoTotal = sumatotal.reduce((total, producto) => total + producto.sumaSize , 0)
      setTotal(calculoTotal)
    }, [sumatotal])

    
        
    const agregar = (id) =>{
        dispatch({type: TYPES.ADD_OBJ, payload: id})
    }

    const eliminar = (id) =>{
        dispatch({type: TYPES.DELETE_OBJ, payload:(id)})
    }

    const elimTotal = () =>{
      dispatch({type:TYPES.CLEAR})
    }


return <div class = "text-center" >
      <h1 class="text-5xl text-center pt-12">What items to store</h1>
      <p class = "text-center pt-6">Select which items you wish to store before moving to your new home. We´ll keep ´em safe!</p>
   <div class="grid grid-cols-5 gap-5 pt-12 px-60">
    {productos.map((produc)=> <Productos key = {produc.id} info={produc} agregar={agregar} eliminar = {eliminar}  sumatotal ={sumatotal}/>
    )}
    
   </div>
   <div>
   <button onClick={() => elimTotal()}>Clear</button>
    <h1 class="text-3xl text-center pt-12">Summary</h1>
    {
      <ProductItem  info ={sumatotal} total = {total} tasa = {tasa} />
    }
    
    
    
   </div>
</div>

}

export default Container;