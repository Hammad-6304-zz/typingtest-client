import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class ScoreTable extends React.Component{
  state={data:[]}

  sendServer=()=>{
   
    
    fetch("http://localhost:8000/getall")
      .then(res => res.text())
      .then(data =>{ console.log()
      let readyData = JSON.parse(data)
      this.setState({data:readyData})
      
      })
      .catch(error => console.log());
  }


componentDidMount(){
 this.sendServer()
}

render(){
  return(
    <div>
    <Table textAlign='left' celled basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>About</Table.HeaderCell>
          <Table.HeaderCell> Speed, WPM</Table.HeaderCell>
          <Table.HeaderCell>Accuracy</Table.HeaderCell>
          <Table.HeaderCell>Position</Table.HeaderCell>
        </Table.Row>
       
      </Table.Header>
  
      <Table.Body>
        
      
        {this.state.data.map((user,index)=>{
          return( 
          <Table.Row key={user._id}>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
              <Header.Content>
                {user.dataname}
                <Header.Subheader style={{marginTop:'2%'}}>{user.date}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{user.wpm} WPM</Table.Cell>
          <Table.Cell>{user.accuracy}%</Table.Cell>
          <Table.Cell>{index + 1}</Table.Cell>
        </Table.Row>)
        })}
      </Table.Body>
    </Table>
      
      </div>
  
  )
}
 
}
export default ScoreTable