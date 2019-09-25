import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import "semantic-ui-css/semantic.min.css";
import { Grid, Image } from "semantic-ui-react";
import "../poke.css";

const Home = () => {
  const [pokemons, setPokemons] = useState(null);
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [next, setNext] = useState(false);
  //Use Ref to Input
  const valueInput = useRef();

  //https://pokeapi.co/api/v2/evolution-chain/?limit=150
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  useEffect(() => {
    setNumber(getRandomInt(150));
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`).then(res => {
      const data = res.data[`results`];
      setPokemons(data);
    });
  }, []);

  const checkPokemon = () => {
    value.toUpperCase() === pokemons[number - 1].name.toUpperCase()
      ? setWinner(!winner)
      : setLoser(!loser);
    setShow(!show);
    setNext(!next);
    setValue("");
  };

  const getNewPokemon = () => {
    setNumber(getRandomInt(150));
    setShow(!show);
    setLoser(false);
    setWinner(false);
    setNext(!next);
  };

  return (
    <div>
      <h2>Who's that Pokemon?</h2>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            {/* Display Pokemon Image */}
            {show ? (
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                alt=""
                style={{
                  width: "200px",
                  transition: "filter 2s"
                }}
              />
            ) : (
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                alt=""
                style={{
                  filter: "blur(10px) grayscale(100%) saturate(10%)",
                  width: "200px",
                  transition: "filter .5s"
                }}
              />
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <input
              type="text"
              className="inputPoke"
              placeholder="Type a Poke Name"
              ref={valueInput}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column>
            {next ? (
              <button className="pokeButton" onClick={() => getNewPokemon()}>
                Next
              </button>
            ) : (
              <button className="pokeButton" onClick={() => checkPokemon()}>
                Check!
              </button>
            )}
          </Grid.Column>
        </Grid.Row>

        {/* Text winner or loser */}
        <Grid.Row>
          {winner ? (
            <h3>You are right!! It's {pokemons[number - 1].name}</h3>
          ) : (
            <h3>Type a name</h3>
          )}
        </Grid.Row>
        <Grid.Row>
          {loser ? (
            <h3>You are Wrong!! It's {pokemons[number - 1].name} </h3>
          ) : (
            ""
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
