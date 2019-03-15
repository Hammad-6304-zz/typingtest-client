import React from 'react'
import { Tab } from 'semantic-ui-react'
import ScoreTable from '../subComponents/scoreTable'

const panes = [
  { menuItem: 'Today', render: () => <Tab.Pane><ScoreTable/></Tab.Pane> },
  { menuItem: 'All The Times', render: () => <Tab.Pane><ScoreTable/></Tab.Pane> }
]

const ScoreTabs = () => <Tab     panes={panes} />

export default ScoreTabs