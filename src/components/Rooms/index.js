import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import css from './Rooms.module.css';
import SOC from '../../images/SOCWARS.png';

import eventDictionary from '../../connections/eventDictionary';

const { JOIN_ROOM, UPDATE_ROOMS } = eventDictionary;

function Rooms({ connection }) {
  const history = useHistory();

  const [rooms, setRooms] = useState({
    room1: 0,
    room2: 0,
    room3: 0,
  });

  useEffect(() => {
    connection.on(UPDATE_ROOMS, (updatedRooms) => {
      console.log(
        'Hello from the update rooms listener! Update rooms:',
        updatedRooms
      );
      setRooms(updatedRooms);
      console.log('Rooms after set state:', rooms);
    });
    connection.emit(UPDATE_ROOMS, {});
    return () => {
      connection.removeListener(UPDATE_ROOMS);
    };
  }, []);

  return (
    <div className={css.Rooms}>
      <img className={css.title} alt='SOC WARS' src={SOC} />
      <h1 id={css.roomSelect} className={css.vibrate_1}>
        Choose your room...
      </h1>
      {['room1', 'room2', 'room3'].map((roomNumber) => (
        <>
          <button
            id={css[roomNumber]}
            className={rooms[roomNumber] > 10 && css.disabled}
            onClick={() => {
              connection.emit(JOIN_ROOM, { roomNumber });
              history.push('/character');
            }}
          ></button>
          <h1 id={css.room1Players}>{rooms.room1} inside</h1>
          <h1 id={css.room2Players}>{rooms.room2} inside</h1>
          <h1 id={css.room3Players}>{rooms.room3} inside</h1>
        </>
      ))}
    </div>
  );
}

export default Rooms;
