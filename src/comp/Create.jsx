import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Create() {
  // userID
  var Url = "https://food-blog-web-auth-back.onrender.com/";
  var [err,setError]=useState("");
  var [id,setid]=useState("");
  var li_ = ["Name", "ImgURL", "UserID", "Recipe"];
  var obj_ = {
    Name: "",
    ImgURL: "",
    UserID: window.localStorage.getItem("userID"),
    Recipe: "",
  };
  var [state,setState]=useState(obj_);
  // console.log(id?id:null);
  console.log(state);
  var navi = useNavigate();
  
  async function caller()
  {
    var { data } = await axios.post(`${Url}sendrecipe`, state);
    // `${Url}sendrecipe`;
    alert("Data submitted");
    // window.location.reload();
    navi("/");
  }
  function handler(e)
  { if (e.target.name === "UserID") {
    console.log("can't change")
  }
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    
  }
  useEffect(()=>{
    // console.log(window.localStorage.getItem("userID"));
    
    setid(window.localStorage.getItem("userID"));
  },[])
  return (
    <div id="cmain">
      <div id="box">
        <h2 id="bh2">Recipe</h2>
        {li_.map((e, i) => {
          if (i < 2) {
            return (
              <div key={i} id="bblcks">
                {e} : <input onChange={handler} name={e} id="bbin" />
              </div>
            );
          } else if (i === 2) {
            return (
              <div key={i} id="bblcks">
                {e} :{" "}
                <input
                  style={{ textTransform: "none" }}
                  onChange={handler}
                  name={e}
                  id="bbin"
                  type='password'
                  value={id ? id : ""}
                />
              </div>
            );
          } else {
            return (
              <div key={i} id="bblcks">
                {e} :{" "}
                <textarea onChange={handler} name={e} id="bbint"></textarea>
              </div>
            );
          }
        })}
        <button
          onClick={() => {
            console.log(window.localStorage.getItem("userID"));
            if (!window.localStorage.getItem("userID")) {
              alert("Sorry, you can't Upload!");
            } else {
              var list = Object.keys(state);
              var c=0;
              list.forEach((e) => {
                if (!state[e]) {
                  c=1;
                  setError("Fill the fields");
                  setTimeout(()=>{
                    setError("");
                  },2000);
                }
              });
              if (c===1){
                console.log("some error may cause, Data not submitted");
              }
              else{
                // console.log("Data submitted",state);
                caller();
              }
            }
          }}
          id="bbtn"
        >
          Submit
        </button>
        {
          err ?<p style={{fontSize:"22px",color:"red",marginTop:"5%",textTransform:"capitalize"}}>Fill the fields</p> :""
        }
      </div>
    </div>
  );
}
