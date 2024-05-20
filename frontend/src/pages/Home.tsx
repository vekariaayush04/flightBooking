import React, { useState } from 'react';

const Home: React.FC = () => {
    const [tripType, setTripType] = useState('one-way');
    const [specialFare, setSpecialFare] = useState('regular');
    const [departureDate, setDepartureDate] = useState('2024-05-22');
    const [travellers, setTravellers] = useState(1);

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
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
                    value="Delhi (DEL, Delhi Airport India)" 
                    readOnly 
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">To</label>
                <input 
                    type="text" 
                    value="Bengaluru (BLR, Bengaluru International Airport)" 
                    readOnly 
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

            <div className="mb-4">
                <label className="block mb-2">Select a special fare</label>
                <div className="flex justify-center">
                    <button 
                        className={`px-4 py-2 ${specialFare === 'regular' ? 'bg-blue-500 text-white' : 'bg-gray-200'} mr-2`} 
                        onClick={() => setSpecialFare('regular')}
                    >
                        Regular
                    </button>
                    <button 
                        className={`px-4 py-2 ${specialFare === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200'} mr-2`} 
                        onClick={() => setSpecialFare('student')}
                    >
                        Student
                    </button>
                    <button 
                        className={`px-4 py-2 ${specialFare === 'senior' ? 'bg-blue-500 text-white' : 'bg-gray-200'} mr-2`} 
                        onClick={() => setSpecialFare('senior')}
                    >
                        Senior Citizen
                    </button>
                    <button 
                        className={`px-4 py-2 ${specialFare === 'armed-forces' ? 'bg-blue-500 text-white' : 'bg-gray-200'} mr-2`} 
                        onClick={() => setSpecialFare('armed-forces')}
                    >
                        Armed Forces
                    </button>
                    <button 
                        className={`px-4 py-2 ${specialFare === 'doctor-nurses' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
                        onClick={() => setSpecialFare('doctor-nurses')}
                    >
                        Doctor and Nurses
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
                    SEARCH
                </button>
            </div>
        </div>
    );
}

export default Home;
