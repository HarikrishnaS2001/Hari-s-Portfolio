import React from "react";
import "./me.css";
import comic1 from "../../assets/comicimg1.png";
import comic2 from "../../assets/comicimg2.jpeg";
import comic3 from "../../assets/comicimg3.jpeg";
import comic4 from "../../assets/comicimg4.jpeg";
import comic5 from "../../assets/comicimg5.JPG";
import comic6 from "../../assets/comicimg6.jpeg";
import comic7 from "../../assets/comicimg8.jpeg";
import comic8 from "../../assets/comicimg9.jpeg";

const Me = () => {
  return (
    <div>
      <div className="lapview">
        <div className="h-100 w-100">
          <div className="d-flex flex-row h-100 w-100">
            <div className="col1">
              <div className="alm">
                <div>
                  <div className="gochi">All About</div>
                  <div className="tborder">ME</div>
                </div>
              </div>
              <div class="dialogue-container">
                <div class="dialogue-bubble">
                  Hiiiiii! I can communicate fluently in Tamil, Telugu, and
                  English, and I have a basic understanding of Hindi and
                  Sanskrit., I'm always eager to embrace new challenges and
                  opportunities. Nice to meet you!
                </div>
              </div>
              <div className="imagecontainer">
                <img src={comic1} alt="comic1" className="comic1" />
              </div>
            </div>
            <div className="h-100 w-100 d-flex flex-column">
              <div className="row1">
                <div className=" fitness gochi">
                  Photography
                  <img src={comic6} alt="comic6" height="90%" width="90%"></img>
                </div>

                <div className="movies">
                  <div className="w-100 ">
                    <img src={comic2} alt="comic2" className="comic2" />
                  </div>
                  <div
                    className="w-100 text-center hanalei"
                    style={{ height: "fit-content" }}
                  >
                    Captivated by the magic of the movies, I love films more
                    than I love myself
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="travel h-100 w-50 d-flex flex-row">
                  <div
                    className="d-flex flex-column h-100 w-50"
                    style={{ backgroundColor: "black" }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center w-100 h-50"
                      style={{ objectFit: "cover" }}
                    >
                      <img
                        src={comic4}
                        alt="comic4"
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div
                      className="w-100 h-50 d-flex justify-content-center align-items-center"
                      style={{ objectFit: "cover" }}
                    >
                      <div className="text-center">
                        Travel
                        <i class="fa fa-heart" style={{ color: "white" }}></i>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="w-50 h-100 d-flex justify-content-center align-items-center"
                    style={{ objectFit: "cover" }}
                  >
                    <img src={comic3} alt="comic3" height="100%" width="100%" />
                  </div> */}
                  <div
                    className="d-flex flex-column h-100 w-50"
                    style={{ backgroundColor: "black" }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center w-100 h-50"
                      style={{ objectFit: "cover" }}
                    >
                      <img
                        src={comic8}
                        alt="comic8"
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center w-100 h-50"
                      style={{ objectFit: "cover" }}
                    >
                      <img
                        src={comic7}
                        alt="comic7"
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div
                      className="w-100 h-50 d-flex justify-content-center align-items-center"
                      style={{ objectFit: "cover" }}
                    >
                      {/* <div className="text-center">
                        Travel
                        <i class="fa fa-heart" style={{ color: "white" }}></i>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="music gochi">
                  <div className="d-flex flex-column justify-content-between  align-items-stretch h-100">
                    <div className="h-100">
                      A.R. Rahman<i class="fa fa-heart"></i>, Ennio Morricone
                      <i class="fa fa-heart"></i>, and Hans Zimmer
                      <i class="fa fa-heart"></i>. From the timeless classics of
                      Ilaiyaraaja
                      <i class="fa fa-heart"></i>
                      to the modern hits of Anirudh<i class="fa fa-heart"></i>
                    </div>
                    <div
                      className="d-flex justify-content-between align-self-end w-100"
                      style={{ height: "fit-content" }}
                    >
                      <i class="fas fa-guitar"></i>
                      <i class="fas fa-headphones"></i>
                      <i class="fas fa-play"></i>
                      <i class="fas fa-music"></i>
                      <i class="fas fa-sliders-h"></i>
                      <i class="fas fa-volume-up"></i>
                      <i class="fab fa-spotify"></i>
                    </div>
                  </div>
                </div>
                <div className="sports gochi">
                  <div>Football❤️</div>
                  <img src={comic5} alt="comic5" height="90%" width="90%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mview"></div>
    </div>
  );
};

export default Me;
