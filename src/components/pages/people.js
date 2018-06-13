import { connect } from 'redux-bundler-react'
import React from 'react'

const PeopleListPage = ({peopleData}) => (
  <article>
    <h1>People Data</h1>
    {!peopleData && (
      <p>No data yet</p>
    )}
    {peopleData && peopleData.map(person => (
      <ul>
        <li><a href={`/people/${person.id}`}>{person.name}</a></li>
      </ul>
    ))}
  </article>
)

export default connect(
  'selectPeopleData',
  PeopleListPage
)
