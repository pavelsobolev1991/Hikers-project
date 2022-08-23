import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button, Drawer } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { useParams } from 'react-router-dom';
import { selectorUserSession } from '../main/auth';
import './PlacePage.css';
// eslint-disable-next-line import/extensions
import Weather from '../weather/Weather.jsx';
import { placeThunk, selectorPlaces } from '../Category/places';

function PlaceInfo() {
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectorUserSession);
  const arrPlaces = useSelector(selectorPlaces);
  const { id, placeid } = useParams();
  const place = arrPlaces && arrPlaces.find((el) => el.id === Number(placeid));

  useEffect(() => {
    dispatch(placeThunk(id));
  }, []);

  return (
    <div className="info-container">
      <div>Here will be a map</div>
      <Card width="600px">
        <Card.Content>
          <Text b my={0}>{place && place.title}</Text>
        </Card.Content>
        <Divider h="1px" my={0} />
        <Card.Content>
          <Text>{place && place.description}</Text>
          {/* <Text>Крупнейший курорт в Сибири, в 160 км от Новокузнецка
            <br />Общая длина трасс: 35 км
            Высота: 670—1270 метров над уровнем моря
            Сезон: ноябрь — май
            Ски-пасс на три дня: 1500—3950 Р
          </Text> */}
        </Card.Content>
        <Card.Footer id="rating">
          <div>
            {Array.from({ length: place && place.rating }, (_, i) => <Star key={i} color="orange" size={32} />)}
          </div>
          <Button auto onClick={() => setState(true)} mr="10px">Погода</Button>
          <Drawer visible={state} onClose={() => setState(false)} placement="top">
            <Weather geo={place && place.geo} />
          </Drawer>
          {user && <Button>В избранное</Button>}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default PlaceInfo;
