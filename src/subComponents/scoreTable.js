import React from 'react'
import { Header, Image, Divider,Table } from 'semantic-ui-react'

const ScoreTable = () => (
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
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    <Divider />
    </div>
)

export default ScoreTable