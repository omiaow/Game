import { useState, useRef } from 'react';
import './App.css';
import musicFile from './music.mp3';

const beats = [
  {
    "expected": "0",
    "column": 1
  },
  {
    "expected": "460",
    "column": 3
  },
  {
    "expected": "920",
    "column": 3
  },
  {
    "expected": "1380",
    "column": 1
  },
  {
    "expected": "1840",
    "column": 3
  },
  {
    "expected": "2300",
    "column": 1
  },
  {
    "expected": "2760",
    "column": 2
  },
  {
    "expected": "3230",
    "column": 1
  },
  {
    "expected": "3690",
    "column": 3
  },
  {
    "expected": "4030",
    "column": 1
  },
  {
    "expected": "4380",
    "column": 2
  },
  {
    "expected": "4840",
    "column": 2
  },
  {
    "expected": "5070",
    "column": 1
  },
  {
    "expected": "5530",
    "column": 3
  },
  {
    "expected": "5760",
    "column": 2
  },
  {
    "expected": "5880",
    "column": 1
  },
  {
    "expected": "6230",
    "column": 2
  },
  {
    "expected": "6690",
    "column": 1
  },
  {
    "expected": "6920",
    "column": 3
  },
  {
    "expected": "7150",
    "column": 1
  },
  {
    "expected": "7380",
    "column": 3
  },
  {
    "expected": "7730",
    "column": 2
  },
  {
    "expected": "8070",
    "column": 1
  },
  {
    "expected": "8530",
    "column": 1
  },
  {
    "expected": "8760",
    "column": 2
  },
  {
    "expected": "9230",
    "column": 2
  },
  {
    "expected": "9460",
    "column": 3
  },
  {
    "expected": "9570",
    "column": 1
  },
  {
    "expected": "9920",
    "column": 3
  },
  {
    "expected": "10380",
    "column": 3
  },
  {
    "expected": "10610",
    "column": 2
  },
  {
    "expected": "10840",
    "column": 1
  },
  {
    "expected": "11070",
    "column": 3
  },
  {
    "expected": "11420",
    "column": 1
  },
  {
    "expected": "11760",
    "column": 3
  },
  {
    "expected": "12230",
    "column": 1
  },
  {
    "expected": "12460",
    "column": 2
  },
  {
    "expected": "12920",
    "column": 3
  },
  {
    "expected": "13150",
    "column": 1
  },
  {
    "expected": "13260",
    "column": 2
  },
  {
    "expected": "13610",
    "column": 3
  },
  {
    "expected": "14070",
    "column": 1
  },
  {
    "expected": "14300",
    "column": 2
  },
  {
    "expected": "14530",
    "column": 1
  },
  {
    "expected": "14760",
    "column": 2
  },
  {
    "expected": "15110",
    "column": 1
  },
  {
    "expected": "15460",
    "column": 2
  },
  {
    "expected": "15920",
    "column": 1
  },
  {
    "expected": "16150",
    "column": 2
  },
  {
    "expected": "16610",
    "column": 3
  },
  {
    "expected": "17070",
    "column": 1
  },
  {
    "expected": "17530",
    "column": 2
  },
  {
    "expected": "17760",
    "column": 3
  },
  {
    "expected": "18000",
    "column": 1
  },
  {
    "expected": "18230",
    "column": 3
  },
  {
    "expected": "18460",
    "column": 2
  },
  {
    "expected": "18800",
    "column": 3
  },
  {
    "expected": "19150",
    "column": 2
  },
  {
    "expected": "19610",
    "column": 3
  },
  {
    "expected": "19840",
    "column": 1
  },
  {
    "expected": "20300",
    "column": 3
  },
  {
    "expected": "20530",
    "column": 2
  },
  {
    "expected": "20650",
    "column": 1
  },
  {
    "expected": "21000",
    "column": 3
  },
  {
    "expected": "21460",
    "column": 2
  },
  {
    "expected": "21690",
    "column": 3
  },
  {
    "expected": "21920",
    "column": 2
  },
  {
    "expected": "22150",
    "column": 1
  },
  {
    "expected": "22500",
    "column": 2
  },
  {
    "expected": "22840",
    "column": 1
  },
  {
    "expected": "23300",
    "column": 2
  },
  {
    "expected": "23530",
    "column": 3
  },
  {
    "expected": "24000",
    "column": 2
  },
  {
    "expected": "24460",
    "column": 3
  },
  {
    "expected": "24920",
    "column": 3
  },
  {
    "expected": "25380",
    "column": 1
  },
  {
    "expected": "25840",
    "column": 1
  },
  {
    "expected": "26190",
    "column": 2
  },
  {
    "expected": "26530",
    "column": 3
  },
  {
    "expected": "27000",
    "column": 3
  },
  {
    "expected": "27230",
    "column": 2
  },
  {
    "expected": "27690",
    "column": 2
  },
  {
    "expected": "27920",
    "column": 3
  },
  {
    "expected": "28030",
    "column": 1
  },
  {
    "expected": "28380",
    "column": 2
  },
  {
    "expected": "28840",
    "column": 3
  },
  {
    "expected": "29070",
    "column": 1
  },
  {
    "expected": "29300",
    "column": 3
  },
  {
    "expected": "29530",
    "column": 2
  },
  {
    "expected": "29880",
    "column": 1
  },
  {
    "expected": "30230",
    "column": 3
  },
  {
    "expected": "30690",
    "column": 1
  },
  {
    "expected": "30920",
    "column": 2
  },
  {
    "expected": "31380",
    "column": 2
  },
  {
    "expected": "31840",
    "column": 2
  },
  {
    "expected": "32300",
    "column": 2
  },
  {
    "expected": "32760",
    "column": 3
  },
  {
    "expected": "33230",
    "column": 3
  },
  {
    "expected": "33570",
    "column": 2
  },
  {
    "expected": "33920",
    "column": 3
  },
  {
    "expected": "34380",
    "column": 3
  },
  {
    "expected": "34610",
    "column": 2
  },
  {
    "expected": "35070",
    "column": 3
  },
  {
    "expected": "35300",
    "column": 1
  },
  {
    "expected": "35420",
    "column": 2
  },
  {
    "expected": "35760",
    "column": 3
  },
  {
    "expected": "36230",
    "column": 3
  },
  {
    "expected": "36460",
    "column": 1
  },
  {
    "expected": "36690",
    "column": 3
  },
  {
    "expected": "36920",
    "column": 1
  },
  {
    "expected": "37260",
    "column": 2
  },
  {
    "expected": "37610",
    "column": 3
  },
  {
    "expected": "38070",
    "column": 3
  },
  {
    "expected": "38300",
    "column": 2
  },
  {
    "expected": "38760",
    "column": 2
  },
  {
    "expected": "39230",
    "column": 3
  },
  {
    "expected": "39690",
    "column": 1
  },
  {
    "expected": "40150",
    "column": 3
  },
  {
    "expected": "40610",
    "column": 2
  },
  {
    "expected": "40960",
    "column": 3
  },
  {
    "expected": "41300",
    "column": 2
  },
  {
    "expected": "41760",
    "column": 2
  },
  {
    "expected": "42000",
    "column": 3
  },
  {
    "expected": "42460",
    "column": 2
  },
  {
    "expected": "42690",
    "column": 3
  },
  {
    "expected": "42800",
    "column": 1
  },
  {
    "expected": "43150",
    "column": 2
  },
  {
    "expected": "43610",
    "column": 2
  },
  {
    "expected": "43840",
    "column": 1
  },
  {
    "expected": "44300",
    "column": 1
  },
  {
    "expected": "44650",
    "column": 2
  },
  {
    "expected": "45000",
    "column": 1
  },
  {
    "expected": "45460",
    "column": 3
  },
  {
    "expected": "45690",
    "column": 2
  },
  {
    "expected": "46150",
    "column": 2
  },
  {
    "expected": "46380",
    "column": 1
  },
  {
    "expected": "46500",
    "column": 3
  },
  {
    "expected": "46840",
    "column": 1
  },
  {
    "expected": "47300",
    "column": 3
  },
  {
    "expected": "47530",
    "column": 1
  },
  {
    "expected": "47760",
    "column": 2
  },
  {
    "expected": "48000",
    "column": 1
  },
  {
    "expected": "48230",
    "column": 3
  },
  {
    "expected": "48460",
    "column": 1
  },
  {
    "expected": "48690",
    "column": 3
  },
  {
    "expected": "48920",
    "column": 1
  },
  {
    "expected": "49150",
    "column": 2
  },
  {
    "expected": "49380",
    "column": 3
  },
  {
    "expected": "49610",
    "column": 2
  },
  {
    "expected": "49840",
    "column": 3
  },
  {
    "expected": "50070",
    "column": 2
  },
  {
    "expected": "50190",
    "column": 1
  },
  {
    "expected": "50530",
    "column": 3
  },
  {
    "expected": "51000",
    "column": 1
  },
  {
    "expected": "51230",
    "column": 2
  },
  {
    "expected": "51460",
    "column": 1
  },
  {
    "expected": "51690",
    "column": 3
  },
  {
    "expected": "52380",
    "column": 3
  },
  {
    "expected": "53070",
    "column": 3
  },
  {
    "expected": "53530",
    "column": 2
  },
  {
    "expected": "53760",
    "column": 3
  },
  {
    "expected": "53880",
    "column": 1
  },
  {
    "expected": "54230",
    "column": 2
  },
  {
    "expected": "54690",
    "column": 2
  },
  {
    "expected": "54920",
    "column": 3
  },
  {
    "expected": "55150",
    "column": 2
  },
  {
    "expected": "55380",
    "column": 1
  },
  {
    "expected": "55840",
    "column": 1
  },
  {
    "expected": "56300",
    "column": 2
  },
  {
    "expected": "56760",
    "column": 3
  },
  {
    "expected": "57230",
    "column": 2
  },
  {
    "expected": "57460",
    "column": 1
  },
  {
    "expected": "57570",
    "column": 3
  },
  {
    "expected": "57920",
    "column": 1
  },
  {
    "expected": "58380",
    "column": 2
  },
  {
    "expected": "58610",
    "column": 3
  },
  {
    "expected": "58840",
    "column": 1
  },
  {
    "expected": "59070",
    "column": 3
  },
  {
    "expected": "59530",
    "column": 2
  },
  {
    "expected": "60000",
    "column": 1
  },
  {
    "expected": "60460",
    "column": 2
  }
]

