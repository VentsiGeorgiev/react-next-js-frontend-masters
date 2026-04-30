import { useState, useEffect, useTransition } from "react";
import Score from "./Score";
import getScore from "./getScore";

export default function App() {
  // const [isPending, setIsPending] = useState(true);
  const [isPending, startTransition] = useTransition(true);
  const [game, setGame] = useState(1);
  const [score, setScore] = useState({ home: "-", await: "-" });

  // async function getNewScore(game) {
  //   setIsPending(true);
  //   setGame(game);
  //   const newScore = await getScore(game);
  //   setScore(newScore);
  //   setIsPending(false);
  // }

  async function getNewScore(game) {
    setGame(game);

    startTransition(async () => {
      const newScore = await getScore(game);
      startTransition(() => {
        setScore(newScore);
      });
    });
  }

  useEffect(() => {
    getNewScore(game);
  }, []);
  return (
    <div className="app">
      <h1>Game: {game}</h1>
      <select
        // disabled={isPending}
        onChange={(e) => {
          getNewScore(e.target.value);
        }}
      >
        <option value={1}>Game 1</option>
        <option value={2}>Game 2</option>
        <option value={3}>Game 3</option>
        <option value={4}>Game 4</option>
        <option value={5}>Game 5</option>
        <option value={6}>Game 6</option>
        <option value={7}>Game 7</option>
      </select>
      <div className={`loading-container ${isPending ? "loading" : ""}`}>
        <span className="spinner">loading...</span>
      </div>
      <div>
        <Score
          isPending={isPending}
          homeImage={score.homeImage}
          homeName={score.homeName}
          awayImage={score.await}
          awayName={score.awayName}
          home={score.home}
          away={score.away}
        />
      </div>
    </div>
  );
}
