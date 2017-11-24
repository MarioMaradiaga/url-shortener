import React, { Component } from 'react';
function URLList(props){
  return (
    <div className="container url-list">
      <h2>URL Shortening List</h2>
      <div className="">
        <table className="table">
          <tbody>
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
            </tr>
            {props.urls.map((url, idx) => {
              return (<tr key={idx}>
                <td>{url.originalUrl}</td>
                <td><a href={url.shortenedUrl}>{url.shortenedUrl}</a></td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default URLList;
