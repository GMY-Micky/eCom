import React from "react";
import "../css/imageGallery.css";
import a from "../mainpage/1.jpg";
import b from "../mainpage/2.jpg";
import c from "../mainpage/3.jpg";
import d from "../mainpage/4.jpg";
import e from "../mainpage/5.jpg";
import f from "../mainpage/6.jpg";
import g from "../mainpage/7.jpg";
import h from "../mainpage/8.jpg";
import i from "../mainpage/9.jpg";
import j from "../mainpage/10.jpg";
import k from "../mainpage/11.jpg";
import l from "../mainpage/12.jpg";
import m from "../mainpage/13.jpg";
import n from "../mainpage/14.jpg";
import o from "../mainpage/15.jpg";
import p from "../mainpage/16.jpg";
import q from "../mainpage/17.jpg";
import r from "../mainpage/18.jpg";
import s from "../mainpage/19.jpg";
import t from "../mainpage/20.jpg";
import u from "../mainpage/21.jpg";
import v from "../mainpage/22.jpg";
import w from "../mainpage/23.jpg";

const ImageGallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-tag">
        <h1>
          <i className="fas fa-dollar-sign" />
          ECOM GALLERY
        </h1>
        <p>#BeautyWearByBeauty</p>
      </div>
      <div className="gallery-images">
        <div className="column">
          <div className="row">
            <img src={a} alt={"none"} />
            <img src={h} alt={"none"} />
            <img src={c} alt={"none"} />
            <img src={j} alt={"none"} />
            <img src={e} alt={"none"} />
            <img src={l} alt={"none"} />
            <img src={g} alt={"none"} />
            <img src={m} alt={"none"} />
            <img src={i} alt={"none"} />
            <img src={n} alt={"none"} />
            <img src={k} alt={"none"} />
            <img src={w} alt={"none"} />
          </div>

          <div className="row">
            <img src={q} alt={"none"} />
            <img src={d} alt={"none"} />
            <img src={r} alt={"none"} />
            <img src={b} alt={"none"} />
            <img src={s} alt={"none"} />
            <img src={f} alt={"none"} />
            <img src={t} alt={"none"} />
            <img src={v} alt={"none"} />
            <img src={o} alt={"none"} />
            <img src={u} alt={"none"} />
            <img src={p} alt={"none"} />
          </div>
        </div>
      </div>
      <div>
        <p className="gallery-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum
          consequuntur laudantium soluta reiciendis, sunt temporibus animi
          corrupti vitae atque, similique voluptatibus unde placeat, dolor eos
          id asperiores? Dolor, sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem in quasi optio accusamus temporibus doloribus
          dolorem numquam aperiam fugit sed quis eaque quae porro, natus
          aspernatur ut exercitationem, placeat praesentium.
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
