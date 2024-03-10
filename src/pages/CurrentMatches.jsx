

const MatchCard = ({ match }) => {
  const { id, name, matchType, status, venue, dateTimeGMT, teams, teamInfo, score } = match;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6" key={id}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{status}</p>
      </div>
      <div className="mb-4">
        <p><span className="font-semibold">Match Type:</span> {matchType}</p>
        <p><span className="font-semibold">Venue:</span> {venue}</p>
        <p><span className="font-semibold">Date:</span> {new Date(dateTimeGMT).toLocaleDateString()}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {teams.map((team, index) => (
          <div key={index} className="flex items-center">
            <img src={teamInfo[index].img} alt={teamInfo[index].shortname} className="w-8 h-8 mr-2" />
            <div>
              <p className="font-semibold">{team}</p>
              <p>{score[index].r}/{score[index].w} ({score[index].o} overs)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CurrentMatches = ({ matches }) => {
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-6">Current Matches</h2>
      {matches.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default CurrentMatches;
