import React from 'react'
import './MainDash.css'
import Cards from  '../Cards/Cards'
import { CardActions } from '@mui/material'
import Table from '../Table/Table'

const MainDash = () => {
  return (
    <div className="Maindash">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash