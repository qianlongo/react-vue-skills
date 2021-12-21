import React, { useContext } from "react"
import { UserInfoContext } from '../context/index'


export default function Provide() {
  const { userInfo } = useContext(UserInfoContext)

  return (
    <div class="provide-inject">{ userInfo.name }</div>
  )
}
