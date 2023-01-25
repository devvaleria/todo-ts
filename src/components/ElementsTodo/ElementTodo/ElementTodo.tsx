import React from 'react'
import { Itodo } from '../../../app/models'

function ElementTodo({title, id, groupId, completed}: Itodo) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

export default ElementTodo