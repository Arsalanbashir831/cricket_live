import { Button, Space, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Action",
    key: "action",
    render: (data) => (
      <Space size="middle">
        <Button onClick={()=>{console.log(data.id)}} type="primary" className="bg-green-600">
          Details
        </Button>
      </Space>
    ),
  },
];

const PlayersList = () => {
  const [response, setResponse] = useState(null);
  const [query , setQuery] = useState('');
  const apikey="6804c6ba-a456-41f0-8bcd-67e8a0a2ff93"
useEffect(() => {
    const fetchPlayers  = async()=>{
        try {
            const data = await axios.get(`https://api.cricapi.com/v1/players?apikey=${apikey}&offset=0&search=${query}`);
            setResponse(data.data.data);
        } catch (error) {
            console.log(error)
        }
    }
fetchPlayers()
}, [query]);

  return (
    <>
    <input 
  type="text" 
  value={query} 
  onChange={(e) => setQuery(e.target.value)} 
  placeholder="Search Players"
/>
    <Button on type="primary" onClick={()=>{setQuery(query)}} className="bg-blue-500">Search</Button>
      <Table columns={columns} dataSource={response} />;
    </>
  );
};
export default PlayersList;
