import CurrentMatches from "./pages/CurrentMatches"
import Player from "./pages/Player"
import PlayersList from "./pages/PlayersList"
// import Signup from "./pages/Signup"
// import Login from "./pages/login"

const App = () => {
  return (
   <>
  
<CurrentMatches matches={[
    {
      "id": "4c8894c8-6671-4a38-9365-19a3a3dc8082",
      "name": "Oman vs Papua New Guinea, 2nd unofficial ODI",
      "matchType": "odi",
      "status": "Papua New Guinea need 239 runs",
      "venue": "Al Amerat Cricket Ground (Ministry Turf 1), Al Amerat",
      "date": "2024-03-04",
      "dateTimeGMT": "2024-03-04T06:00:00",
      "teams": [
        "Oman",
        "Papua New Guinea"
      ],
      "teamInfo": [
        {
          "name": "Oman",
          "shortname": "OMAN",
          "img": "https://g.cricapi.com/iapi/64-637877083212505394.webp?w=48"
        },
        {
          "name": "Papua New Guinea",
          "shortname": "PNG",
          "img": "https://g.cricapi.com/iapi/68-637877083835752068.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 243,
          "w": 10,
          "o": 49.1,
          "inning": "Oman Inning 1"
        },
        {
          "r": 5,
          "w": 0,
          "o": 0.4,
          "inning": "Papua New Guinea Inning 1"
        }
      ],
      "series_id": "40739d0b-92c5-4282-8f5a-ce4369f13ee6",
      "fantasyEnabled": false,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
   
    {
      "id": "027d42a8-5261-4622-a3a5-d5e51679be54",
      "name": "United Arab Emirates vs Scotland, 9th Match",
      "matchType": "odi",
      "status": "Scotland won by 8 wkts",
      "venue": "Dubai International Cricket Stadium, Dubai",
      "date": "2024-03-03",
      "dateTimeGMT": "2024-03-03T06:00:00",
      "teams": [
        "United Arab Emirates",
        "Scotland"
      ],
      "teamInfo": [
        {
          "name": "Scotland",
          "shortname": "SCO",
          "img": "https://g.cricapi.com/iapi/79-637877081763746652.webp?w=48"
        },
        {
          "name": "United Arab Emirates",
          "shortname": "UAE",
          "img": "https://g.cricapi.com/iapi/92-637877081068315608.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 134,
          "w": 10,
          "o": 45,
          "inning": "United Arab Emirates Inning 1"
        },
        {
          "r": 137,
          "w": 2,
          "o": 23.4,
          "inning": "Scotland Inning 1"
        }
      ],
      "series_id": "9b836620-68cb-4798-9647-d479aa871b76",
      "fantasyEnabled": false,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    }, {
      "id": "547df16f-691f-4e16-9bf9-355b90f83dd4",
      "name": "Bahrain vs Bermuda, 21st Match, Super Sixes",
      "matchType": "odi",
      "status": "Bahrain won by 30 runs (DLS method)",
      "venue": "Bayuemas Oval, Kuala Lumpur",
      "date": "2024-03-03",
      "dateTimeGMT": "2024-03-03T01:30:00",
      "teams": [
        "Bahrain",
        "Bermuda"
      ],
      "teamInfo": [
        {
          "name": "Bahrain",
          "shortname": "BHR",
          "img": "https://g.cricapi.com/iapi/8-637864920538411089.webp?w=48"
        },
        {
          "name": "Bermuda",
          "shortname": "BMUDA",
          "img": "https://g.cricapi.com/iapi/587-637865062552981767.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 238,
          "w": 10,
          "o": 49.2,
          "inning": "Bahrain Inning 1"
        },
        {
          "r": 131,
          "w": 8,
          "o": 25,
          "inning": "Bermuda Inning 1"
        }
      ],
      "series_id": "2617c614-38b9-4eca-bbce-45e917f8d3f3",
      "fantasyEnabled": false,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "08b1d250-e0f0-47d9-996a-818f26837c81",
      "name": "Vanuatu vs Italy, 20th Match, Super Sixes",
      "matchType": "odi",
      "status": "Italy won by 2 wkts",
      "venue": "YSD-UKM Cricket Oval, Bangi",
      "date": "2024-03-03",
      "dateTimeGMT": "2024-03-03T01:30:00",
      "teams": [
        "Vanuatu",
        "Italy"
      ],
      "teamInfo": [
        {
          "name": "Italy",
          "shortname": "ITA",
          "img": "https://g.cricapi.com/iapi/617-637877089742553367.webp?w=48"
        },
        {
          "name": "Vanuatu",
          "shortname": "VAN",
          "img": "https://g.cricapi.com/iapi/666-637870996123242059.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 102,
          "w": 10,
          "o": 41.2,
          "inning": "Vanuatu Inning 1"
        },
        {
          "r": 105,
          "w": 8,
          "o": 25.4,
          "inning": "Italy Inning 1"
        }
      ],
      "series_id": "2617c614-38b9-4eca-bbce-45e917f8d3f3",
      "fantasyEnabled": false,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
   
  ]}/>

    {/* <PlayersList/> */}
    {/* <Player name={"Rifayi Theruvath"} nationality={"Qatar"} position={"WK-Batsman"} desc={"Right Handed Bat"} image={"https://h.cricapi.com/img/icon512.png"}stats={
       [
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "m",
        "value": "1"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "inn",
        "value": "1"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "no",
        "value": "0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "runs",
        "value": "2"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "hs",
        "value": "2"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "avg",
        "value": "2.0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "bf",
        "value": "2"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "sr",
        "value": "100.0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "100s",
        "value": "0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "200s",
        "value": "0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "50s",
        "value": "0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "4s",
        "value": "0"
      },
      {
        "fn": "batting",
        "matchtype": "t20i",
        "stat": "6s",
        "value": "0"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "m",
        "value": "1"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "inn",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "b",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "runs",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "wkts",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "bbi",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "bbm",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "econ",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "avg",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "sr",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "5w",
        "value": "-"
      },
      {
        "fn": "bowling",
        "matchtype": "t20i",
        "stat": "10w",
        "value": "-"
      }
    ]
    } /> */}
   </>
  )
}

export default App