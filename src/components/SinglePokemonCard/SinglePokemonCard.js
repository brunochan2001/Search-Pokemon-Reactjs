import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography
} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './style.css';

const SinglePokemonCard = ({ pokemon }) => {
  return (
    <div className="animate__animated animate__tada">
      <div className="card-content">
        <Card className="card">
          <CardContent>
            <div className="pokemon-content">
              <img
                className="pokemon-content__image"
                src={`${pokemon?.image}`}
              />
            </div>
            <Typography variant="h6" gutterBottom align="center">
              Nombre: {pokemon?.name}
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
              Nivel de experiencia: {pokemon.base_experience}
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
              Habilidades
            </Typography>
            <>
              {pokemon?.abilities.map((e, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  gutterBottom
                  align="center"
                >
                  {e.ability.name}
                </Typography>
              ))}
            </>
          </CardContent>
          <Divider />
          <CardActions className="pokemon-action">
            <Link to={`/`}>
              <IconButton aria-label="add to favorites">
                <KeyboardReturnIcon />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default SinglePokemonCard;
