import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import video from "./assets/Arches_National_Park_with_Milky_Way (1).mp4";
import Search from "./component/search/search";




function Home() {

  const fixedText = "";
  const whenNotFixed = "";
  const [sidenavText, setsidenavText] = useState(whenNotFixed);
  useEffect(() => {
    const sidenav = document.getElementById("mysidenav");
    const sticky = sidenav.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        sidenav.classList.add("sticky");
        if (sidenavText !== fixedText) {
          setsidenavText(fixedText);
        }
      } else {
        sidenav.classList.remove("sticky");
        if (sidenavText !== whenNotFixed) {
          setsidenavText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);



    return (
      <div className="home">
        <div className="home__container">
          <video width="100%" loop="true" autoplay="autoplay" muted className="home__image">
          <source src={video} type="video/mp4"/>
          </video>
       

          <div className="home__search">
            <Search/>
          </div>
          <div className="home__wrapper">
            <div className="sideBar">
              <sidenav id="mysidenav" className="sidenav">
                <ul>
                  <li>Video themes</li>
                  <li>Shot type</li>
                  <li>People</li>
                  <li>Collections</li>
                  <li>Filmers</li>
                </ul>
              </sidenav>
            </div>
            <div>         
              <div className="home__row" >
                <Product
                  id="12321341"
                  title="Building HongKong"
                  price={11.96}
                  rating={5}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/052/355/original/X-002808-D2N-19-01-HongKong-HD-20190115-EDIT.mp4"
                />
                <Product
                  id="49538094"
                  title="A large rock waterfall"
                  price={239.0}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/004/199/original/A_large_rock_waterfall.mp4"
                />
                    <Product
                  id="49238147"
                  title="Magical Tree Living Background"
                  price={239.0}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/004/944/original/Magical_Tree_4K_Living_Background.mp4"
                />
                    <Product
                  id="49438095"
                  title="Seagulls"
                  price={239.0}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/044/048/original/Seagulls_15.mp4"
                />
              </div>
      
              <div className="home__row">
                <Product
                  id="4903850"
                  title="Hyena3"
                  price={199.99}
                  rating={3}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/033/269/original/Hyena3.mp4"
                />
                <Product
                  id="23445930"
                  title="Sunset"
                  price={98.99}
                  rating={5}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/044/864/original/P1060375.mp4"
                />
                <Product
                  id="3254354345"
                  title="Water Drops"
                  price={598.99}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/046/103/original/Water_Drops_and_Waves_on_Lake_Water_9.mp4"
                />
                <Product
                  id="3254354345"
                  title="Water reflection "
                  price={598.99}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/035/369/original/002_01.mp4"
                />
              </div>
      
              <div className="home__row">
                <Product
                  id="90829731"
                  title="Beach"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/038/606/original/5_16_08_19.mp4"
                />
                <Product
                  id="95825335"
                  title="Trip"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/020/724/original/P1033684.mp4"
                />
                    <Product
                  id="918293326"
                  title="sky"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/035/426/original/Sunset_R9_1_May_full_4K.mp4"
                />
                <Product
                  id="92829334"
                  title="clouds"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/035/225/original/Vivid_blue_sky.mp4"
                />
              </div>
                
              <div className="home__row">
                <Product
                  id="90829731"
                  title="bridge"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/038/948/original/180728-Phumipon_2.mp4"
                />
                <Product
                  id="95825335"
                  title="time_night"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/050/723/original/2016_07_28_CityMoon.mp4"
                />
                    <Product
                  id="918293326"
                  title="busy_night"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/036/051/original/Night_city_SSSS.mp4"
                />
                <Product
                  id="92829334"
                  title="singapore night"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/047/636/original/singapore-city-skyline-00.mp4"
                />
              </div>
                
              <div className="home__row">
                <Product
                  id="90829731"
                  title="sport car"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/017/822/original/drone_follows_a_sports_car_from_right_and_back_II.mp4"
                />
                <Product
                  id="95825335"
                  title="aerial overpass"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/005/272/original/aerial_cars_driving_overpass.mp4"
                />
                    <Product
                  id="918293326"
                  title="plane"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/004/301/original/25.mp4"
                />
                <Product
                  id="92829334"
                  title="Great wall china"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/042/003/original/great_wall4.mp4"
                />
              </div>
                
              <div className="home__row">
                <Product
                  id="90829731"
                  title="Beijing"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/041/997/original/beijing_city.mp4"
                />
                <Product
                  id="95825335"
                  title="sakura"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/045/606/original/FURF6039.mp4"
                />
                    <Product
                  id="918293326"
                  title="Tokyo"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/050/405/original/HYPERLAPSE_0002.mp4"
                />
                <Product
                  id="92829334"
                  title="New york"
                  price={1094.98}
                  rating={4}
                  fresh="new"
                  creator="Батдорж"
                  preview = "https://static.videezy.com/system/resources/previews/000/003/615/original/statueoflibertyclose.mp4"
                />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
}

export default Home;
