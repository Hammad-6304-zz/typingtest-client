import React from 'react'
import { Header, Image, Divider,Table } from 'semantic-ui-react'

class ScoreTable extends React.Component{
  state={data:[]}

  sendServer=()=>{
   
    
    fetch("http://localhost:8000/getall")
      .then(res => res.text())
      .then(data =>{ console.log(data)
      // console.log(JSON.parse(data))
      let readyData = JSON.parse(data)
      this.setState({data:readyData})
      
      })
      .catch(error => console.log(error));
  }


componentDidMount(){
 this.sendServer()
}

render(){
  console.log("state",this.state.data)
  return(
    <div>
    <Table textAlign='left' celled basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Position</Table.HeaderCell>
          <Table.HeaderCell> Speed, WPM</Table.HeaderCell>
          <Table.HeaderCell>Accuracy</Table.HeaderCell>
        </Table.Row>
       
      </Table.Header>
  
      <Table.Body>
        
      
        {this.state.data.map((user)=>{
          return( 
          <Table.Row key={user._id}>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
              <Header.Content>
                {user.dataname}
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{user.wpm} WPM</Table.Cell>
          <Table.Cell>{user.accuracy}%</Table.Cell>
        </Table.Row>)
        })}
      </Table.Body>
    </Table>
      
      </div>
  
  )
}
 
}
export default ScoreTable