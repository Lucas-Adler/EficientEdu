import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { data } from './DataBase';
import {BarChart, Bar,YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';




const city = [
  { id: 1, name: 'Florianopolis - SC', code: 'Fln', unavailable: false },
  { id: 2, name: 'Salvador - BA', code: 'Ssa', unavailable: false },
  { id: 3, name: 'Belo Horizonte - MG', code: 'BH', unavailable: false }
]

const glass = [
  { id: 1, name: 'FS80', code: '0.8', unavailable: false },
  { id: 2, name: 'FS70', code: '0.7', unavailable: false },
  { id: 3, name: 'FS60', code: '0.6', unavailable: false },
  { id: 4, name: 'FS50', code: '0.5', unavailable: false },
  { id: 5, name: 'FS40', code: '0.4', unavailable: false },
  { id: 6, name: 'FS30', code: '0.3', unavailable: false }
]

const wwr = [
  { id: 1, name: '40%', code: '0.4', unavailable: false },
  { id: 2, name: '50%', code: '0.5', unavailable: false },
  { id: 3, name: '60%', code: '0.6', unavailable: false }
]

const orientation = [
  { id: 1, name: 'Norte', code: 'N', unavailable: false },
  { id: 2, name: 'Sul', code: 'S', unavailable: false },
  { id: 3, name: 'Leste', code: 'L', unavailable: false },
  { id: 4, name: 'Oeste', code: 'O', unavailable: false }
]

const brise_v = [
  { id: 1, name: 'sem brise', code: '0', unavaible: false },
  { id: 2, name: '4 unidades', code: '4', unavaible: false },
  { id: 3, name: '6 unidades', code: '6', unavaible: false },
  { id: 4, name: '8 unidades', code: '8', unavaible: false }
]

const brise_h = [
  { id: 1, name: 'sem brise', code: '0', unavaible: false },
  { id: 1, name: '10 cm', code: '10', unavaible: false },
  { id: 1, name: '20 cm', code: '20', unavaible: false },
  { id: 1, name: '30 cm', code: '30', unavaible: false }
];

export default function eficiedu() {
  // const [search, setSearc] = useState('')
  const [btnState, setBtnState] = useState(false)
  
 

  let toggleClassCheck = btnState ? 'invisible' : null

  const [selectedC, setSelectedC] = useState(city[0])
  const [selectedN, setSelectedN] = useState(orientation[0])
  const [selectedG, setSelectedG] = useState(glass[0])
  const [selectedW, setSelectedW] = useState(wwr[0])
  const [selectedBV, setSelectedBV] = useState(brise_v[0])
  const [selectedBH, setSelectedBH] = useState(brise_h[0])

  const filteredData = data
    .filter(
      data =>
        data.city === selectedC.code &&
        data.orientacao === selectedN.code &&
        data.vidro === selectedG.code &&
        data.WWR === selectedW.code &&
        data.brisev === selectedBV.code &&
        data.briseh === selectedBH.code
    )
    .map(function (data) {
      return {valor: parseFloat(data.TotalElectricity), unit:'Kw/ano' };
    } )
   

  const [testData, setData] = useState([]);

function handleClick() {
    setBtnState(btnState => !btnState)
    
    let data_02 = filteredData.shift()

    const newData = [...testData, data_02 ]
    setData(newData);
    console.log( filteredData);
  }

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{'Simulação ' + `${label + 1 } : ${payload[0].value}` + ' Kw/ano'}</p>
        <p className="intro">Valores Escolhidos: </p>
        <p className="desc">{`${selectedC.code}
                              ${selectedG.code}
                              ${selectedW.code}
                              ${selectedN.code}
                              ${selectedBH.code}
                              ${selectedBV.code}`}</p>
      </div>
    );
  }
}
  
  return (
    <section className="flex content-center h-screen w-full max-w-full snap-start flex-wrap justify-between px-[8%] py-[20%] lg:mx-auto lg:max-w-7xl lg:py-36 font-display"  id='Sim'>
      <div id="options" className="grid-start-1 flex-row items-center">
        <div id="city">
          <h2 className="text-m my-0 -mb-1.5 font-semibold">Cidade:</h2>
          <div id="Cities" className="relative my-0 pb-1">
            <Listbox value={selectedC} onChange={setSelectedC}>
              <div className="relative py-1">
                <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in">
                  <span className="block truncate ">{selectedC.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="text-gray-40 h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
                    {city.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <div id="glass">
          <h2 className="text-m -mb-2.5 mt-2 font-semibold">Vidro:</h2>
          <div id="Glass" className="relative my-0 pb-1">
            <Listbox value={selectedG} onChange={setSelectedG}>
              <div className="relative mt-1  py-1">
                <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in">
                  <span className="block truncate">{selectedG.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="text-gray-400 h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
                    {glass.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <div id="wwr">
          <h2 className="text-m -mb-2.5 mt-2 font-semibold">WWR:</h2>
          <div id="WWR" className="relative my-0 pb-1">
            <Listbox value={selectedW} onChange={setSelectedW}>
              <div className="relative mt-1  py-1">
                <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in">
                  <span className="block truncate">{selectedW.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="text-gray-400 h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
                    {wwr.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <div id="orientation">
          <h2 className="text-m -mb-2.5 mt-2 font-semibold">Orientação:</h2>
          <div id="Orientation" className="relative my-0 pb-1">
            <Listbox value={selectedN} onChange={setSelectedN}>
              <div className="relative mt-1  py-1">
                <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in">
                  <span className="block truncate">{selectedN.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="text-gray-400 h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
                    {orientation.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <div id="brise_v">
          <h2 className="text-m -mb-2.5 mt-2 font-semibold">Brise Vertical:</h2>
          <div id="BV" className="relative my-0 pb-1"></div>
          <Listbox value={selectedBV} onChange={setSelectedBV}>
            <div className="relative mt-1 py-1">
              <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in">
                <span className="block truncate ">{selectedBV.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="text-gray-40 h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
                  {brise_v.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div id="brise_h">
          <h2 className="text-m -mb-2.5 mt-2 font-semibold">
            Brise Horizontal:
          </h2>
          <div id="BH" className="relative my-0 pb-7">
            <Listbox value={selectedBH} onChange={setSelectedBH}>
              <div className="relative mt-1 py-1">
                <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in">
                  <span className="block truncate ">{selectedBH.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="text-gray-40 h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
                    {brise_h.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <button
          className="hover: flex w-[200px] items-center justify-center rounded border-2 bg-primary-50 p-2 transition hover:bg-secondary-300 hover:shadow-md hover:duration-100 hover:ease-in"
          onClick={handleClick}
        >
          Simular
        </button>
        
      </div>
       <ResponsiveContainer width='75%' className="relative flex-row items-bottom">
         <BarChart
          width={200}
          height={300}
          data={testData}
          margin={{
            top: 50,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <defs>
           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
           <stop offset="5%" stopColor="#5eead4" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#5eead4" stopOpacity={0}/>
         </linearGradient>
         </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey="valor" />
          <Tooltip content={CustomTooltip} position={{x: 50, y: 480}} animationEasing='ease-in-out'/>
          <Bar dataKey="valor" type='monotone' fill='url(#colorUv)' fillOpacity={1} stroke='black' strokeWidth={1} /> 
        </BarChart>
      </ResponsiveContainer> 
      
     
    </section>
  )
}