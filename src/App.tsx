import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from './app/store'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>My Movies App</h1>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

