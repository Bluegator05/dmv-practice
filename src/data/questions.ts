export type Category =
    | 'Signs, Signals & Markings'
    | 'Rules of the Road'
    | 'Safe Driving Practices'
    | 'Speed Limits & Distances'
    | 'Alcohol & Drugs';

export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: Category;
}

export const questions: Question[] = [
    {
        id: 'q1',
        question: 'When approaching an intersection where a "Yield" sign is posted, you must:',
        options: [
            'Stop completely before proceeding, even if no other traffic is present',
            'Slow down to a reasonable speed and yield right-of-way to all vehicles',
            'Maintain your speed and assume others will yield to you',
            'Sound your horn to warn other drivers before proceeding'
        ],
        correctAnswer: 1,
        explanation: 'A yield sign means you must slow down to a safe speed and be prepared to stop. Let other vehicles, bicycles, or pedestrians pass before you proceed.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q2',
        question: 'In Texas, the maximum speed limit on a rural interstate highway is:',
        options: [
            '55 mph',
            '65 mph',
            '70 mph',
            '75 mph (or up to 85 mph where posted)'
        ],
        correctAnswer: 3,
        explanation: 'The standard maximum speed limit on Texas rural interstates is 75 mph, though it may be posted up to 80 or 85 mph on specific stretches of I-10 and state highways.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q3',
        question: 'If you are driving and a dust storm blows across the freeway causing reduced visibility, you should reduce your speed and turn on your:',
        options: [
            'High beam headlights',
            'Low beam headlights',
            'Interior lights',
            'Hazard warning lights only'
        ],
        correctAnswer: 1,
        explanation: 'You should always use low beam headlights in conditions where visibility is reduced, such as dust storms, fog, or heavy rain. High beams will reflect off the particles and make it harder to see.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q4',
        question: 'When parallel parking on a level street, your wheels should be within what distance of the curb?',
        options: [
            '6 inches',
            '18 inches',
            '24 inches',
            '36 inches'
        ],
        correctAnswer: 1,
        explanation: 'In Texas, when parallel parking, your vehicle\'s right wheels must be within 18 inches of the right-hand curb.',
        category: 'Rules of the Road'
    },
    {
        id: 'q5',
        question: 'When sharing the road with a commercial motor vehicle (large truck), you should:',
        options: [
            'Tailgate closely to draft behind the truck',
            'Leave more space in front of your vehicle if you are driving behind them',
            'Pass them on the right side if there is room',
            'Honk your horn at intersections so they know you are there'
        ],
        correctAnswer: 1,
        explanation: 'Large commercial trucks have large blind spots (No-Zones) and require a longer distance to stop. You should leave plenty of following distance.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q6',
        question: 'Unless otherwise posted, the speed limit in an urban district or residential area is:',
        options: [
            '20 mph',
            '25 mph',
            '30 mph',
            '35 mph'
        ],
        correctAnswer: 2,
        explanation: 'The maximum speed limit in an urban district or residential area is typically 30 mph unless otherwise posted.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q7',
        question: 'When you hear a siren, bell, or see a flashing red light coming toward you, from any direction, you must:',
        options: [
            'Maintain speed but pull over into the right lane',
            'Speed up and get out of the way',
            'Yield the right-of-way to the emergency vehicle by pulling to the right edge of the roadway and stopping',
            'Continue driving normally if the vehicle is on the opposite side of a divided highway'
        ],
        correctAnswer: 2,
        explanation: 'Texas law requires drivers to yield the right-of-way to emergency vehicles. Pull over to the right edge of the road and stop until the vehicle has passed.',
        category: 'Rules of the Road'
    },
    {
        id: 'q8',
        question: 'A solid yellow line on your side of the center stripe means:',
        options: [
            'Do not pass',
            'Pass only if traffic is clear',
            'Slow down and proceed with caution',
            'You are approaching a school zone'
        ],
        correctAnswer: 0,
        explanation: 'A solid yellow line on your side of the center line means you are in a no-passing zone.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q9',
        question: 'If you are involved in a crash that results in injury or death, or property damage of $1,000 or more, you must:',
        options: [
            'Report the crash to the appropriate law enforcement agency immediately',
            'Notify your insurance company within 30 days',
            'Leave a note on the other vehicle if unattended, then drive home',
            'Call a tow truck and leave the scene'
        ],
        correctAnswer: 0,
        explanation: 'Texas law requires you to immediately report to law enforcement any crash resulting in injury, death, or property damage to an apparent extent of $1,000 or more.',
        category: 'Rules of the Road'
    },
    {
        id: 'q10',
        question: 'Refusal to consent to a blood alcohol content (BAC) test will result in:',
        options: [
            'A fine of $2,000',
            'Automatic suspension of your driver license for at least 180 days',
            'A mandatory jail sentence of 30 days',
            'Your vehicle being impounded immediately'
        ],
        correctAnswer: 1,
        explanation: 'Under the Implied Consent Law, refusing to take a blood or breath test will result in the suspension of your driver license for at least 180 days (for a first refusal).',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q11',
        question: 'When returning to the right lane after passing another vehicle, you should not pull back in until:',
        options: [
            'You are one car length ahead',
            'The passed vehicle honks',
            'You can see the passed vehicle in your inside rearview mirror',
            'You can see the driver in your side mirror'
        ],
        correctAnswer: 2,
        explanation: 'Before returning to the right lane after passing, make sure you can see the entire vehicle you just passed in your inside rearview mirror.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q12',
        question: 'Under Texas law, the Zero Tolerance policy for minors means:',
        options: [
            'Minors get zero warnings for speeding',
            'Minors cannot have a drop of alcohol in their system while driving',
            'Minors cannot carry passengers under 18',
            'Minors cannot drive between midnight and 5 AM'
        ],
        correctAnswer: 1,
        explanation: 'Texas has a Zero Tolerance law for minors under 21. Any detectable amount of alcohol in their system while driving is a criminal offense.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q13',
        question: 'When parking on a hill headed downhill, with or without a curb, you should:',
        options: [
            'Turn your wheels to the right (toward the edge of the road)',
            'Turn your wheels to the left (toward the center of the road)',
            'Keep your wheels straight',
            'Only use your parking brake, wheel direction does not matter'
        ],
        correctAnswer: 0,
        explanation: 'When parking facing downhill, you should turn your front wheels right, toward the curb or edge of the road, so the vehicle will roll off the street if the brakes fail.',
        category: 'Rules of the Road'
    },
    {
        id: 'q14',
        question: 'A flashing red traffic light means:',
        options: [
            'Stop, then proceed when safe (treat as a stop sign)',
            'Slow down and proceed with caution',
            'Wait for the light to turn green',
            'The intersection is closed'
        ],
        correctAnswer: 0,
        explanation: 'A flashing red light has the same meaning as a stop sign. You must come to a complete stop, yield the right-of-way to cross traffic, and proceed only when it is safe.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q15',
        question: 'You must signal your intention to turn continuously for at least:',
        options: [
            '50 feet before the turn',
            '100 feet before the turn',
            '200 feet before the turn',
            '300 feet before the turn'
        ],
        correctAnswer: 1,
        explanation: 'You must signal a turn continuously for at least 100 feet before you actually make the turn.',
        category: 'Rules of the Road'
    },
    {
        id: 'q16',
        question: 'When approaching a school bus with flashing red lights and a stop sign extended, you must:',
        options: [
            'Slow down to 10 mph and proceed with caution',
            'Stop only if you are behind the bus',
            'Stop regardless of your direction of travel, unless on a divided highway separated by a median or physical barrier',
            'Honk to warn children and proceed'
        ],
        correctAnswer: 2,
        explanation: 'You must stop for a school bus with flashing red lights operating, from any direction, unless the roadway is separated by a physical barrier or unpaved median.',
        category: 'Rules of the Road'
    },
    {
        id: 'q17',
        question: 'If your vehicle starts to skid on a wet road, you should:',
        options: [
            'Brake hard immediately',
            'Steer in the opposite direction of the skid',
            'Take your foot off the gas and steer in the direction of the skid',
            'Accelerate out of the skid'
        ],
        correctAnswer: 2,
        explanation: 'If you start to skid, take your foot off the gas pedal and carefully steer in the direction you want the front of the vehicle to go (the direction of the skid). Do not hit the brakes.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q18',
        question: 'Bicyclists on Texas roadways:',
        options: [
            'Must ride facing oncoming traffic',
            'Have the same rights and responsibilities as drivers of motor vehicles',
            'Are not required to obey traffic signals',
            'Must yield to vehicles at all times'
        ],
        correctAnswer: 1,
        explanation: 'Under Texas law, a bicycle is considered a vehicle, and bicyclists have the same rights and must obey the same traffic laws as drivers of motor vehicles.',
        category: 'Rules of the Road'
    },
    {
        id: 'q19',
        question: 'When approaching an intersection equipped with a yield sign, you must:',
        options: [
            'Always stop before proceeding',
            'Slow down and yield right-of-way to traffic in the intersection',
            'Speed up to merge smoothly with traffic',
            'Flash your lights to warn other drivers'
        ],
        correctAnswer: 1,
        explanation: 'A yield sign requires you to slow down and yield the right-of-way to vehicles and pedestrians already in the intersection or approaching closely on another roadway.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q20',
        question: 'Hydroplaning occurs when:',
        options: [
            'Your tires lose traction and ride on a layer of water',
            'You drive through deep mud',
            'Your brakes lock up on ice',
            'You turn too sharply on a wet road'
        ],
        correctAnswer: 0,
        explanation: 'Hydroplaning happens when your tires lose contact with the road and ride on a thin layer of water. It can occur at speeds as low as 35 mph.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q21',
        question: 'A solid white line between lanes of traffic moving in the same direction indicates:',
        options: [
            'Passing is permitted',
            'You are in a school zone',
            'Lane changes are discouraged or prohibited; stay in your lane',
            'High-Occupancy Vehicle (HOV) lane only'
        ],
        correctAnswer: 2,
        explanation: 'A solid white line marking lanes indicates that lane changing is discouraged. You should generally stay in your lane unless it is absolutely necessary to change safely.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q22',
        question: 'If you blow a tire while driving, you should first:',
        options: [
            'Slam on the brakes',
            'Hold the steering wheel firmly and take your foot off the gas',
            'Pull the parking brake',
            'Turn off the engine'
        ],
        correctAnswer: 1,
        explanation: 'If you experience a blowout, grip the steering wheel firmly to maintain control, take your foot off the gas pedal to slow down gradually, and do not brake hard.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q23',
        question: 'At an uncontrolled intersection (no signs or signals), who has the right-of-way?',
        options: [
            'The vehicle on the left',
            'The vehicle that is moving faster',
            'The vehicle on the right',
            'The largest vehicle'
        ],
        correctAnswer: 2,
        explanation: 'At an intersection without signs or signals, you must yield the right-of-way to any vehicle that has entered the intersection from your right or is approaching from your right.',
        category: 'Rules of the Road'
    },
    {
        id: 'q24',
        question: 'In Texas, a person is legally intoxicated with a Blood Alcohol Concentration (BAC) of:',
        options: [
            '0.04% or higher',
            '0.06% or higher',
            '0.08% or higher',
            '0.10% or higher'
        ],
        correctAnswer: 2,
        explanation: 'In Texas, you are legally intoxicated if your Blood Alcohol Concentration (BAC) reaches 0.08% or higher.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q25',
        question: 'When following another vehicle, how much following distance should you maintain under good weather and road conditions?',
        options: [
            'At least 1 second',
            'At least 2 seconds',
            'At least 3 to 4 seconds',
            'At least 6 seconds'
        ],
        correctAnswer: 2,
        explanation: 'Under ideal driving conditions, you should maintain a following distance of at least 3 to 4 seconds behind the vehicle in front of you. Increase this distance in bad weather or heavy traffic.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q26',
        question: 'If you are driving and a heavy fog settles in, you should:',
        options: [
            'Turn on your high beams for better visibility',
            'Turn on your hazard lights and continue at the speed limit',
            'Slow down, use low beam headlights, and increase your following distance',
            'Pull over safely and completely off the road if visibility is near zero'
        ],
        correctAnswer: 2,
        explanation: 'In heavy fog, you must slow down, increase your following distance, and use your low beam headlights. High beams reflect off the fog and make visibility worse.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q27',
        question: 'A sign shaping like a pennant (sideways triangle) means:',
        options: [
            'School zone',
            'Yield',
            'No passing zone',
            'Railroad crossing ahead'
        ],
        correctAnswer: 2,
        explanation: 'A pennant-shaped sign, usually located on the left side of a two-way roadway, indicates a no passing zone.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q28',
        question: 'When a traffic signal is showing a flashing yellow light, you should:',
        options: [
            'Stop completely',
            'Slow down and proceed with caution',
            'Speed up to clear the intersection quickly',
            'Treat it as a four-way stop'
        ],
        correctAnswer: 1,
        explanation: 'A flashing yellow light warns drivers to slow down and proceed with caution.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q29',
        question: 'You should dim your headlights when you are within how many feet of an oncoming vehicle?',
        options: [
            '200 feet',
            '300 feet',
            '500 feet',
            '1,000 feet'
        ],
        correctAnswer: 2,
        explanation: 'You must dim your headlights (switch to low beams) when you are within 500 feet of an approaching vehicle and within 300 feet of a vehicle you are following.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q30',
        question: 'Texting while driving in Texas is:',
        options: [
            'Legal if done at a stop light',
            'Legal for adults over 21',
            'Illegal for all drivers',
            'Legal unless in a school zone'
        ],
        correctAnswer: 2,
        explanation: 'Texting while driving is illegal for all drivers in Texas, everywhere in the state.',
        category: 'Rules of the Road'
    },
    {
        id: 'q31',
        question: 'What is the maximum speed limit for a school bus on a Texas highway?',
        options: ['50 mph', '55 mph', '60 mph', '65 mph'],
        correctAnswer: 2,
        explanation: 'The maximum speed limit for a school bus that has passed a commercial motor vehicle inspection and is traveling on a highway is 60 mph.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q32',
        question: 'When exiting a highway, you should begin to slow down:',
        options: ['Before entering the deceleration lane', 'As soon as you enter the deceleration lane', 'When you reach the exit ramp', 'Only if there is traffic ahead'],
        correctAnswer: 1,
        explanation: 'You should not slow down until you move into the deceleration lane. Slowing down on the highway itself can cause a rear-end collision.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q33',
        question: 'In Texas, children under what age must be secured in a child passenger safety seat system unless they are taller than 4 feet 9 inches?',
        options: ['4 years old', '6 years old', '8 years old', '10 years old'],
        correctAnswer: 2,
        explanation: 'Texas law requires children under 8 years old to be secured in a child passenger safety seat system, unless they are taller than 4 feet 9 inches.',
        category: 'Rules of the Road'
    },
    {
        id: 'q34',
        question: 'When driving in fog, you can see better by:',
        options: ['Using high beam headlights', 'Using low beam headlights', 'Using parking lights only', 'Turning on interior dome lights'],
        correctAnswer: 1,
        explanation: 'Use low beam headlights in fog. High beams reflect off the moisture in the air, creating a glaring wall of light that makes it harder to see.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q35',
        question: 'A solid double yellow line in the center of the roadway means:',
        options: ['Passing is permitted when safe', 'Passing is prohibited for vehicles traveling in either direction', 'Passing is permitted only for the lane with the broken line', 'You are in a one-way street'],
        correctAnswer: 1,
        explanation: 'A solid double yellow line means passing is prohibited. You may only cross it to make a left turn into or out of an alley, private road, or driveway.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q36',
        question: 'If you are being tailgated, you should:',
        options: ['Slam on your brakes to warn the driver', 'Speed up to lose the tailgater', 'Move to the right lane or slow down gradually to let them pass', 'Turn on your hazard lights'],
        correctAnswer: 2,
        explanation: 'If another driver is following too closely, do not brake suddenly. Move to another lane if possible, or gently tap your brakes and slow down gradually to encourage them to pass.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q37',
        question: 'At a roundabout, you must yield to:',
        options: ['Vehicles entering from the right', 'Vehicles entering from the left', 'Traffic already in the roundabout', 'No one, large vehicles have right-of-way'],
        correctAnswer: 2,
        explanation: 'When approaching a roundabout, you must yield the right-of-way to traffic already circulating inside the roundabout.',
        category: 'Rules of the Road'
    },
    {
        id: 'q38',
        question: 'A diamond-shaped sign with a plus symbol (+) indicates:',
        options: ['Hospital ahead', 'Crossroad intersection ahead', 'Church ahead', 'First aid station'],
        correctAnswer: 1,
        explanation: 'A yellow diamond with a black plus sign (+) warns of a crossroad intersection ahead. Be prepared to yield.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q39',
        question: 'If your vehicle plunges into deep water, you should immediately:',
        options: ['Wait for the car to fill with water before opening the door', 'Roll down the side windows before the electronics short out', 'Call 911 immediately', 'Climb into the back seat'],
        correctAnswer: 1,
        explanation: 'If you sink in water, quickly roll down the windows. Once the water reaches the windows, water pressure will make it impossible to open the doors until the car is completely filled.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q40',
        question: 'It is illegal for a person 21 years of age or older to drive with a blood alcohol concentration (BAC) that is ___ or higher.',
        options: ['0.04%', '0.06%', '0.08%', '0.10%'],
        correctAnswer: 2,
        explanation: 'In Texas, you are legally intoxicated if your BAC is 0.08% or higher.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q41',
        question: 'When a pedestrian is walking across the street within a crosswalk at an intersection without traffic signals, you must:',
        options: ['Honk your horn and proceed', 'Yield the right-of-way to the pedestrian', 'Speed up to pass them quickly', 'Try to drive around them'],
        correctAnswer: 1,
        explanation: 'Drivers must yield the right-of-way to pedestrians crossing the roadway in a marked crosswalk or within an unmarked crosswalk at an intersection.',
        category: 'Rules of the Road'
    },
    {
        id: 'q42',
        question: 'If you are driving and a tire suddenly goes flat, what should you do first?',
        options: ['Slam on the brakes', 'Grip the steering wheel firmly and take your foot off the gas', 'Pull the emergency brake', 'Steer sharply towards the shoulder'],
        correctAnswer: 1,
        explanation: 'If you have a blowout, hold the steering wheel tightly, take your foot off the gas, and let the vehicle coast to a stop. Do not slam on the brakes.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q43',
        question: 'You must use your headlights from one-half hour after sunset until:',
        options: ['Sunrise', 'One-half hour before sunrise', 'An hour before sunrise', 'You turn off the engine'],
        correctAnswer: 1,
        explanation: 'Texas law requires headlights to be turned on from a half hour after sunset until a half hour before sunrise, or whenever visibility is less than 1,000 feet.',
        category: 'Rules of the Road'
    },
    {
        id: 'q44',
        question: 'A sign with a red circle and a slash across a black arrow pointing right means:',
        options: ['Right turn permitted', 'One way street to the right', 'Right turns are prohibited', 'Curve to the right ahead'],
        correctAnswer: 2,
        explanation: 'A red circle with a slash through it universally means "NO." A slash across a right-pointing arrow means you cannot make a right turn.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q45',
        question: 'When approaching an intersection with a non-operating (broken) traffic signal, you should:',
        options: ['Treat it as a four-way stop sign', 'Proceed cautiously without stopping', 'Wait for police to direct traffic', 'Honk your horn and speed through'],
        correctAnswer: 0,
        explanation: 'If traffic lights are out of order, you must treat the intersection as a four-way stop.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q46',
        question: 'The blind spots where truck drivers cannot see you are called:',
        options: ['Zero-zones', 'No-zones', 'Dead-zones', 'Draft-zones'],
        correctAnswer: 1,
        explanation: 'Commercial trucks have large blind spots called "No-Zones" located directly in front, directly behind, and along both sides.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q47',
        question: 'To avoid highway hypnosis while driving on the interstate for long periods, you should:',
        options: ['Stare continuously at the center line', 'Rest your eyes by closing them for slow seconds', 'Keep shifting your eyes and look at different objects', 'Turn on the heater to stay comfortable'],
        correctAnswer: 2,
        explanation: 'To prevent "highway hypnosis," avoid staring at any one thing for too long. Keep your eyes moving, check your mirrors frequently, and look at the road ahead.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q48',
        question: 'If two vehicles arrive at an uncontrolled intersection at the same time, who has the right-of-way?',
        options: ['The vehicle on the left', 'The larger vehicle', 'The vehicle on the right', 'The vehicle going straight'],
        correctAnswer: 2,
        explanation: 'At an intersection without traffic control signs or signals (an uncontrolled intersection), the driver approaching from the left must yield to the driver approaching from the right.',
        category: 'Rules of the Road'
    },
    {
        id: 'q49',
        question: 'In Texas, what is the mandatory penalty for a first conviction of driving without car insurance?',
        options: ['Jail time', 'Vehicle impoundment', 'A fine between $175 and $350', 'Immediate license revocation for 1 year'],
        correctAnswer: 2,
        explanation: 'A first conviction for driving without required liability insurance in Texas carries a fine of between $175 and $350.',
        category: 'Rules of the Road'
    },
    {
        id: 'q50',
        question: 'When preparing to make a left turn from a two-way street, you should position your vehicle:',
        options: ['In the far right lane', 'As close to the center line as possible', 'On the right shoulder', 'In the middle of the intersection while waiting'],
        correctAnswer: 1,
        explanation: 'When making a left turn, approach the turn in the lane nearest to the center of the road.',
        category: 'Rules of the Road'
    },
    {
        id: 'q51',
        question: 'What is the speed limit in a designated school zone when lights are flashing?',
        options: ['15 mph', '20 mph', '25 mph', '30 mph'],
        correctAnswer: 1,
        explanation: 'The speed limit in an active school zone in Texas is 20 mph unless otherwise posted.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q52',
        question: 'A solid white line across an intersection indicates:',
        options: ['Pedestrian crosswalk', 'Where you must stop for a stop sign or red light', 'A turning lane', 'The edge of the roadway'],
        correctAnswer: 1,
        explanation: 'A solid white line across your lane at an intersection shows where you must bring your vehicle to a complete stop.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q53',
        question: 'When parking uphill against a curb, you should turn your front wheels:',
        options: ['Away from the curb', 'Toward the curb', 'Straight ahead', 'It does not matter'],
        correctAnswer: 0,
        explanation: 'When parking headed uphill along a curb, turn your front wheels to the left (away from the curb) and let the vehicle roll back slightly until the right front wheel touches the curb.',
        category: 'Rules of the Road'
    },
    {
        id: 'q54',
        question: 'If you refuse to take a blood or breath test when requested by a police officer:',
        options: ['You will be fined $500', 'Your driver license will be automatically suspended', 'You will be required to attend driving school', 'Nothing happens unless you are convicted'],
        correctAnswer: 1,
        explanation: 'Under the Implied Consent Law, if you refuse a breath or blood test, your license will be automatically suspended for at least 180 days.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q55',
        question: 'When passing a bicyclist, you should maintain a minimum safe distance of:',
        options: ['1 foot', '2 feet', '3 feet', '6 feet'],
        correctAnswer: 2,
        explanation: 'Drivers should maintain a minimum passing distance of at least 3 feet when passing a bicyclist.',
        category: 'Safe Driving Practices'
    }
];
