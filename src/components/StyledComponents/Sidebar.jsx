import styled from 'styled-components';
import SidebarIcon from './SidebarIcon';
import { SidebarData } from './SidebarData';

export const Sidebar = () => {
  return (
    <Test>
      <div className="Sidebar">
        <SidebarIcon />
        <ul className="SidebarList">
          {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = value.link;
                }}
                id={window.location.pathname == value.link ? 'active' : ''}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </Test>
  );
};

const Test = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .Sidebar {
    height: 100%;
    width: 250px;
    background-color: #2d445d;
  }

  .SidebarList {
    height: auto;
    padding: 0;
    width: 100%;
    & #active {
      background-color: #3d6272;
    }
    & .row {
      width: 100%;
      height: 60px;
      display: flex;
      color: #fff;
      justify-content: center;
      align-items: center;
    }
    & .row:hover {
      cursor: pointer;
      background-color: #3b627a;
    }
  }

  .row #icon {
    flex: 30%;
    display: grid;
    place-items: center;
  }

  .row #title {
    flex: 70%;
  }

  .SidebarIcon {
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
