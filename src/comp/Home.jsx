import React, { useEffect, useState } from 'react'
import { useCookies } from "react-cookie";
import axios from "axios";
import logo from "./logo.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function Home() {
  var [{ accesstoken }, setcookies] = useCookies(["accesstoken"]);
   var Url = "https://food-blog-web-auth-back.onrender.com/";

  var [dataarr,setarray]=useState([]);
  console.log(dataarr);
  var [layer,setlayer]=useState(0);
  console.log(layer);
  async function getdata(){
    try{
      var { data } = await axios.get(`${Url}getrecipe`);
      // `${Url}getrecipe`;
      setarray(data.message);

    }
    catch(e){
      console.log(e.message);
    }
    // console.log(data.message);
  }
  // console.log(accesstoken);
  useEffect(()=>{
    // console.log()?
    getdata();
  },[])
  return (
    <div id="home">
      {accesstoken ? (
        <div id="hmain">
          {/* <div
            onMouseEnter={() => setlayer(100)}
            onMouseLeave={() => setlayer(0)}
            id="multi"
          >
            <img
              id="img_"
              src={
                "https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg"
              }
            />
            <h2 id="multih2" style={{ textAlign: "center" }}>
              Burger
            </h2>
            <div
              style={{
                height: `${layer}%`,
                transition: "all .5s",
                width: "100%",
                position:"absolute",
                backdropFilter: "blur(10px)",
                marginTop: "0%",
                background: "rgba(250, 249, 249, 0.2)",
              }}
              id="layer" 
            >
              {layer ? (
                <div id="content">
                  <h2 id="h_2">Recipe</h2>
                  <p id="p_">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora iusto laudantium, temporibus, id commodi
                    perspiciatis quo consequatur unde est, quos possimus omnis
                    deleniti voluptas cumque nobis? Animi deleniti blanditiis
                    eum!
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div> */}
          {dataarr
            ? dataarr.map((e, i) => {
                var {_id}=e;
                return (
                  <div
                    key={i}
                    onMouseEnter={(e) => {
                      // e.target.style.background="black";
                      setlayer(100);
                    }}
                    onMouseLeave={(e) => {
                      
                      // e.target.style.background = "white";
                      setlayer(0);
                    }}
                    id="multi"
                  >
                    {<FavoriteIcon id="btnabs" onClick={(e)=>{
                      if (e.target.style.color==="white"){
                        e.target.style.color="black";
                      }
                      else{
                        e.target.style.color = "white";
                      }
                      if (!localStorage.getItem("saveditems")){
                      var l = [];
                      l.push(_id);
                      localStorage.setItem("saveditems",JSON.stringify(l));}
                      else{
                        console.log("have it");
                        var main=JSON.parse(localStorage.getItem("saveditems"));
                        if (!main.includes(_id)){
                          main.push(_id);
                          localStorage.setItem(
                            "saveditems",
                            JSON.stringify(main)
                          );
                        }
                        else{
                          var c=main.indexOf(_id);
                          main.splice(c, 1);
                          localStorage.setItem(
                            "saveditems",
                            JSON.stringify(main)
                          );
                        }
                        
                        console.log(main);
                      }
                    }} />}
                    <img id="img_" src={`${e.ImgURL}`} />
                    <h2
                      id="multih2"
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      {e.Name}
                    </h2>
                    <p id="p_">{e.Recipe}</p>
                    {/* <div
                      style={{
                        height: `${layer}%`,
                        transition: "all .5s",
                        width: "100%",
                        position: "absolute",
                        backdropFilter: "blur(10px)",
                        marginTop: "0%",
                        background: "rgba(250, 249, 249, 0.2)",
                      }}
                      id={`layer${i}`}
                    >
                      {layer ? (
                        <div id="content">
                          <h2 id="h_2">Recipe</h2>
                          <p  id="p_">{e.Recipe}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div> */}
                  </div>
                );
              })
            : ""}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "93.2vh",
            minHeight: "92vh",
            border: "none",
            display: "flex",
            background:"#04030385",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "34px",
            color:"white",
            textAlign: "center",
            wordSpacing: "4px",
            letterSpacing: "2px",
          }}
        >
          <h2 style={{ fontSize: "54px", fontWeight: 400 ,color:"white"}}>Hei 😄</h2>
          <img src={logo} style={{margin:"20px"}} />
          Something went Wrong ! Wait did you logged in
        </div>
      )}
    </div>
  );
}
