import React from 'react'

const styles = {
  container: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: '5px',
    padding: '20px',
  }
}

const ListItem =({ stop: { name, code, lat, lon } }) => {
  return (
    <div style={styles.container}>
      <ul>
        <li>{name}</li>
        <li>Code: {code}</li>
        <li>Latitude: {lat}</li>
        <li>Longitude: {lon}</li>
      </ul>
    </div>
  )
}

export default ListItem
