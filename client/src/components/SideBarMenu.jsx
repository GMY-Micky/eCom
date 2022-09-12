import React from "react";
import "../css/sideBarMenu.css";

const SideBarMenu = () => {
  const hideShowL3 = (e) => {
    if (e.target.nextSibling.style.display !== "none")
      e.target.nextSibling.style.display = "none";
    else e.target.nextSibling.style.display = "block";
  };

  const showL2 = (e) => {
    e.target.nextSibling.style.display = "block";
  };

  const hideL2 = (e) => {
    e.target.offsetParent.style.display = "none";
  };

  return (
    <div className="sidebar-menu">
      <div className="menu">
        <ul className="level-1">
          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Men's Watches
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Men's Watches
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Featured
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">New Arrivals</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Best Sellers</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">custom</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Shop All</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Style
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Classic</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Digital</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Chronograph</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Oversized</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Automatic</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Use
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Surf & Tide</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Sports & Fitness</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Waterproof/Resistant</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Trending
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Sustainable Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Black Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Gold Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Stainless Steel Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Leather Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Blue Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Rose Gold Watches</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Collaboration
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href=""> Grateful Dead</a>
                  </li>
                  <li className="level-3-item">
                    <a href=""> Metallica</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Women's Watches
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Women's Watches
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Featured
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">New Arrivals</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Best Sellers</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">custom</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Shop All</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Style
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Classic</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Digital</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Use
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Surf & Tide</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Sports & Fitness</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Waterproof/Resistant</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Trending
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Sustainable Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Black Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Gold Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Stainless Steel Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Leather Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Blue Watches</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Rose Gold Watches</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Bags
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Bags
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Featured
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">New Arrivals</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Best Sellers</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Shop All</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Style
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Backpacks</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Duffle Bags</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Crossbodies & Totes</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Hip Packs</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Use
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Travel</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Skate</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Surf</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Collaborations
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Grateful Dead</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">
                      REPREVE Our Ocean<sup>TM</sup>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Denim
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Denim
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Style
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Classic</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Oversized</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Trending
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Blue Denim</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Multicolor Denim</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Black Denim</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Shoes
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Shoes
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Style
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Oxford</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Derby</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Sneaker</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Sports</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Trending
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Black Derby</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">brown Orxfords</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">ike Air jordan 1</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Clothing
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Clothing
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Clothing
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Sweatshirts</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">T-shirts</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Trending
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Sustainable Clothing</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="level-1-item">
            <div className="level-1-lable" onClick={(e) => showL2(e)}>
              Bands
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="level-2" style={{ display: "none" }}>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideL2(e)}
                >
                  <i class="fas fa-chevron-left"></i>Back
                </a>
              </li>
              <li className="level-2-item">
                <a href="#" className="level-3-lable">
                  All Bands
                </a>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Band Size
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">16mm</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">20mm</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">23mm</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Band Materials
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">Leather</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Rubber</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Sustainable</a>
                  </li>
                </ul>
              </li>
              <li className="level-2-item">
                <a
                  href="#"
                  className="level-3-lable"
                  onClick={(e) => hideShowL3(e)}
                >
                  Band Type
                </a>
                <ul className="level-3-sb" style={{ display: "none" }}>
                  <li className="level-3-item">
                    <a href="#">NATO</a>
                  </li>
                  <li className="level-3-item">
                    <a href="#">Quick Release</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
