import React from 'react'
import s from './Logo.module.css'
import { memo } from 'react'

const Logo = ({ image }) => {
  return (
    <img className={s.logo} src={image} alt="Логотип журнала" />
  )
}

export default memo(Logo)