import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Home: React.FC = () => {
    const [tripType, setTripType] = useState('one-way');
    const [departureDate, setDepartureDate] = useState('2024-05-22');
    const [travellers, setTravellers] = useState(1);

    return (
        <div className="flex justify-center h-screen w-full items-center">
            <div className=" max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <div className="flex justify-center mb-4">
                <div className="mr-4">
                    <input 
                        type="radio" 
                        id="one-way" 
                        name="tripType" 
                        value="one-way" 
                        checked={tripType === 'one-way'} 
                        onChange={() => setTripType('one-way')}
                    />
                    <label htmlFor="one-way" className="ml-2">One Way</label>
                </div>
                <div className="mr-4">
                    <input 
                        type="radio" 
                        id="round-trip" 
                        name="tripType" 
                        value="round-trip" 
                        checked={tripType === 'round-trip'} 
                        onChange={() => setTripType('round-trip')}
                    />
                    <label htmlFor="round-trip" className="ml-2">Round Trip</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="multi-city" 
                        name="tripType" 
                        value="multi-city" 
                        checked={tripType === 'multi-city'} 
                        onChange={() => setTripType('multi-city')}
                    />
                    <label htmlFor="multi-city" className="ml-2">Multi City</label>
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-2">From</label>
                <input 
                    type="text" 
                    placeholder='Delhi (DEL, Delhi Airport India)'
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">To</label>
                <input 
                    type="text" 
                    placeholder="Bengaluru (BLR, Bengaluru International Airport)" 
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">Departure</label>
                <input 
                    type="date" 
                    value={departureDate} 
                    onChange={(e) => setDepartureDate(e.target.value)} 
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            {tripType !== 'one-way' && (
                <div className="mb-4">
                    <label className="block mb-2">Return</label>
                    <input 
                        type="date" 
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
            )}

            <div className="mb-4">
                <label className="block mb-2">Travellers & Class</label>
                <input 
                    type="number" 
                    value={travellers} 
                    onChange={(e) => setTravellers(Number(e.target.value))} 
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="flex justify-center">
                <Button variant='contained'>Search</Button>
            </div>
            </div>
        </div>
        
    );
}

export default Home;
