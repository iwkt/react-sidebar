import React from 'react';
import { SidebarData } from './SidebarData';

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
<<<<<<< HEAD
            <li
              key={key}
              className="row"
              id={window.location.pathname == value.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = value.link;
              }}
=======
            <li key={key} 
            className="row" onClick={()=>{
              window.location.pathname = value.link;
            }}
            id = {window.location.pathname == value.link ? "active" : ""}
>>>>>>> 26789a9964aae67817d1df1161d05bad6e322b1d
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
