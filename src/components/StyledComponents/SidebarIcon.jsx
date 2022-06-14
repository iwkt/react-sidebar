import React from 'react';
import style from 'styled-components';
import Icon from '../../../src/images/iwk3.png';

export const SidebarIcon = () => {
  return (
    <IconStyle>
      <div className="sidebarIcon">
        <img src={Icon} />
        <p>test@gg-gmail.com</p>
      </div>
    </IconStyle>
  );
};

const IconStyle = style.div`
  .sidebarIcon {
    padding-top: 20px;
    padding-bottom: 15px;
    text-align: center;
    & img {
      width: 100px;
      height: 100px;
    }
    & p {
      color: white;
      font-weight: 600;
      font-size: 13px;
    }
  }
`;
