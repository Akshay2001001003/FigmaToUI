import React from "react";
import cmp from "../assets/cmp.png";
import drop from "../assets/drop.png";
import str from "../assets/str.png";
import "./Cards.scss";
import tck from "../assets/tck.png";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((item) => (
        <div key={item.id} className="cs">
          <div>
            {item.lable_img && (
              <div className="lable">
                <img src={item.lable_img} alt="img" />
                <div>{item.dis}</div>
              </div>
            )}
            <div className="cr">{item.id}</div>
          </div>
          <img src={cmp} alt="img" />
          <div className="middle">
            <div>
              <div className="bld">{item.title1}</div>
              <div>{item.content1}</div>
            </div>
            <div>
              <div className="bld">{item.title2}</div>
              {item.content2 && <div>{item.content2}</div>}
              {item.highlights && (
                <div className="hg">
                  {item.highlights &&
                    item.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <div className="pnt">
                          {highlight.pnt1 && <div>{highlight.pnt1}</div>}
                        </div>
                        <div className="cnt">
                          {highlight.cnt1 && <div>{highlight.cnt1}</div>}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
            {item.title && (
              <div>
                <div>{item.title}</div>
                <div className="pntr">
                  <img src={tck} alt="img" />
                  {item.p1}
                </div>
                <div className="pntr">
                  <img src={tck} alt="img" />
                  {item.p2}
                </div>
                <div className="pntr">
                  <img src={tck} alt="img" />
                  {item.p3}
                </div>
              </div>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#1B88F4",
              }}
            >
              Show More
              <img src={drop} alt="img" />
            </div>
          </div>
          <div className="Right">
            <div className="upper">
              <div style={{ fontWeight: "400", fontSize: "32px" }}>
                {item.ratings}
              </div>
              <div>{item.reviews}</div>
              <div>
                <img src={str} alt="img" />
              </div>
            </div>
            <div>
              <button className="btn">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
