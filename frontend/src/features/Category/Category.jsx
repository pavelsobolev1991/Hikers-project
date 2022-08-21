/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import init from './apiMap';
import {
  categoryThunk, selectorCategory
} from './category';
import {
  placeThunk, selectorPlaces
} from './places';
import Place from './Place';

import './category.css';

export default function Category() {
  const { id } = useParams();

  const categories = useSelector(selectorCategory);
  const places = useSelector(selectorPlaces);

  // console.log('places', sortedPlaces);
  const dispatch = useDispatch();
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    winFunc();
    // console.log('effect');
    dispatch(categoryThunk(id));
    dispatch(placeThunk(id));
  }, [dispatch, id]);

  // console.log('test')
  //  console.log('na glavnoi', categories[0]);

  return (
    <div className="categoriesBox">
      {categories && <h1 id={id} className="category">{categories.title}</h1>}
      {/* <h1 id={id} className="category">Категория</h1> */}
      <div>
        <div id="map" />
        <div id="placeFilter">
          <div className="placesContainer">
            <p>Категория {categories.title} </p>
            {

              places &&
              places.map((place, i) => <Place key={`${i + 1}`} place={place} />)
            }
          </div>
        </div>
      </div>

    </div>

  );
}
