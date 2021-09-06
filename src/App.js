import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token}, dispacth] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token)
    {

      dispacth({
        type: "SET_TOKEN",
        token: _token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
    

        dispacth({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log('playlist->',playlists)
        dispacth({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then((response) => {
        dispacth({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      });
    }
    
    
  }, []);
  console.log('user->', user);
  console.log('token..',token)
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;