import React, { useEffect, useState } from 'react'
import { useCookies } from "react-cookie";
import axios from "axios";
import logo from "./logo.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function Home() {
  var [{ accesstoken }, setcookies] = useCookies(["accesstoken"]);
   var Url = "https://food-blog-web-auth-back.onrender.com/";
  var [slidesshow,setslidershow]=useState("");
  var [index_,setindex]=useState(3);
  console.log(index_);
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
        slidesshow ? (
          <div id="slides_show">
            {" "}
            <div
              style={{ height: "10%", display: "flex", justifyContent: "end" }}
            >
              {" "}
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "5%",
                  marginTop: "1%",
                  background: "white",
                  borderRadius: "10px",
                }}
                onClick={() => setslidershow("")}
              >
                X
              </button>{" "}
            </div>
            <div id="main_slider" style={{ height: "70%" }}>
              {/* <div className="samesl" id="ssl0">
                {index_ - 2 >= 0 ? (
                  <img
                    src={dataarr[index_ - 2].ImgURL}
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  "sorry"
                )}
              </div> */}
              {index_ - 2 >= 0 ? (
                <div
                  style={{ transition: "all .5s" }}
                  className="samesl"
                  id="ssl0"
                >
                  <img
                    src={dataarr[index_ - 2].ImgURL}
                    style={{
                      width: "100%",
                      height: "100%",
                      transition: "all .5s",
                    }}
                  />
                  <div id="p_s"></div>
                </div>
              ) : (
                <div id="diff0"></div>
              )}
              {/* <div className="samesl" id="ssl1">
                {index_ - 1 >= 1 ? (
                  <img
                    src={dataarr[index_ - 1].ImgURL}
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  "sorry"
                )}
              </div> */}
              {index_ - 1 >= 0 ? (
                <div
                  className="samesl"
                  id="ssl1"
                  style={{ transition: "all .5s" }}
                >
                  <img
                    src={dataarr[index_ - 1].ImgURL}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div id="p_s"></div>
                </div>
              ) : (
                <div id="diff1"></div>
              )}
              <div
                className="samesl"
                // style={{ transition: "all .5s" }}
                id="ssl2"
              >
                {console.log(dataarr[index_].ImgURL)}
                <img
                  src={dataarr[index_].ImgURL}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    border: " 1px solid rgba(0,0,0,.5)",
                  }}
                />
                <div id="p_s1">
                  <h1
                    style={{
                      marginTop: "20px",
                      color: "white",
                      fontWeight:400,
                      wordSpacing:"3px",
                      textShadow: "2px 2px 4px black",
                    }}
                  >
                    {dataarr[index_].Name}
                  </h1>
                  <p id="para">{dataarr[index_].Recipe}</p>
                </div>

                {/* <div id="p_s"></div> */}
              </div>
              {/* <div className="samesl" id="ssl3">
                {index_ + 1 < dataarr.length ? (
                  <img
                    src={dataarr[index_ + 1].ImgURL}
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  "sorry"
                )}
              </div> */}
              {index_ + 1 < dataarr.length ? (
                <div
                  style={{ transition: "all .5s" }}
                  className="samesl"
                  id="ssl3"
                >
                  <img
                    src={dataarr[index_ + 1].ImgURL}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div id="p_s"></div>
                </div>
              ) : (
                <div id="diff3"></div>
              )}
              {index_ + 2 < dataarr.length ? (
                <div
                  style={{ transition: "all .5s" }}
                  className="samesl"
                  id="ssl4"
                >
                  <img
                    src={dataarr[index_ + 2].ImgURL}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div id="p_s"></div>
                </div>
              ) : (
                <div id="diff4"></div>
              )}
            </div>
            <div
              style={{
                height: "20%",
                margin: "auto",
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                // onClick={() =>
                //   index_ < dataarr.length - 1 ? setindex(index_ + 1) : ""
                // }
                onClick={() => (index_ >= 1 ? setindex(index_ - 1) : "")}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // onClick={() => (index_ >= 1 ? setindex(index_ - 1) : "")}
                onClick={() =>
                  index_ < dataarr.length - 1 ? setindex(index_ + 1) : ""
                }
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        ) : (
          <div id="hmain">
            {dataarr
              ? dataarr.map((e, i) => {
                  var { _id } = e;
                  var main_index = i;
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
                      {
                        <FavoriteIcon
                          id="btnabs"
                          onClick={(e) => {
                            if (e.target.style.color === "white") {
                              e.target.style.color = "black";
                            } else {
                              e.target.style.color = "white";
                            }
                            if (!localStorage.getItem("saveditems")) {
                              var l = [];
                              l.push(_id);
                              localStorage.setItem(
                                "saveditems",
                                JSON.stringify(l)
                              );
                            } else {
                              console.log("have it");
                              var main = JSON.parse(
                                localStorage.getItem("saveditems")
                              );
                              if (!main.includes(_id)) {
                                main.push(_id);
                                localStorage.setItem(
                                  "saveditems",
                                  JSON.stringify(main)
                                );
                              } else {
                                var c = main.indexOf(_id);
                                main.splice(c, 1);
                                localStorage.setItem(
                                  "saveditems",
                                  JSON.stringify(main)
                                );
                              }

                              console.log(main);
                            }
                          }}
                        />
                      }
                      <img
                        onClick={() => {
                          setslidershow("a");
                          setindex(main_index);
                        }}
                        id="img_"
                        src={`${e.ImgURL}`}
                      />
                      <h2
                        id="multih2"
                        style={{
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        onClick={() => {
                          setslidershow("a");
                          setindex(main_index);
                        }}
                      >
                        {e.Name}
                      </h2>
                      <p
                        onClick={() => {
                          setslidershow("a");
                          setindex(main_index);
                        }}
                        id="p_"
                      >
                        {e.Recipe}
                      </p>
                    </div>
                  );
                })
              : ""}
          </div>
        )
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
      )}
    </div>
  );
}
