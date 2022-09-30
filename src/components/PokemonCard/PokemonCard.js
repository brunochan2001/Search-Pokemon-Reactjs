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
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="animate__animated animate__zoomInUp">
      <div className="card-content">
        <Card className="card">
          <CardContent>
            <div className="pokemon-content">
              <img
                className="pokemon-content__image"
                src={`${pokemon?.image}`}
              />
            </div>
          </CardContent>
          <Divider />
          <CardActions className="pokemon-action">
            <Link to={`/pokemon/${pokemon.name}`}>
              <IconButton aria-label="add to favorites">
                <RemoveRedEyeIcon />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default PokemonCard;
