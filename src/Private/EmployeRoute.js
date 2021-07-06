import React from 'react'
import {useSelector} from 'react-redux'
import { Route } from 'react-router'
import LoadingToRedirect from './LoadingToRedirect'

const EmployeRoute = ({...rest}) => {
  const {user} = useSelector((state) => ({...state}))
  return user.token && user.role == 1 ? (<Route {...rest}/>) : <LoadingToRedirect/>
}
export default EmployeRoute