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
    },
    {
        id: 'q56',
        question: 'When approaching a four-way stop, two vehicles arrive at the same time at perpendicular streets. You are on the left; the other driver is on your right. Who has the right-of-way?',
        options: [
            'You do, because you arrived first',
            'You do, because you are on the main road',
            'The driver on your right',
            'Whoever is turning left'
        ],
        correctAnswer: 2,
        explanation: 'When drivers arrive at the same time, the driver on the right has the right-of-way.',
        category: 'Rules of the Road'
    },
    {
        id: 'q57',
        question: 'When must you yield to pedestrians?',
        options: [
            'Only at marked crosswalks',
            'Only when traffic signals show WALK',
            'At crosswalks and intersections, whether marked or unmarked',
            'Only in school zones'
        ],
        correctAnswer: 2,
        explanation: 'Drivers must yield to pedestrians in both marked and unmarked crosswalks at intersections.',
        category: 'Rules of the Road'
    },
    {
        id: 'q58',
        question: 'When turning right on a red light in Texas, you must:',
        options: [
            'Slow down and turn if traffic is clear',
            'Stop, yield to traffic and pedestrians, and turn if no sign prohibits it',
            'Stop only if pedestrians are present',
            'Turn right only when the light turns green'
        ],
        correctAnswer: 1,
        explanation: 'Right turn on red is allowed after a complete stop and yielding, unless a sign says "No Turn on Red."',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q59',
        question: 'When entering a freeway from an entrance ramp, you should:',
        options: [
            'Stop at the end of the ramp and wait for a gap',
            'Drive slowly on the shoulder until you can merge',
            'Use the acceleration lane to match the speed of traffic and merge safely',
            'Signal and force traffic to let you in'
        ],
        correctAnswer: 2,
        explanation: 'Use the acceleration lane to adjust your speed to the flow of freeway traffic before merging.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q60',
        question: 'You are driving in the left lane and a faster vehicle is approaching from behind. You should:',
        options: [
            'Maintain your speed; they must slow down',
            'Speed up',
            'Move to the right lane when safe',
            'Apply your brakes to discourage tailgating'
        ],
        correctAnswer: 2,
        explanation: 'The left lane is generally for passing; move right when safe to let faster traffic pass.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q61',
        question: 'On a two-lane road, you may legally pass another vehicle on the right:',
        options: [
            'When the other vehicle is making or about to make a left turn',
            'Anytime traffic is slow',
            'On the shoulder',
            'In a no-passing zone'
        ],
        correctAnswer: 0,
        explanation: 'You may pass on the right only when the other vehicle is turning left and there is enough space on the roadway (not the shoulder).',
        category: 'Rules of the Road'
    },
    {
        id: 'q62',
        question: 'If you miss your exit on the freeway, you should:',
        options: [
            'Back up carefully to the exit',
            'Make a U-turn in the median',
            'Go to the next exit and re-enter the freeway',
            'Stop and ask for directions on the shoulder'
        ],
        correctAnswer: 2,
        explanation: 'Never back up or make a U-turn on a freeway; continue to the next exit.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q63',
        question: 'When driving in heavy rain, you should:',
        options: [
            'Turn on high-beam headlights',
            'Use low-beam headlights and reduce speed',
            'Use only parking lights',
            'Turn off headlights to reduce glare'
        ],
        correctAnswer: 1,
        explanation: 'Use low-beam headlights and slow down to improve visibility and traction.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q64',
        question: 'Unless otherwise posted, the speed limit on most Texas highways outside urban districts is:',
        options: [
            '45 mph',
            '55 mph',
            '60 mph',
            '70 mph'
        ],
        correctAnswer: 3,
        explanation: 'Rural state highways generally have a higher default speed limit, often around 70 mph when not otherwise posted.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q65',
        question: 'When driving behind another vehicle, a safe following distance is:',
        options: [
            'One second',
            'Two to three seconds',
            'Four car lengths',
            'Half a second'
        ],
        correctAnswer: 1,
        explanation: 'A two- to three-second gap under good conditions is recommended to allow time to react and stop.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q66',
        question: 'You are in a school zone with flashing lights but see no children present. The proper action is to:',
        options: [
            'Drive the regular road speed',
            'Drive the posted school-zone speed limit',
            'Stop and wait until the lights stop',
            'Honk to warn any children nearby'
        ],
        correctAnswer: 1,
        explanation: 'When school zone signals are flashing, you must obey the lower school-zone speed limit.',
        category: 'Speed Limits & Distances'
    },
    {
        id: 'q67',
        question: 'A triangular red and white sign pointing downward at an intersection means:',
        options: [
            'Stop',
            'Yield',
            'Do not enter',
            'Wrong way'
        ],
        correctAnswer: 1,
        explanation: 'An inverted triangle sign indicates you must yield to cross traffic and pedestrians.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q68',
        question: 'Broken white lines on the roadway mean:',
        options: [
            'Traffic moves in opposite directions',
            'Traffic moves in the same direction and you may change lanes when safe',
            'Passing is prohibited',
            'You must stop at the line'
        ],
        correctAnswer: 1,
        explanation: 'Broken white lines separate lanes of traffic moving the same way; lane changes are allowed with caution.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q69',
        question: 'A solid white line at the edge of the roadway indicates:',
        options: [
            'The center of a two-way road',
            'A lane you may not enter',
            'The right edge of the roadway, also called the fog line',
            'A bus-only lane'
        ],
        correctAnswer: 2,
        explanation: 'A solid white edge line marks the outer edge of the roadway, helping you stay in your lane.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q70',
        question: 'On a multi-lane highway, the left lane is generally used for:',
        options: [
            'Slow-moving vehicles only',
            'Passing or faster traffic',
            'Parking',
            'Trucks only'
        ],
        correctAnswer: 1,
        explanation: 'The left lane is typically the passing lane or for faster-moving vehicles.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q71',
        question: 'Before changing lanes, you must:',
        options: [
            'Check mirrors, signal, check blind spot, then move when safe',
            'Signal and immediately move',
            'Honk your horn and move',
            'Slow to a stop and then move'
        ],
        correctAnswer: 0,
        explanation: 'Safe lane changes require mirror checks, signaling, checking blind spots, and moving only when clear.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q72',
        question: 'You are turning left at a green light. An oncoming vehicle is going straight. You should:',
        options: [
            'Turn quickly before the oncoming vehicle',
            'Turn only if the other driver slows',
            'Yield to the oncoming vehicle and turn when clear',
            'Honk and turn'
        ],
        correctAnswer: 2,
        explanation: 'Vehicles going straight through an intersection at a green light have right-of-way over left-turning traffic.',
        category: 'Rules of the Road'
    },
    {
        id: 'q73',
        question: 'You are at a T-intersection where your road ends and meets a through road. Who must yield?',
        options: [
            'The drivers on the through road',
            'The driver on the dead-end (terminating) road',
            'The vehicle on the left',
            'Whoever arrived last'
        ],
        correctAnswer: 1,
        explanation: 'At a T-intersection, the driver on the road that ends must yield to traffic on the through road.',
        category: 'Rules of the Road'
    },
    {
        id: 'q74',
        question: 'When an emergency vehicle with flashing lights and siren is approaching from behind, you must:',
        options: [
            'Maintain your speed',
            'Pull to the right and stop as soon as safe',
            'Speed up to get out of the way',
            'Stop in your lane immediately'
        ],
        correctAnswer: 1,
        explanation: 'You must pull over to the right edge of the road and stop until the emergency vehicle passes.',
        category: 'Rules of the Road'
    },
    {
        id: 'q75',
        question: 'Taking a prescription drug before driving:',
        options: [
            'Is always safe',
            'Is safe if you don’t feel drowsy',
            'Can be unsafe; many medicines affect your driving and may warn against operating vehicles',
            'Is safer than alcohol'
        ],
        correctAnswer: 2,
        explanation: 'Many prescriptions and over-the-counter drugs can impair driving; always read and follow label warnings.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q76',
        question: 'The best way to avoid driving under the influence is:',
        options: [
            'Eat a large meal before drinking',
            'Drink coffee before driving',
            'Plan ahead for a designated driver, rideshare, or not drinking if you must drive',
            'Drive slowly'
        ],
        correctAnswer: 2,
        explanation: 'Only time lowers BAC; planning ahead to avoid driving after drinking is the safe choice.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q77',
        question: 'You must wear a safety belt:',
        options: [
            'Only on highways',
            'Only if you are under 18',
            'In the front seats; many passengers are also required by law to be belted',
            'Only during bad weather'
        ],
        correctAnswer: 2,
        explanation: 'Texas law requires most drivers and passengers to use seat belts, especially in the front seat, and often in the back seat as well.',
        category: 'Rules of the Road'
    },
    {
        id: 'q78',
        question: 'A Texas learner license (instruction permit) for a teen typically allows driving:',
        options: [
            'Alone at any time',
            'Only with a licensed adult of at least 21 years old in the front seat',
            'Only to and from school',
            'Only during daylight'
        ],
        correctAnswer: 1,
        explanation: 'With a learner license, a teen must be accompanied in the front seat by a licensed adult aged 21 or older.',
        category: 'Rules of the Road'
    },
    {
        id: 'q79',
        question: 'During the first months of holding a provisional license as a teen, Texas GDL laws restrict:',
        options: [
            'Nighttime driving and the number of young passengers',
            'Highway driving only',
            'All driving after 5 p.m.',
            'Use of seat belts'
        ],
        correctAnswer: 0,
        explanation: 'Provisional licenses often limit late-night driving and passengers under a certain age, except family members.',
        category: 'Rules of the Road'
    },
    {
        id: 'q80',
        question: 'Using a wireless communication device (like a phone) while driving as a novice/teen driver:',
        options: [
            'Is allowed for texting at red lights',
            'Is allowed if using one hand',
            'Is generally prohibited, especially for texting and handheld use',
            'Is encouraged for navigation'
        ],
        correctAnswer: 2,
        explanation: 'Texas law restricts cell phone use for young drivers, particularly texting and handheld use while driving.',
        category: 'Rules of the Road'
    },
    {
        id: 'q81',
        question: 'A conviction for driving under the influence as a minor can result in:',
        options: [
            'Only a warning',
            'License suspension, fines, community service, and alcohol education requirements',
            'Only a small fine',
            'No penalties until age 21'
        ],
        correctAnswer: 1,
        explanation: 'Even minors can face serious consequences including suspension, fines, and education requirements.',
        category: 'Alcohol & Drugs'
    },
    {
        id: 'q82',
        question: 'To obtain a learner license as a teen in Texas, you must generally:',
        options: [
            'Be at least 15, enrolled in or have completed an approved driver education course, and meet documentation requirements',
            'Be 13 with parental permission',
            'Already own a car',
            'Pass the driving (road) test first'
        ],
        correctAnswer: 0,
        explanation: 'Teens usually must be at least 15, in driver education, and present required identification and school/ residency documents.',
        category: 'Rules of the Road'
    },
    {
        id: 'q83',
        question: 'When approaching a railroad crossing with no gates or lights and you see a train coming, you must stop:',
        options: [
            'At least 15 feet from the tracks',
            'Exactly on the tracks',
            'Only if the train sounds its horn',
            'Only if other cars are stopped'
        ],
        correctAnswer: 0,
        explanation: 'Stop no closer than about 15 feet from the nearest rail to keep a safe distance from passing trains.',
        category: 'Rules of the Road'
    },
    {
        id: 'q84',
        question: 'If your vehicle begins to skid on a slippery road, you should:',
        options: [
            'Brake hard and hold the pedal down',
            'Steer in the direction you want the front of the vehicle to go',
            'Steer in the opposite direction of the skid',
            'Turn off the engine immediately'
        ],
        correctAnswer: 1,
        explanation: 'Ease off the accelerator and steer in the direction you want to go, gently correcting the skid.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q85',
        question: 'To reduce the risk of hydroplaning, you should:',
        options: [
            'Increase your speed',
            'Drive on worn tires',
            'Slow down and avoid standing water',
            'Use cruise control in heavy rain'
        ],
        correctAnswer: 2,
        explanation: 'Slow down, especially in heavy rain or standing water, and make sure your tires are in good condition.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q86',
        question: 'When driving at night, you should dim your high-beam headlights when you are within about:',
        options: [
            '50 feet of another vehicle',
            '100 feet of another vehicle',
            '300 feet when following and 500 feet when approaching oncoming traffic',
            'Only in city traffic'
        ],
        correctAnswer: 2,
        explanation: 'Dim high beams when following within several hundred feet or when oncoming traffic is approaching to avoid blinding other drivers.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q87',
        question: 'If an oncoming vehicle’s bright headlights are blinding you at night, you should:',
        options: [
            'Look directly at the lights',
            'Flash your high beams constantly',
            'Look toward the right edge of your lane and keep driving safely',
            'Close your eyes briefly'
        ],
        correctAnswer: 2,
        explanation: 'Glance toward the right edge of the road to avoid glare while still monitoring your lane position.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q88',
        question: 'When backing up your vehicle, you should:',
        options: [
            'Rely only on your mirrors',
            'Turn your body and look through the rear window while backing slowly',
            'Back quickly to clear the area',
            'Only use the backup camera'
        ],
        correctAnswer: 1,
        explanation: 'Turn and look directly out the rear window, backing slowly while using mirrors as a supplement.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q89',
        question: 'If your vehicle’s right wheels run off the pavement onto the shoulder, you should:',
        options: [
            'Steer sharply back onto the road',
            'Brake hard and hold the brake',
            'Ease off the accelerator, steer straight, and gently return to the pavement when safe',
            'Immediately turn left across traffic'
        ],
        correctAnswer: 2,
        explanation: 'Regain control by slowing gradually and gently steering back onto the road when there is a clear gap.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q90',
        question: 'The safest way to re-enter traffic from the shoulder is to:',
        options: [
            'Accelerate on the shoulder and then jerk the wheel into traffic',
            'Come to a complete stop, then turn sharply',
            'Signal, check mirrors and blind spots, and merge when there is enough space',
            'Wait for other drivers to stop for you'
        ],
        correctAnswer: 2,
        explanation: 'Use your signal, check for gaps, and merge smoothly when traffic permits.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q91',
        question: 'When is it legal to drive on the left side of the roadway?',
        options: [
            'When passing another vehicle on a two-lane, two-way road where passing is permitted',
            'Anytime traffic is light',
            'Whenever you are in a hurry',
            'On curves'
        ],
        correctAnswer: 0,
        explanation: 'You may drive on the left only when passing on a two-way road with no signs or markings prohibiting passing and clear visibility.',
        category: 'Rules of the Road'
    },
    {
        id: 'q92',
        question: 'Driving too slowly can be:',
        options: [
            'Always safe',
            'As dangerous as driving too fast',
            'Only dangerous on highways',
            'Never a problem'
        ],
        correctAnswer: 1,
        explanation: 'Going much slower than traffic can create conflicts and rear-end collisions, especially on higher-speed roads.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q93',
        question: 'You must not park:',
        options: [
            'On a hill',
            'Within or blocking a driveway or in front of a public or private driveway',
            'More than one foot from the curb',
            'In a parking lot'
        ],
        correctAnswer: 1,
        explanation: 'Blocking driveways is prohibited; vehicles must not obstruct entry or exit.',
        category: 'Rules of the Road'
    },
    {
        id: 'q94',
        question: 'Parking is not allowed:',
        options: [
            'Within an intersection',
            'At a rest area',
            'In your own driveway',
            'In front of your home with hazard lights on'
        ],
        correctAnswer: 0,
        explanation: 'Parking within an intersection is illegal and unsafe.',
        category: 'Rules of the Road'
    },
    {
        id: 'q95',
        question: 'If you are involved in a minor crash with no injuries, you should:',
        options: [
            'Leave the vehicles in the lane and argue',
            'Immediately leave the scene',
            'Move vehicles out of the traffic lane if possible and exchange information',
            'Refuse to show insurance'
        ],
        correctAnswer: 2,
        explanation: 'If safe and drivable, move vehicles off the roadway and exchange names, addresses, and insurance information.',
        category: 'Rules of the Road'
    },
    {
        id: 'q96',
        question: 'If you hit an unattended vehicle and cannot find the owner, you must:',
        options: [
            'Leave without doing anything',
            'Leave a note with your name and information in a secure, visible place and report the crash if required',
            'Wait for an hour only',
            'Call a tow truck and leave'
        ],
        correctAnswer: 1,
        explanation: 'You must leave your identifying information and follow reporting requirements.',
        category: 'Rules of the Road'
    },
    {
        id: 'q97',
        question: 'It is illegal to park:',
        options: [
            'Within a crosswalk or on a sidewalk',
            'In a legal parking space at the mall',
            'Facing traffic',
            'More than 10 minutes'
        ],
        correctAnswer: 0,
        explanation: 'Parking on sidewalks or within crosswalks obstructs pedestrians and is not allowed.',
        category: 'Rules of the Road'
    },
    {
        id: 'q98',
        question: 'Children are safest:',
        options: [
            'In the front seat with the airbag on',
            'Properly secured in the back seat using appropriate child restraints',
            'Sitting on an adult’s lap',
            'With only the lap belt'
        ],
        correctAnswer: 1,
        explanation: 'Child safety seats and boosters properly installed in the back seat offer the best protection.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q99',
        question: 'When merging onto a freeway, who has the right-of-way?',
        options: [
            'Vehicles already on the freeway',
            'Vehicles on the entrance ramp',
            'The slower vehicle',
            'Whoever uses their horn first'
        ],
        correctAnswer: 0,
        explanation: 'Traffic already on the freeway has the right-of-way; merging drivers must adjust and enter when there is a safe gap.',
        category: 'Rules of the Road'
    },
    {
        id: 'q100',
        question: 'When exiting a freeway, you should:',
        options: [
            'Slow down on the main lanes before the exit ramp',
            'Move into the correct exit lane well in advance and slow only after entering the exit ramp',
            'Stop on the main lanes to look for your exit',
            'Cross several lanes at once at the last moment'
        ],
        correctAnswer: 1,
        explanation: 'Plan ahead, be in the correct lane early, and reduce speed on the deceleration lane or ramp.',
        category: 'Safe Driving Practices'
    },
    {
        id: 'q101',
        question: 'A "Do Not Enter" sign indicates:',
        options: [
            'You may proceed slowly',
            'You are about to enter a lane or roadway where traffic is coming toward you',
            'You must yield',
            'Only trucks are prohibited'
        ],
        correctAnswer: 1,
        explanation: 'This sign warns of wrong-way entry; you must not proceed past it.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q102',
        question: 'A red and white "Wrong Way" sign means:',
        options: [
            'Turn right only',
            'You are driving against traffic and must turn around immediately when safe',
            'You may back up slowly',
            'Parking is allowed'
        ],
        correctAnswer: 1,
        explanation: '"Wrong Way" means you are going in the wrong direction on that roadway.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q103',
        question: 'A yellow, diamond-shaped sign showing a curvy arrow means:',
        options: [
            'Winding road ahead',
            'One sharp curve only',
            'Slippery when wet',
            'No passing'
        ],
        correctAnswer: 0,
        explanation: 'The wavy arrow warns drivers of a series of curves ahead.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q104',
        question: 'A rectangular white sign with black letters generally indicates:',
        options: [
            'A warning',
            'A guide',
            'A regulatory rule or law',
            'A construction zone'
        ],
        correctAnswer: 2,
        explanation: 'White rectangular signs usually state laws or regulations (speed limits, lane use, etc.).',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q105',
        question: 'When you see an orange sign with black letters or symbols, it usually means:',
        options: [
            'Recreational area',
            'Construction or maintenance area ahead',
            'School zone',
            'Hospital area'
        ],
        correctAnswer: 1,
        explanation: 'Orange signs are used for temporary work zones and construction warnings.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q106',
        question: 'A yellow sign with a walking person symbol indicates:',
        options: [
            'School bus stop only',
            'Pedestrian crossing area ahead',
            'No pedestrians allowed',
            'Playground equipment'
        ],
        correctAnswer: 1,
        explanation: 'This sign warns of areas where pedestrians frequently cross.',
        category: 'Signs, Signals & Markings'
    },
    {
        id: 'q107',
        question: 'When must you use your headlights?',
        options: [
            'Only at night',
            'From just before sunset to just after sunrise, and any time visibility is poor',
            'Only in rain',
            'Only on highways'
        ],
        correctAnswer: 1,
        explanation: 'Headlights are required at night and when visibility is reduced (like fog, heavy rain, or dust).',
        category: 'Rules of the Road'
    },
    {
        id: 'q108',
        question: 'Using your horn is appropriate:',
        options: [
            'To greet a friend',
            'To show frustration',
            'To warn other road users of danger',
            'To encourage other drivers to move faster'
        ],
        correctAnswer: 2,
        explanation: 'Use the horn only to alert others to possible collisions or unsafe situations.',
        category: 'Safe Driving Practices'
    }
];
