import "./App.scss";
import PostItem from "./components/post-item/PostItem";
import Sidebar from "./components/side-bar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="App__sideBar">
        <Sidebar />
      </div>
      <div className="App__outlet">
        <div className="Outlet">
          <div className="Outlet__header">
            <div className="Outlet__logo">
              <img className="Outlet__logo-img" src="../public/logoNCC 1.png" />
            </div>
          </div>
          <div className="Outlet__content">
            <div className="Outlet__description">
              <div className="Outlet__description-title">
                Lorem ipsum dolor sit asmet?
              </div>
              <div className="Outlet__description-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </div>
            </div>
            <div className="Outlet__posts">
              <PostItem img="../../../public/post1.png" />
              <PostItem img="../../../public/post2.png" />
              <PostItem img="../../../public/post3.png" />
            </div>
          </div>
          <div className="Outlet__footer">
            <div className="Outlet__footer-text">Copyright © 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
