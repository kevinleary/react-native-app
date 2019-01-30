import React from 'react-native'
import Text from 'react-native'

const styles = React.StyleSheet.create({
  container: {
    paddingTop: 40,
  },
})

class TaskList extends React.Component {
  constructor(props, context){
    super(props, context);    //need to pass props and contecxt to React super class

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}   //need bind  when working with ES6
          />
      </View>
      //<Text>This is a tasklist!</Text>
    )
  }
}

TaskList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

export default TaskList
