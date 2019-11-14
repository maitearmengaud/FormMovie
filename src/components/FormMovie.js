import React, { Component } from 'react'; 

class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movie: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

    submitForm(e) {
        e.preventDefault();

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
        };

    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
        alert(res.error);
        } else {
        alert(`Votre film a été ajouté avec l'ID ${res}!`);
        }
    }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout de votre film');
    });
    }
     

    render(){
        return(
            <div className="FormMovie">
            <h1>Saisi d'un film</h1>
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Best movie</legend>
                <div className="form-data">
                  <label htmlFor="lastname">Nom du film</label>
                  <input
                    type="text"
                    id="movie"
                    name="movie"
                    onChange={this.onChange}
                    value={this.state.movie}
                  />
                </div>
          
                <div className="form-data">
                  <label htmlFor="firstname">Poster</label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
                </div>
          
                <div className="form-data">
                  <label htmlFor="email">Commentaire</label>
                  <textarea
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                  />
                </div>
                <hr />
                <div className="form-data">
                  <input type="submit" value="Envoyer" />
                </div>
              </fieldset>
            </form>
          </div>           
        )
    }

}

export default FormMovie;