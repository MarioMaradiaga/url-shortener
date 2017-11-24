import React, { Component } from 'react';
import 'whatwg-fetch';
import URLForm from './URLForm'
import URLList from './URLList'

class URLShortener extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    }
    this.shortenUrl = this.shortenUrl.bind(this);
  }

  componentDidMount(){
    this.fetchPastUrls()
  }

  fetchPastUrls(){
    const shortenedUrls = window.localStorage.getItem('shortenedUrls');
    if(shortenedUrls) {
      this.setState({
        urls: JSON.parse(shortenedUrls)
      })
    }
  }

  saveUrls(){
    window.localStorage.setItem('shortenedUrls', JSON.stringify(this.state.urls));
  }

  shortenUrl(url) {
    fetch("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDuT0Q3pfJdQWZT9eynR74ZBXaNx9RBEVk", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "longUrl": url
      })
    }).then((response) => {
      return response.json()
    }).then((parsedResponse) => {
      this.setState({
        urls: [...this.state.urls, {
          originalUrl: url,
          shortenedUrl: parsedResponse.id
        }]
      });
      this.saveUrls();
    })
  }

  render() {
    return (
      <div className="url-shortener container">
        <h1>URL Shortener</h1>
        <URLForm shortenUrl={this.shortenUrl} />
        <URLList urls={this.state.urls} history={this.state.history} />
      </div>
    );
  }
}

export default URLShortener;
