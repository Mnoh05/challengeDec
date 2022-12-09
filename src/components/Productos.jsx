import React from "react";


const Productos = ({info, agregar, eliminar, sumatotal}) =>{
    const {id, name, image} = info;
    let value  = 0
    
        if(sumatotal.length === 0){

          return <div>  
                {image}
                <h3>{name}</h3>
                <button onClick={() =>agregar(id)} class="bg-[rgba(226,226,226,1)] hover:bg-gray-400 text-black  py-1 px-2 rounded-l">+</button>
                {value}
                <button onClick={() => eliminar(id)} class="bg-[rgba(226,226,226,1)] hover:bg-gray-400 text-black  py-1 px-2 rounded-l">-</button>
                
             </div>
        }
        else {
            for( let i = 0; i < sumatotal.length; i++){
                if(sumatotal[i]["id"] === id){
                   value = sumatotal[i]["cantidad"]
                }
            }

            return <div>
                {image}
                <h3>{name}</h3> 
                <button onClick={() =>agregar(id)} class="bg-[rgba(226,226,226,1)] hover:bg-gray-400 text-black  py-1 px-2 rounded-l">+</button>
                {value}
                <button onClick={() => eliminar(id)} class="bg-[rgba(226,226,226,1)] hover:bg-gray-400 text-black  py-1 px-2 rounded-l">-</button>
                
            </div>
            
        
    }


}

export default Productos;