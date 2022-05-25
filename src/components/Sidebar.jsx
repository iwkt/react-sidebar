/* eslint-disable react/jsx-key */
import React from 'react';
import { SidebarData } from './SidebarData';

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li key={key}>
              <div id="icon">{value.icon}</div>
              <div id="icon">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
