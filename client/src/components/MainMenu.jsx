import React from "react";
import "../css/menu.css";
import "../css/header.css";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Menu = ({ click }) => {
  return (
    <div>
      <div className="main-menu">
        <nav className="menu_items">
          <a>
            <h6>Men's Watches</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Style</li>
                      <li className="level-3">Classic</li>
                      <li className="level-3">Oversized</li>
                      <li className="level-3">Chronograph</li>
                      <li className="level-3">Automatic</li>
                      <li className="level-3">Digital</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Use</li>
                      <li className="level-3">Surf&Tide</li>
                      <li className="level-3">Waterproof/Resistant</li>
                      <li className="level-3">Sports&Fitness</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Trending</li>
                      <li className="level-3">Gold Watches</li>
                      <li className="level-3">Leather Watches</li>
                      <li className="level-3">Black Watches</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a>
            <h6>Women's Watches</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Style</li>
                      <li className="level-3">Classic</li>
                      <li className="level-3">Digital</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Use</li>
                      <li className="level-3">Surf&Tide</li>
                      <li className="level-3">Waterproof/Resistant</li>
                      <li className="level-3">Sports&Fitness</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Trending</li>
                      <li className="level-3">Gold Watches</li>
                      <li className="level-3">Leather Watches</li>
                      <li className="level-3">Black Watches</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a>
            <h6>Denim</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Style</li>
                      <li className="level-3">Classic</li>
                      <li className="level-3">Oversized</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Trending</li>
                      <li className="level-3">Blue Watches</li>
                      <li className="level-3">Multicolor denim</li>
                      <li className="level-3">Black denim</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a>
            <h6>Bags</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Style</li>
                      <li className="level-3">Backpacks</li>
                      <li className="level-3">Duffle bags</li>
                      <li className="level-3">Crossbodie & totes</li>
                      <li className="level-3">Hip packs</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Use</li>
                      <li className="level-3">Travel</li>
                      <li className="level-3">Skate</li>
                      <li className="level-3">Surf</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a>
            <h6>Shoes</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Style</li>
                      <li className="level-3">Classic</li>
                      <li className="level-3">Oversized</li>
                      <li className="level-3">Chronograph</li>
                      <li className="level-3">Automatic</li>
                      <li className="level-3">Digital</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Use</li>
                      <li className="level-3">Surf&Tide</li>
                      <li className="level-3">Waterproof/Resistant</li>
                      <li className="level-3">Sports&Fitness</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Trending</li>
                      <li className="level-3">Gold Watches</li>
                      <li className="level-3">Leather Watches</li>
                      <li className="level-3">Black Watches</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a>
            <h6>Clothing</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Clothing</li>
                      <li className="level-3">Sweatshirts</li>
                      <li className="level-3">T-shirts</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Trending</li>
                      <li className="level-3">Sustainable clothing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a>
            <h6>Bands</h6>
            <div className="menu_down_btn">
              <BiChevronDown />
            </div>
            <div className="sub_menu">
              <div className="sub-menu-lists">
                <div className="level-2-list">
                  <div>
                    <ul className="level-3-list">
                      <li className="level-3 main">New Arrivals</li>
                      <li className="level-3 main">Best Sellers</li>
                      <li className="level-3 main">
                        Shop All
                        <span>
                          <BsArrowRight />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Band size</li>
                      <li className="level-3">Classic</li>
                      <li className="level-3">Oversized</li>
                      <li className="level-3">Chronograph</li>
                      <li className="level-3">Automatic</li>
                      <li className="level-3">Digital</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Band Material</li>
                      <li className="level-3">Leather</li>
                      <li className="level-3">Rubber</li>
                      <li className="level-3">Sustainable</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="level-3 main">Band Type</li>
                      <li className="level-3">NATO</li>
                      <li className="level-3">Quick release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
