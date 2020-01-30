import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStops, clearStops } from '../redux'
import ListItem from "./ListItem";
import styled from 'styled-components'

const styles = {
  container: {
    margin: '100px'
  },
  title: {
    marginBottom: '30px',
    fontFamily: `"Times New Roman", Times, serif`,
    fontSize: '94px'
  },
  input: {
    marginRight: '10px'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    gridGap: '10px',
    backgroundColor: '#fff',
    color: '#444',
    marginTop: '30px'
  }
}

const GridContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
    margin-top: 30px;
    
    @media only screen and (max-width: 700px) {
      grid-template-columns: 50% 50%;
    }
    
    grid-template-columns: 25% 25% 25% 25%;
    
`

export class List extends Component {
  state = { query: '' }

  componentDidMount(){
    this.queryInput.focus();
  }

  onChange = ev => {
    const query = ev.target.value
    this.setState({ query })
    this.props.getStops(query)
  }

  clear = () => {
    this.setState({ query: '' })
    this.props.clearStops()
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Helsinki public transport</h1>
        <input
          type="text"
          value={this.state.query}
          onChange={ev => this.onChange(ev)}
          ref={(input) => { this.queryInput = input }}
          style={styles.input}
        />
        <button onClick={this.clear}>Reset</button>
        <GridContainer>
          {this.props.stops.map((stop, index) => (
            <ListItem
              key={index}
              stop={stop}
            />
          ))}
        </GridContainer>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ stops: state.stops })
const mapDispatchToProps = { getStops: getStops, clearStops: clearStops }
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(List)

export default AppContainer;
