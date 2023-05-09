import React, { useState } from 'react';
import {data}  from './DataBase'

export default function Teste() {
  const [filteredData, setFilteredData] = useState([]);

  function handleFilter() {
    const filteredData = data.filter(
      data =>
        data.city === selectedC.code &&
        data.orientacao === selectedN.code &&
        data.vidro === selectedG.code &&
        data.WWR === selectedW.code &&
        data.brisev === selectedBV.code &&
        data.briseh === selectedBH.code
    ).map(function (data) {
      return {valor: parseFloat(data.TotalElectricity), unit:'Kw/ano' };
    });

    setFilteredData(filteredData);
  }

  return (
    <div className='snap-start'>
      <button onClick={handleFilter}>Filter Data</button>
      {filteredData.map(data => (
        <p>{data.valor} {data.unit}</p>
      ))}
    </div>
  );
}
