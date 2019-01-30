import React from 'react';

const {
  AppRegistry,
  Component,
  Text,
} = React
import TaskList from '../screens/TaskList'

class PluralTodo extends React.Component {
  constructor(props, context) {
    super(props, context)       //errors!
    this.state = {
        todos: [
          {
            task: 'Learn React Native',
          },
        ],
      }
    }
  

  render() {
    return(
      <TaskList></TaskList>   //no errors!
    )
  }
}
export default PluralTodo 