import React, { useState, useEffect, useRef } from 'react';
import AtomImage from './atom.png';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';
import Neutron from './Neutron';

const Atom = ({ position }) => (
    <img
        className="w-[25px] h-[25px] absolute bg-cover"
        style={{ left: `${180 + position.x % 650}px`, top: `${position.y % 290}px` }}
        src={AtomImage}
        alt="Atom"
    />
);


const Shockwave = ({ position }) => {
    const [radius, setRadius] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (radius + 1 > 500) {
                clearInterval(intervalId);
            } else {
                setRadius((prevRadius) => prevRadius + 1);
            }
        }, 10);

        return () => {
            clearInterval(intervalId);
        };
    }, [radius]);

    return (
        <div
            style={{
                position: 'absolute',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'shockwaveAnimation 0.8s ease-out forwards',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${radius}px`,
                height: `${radius}px`,
            }}
        >
            {/* Texture for the shockwave */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background:
                        'radial-gradient(circle, rgba(96, 94, 94, 0.8) 10%, transparent 70%)',
                    borderRadius: '50%',
                    opacity: '0.8',
                }}
            ></div>
            {/* Keyframes for shockwave animation */}
            <style>
                {`
                @keyframes shockwaveAnimation {
                    from {
                        width: 0;
                        height: 0;
                        opacity: 1;
                    }
                    to {
                        width: 500px;
                        height: 500px;
                        opacity: 0;
                    }
                }
                `}
            </style>
        </div>
    );
};



const NuclearChainReaction = () => {
    const [atomsCoordinates, setAtomsCoordinates] = useState([]);
    const [value, setValue] = useState(10);
    const [isMoving, setIsMoving] = useState(false);
    const [neutrons, setNeutrons] = useState([]);
    const [energyWaves, setEnergyWaves] = useState([]);

    const [shockwaves, setShockwaves] = useState([]);
    const [playmusic, setPlaymusic] = useState(true);

    const [initialPosNeutron, setInitialPosNeutron] = useState({ x: 45, y: 200, angle: 0, isMoving: false })
    // Ref for the blast sound audio
    // const audioRef = useRef(new Audio(ExplosionSound));

    // Set up atom positions when the component mounts or value changes
    useEffect(() => {
        createRandomPositions(value);
    }, [value]);

    // Generate a random position within the cylinder
    const getRandomPosition = () => ({
        x: Math.random() * 550,
        y: Math.random() * 540,
    });

    // Create random atom positions based on the given count
    const createRandomPositions = (n) => {
        const newAtomsCoordinates = Array.from({ length: n }, () => ({
            position: getRandomPosition(),
        }));
        setAtomsCoordinates(newAtomsCoordinates);
    };

    // Handle neutron collision with an atom
    const handleCollision = (index, angle) => {
        // Get collided atom's position
        const collidedAt = atomsCoordinates[index].position;
        const atomX = 180 + (collidedAt.x % 650);
        const atomY = collidedAt.y % 290;

        // Create new neutrons
        const newNeutrons = [
            { x: atomX, y: atomY, angle: angle + 45, isMoving: true },
            { x: atomX, y: atomY, angle: angle - 45, isMoving: true },
        ];

        // Set new neutrons
        setNeutrons((prevNeutrons) => [...prevNeutrons, ...newNeutrons]);

        // Create new energy waves
        const newEnergyWaves = [
            { x: atomX, y: atomY, angle: angle + 45 },
        ];

        // Set new energy waves
        setEnergyWaves((prevWaves) => [...prevWaves, ...newEnergyWaves]);
        setShockwaves([...shockwaves, { x: atomX, y: atomY }]);

        // Remove the collided atom
        setAtomsCoordinates((prevAtoms) =>
            prevAtoms.filter((_, i) => i !== index)
        );

    };

    // Refresh everything to initial state
    const refreshEverything = () => {
        setNeutrons([]);
        setIsMoving(false);
        setAtomsCoordinates([]);
        setInitialPosNeutron({ x: 45, y: 200, angle: 0, isMoving: false })
    };



    // Component rendering
    return (
        <div className="w-full h-[45rem] flex items-center justify-center text-3xl flex-col">
            {/* Audio element for blast sound */}
            {/* <audio src={ExplosionSound} ref={audioRef} /> */}
            <div className="w-3/4 h-2/3 flex">
                <div id="cylinder" className=" w-3/4 flex justify-end items-center h-full">
                    <div
                        id="mainCylinder"
                        className=" flex  justify-center items-center w-full h-4/5 rounded-full bg-gray-700 overflow-hidden"
                    >
                        <div className=" z-10 bg-gray-400 rounded-full w-[90%] h-[80%] relative ">
                            {/* Neutron component for initial neutron */}
                            <Neutron
                                x={initialPosNeutron.x}
                                y={initialPosNeutron.y}
                                angle={initialPosNeutron.angle}
                                isMoving={isMoving}
                                atomsCoordinates={atomsCoordinates}
                                onCollision={handleCollision}
                            />
                            {/* Render existing neutrons */}
                            {neutrons.length > 0 &&
                                neutrons.map((neutron, index) => (
                                    <Neutron
                                        key={index}
                                        x={neutron.x}
                                        y={neutron.y}
                                        angle={neutron.angle}
                                        isMoving={neutron.isMoving}
                                        atomsCoordinates={atomsCoordinates}
                                        onCollision={handleCollision}
                                    />
                                ))}
                            {/* Render existing energy waves */}
                            {/* {energyWaves.map((wave, index) => (
                                <EnergyWave key={index} position={wave} />
                            ))} */}

                            {shockwaves.map((wave, index) => (
                                <Shockwave key={index} position={wave} />
                            ))}

                            {/* Render existing atoms */}
                            {atomsCoordinates.map((atom, index) => (
                                <Atom key={index} position={atom.position} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-3 w-1/4">
                    <div className="bg-gray-400 w-4/5 -skew-x-[12deg]" id="flap1"></div>
                    <div className="bg-gray-600 w-4/5 -translate-x-4 " id="flap2"></div>
                    <div className="bg-gray-400 w-4/5 skew-x-[12deg]" id="flap3"></div>
                </div>
            </div>
            {/* Controls section */}
            <div>
                {/* Volume Slider */}
                <Slider
                    aria-label="Volume"
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    sx={{ width: 400, marginTop: 10 }}
                    valueLabelDisplay="auto"
                    min={10}
                    max={650}
                    defaultValue={10}
                />
                {/* Blast Button */}
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={() => setIsMoving(true)}
                    sx={{ marginX: 4 }}
                >
                    Blast
                </Button>
                {/* Recover Button */}
                <Button
                    variant="contained"
                    endIcon={<RefreshIcon />}
                    onClick={refreshEverything}
                    sx={{ marginX: 4 }}
                >
                    Recover
                </Button>
            </div>
        </div>
    );
};

export default NuclearChainReaction;
