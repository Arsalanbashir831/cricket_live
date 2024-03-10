import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PlayerStats from '../components/PlayerStats';

const { Meta } = Card;
const { Text } = Typography;

const Player = ({ name, position, nationality, image,stats,desc }) => {
  return (
    <>

    <Card
      style={{ width: 300 }}
      cover={<img alt="player" src={image} />}
      actions={[
        <Text strong>{position}</Text>,
        <Text type="secondary">{nationality}</Text>
      ]}
    >
      <Meta
        avatar={<Avatar icon={<UserOutlined />} />}
        title={name}
        description={desc}
      />
    </Card>
    <PlayerStats stats={stats} />
    </>
  );
};

export default Player;
