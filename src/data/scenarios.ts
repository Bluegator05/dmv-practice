export type ScenarioType = 'parking' | 'intersection' | 'weather' | 'highway' | 'emergency';

export interface ScenarioChoice {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
}

export interface Scenario {
    id: string;
    title: string;
    description: string;
    type: ScenarioType;
    imageUrl?: string; // Optional reference image
    bgImageUrl: string; // Background for the driving simulator
    choices: ScenarioChoice[];
}

export const scenarios: Scenario[] = [
    {
        id: 'sc1',
        title: 'Approaching an Intersection',
        description: 'You are driving 30 mph in a residential area. As you approach an intersection, the traffic light turns yellow. There are no cars closely behind you. What do you do?',
        type: 'intersection',
        bgImageUrl: '/scenarios/s1.png',
        choices: [
            {
                id: 'c1',
                text: 'Speed up to cross the intersection before it turns red.',
                isCorrect: false,
                explanation: 'Speeding up on a yellow light is dangerous. A yellow light means clear the intersection because a red light is about to appear.'
            },
            {
                id: 'c2',
                text: 'Slam on the brakes immediately to stop before the line.',
                isCorrect: false,
                explanation: 'Slamming on the brakes can cause a skid or a rear-end collision.'
            },
            {
                id: 'c3',
                text: 'Slow down and prepare to stop before entering the intersection if safe to do so.',
                isCorrect: true,
                explanation: 'Correct! A yellow light is a warning that the light is about to turn red. You should stop if you can do so safely.'
            }
        ]
    },
    {
        id: 'sc2',
        title: 'School Bus Warning',
        description: 'You are on a two-lane road traveling the opposite direction of a School Bus. The bus has stopped, its red lights are flashing, and the stop sign is extended. What is the correct action?',
        type: 'emergency',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/School_bus_stop_sign.jpg/640px-School_bus_stop_sign.jpg',
        bgImageUrl: '/scenarios/s2.png',
        choices: [
            {
                id: 'c1',
                text: 'Slow down to 10 mph and pass carefully.',
                isCorrect: false,
                explanation: 'It is illegal in Texas to pass a school bus with flashing red lights and an extended stop sign in either direction on an undivided road.'
            },
            {
                id: 'c2',
                text: 'Stop completely until the bus resumes motion, the driver signals you to proceed, or the red lights stop flashing.',
                isCorrect: true,
                explanation: 'Perfect. You must halt and wait. Children are likely crossing the street.'
            },
            {
                id: 'c3',
                text: 'Since you are in the opposite lane, continue driving at the normal speed limit.',
                isCorrect: false,
                explanation: 'Because it is a two-lane road without a physical median, opposing traffic must also stop.'
            }
        ]
    },
    {
        id: 'sc3',
        title: 'Parking on a Hill',
        description: 'You are attempting to park your vehicle facing downhill on a street with a curb. What should you do with your steering wheel?',
        type: 'parking',
        bgImageUrl: '/scenarios/s3.png',
        choices: [
            {
                id: 'c1',
                text: 'Turn the wheels to the right (toward the curb).',
                isCorrect: true,
                explanation: 'Correct. If the brakes fail, the vehicle will roll into the curb and stop, rather than rolling into the street.'
            },
            {
                id: 'c2',
                text: 'Keep the wheels straight and rely on the emergency brake.',
                isCorrect: false,
                explanation: 'The emergency brake is necessary, but the wheels must also be turned toward the curb for safety.'
            },
            {
                id: 'c3',
                text: 'Turn the wheels to the left (away from the curb).',
                isCorrect: false,
                explanation: 'Turning away from the curb facing downhill means the car would roll into traffic if the brakes fail.'
            }
        ]
    },
    {
        id: 'sc4',
        title: 'Heavy Fog on the Highway',
        description: 'You are driving on I-35 early in the morning, and dense fog rolls in, reducing visibility to less than 100 feet. Which lights should you use?',
        type: 'weather',
        bgImageUrl: '/scenarios/s4.png',
        choices: [
            {
                id: 'c1',
                text: 'Turn on High Beam headlights to pierce the fog.',
                isCorrect: false,
                explanation: 'High beams will reflect off the water droplets in the fog, creating a glare and making it harder to see.'
            },
            {
                id: 'c2',
                text: 'Turn on Hazard lights only and continue driving.',
                isCorrect: false,
                explanation: 'Hazard lights are for stopped or emergency vehicles, not for normal driving in poor weather.'
            },
            {
                id: 'c3',
                text: 'Turn on Low Beam headlights and reduce your speed.',
                isCorrect: true,
                explanation: 'Correct. Low beams direct light downward onto the road, improving your visibility without causing glare to yourself or others.'
            }
        ]
    },
    {
        id: 'sc5',
        title: 'Highway Merge',
        description: 'You are driving on a highway entrance ramp to merge onto a freeway with a 70 mph speed limit. Traffic is flowing smoothly. How should you enter?',
        type: 'highway',
        bgImageUrl: '/scenarios/s5.png',
        choices: [
            {
                id: 'c1',
                text: 'Stop at the end of the ramp and wait for a large gap in traffic.',
                isCorrect: false,
                explanation: 'Stopping on an entrance ramp is dangerous and makes it impossible to merge smoothly with fast-moving traffic.'
            },
            {
                id: 'c2',
                text: 'Accelerate on the ramp to match the speed of freeway traffic, signal, and merge into a safe gap.',
                isCorrect: true,
                explanation: 'Correct. The acceleration lane is meant precisely for getting up to highway speeds so you can safely merge.'
            },
            {
                id: 'c3',
                text: 'Merge immediately crossing the solid white line because you have the right-of-way.',
                isCorrect: false,
                explanation: 'Entering traffic does not have the right-of-way. You must yield to traffic already on the highway.'
            }
        ]
    },
    {
        id: 'sc6',
        title: 'Four-Way Stop',
        description: 'You are approaching a 4-way stop intersection. Another car on your right has already stopped at the intersection before you. Who has the right of way?',
        type: 'intersection',
        bgImageUrl: '/scenarios/s6.png',
        choices: [
            {
                id: 'c1',
                text: 'The vehicle on the right always has the right of way.',
                isCorrect: false,
                explanation: 'While the vehicle on the right has the right of way if you arrive at the SAME time, this rule does not supersede the "first to arrive" rule.'
            },
            {
                id: 'c2',
                text: 'You have the right of way because you are going straight.',
                isCorrect: false,
                explanation: 'Your intended direction does not give you right of way over a vehicle that arrived first.'
            },
            {
                id: 'c3',
                text: 'The other car has the right of way because they arrived at the intersection first.',
                isCorrect: true,
                explanation: 'Correct! At a 4-way stop, the first vehicle to arrive and stop at the intersection has the right of way.'
            }
        ]
    },
    {
        id: 'sc7',
        title: 'Night Glare',
        description: 'You are driving on a dark two-lane highway at night. An oncoming vehicle has its bright high beams on, glaring into your eyes. Where should you look?',
        type: 'weather',
        bgImageUrl: '/scenarios/s7.png',
        choices: [
            {
                id: 'c1',
                text: 'Look straight ahead to focus on your lane.',
                isCorrect: false,
                explanation: 'Looking straight into the oncoming lights will blind you and ruin your night vision.'
            },
            {
                id: 'c2',
                text: 'Flash your own high beams repeatedly to warn them while looking at their car.',
                isCorrect: false,
                explanation: 'While you may briefly flash your brights to gently remind them, staring at their car will still blind you.'
            },
            {
                id: 'c3',
                text: 'Look down and towards the right edge of your lane.',
                isCorrect: true,
                explanation: 'Correct! Look toward the white line on the right side of the road to avoid the glare while maintaining your lane position.'
            }
        ]
    },
    {
        id: 'sc8',
        title: 'Pedestrian Crosswalk',
        description: 'You are driving on a city street without a traffic light. A pedestrian is stepping into a marked crosswalk directly in front of you. What must you do?',
        type: 'intersection',
        bgImageUrl: '/scenarios/s8.png',
        choices: [
            {
                id: 'c1',
                text: 'Honk to warn the pedestrian and drive around them.',
                isCorrect: false,
                explanation: 'You must yield to pedestrians in a marked crosswalk.'
            },
            {
                id: 'c2',
                text: 'Slow down and let the pedestrian pass only if they are on your half of the road.',
                isCorrect: false,
                explanation: 'You must yield if they are anywhere in the crosswalk that poses a danger.'
            },
            {
                id: 'c3',
                text: 'Come to a complete stop and yield the right-of-way to the pedestrian.',
                isCorrect: true,
                explanation: 'Perfect! Texas law requires drivers to yield the right-of-way to pedestrians in a crosswalk.'
            }
        ]
    },
    {
        id: 'sc9',
        title: 'Aggressive Tailgater',
        description: 'You check your rear-view mirror and notice a large pickup truck is tailgating you extremely closely. The highway ahead of you is clear. What should you do?',
        type: 'highway',
        bgImageUrl: '/scenarios/s9.png',
        choices: [
            {
                id: 'c1',
                text: 'Tap your brakes ("brake check") to send them a warning.',
                isCorrect: false,
                explanation: 'Brake checking is highly dangerous and can cause a severe rear-end collision.'
            },
            {
                id: 'c2',
                text: 'Speed up to create distance between you and the truck.',
                isCorrect: false,
                explanation: 'Speeding up usually just causes the tailgater to speed up as well, resulting in a more dangerous situation at higher speeds.'
            },
            {
                id: 'c3',
                text: 'Maintain your speed or slightly slow down, and change lanes to let them pass.',
                isCorrect: true,
                explanation: 'Correct. The safest reaction is to stay calm, maintain a predictable speed, and move over to let aggressive drivers pass safely.'
            }
        ]
    },
    {
        id: 'sc10',
        title: 'Railroad Crossing',
        description: 'You are approaching a railroad crossing. The red lights begin flashing and the gate is lowering, but you cannot see a train yet. What is your action?',
        type: 'emergency',
        bgImageUrl: '/scenarios/s10.png',
        choices: [
            {
                id: 'c1',
                text: 'Speed up to cross the tracks before the gate fully lowers.',
                isCorrect: false,
                explanation: 'Trying to beat the gate is incredibly deadly and illegal. Trains move faster than they appear.'
            },
            {
                id: 'c2',
                text: 'Stop between 15 and 50 feet from the nearest rail and wait.',
                isCorrect: true,
                explanation: 'Correct! By law, you must stop at least 15 feet away when lights are flashing or a gate is lowered.'
            },
            {
                id: 'c3',
                text: 'Slow down and look both ways, then proceed cautiously under the moving gate.',
                isCorrect: false,
                explanation: 'You can never drive around or under a lowering or lowered gate.'
            }
        ]
    }
];
