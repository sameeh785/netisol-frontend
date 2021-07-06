import React from 'react'
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import LoadingToRedirect from "./LoadingToRedirect";
const AdminRoute = ({...rest}) => {
  const history = useHistory()
  const {user} = useSelector((state) => ({...state}))
  console.log(user.token && user.role == 2)
 return  user.token && user.role == 2 ? <Route {...rest}/> : <LoadingToRedirect />
 
}

export default AdminRoute