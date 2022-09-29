import React from 'react';
import {
  CardContent,
  CardActions,
  Card,
  IconButton,
  Divider
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './style.css';

const PokemonCard = () => {
  return (
    <div className="card-content">
      <Card className="card">
        <CardContent>
          <div className="pokemon-content">
            <img
              className="pokemon-content__image"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            ></img>
          </div>
        </CardContent>
        <Divider />
        <CardActions className="pokemon-action">
          <IconButton aria-label="add to favorites">
            <RemoveRedEyeIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PokemonCard;
