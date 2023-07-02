import React, { useState } from 'react'
import axios from "axios";
import {useCookies} from "react-cookie";
import { useNavigate } from 'react-router-dom';

export default function Auth() {
    
    // console.log(state);
  return (
    <div id="auth">
      <div className="authdiv" id="log">
        <Same prop={"Login"} />
      </div>
      <div className="authdiv" id="reg">
        <Same prop={"Register"} />
      </div>
    </div>
  );
}


const Same = ({ prop }) => {
    var Url = "https://food-blog-web-auth-back.onrender.com/";
    var navi=useNavigate();
  var li_ = ["username", "password"];
  var [state, setState] = useState({
    username: "",
    password: "",
  });
  var navi=useNavigate();
const [_,setCookies] = useCookies(["accesstoken"]);

  async function onsubmit() {
    // alert("hello");
    if (prop === "Register") {
      console.log(state);

      var a = Object.values(state);
      console.log(a);
      var d = a.filter((e, i) => {
        if (e !== "") {
          console.log(true);
          return e;
        }
      });
      if (d.length !== a.length) {
        console.log("some error");
        alert("Fill the details");
      }
      else{
          try {
            var { data } = await axios.post(`${Url}register`, state);
            alert(data.message);
            // navi("/auth");
            window.location.reload();
          } catch (e) {
            console.log(e.message);
          }
      }

      
    }
    else{
        console.log(state);
        var a=Object.values(state);
        console.log(a);
        var d=a.filter((e,i)=>{
          if (e!==""){
            console.log(true);
            return e;
          }

        })
        if (d.length!==a.length){
          console.log("some error");
          alert("Fill the details");
        }
        else{
          try {
            var { data } = await axios.post(`${Url}login`, state);
            //   console.log(data.userID);
            setCookies("accesstoken", data.token);
            window.localStorage.setItem("userID", data.userID);
            navi("/");
          } catch (e) {
            console.log(e.message);
          }
        }
        

    }
  }
  return (
    <>
      <h1 id="regh">{prop}</h1>
      <div id="field">
        {li_.map((e, i) => {
          return (
            <div key={i} className="blocks">
              {e} :{" "}
              <input
                name={e}
                type={e === "password" ? "password" : "text"}
                
                onChange={(e) => {
                  setState({
                    ...state,
                    [e.target.name]: e.target.value,
                  });
                }}
              />{" "}
            </div>
          );
        })}
      </div>
      <button onClick={onsubmit} id="btn">
        Submit
      </button>
    </>
  );
};