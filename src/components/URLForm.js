import React, { Component } from 'react';

class URLForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: "",
      error: null,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      error: null,
      url: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.url === '') {
      this.setState({
        error: 'Invalid URL!'
      })
    } else {
      this.props.shortenUrl(this.state.url);
      this.setState({
        url: ""
      })
      event.target.value = "";
    }
  }

  render() {
    return (
      <form className="url-form" onChange={this.onChange} onSubmit={this.onSubmit}>
        {this.state.error ? (<div className="alert alert-danger">
          <strong>Error!</strong> {this.state.error}
        </div>) : null}
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input className="form-control" id="url" type="text" placeholder="URL to Shorten" name="url" value={this.state.url} />
        </div>
        <button className="btn btn-primary">Shorten URL</button>
      </form>
    );
  }
}

export default URLForm;