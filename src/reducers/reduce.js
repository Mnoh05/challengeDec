import { TYPES } from "../actions/actions";
const imagenes = require.context('../imgs')

export const menuInitial = {
    productos:[
        {id:1, name: "Beds", size:1.2, image: < img src={imagenes(`./1.png`)} alt="icono" />},
        {id:2, name: "Refrigerador", size:1, image: < img src={imagenes(`./2.png`)} alt="icono" /> },
        {id:3, name: "Furniture", size:0.5, image: < img src={imagenes(`./3.png`)} alt="icono" />},
        {id:4, name: "Oven", size:0.6, image: < img src={imagenes(`./4.png`)} alt="icono" />},
        {id:5, name: "Sofa", size:1.5, image: < img src={imagenes(`./5.png`)} alt="icono" />},
        {id:6, name: "Tv", size:0.25, image: < img src={imagenes(`./6.png`)} alt="icono" />},
        {id:7, name: "Washer-dryer", size:0.5, image: < img src={imagenes(`./7.png`)} alt="icono" />},
        {id:8, name: "Dining",size:2, image: < img src={imagenes(`./8.png`)} alt="icono" />},
        {id:9, name: "Desk",size:0.75, image: < img src={imagenes(`./9.png`)} alt="icono" />},
        {id:10, name: "Wardrove", size:3.2, image: < img src={imagenes(`./10.png`)} alt="icono" />}
    ],
    sumatotal:[],
};

export function reduces(state, action){

    switch(action.type){
        case TYPES.ADD_OBJ:
            {
                
                let newvalor = state.productos.find(produ => produ.id === action.payload) //busca que el producto se encuentre en el estado inicial "productos"

                let valorinSum= state.sumatotal.find((item) => item.id === newvalor.id) //busca al producto en el arreglo sumatotal, para evitar crear nuevos items
                if (valorinSum)  {
                    return{
                        ...state,
                        sumatotal: state.sumatotal.map((item) =>
                        item.id === newvalor.id 
                        ? {...item, cantidad: item.cantidad + 1, sumaSize: item.sumaSize + item.size} 
                        : item
                        )}
                } 
                else
                {
                    return{
                    ...state,
                    sumatotal:[...state.sumatotal, {...newvalor, cantidad: 1, sumaSize: newvalor.size}]}
                }
            }
        
        case TYPES.DELETE_OBJ:
            {
                if(state.sumatotal.length === 0) return {...state}   
                let valorinSum= state.sumatotal.find((item) => item.id === action.payload)
                if (valorinSum )  {

                    if(valorinSum.cantidad > 0)
                    return{
                        ...state,
                        sumatotal: state.sumatotal.map((item) =>
                        item.id === action.payload
                        ? {...item, cantidad: item.cantidad - 1, sumaSize: item.sumaSize - item.size}
                        : item
                        )}
                        else 
                            return {...state}  
                }
              else return {
                ...state
            }}
        
        case TYPES.TOTALAMOUNT:
        {
            let total = 0;
            if(state.sumatotal.length === 0 ) return {...state}
            else{
            state.sumatotal.map((item) => item.sumaSize !== 'undefined' ? total= total + item.sumaSize : {...state})     
            console.log(total);     
            return {
                total         
            }
            }
        }    
            

        case TYPES.CLEAR:
            return menuInitial

        default:
            return{...state}
    }
    
}