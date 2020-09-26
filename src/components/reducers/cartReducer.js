// eslint-disable-next-line

import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Orange Sunshine Coffeecake', desc: "As the days grow longer and we turn toward springtime, this tender coffeecake, with its orange-cinnamon filling, is a great way to celebrate.", price:110,img: Item1},
        {id:2,title:'Cinnamon Babka', desc: "Tender and high-rising, with subtle sweetness and a hint of vanilla, these biscuits are perfect as the base for shortcake — or all on their own.", price:80,img: Item2},
        {id:3,title:'Peachberry Buckle', desc: "Tender and high-rising, with subtle sweetness and a hint of vanilla, these biscuits are perfect as the base for shortcake — or all on their own.",price:120,img: Item3},
        {id:4,title:'Pumpkin Streusel Coffeecake', desc: "If you’ve got a lot on your plate these days but still want to be your family’s dinner hero, you’ve come to the right place.", price:260,img: Item4},
        {id:5,title:'Gluten-Free Cream Tea Scones', desc: "This recipe is quick to assemble, and parts of it can even be done in advance.", price:160,img: Item5},
        {id:6,title:'Baking Powder Biscuits', desc: " If you bought an extra-big bird for your holiday feast to cover some extra meals, you've come to the right place.",price:90,img:Item6},
      {id:7,title:'Savory Cheddar Cheese Biscuits', desc: "Dark chocolate cake with a molten fudge center-heaven! This rich, moist chocolate cake makes its own hot fudge sauce. Just cut it open, and enjoy the molten treasure inside.",price:90,img:Item7},
    {id:8,title:'Biscuits for Breakfast', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img:Item8}],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

  else{
    return state
    }

}

export default cartReducer
