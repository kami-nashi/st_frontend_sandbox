import React from 'react';

var someString = ["I hate JS", "I dislike JS", "I will learn JS"];

export default function Usage() {
  return (
    <div>
  <p class="alert alert-danger">{someString[0]}</p>
  <p class="alert alert-warning">{someString[1]}</p>
  <p class="alert alert-success">{someString[2]}</p>
  </div>
  )
}