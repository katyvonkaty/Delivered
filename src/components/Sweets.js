import React, { Component } from 'react';
import {connect} from "react-redux"
import { addToCart } from './actions/cartActions'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Copy from './Copy';



 class Sweets extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
              <div class="row">
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light" onClick={()=>{this.handleClick(item.id)}}><AddCircleIcon /></span>
                        </div>

                        <div className="card-content">
                        <span className="card-title">{item.title}</span>

                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
                 </div>

            )
        })

        return(
            <React.Fragment>

            <Copy
            title= "How to keep pumpkin pie from cracking"
            content= "Most Snickerdoodle recipes rely on vegetable shortening for their crisp/crunchy texture. For those of you who like to avoid shortening, we offer this butter-based Snickerdoodle — which can be either soft and chewy, or crunchy, depending on how long you bake it. Interestingly, they're made with either all-purpose flour or bread flour — tasty evidence that bread flour's not JUST for bread."
            buttonText="lets go"
            />

            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
            </React.Fragment>

        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sweets)
