import React, { useContext } from 'react'
import s from './SelectUser.module.css'
import { UserContext } from '../../context/user.context'

function SelectUser() {

  const { userId, setUserId } = useContext(UserContext)

  const changeUser = (e) => {
    setUserId(Number(e.target.value))
  }

  return (
    <select className={s.select} name="user" id="user" value={userId} onChange={changeUser}>
      <option value="1">Андрей</option>
      <option value="2">Ильдар</option>
    </select>
  )
}

export default SelectUser