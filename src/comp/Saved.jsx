import React, { useEffect, useState } from 'react'
import axios from "axios";
import logo from "./logo.jpeg";
import { useCookies } from 'react-cookie';

export default function Saved() {
  var [dataarr, setarray] = useState([]);
  var [{ accesstoken }, setcookies] = useCookies(["accesstoken"]);
  var Url = "https://food-blog-web-auth-back.onrender.com/";

  console.log(dataarr);
  var main = [];
  if (JSON.parse(localStorage.getItem("saveditems")))
  {
    main = JSON.parse(localStorage.getItem("saveditems"));
  }
  
  var c = []; 
  if (dataarr) {
    c = dataarr.filter((e, i) => {
      // console.log(e._id);
      if (main.includes(e._id))
      {
        return e;
      }
    });
    console.log(c);
  }

  async function getdata() {
    try {
      var { data } = await axios.get(`${Url}getrecipe`);
      setarray(data.message);
    } catch (e) {
      console.log(e.message);
    }
    // console.log(data.message);
  }
  // console.log(accesstoken);
  useEffect(() => {
    // console.log()?
    
    getdata();
  }, []);
  return accesstoken ? (
    <div id="savedcon">
      {c.length !== 0 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            overflowY: "scroll",
            paddingTop: "2%",
          }}
        >
          {c.map((e, i) => {
            // if (i==0){
            return (
              <div key={i} id="inndiv">
                <div id="il">
                  <img
                    src={e.ImgURL}
                    style={{
                      width: "97%",
                      height: "80%",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  />
                  <h2 id="ih_1">{e.Name} </h2>
                </div>
                <div id="ir">
                  <h2 id="ih_2">Recipe</h2>
                  <p id="i_p">{e.Recipe}</p>
                </div>
              </div>
            );
            // }
          })}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "93.2vh",
            minHeight: "92vh",
            border: "none",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "34px",
            color: "black",
            textAlign: "center",
            wordSpacing: "4px",
            letterSpacing: "2px",
          }}
        >
          Data is not saved go click to heart button on blog
        </div>
      )}
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "93.2vh",
        minHeight: "92vh",
        border: "none",
        display: "flex",
        background: "#04030385",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "34px",
        color: "white",
        textAlign: "center",
        wordSpacing: "4px",
        letterSpacing: "2px",
      }}
    >
      <h2 style={{ fontSize: "54px", fontWeight: 400, color: "white" }}>
        Hei 😄
      </h2>
      <img src={logo} style={{ margin: "20px" }} />
      Something went Wrong ! Wait did you logged in
    </div>
  );
}
