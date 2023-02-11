import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";
import "./Widgets.css";
import React from "react";
const Widgets = () => {
  return (
    <div className="Widgets">
      <div className="widgets__top">
        <div className="widgets__head">
          <h4>LinkedIn News</h4>
          <InfoIcon className="w_i" />
        </div>

        <div className="widgets__info">
          <div className="widgets_ix">
            <CircleIcon className="Icon_i" />
            <p className="info_h">Sectors drawing Indian Talent abroad</p>
          </div>

          <div className="extra">
            <p>1d ago</p>
            <CircleIcon className="Icon_e" />
            <p>1,783 readers</p>
          </div>
        </div>

        <div className="widgets__info">
          <div className="widgets_ix">
            <CircleIcon className="Icon_i" />
            <p className="info_h">Nailing the first job interview</p>
          </div>

          <div className="extra">
            <p>9hr ago</p>
            <CircleIcon className="Icon_e" />
            <p>125,762 readers</p>
          </div>
        </div>
        <div className="widgets__info">
          <div className="widgets_ix">
            <CircleIcon className="Icon_i" />
            <p className="info_h">Amazon announces device layoffs </p>
          </div>

          <div className="extra">
            <p>2d ago</p>
            <CircleIcon className="Icon_e" />
            <p>512 readers</p>
          </div>
        </div>
        <div className="widgets__info">
          <div className="widgets_ix">
            <CircleIcon className="Icon_i" />
            <p className="info_h">Two top Meta exces step down</p>
          </div>

          <div className="extra">
            <p>15 ago</p>
            <CircleIcon className="Icon_e" />
            <p>1,374 readers</p>
          </div>
        </div>
        <div className="widgets__info">
          <div className="widgets_ix">
            <CircleIcon className="Icon_i" />
            <p className="info_h">The future deep tech in India</p>
          </div>

          <div className="extra">
            <p>1d ago</p>
            <CircleIcon className="Icon_e" />
            <p>408 readers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
