import React from 'react';

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>DOF - Design Platform</title>
        <script
          src="https://code.jquery.com/jquery-2.2.4.js"
          integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
          crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href={`/style/${props.stylesheet}`} />
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = DefaultLayout;