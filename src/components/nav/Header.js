import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import {useSelector} from "react-redux"
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { SubMenu, Item } = Menu;
import {useDispatch} from "react-redux"

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const {user} = useSelector((state) => ({...state}))
  const [current, setCurrent] = useState("Home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const signout = () =>{
    if(window){
      localStorage.removeItem("Token12")
      dispatch({
        type : "LOGOUT",
        payload : {}
      })
      history.push('/signin')
    }
  }
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
      
      <Item key="Home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <div style={{display : "flex", flexGrow : 1}}>
      <Item key="Cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">Cart</Link>
      </Item>
      </div>
      {!user.token && ( <Item
        keys="Register"
        icon={<UserAddOutlined />}
        className="float-end "
      >
        <Link to="/register">Register</Link>
      </Item>)}
      {
        !user.token && (<Item keys="SignIn" icon={<UserOutlined />}>
        <Link to="/signin">SignIn</Link>
      </Item>)
      }
      {
        user.token && (<Item keys="SignOut" icon={<LogoutOutlined />} >
        <Link to="/register" onClick={signout}>Signout</Link>
      </Item>)
      }
    </Menu>
  );
};

export default Header;
