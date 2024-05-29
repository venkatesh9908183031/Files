import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

function Table() {
  return (
    <div>
        <table border={"1"}>
            <Thead/>
            <Tbody/>
        </table>
    </div>
  )
}

export default Table