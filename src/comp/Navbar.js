import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";
export default function Navbar() {
    var navi=useNavigate();
    var [cookies, setCookies] = useCookies(["accesstoken"]);
    function onsubmit()
    {
        setCookies("accesstoken","");
        window.localStorage.removeItem("userID");
        navi("/auth");
    }
    var list_ = ["Home", "CreateRecipe", "Favourite Recipe", "LogRegister"];
  return (
    <div id="slide">
        {
            list_.map((e,i)=>{
                if (i===3){
                    if(!cookies.accesstoken){
                        return (
                          <Link id="samediv" key={i} to={"/auth"}>
                            {e}
                          </Link>
                        );
                    }
                    else{
                        return (
                          <button key={i} onClick={onsubmit} id="lgbtn">
                            Logout
                          </button>
                        );
                    }
                }
                else{
                    return <Link key={i} to={i===0?"/":i===1?"/create":i===2?"/save":i===3?"/auth":"/auth"} id="samediv">{e}</Link>
                }
            })
        }
    </div>
  )
}
