import React from 'react'
import { Tab } from 'semantic-ui-react'
import ScoreTable from '../subComponents/scoreTable'

const panes = [
  { menuItem: 'High Scores', render: () => <Tab.Pane><ScoreTable/></Tab.Pane> }
]

const ScoreTabs = () => <Tab     panes={panes} />

export default ScoreTabs