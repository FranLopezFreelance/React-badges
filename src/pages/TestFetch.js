import React, { Fragment } from 'react'
import './css/Test.css'

class TestFetch extends React.Component {
  state = {
    loading: null,
    error: null,
    data: {
      results: [],
    },
  }

  componentDidMount() {
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    this.setState({
      loading: true,
      error: null,
    })

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/')
      const data = await response.json()
      this.setState({
        loading: false,
        error: false,
        data,
      })
      if (data) {
        console.log(data)
      }
    } catch (error) {
      this.setState({
        loading: false,
        error,
      })
    }
  }

  render() {
    return (
      <Fragment>
        <h3>Characers</h3>
        <div className="row">
          {this.state.data.results.map(character => (
            <div className="col-md-3" key={character.id}>
              <div className="character">
                <img src={character.image} alt="Character IMG" />
                <h4>{character.name}</h4>
              </div>
            </div>
          ))}
          {this.state.loading && <h3>Cargando... </h3>}
        </div>
      </Fragment>
    )
  }
}

export default TestFetch
