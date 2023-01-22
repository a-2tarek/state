import { Component } from "react";
import React, {useState} from "react";


export default class Person extends Component{
    constructor (props){
        super(props);
        this.state = {
            fullName : "abdilrahman tarek",
            bio : "my bio",
            imgSrc : "logo192.png",
            prffission : "programming",
            boolean : false
        }
    }
         toggle =() =>{
            return(
                this.state.boolean = boolean
            )
           
         }

    render (){
        return(
        <div>
            <button onClick={toggle}> change </button>
        </div>
        )
    }
}