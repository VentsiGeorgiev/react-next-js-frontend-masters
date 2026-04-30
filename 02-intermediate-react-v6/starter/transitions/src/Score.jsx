const loadingUrl = "/images/loading.webp";

export default function Score({
  isPending,
  home,
  away,
  awayName,
  homeName,
  awayImage,
  homeImage,
}) {
  return (
    <div className="score">
      <div>
        <h2>{isPending ? "Home" : homeName}</h2>
        <h3>{isPending ? "-" : home}</h3>
        <img src={isPending ? loadingUrl : homeImage} alt="home team logo" />
      </div>
      <div>
        <h2>{isPending ? "Away" : awayName}</h2>
        <h3>{isPending ? "-" : away}</h3>
        <img src={isPending ? loadingUrl : homeImage} alt="away team logo" />
      </div>
    </div>
  );
}
