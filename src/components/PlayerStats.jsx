import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

const PlayerStats = ({ stats }) => {
  const battingStats = stats.filter(stat => stat.fn === 'batting');
  const bowlingStats = stats.filter(stat => stat.fn === 'bowling');

  const getLabelsAndData = stats => {
    return stats.map(stat => ({ x: stat.stat, y: parseFloat(stat.value) }));
  };

  const battingData = getLabelsAndData(battingStats);
  const bowlingData = getLabelsAndData(bowlingStats);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
      <div style={{ width: '45%' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Batting Stats</h2>
        <VictoryChart
          domainPadding={{ x: 20, y: [0, 20] }}
          theme={VictoryTheme.material}
          padding={{ top: 50, bottom: 80, left: 50, right: 50 }}
        >
          <VictoryBar
            data={battingData}
            style={{ data: { fill: 'rgba(75,192,192,0.7)' } }}
          />
          <VictoryAxis />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </div>
      <div style={{ width: '45%' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Bowling Stats</h2>
        <VictoryChart
          domainPadding={{ x: 20, y: [0, 20] }}
          theme={VictoryTheme.material}
          padding={{ top: 50, bottom: 80, left: 50, right: 50 }}
        >
          <VictoryBar
            data={bowlingData}
            style={{ data: { fill: 'rgba(255,99,132,0.7)' } }}
          />
          <VictoryAxis />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </div>
    </div>
  );
};

export default PlayerStats;
