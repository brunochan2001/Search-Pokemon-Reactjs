import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from 'firebase/firestore/lite';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseDB } from '../firebase/config';
import { onSetPokemon } from '../store/actions/pokemonAction';
import {
  CREATE_POKEMON_FIREBASE,
  DELETE_POKEMON_FIREBASE
} from '../store/actionTypes';

const useFirebaseStore = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.firebase);

  const startNewPokemon = async value => {
    const pokemonexist = pokemon.filter(e => e.id === value.id);
    console.log(value, pokemonexist);
    const newPokemon = {
      status: 'registrado',
      ...value
    };
    const newDoc = doc(collection(FirebaseDB, `/pokemon`));
    await setDoc(newDoc, newPokemon);
    dispatch({ type: CREATE_POKEMON_FIREBASE, payload: newPokemon });
  };

  const startDeletingPokemon = async id => {
    const docRef = doc(FirebaseDB, `/pokemon/${id}`);
    await deleteDoc(docRef);
    dispatch({ type: DELETE_POKEMON_FIREBASE, payload: id });
  };

  const startLoadPokemon = async () => {
    const collectionRef = collection(FirebaseDB, `/pokemon`);
    const docs = await getDocs(collectionRef);

    const pokemon = [];
    docs.forEach(doc => {
      pokemon.push({ id: doc.id, ...doc.data() });
    });
    dispatch(onSetPokemon(pokemon));
  };

  return {
    // Propiedades
    pokemon,
    // metodos
    startLoadPokemon,
    startDeletingPokemon,
    startNewPokemon
  };
};

export default useFirebaseStore;