function App() {
  const [start, setStart] = useState(false);
  const audioRef = useRef(null);

  const generateTiles = (list) => {
    const column1 = []
    const column2 = []
    const column3 = []

    const coeficient = 24150 / 60000

    list.forEach(element => {
      if (element.column === 1) {
        const pixel = element.expected * coeficient
        column1.push(<div className="tile" style={{ marginTop: `${pixel}px` }}>{element.expected}</div>)
      }

      
      if (element.column === 2) {
        const pixel = element.expected * coeficient
        column2.push(<div className="tile" style={{ marginTop: `${pixel}px` }}>{element.expected}</div>)
      }
      
      if (element.column === 3) {
        const pixel = element.expected * coeficient
        column3.push(<div className="tile" style={{ marginTop: `${pixel}px` }}>{element.expected}</div>)
      }
    })

    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.play();
      }, "1500");
    }

    return <div className="music">
      <div className="tape" style={{ marginLeft: "0px" }}>{column1}</div>
      <div className="tape" style={{ marginLeft: "33.3%" }}>{column2}</div>
      <div className="tape" style={{ marginLeft: "66.6%" }}>{column3}</div>
    </div>
  }

  return (
    <div className="background">
      <button onClick={() => setStart(true)}>
        Start
      </button>
      {start ? generateTiles(beats) : ""}
      <audio ref={audioRef} src={musicFile} />
    </div>
  );
}

export default App;
