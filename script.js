// Dark mode functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the saved theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateDarkModeButton();

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeButton();
});

// Update dark mode button text
function updateDarkModeButton() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
}

// Quiz questions organized by topic
const questions = [ 
    
        {
            question: "Science of relationships between organisms and their environments is the definition of:",
            options: ["conservation", "preservation", "environmentalism", "ecology"],
            correctAnswer: 3
        },
        {
            question: "The Trinity explosion of 1945 is taken as the beginning of the:",
            options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
            correctAnswer: 2
        },
        {
            question: "Sustainable harvest of resources falls under the category of:",
            options: ["conservation", "preservation", "environmentalism", "none of the above"],
            correctAnswer: 0
        },
        {
            question: "The quantum of human impacts can be written as:",
            options: ["I=P+A+T", "I=P×A+T", "I=P×A×T", "I=P+A×T"],
            correctAnswer: 2
        },
        {
            question: "The discipline of Demography is most closely related to:",
            options: ["Phytogeography", "Zoogeography", "Population Geography", "Economic Geography"],
            correctAnswer: 2
        },
        {
            question: "The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor. This is the statement for:",
            options: ["Liebig's law of the minimum", "Liebig's law of the maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"],
            correctAnswer: 0
        },
        {
            question: "The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance. This is the statement for:",
            options: ["Liebig's law of the minimum", "Liebig's law of the maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"],
            correctAnswer: 2
        },
        {
            question: "The regional approach to Geography was developed by:",
            options: ["Alexander von Humboldt", "Karl Ritter", "Rene Descartes", "Eratosthenes"],
            correctAnswer: 1
        },
        {
            question: "Good climate is a:",
            options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
            correctAnswer: 3
        },
        {
            question: "Scarcity of food is a:",
            options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
            correctAnswer: 2
        },
        
            {
                question: "In an undisturbed sedimentary strata, bottom layers are older than layers above them. This is known as:",
                options: ["Principle of superposition", "Principle of original horizontality", "Principle of lateral continuity", "Principle of inclusions"],
                correctAnswer: 0
            },
            {
                question: "Mount Vesuvius is an example of:",
                options: ["Shield volcano", "Composite volcano", "Caldera", "Flood basalt province"],
                correctAnswer: 1
            },
            {
                question: "Krakatoa eruption resulted in the formation of:",
                options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
                correctAnswer: 2
            },
            {
                question: "Which of these is not a method of absolute dating?",
                options: ["radioisotope dating", "thermoluminescence dating", "Inclusion study", "fission track dating"],
                correctAnswer: 2
            },
            {
                question: "Which of these is true about S waves?",
                options: ["They are longitudinal in nature", "They are transverse in nature", "They cannot move through solids, liquids and gases", "They are the first to reach the surface of the Earth"],
                correctAnswer: 1
            },
            {
                question: "Hawaiian volcanoes are an example of:",
                options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
                correctAnswer: 0
            },
            {
                question: "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as:",
                options: ["Principle of superposition", "Principle of original horizontality", "Principle of lateral continuity", "Principle of inclusions"],
                correctAnswer: 2
            },
            {
                question: "Which of these is a gas giant?",
                options: ["Mercury", "Venus", "Mars", "Saturn"],
                correctAnswer: 3
            },
            {
                question: "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as:",
                options: ["Principle of fossil succession", "Principle of original horizontality", "Principle of superposition", "Principle of cross-cutting relationships"],
                correctAnswer: 0
            },
            {
                question: "Which of these is an example of direct source of information about the Earth?",
                options: ["earthquake", "volcanic eruption", "magnetic survey", "gravity anomaly"],
                correctAnswer: 1
            },
            
                {
                    question: "The points where three or more cirques meet is the definition of:",
                    options: ["cirque", "arete", "horn", "hanging valley"],
                    correctAnswer: 2
                },
                {
                    question: "Which of these is an example of endogenic process?",
                    options: ["weathering", "mass movement", "erosion", "folding"],
                    correctAnswer: 3
                },
                {
                    question: "Sandstone is an example of:",
                    options: ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
                    correctAnswer: 0
                },
                {
                    question: "Smooth oval-shaped ridge-like features comprised of glacial till, gravel and sand arranged parallel to the direction of ice movement is the definition of:",
                    options: ["glacial till", "outwash deposit", "esker", "drumlin"],
                    correctAnswer: 3
                },
                {
                    question: "Which of these is an example of exogenic process?",
                    options: ["volcanism", "earthquake", "plate tectonics", "deposition"],
                    correctAnswer: 3
                },
                {
                    question: "White or colourless hard mineral virtually insoluble in water is a description of:",
                    options: ["amphiboles", "quartz", "feldspar", "pyroxene"],
                    correctAnswer: 1
                },
                {
                    question: "Dolomite is an example of:",
                    options: ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
                    correctAnswer: 1
                },
                {
                    question: "Green or black coloured inosilicate minerals forming prism or needle-like crystals is a description of:",
                    options: ["amphiboles", "feldspar", "mica", "pyroxene"],
                    correctAnswer: 0
                },
                {
                    question: "Deep, long and wide troughs or basins with very steep concave to vertically dropping high walls as its head and sides is the definition of:",
                    options: ["cirque", "arete", "horn", "hanging valley"],
                    correctAnswer: 0
                },
                {
                    question: "Magnesium iron silicate; a primary component of the Earth's upper mantle is a description of:",
                    options: ["amphiboles", "feldspar", "quartz", "olivine"],
                    correctAnswer: 3
                },
                {
                    question: "Which of these air masses is generally cool and moist?",
                    options: ["cP", "cT", "mP", "mT"],
                    correctAnswer: 2
                },
                {
                    question: "Which of these air masses is generally cold and dry?",
                    options: ["cP", "cT", "mP", "mT"],
                    correctAnswer: 0
                },
                {
                    question: "The ISS orbits in which layer?",
                    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                    correctAnswer: 3
                },
                {
                    question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called:",
                    options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
                    correctAnswer: 1
                },
                {
                    question: "Surplus seed and sperm banking is an adaptation option to facilitate:",
                    options: ["resistance to climate changes", "resilience to climate changes", "response to climate changes", "none of these"],
                    correctAnswer: 1
                },
                {
                    question: "The classical period for taking averages for climate is:",
                    options: ["10 years", "20 years", "30 years", "40 years"],
                    correctAnswer: 2
                },
                {
                    question: "Noctilucent clouds are present in which layer?",
                    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                    correctAnswer: 2
                },
                {
                    question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called:",
                    options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is home to the ozone layer?",
                    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                    correctAnswer: 1
                },
                {
                    question: "Most of the weather phenomena occur in:",
                    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                    correctAnswer: 0
                },
                {
                    question: "Equal density curves are called:",
                    options: ["isopycnal curves", "isohaline curves", "isotherm curves", "isobuoyant curves"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is a minor feature of the ocean floor?",
                    options: ["continental shelf", "continental slope", "guyot", "abyssal plain"],
                    correctAnswer: 2
                },
                {
                    question: "Mountains with pointed summits rising from the sea floor, but not reaching the surface of the ocean is a description of:",
                    options: ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
                    correctAnswer: 2
                },
                {
                    question: "Which of these is the largest habitat on the Earth?",
                    options: ["continental shelf", "continental slope", "guyot", "abyssal plain"],
                    correctAnswer: 3
                },
                {
                    question: "Which of these are the largest mountain ranges on Earth?",
                    options: ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
                    correctAnswer: 1
                },
                {
                    question: "Deep valleys, often cutting across continental shelves and slopes is a description of:",
                    options: ["oceanic deep / trench", "mid-oceanic ridge", "guyot", "submarine canyon"],
                    correctAnswer: 3
                },
                {
                    question: "Continental slope has a gradient of:",
                    options: ["0-1 degree", "1-2 degree", "2-5 degree", "5-10 degree"],
                    correctAnswer: 2
                },
                {
                    question: "Which of these is not a prominent tidal pattern?",
                    options: ["diurnal", "mixed diurnal", "semidiurnal", "mixed semidiurnal"],
                    correctAnswer: 1
                },
                {
                    question: "Relatively steep-sided, narrow, deep basins is a description of:",
                    options: ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
                    correctAnswer: 0
                },
                {
                    question: "In the sea, a layer where the temperature decreases rapidly from the mixed upper layer to the cold deeper layer is called:",
                    options: ["isopycnal", "thermophil", "thermohaline", "thermocline"],
                    correctAnswer: 3
                },
                {
                    question: "In Koeppen classification, which is hot summer temperature?",
                    options: ["h", "k", "a", "b"],
                    correctAnswer: 2
                },
                {
                    question: "In Koeppen classification, which is desert precipitation?",
                    options: ["W", "S", "f", "s"],
                    correctAnswer: 0
                },
                {
                    question: "India's location is:",
                    options: ["Equatorial in South, Tropical in North", "Tropical in South, Equatorial in North", "Tropical in South, Sub-tropical in North", "Sub-tropical in South, Tropical in North"],
                    correctAnswer: 2
                },
                {
                    question: "In Koeppen classification, which is cold arid temperature?",
                    options: ["h", "k", "a", "b"],
                    correctAnswer: 1
                },
                {
                    question: "In Koeppen classification, which is winter dry precipitation?",
                    options: ["w", "S", "f", "s"],
                    correctAnswer: 0
                },
                {
                    question: "In Koeppen classification, which is cool summer temperature?",
                    options: ["c", "d", "F", "T"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is the correct sequence of seasons in India?",
                    options: ["Hot weather season → Retreating monsoon season → South-West monsoon season → Cold weather season", 
                              "Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season",
                              "Hot weather season → Cold weather season → South-West monsoon season → Retreating monsoon season",
                              "Hot weather season → South-West monsoon season → Cold weather season → Retreating monsoon season"],
                    correctAnswer: 1
                },
                {
                    question: "In Koeppen classification, which is monsoonal precipitation?",
                    options: ["W", "S", "m", "s"],
                    correctAnswer: 2
                },
                {
                    question: "Physiography is the outcome of:",
                    options: ["structure", "process", "stage of development", "all of these"],
                    correctAnswer: 3
                },
                {
                    question: "In Koeppen classification, which is equatorial climate?",
                    options: ["A", "B", "C", "D"],
                    correctAnswer: 0
                },

                {
                    question: "Soil formation is dependent upon:",
                    options: ["vegetation", "time", "climate", "all of the above"],
                    correctAnswer: 3
                },
                {
                    question: "Which of these is not a characteristic of pioneer species:",
                    options: ["ability to grow on bare rocks", "ability to tolerate extreme temperatures", "large size", "short life span"],
                    correctAnswer: 2
                },
                {
                    question: "Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups is a definition of:",
                    options: ["cells", "species", "ecosystems", "biomes"],
                    correctAnswer: 1
                },
                {
                    question: "Mechanical action of ocean waves is an example of:",
                    options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
                    correctAnswer: 1
                },
                {
                    question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of:",
                    options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
                    correctAnswer: 2
                },
                {
                    question: "Carbonation is an example of:",
                    options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
                    correctAnswer: 0
                },
                {
                    question: "In soil profile, C refers to:",
                    options: ["organic surface layer", "topsoil layer", "subsoil layer", "substratum layer"],
                    correctAnswer: 3
                },
                {
                    question: "A climax caused by wildfires is an example of:",
                    options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
                    correctAnswer: 3
                },
                {
                    question: "Regur is a term for:",
                    options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
                    correctAnswer: 0
                },
                {
                    question: "The diversity that exists among different geographies is called:",
                    options: ["alpha (α) biodiversity", "beta (β) biodiversity", "gamma (γ) biodiversity", "delta (δ) biodiversity"],
                    correctAnswer: 2
                },
                {
                    question: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of:",
                    options: ["least concern species", "keystone species", "flagship species", "extinct species"],
                    correctAnswer: 1
                },
                {
                    question: "The subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce is the definition of:",
                    options: ["habitat", "ecosystem", "biome", "biosphere"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these correctly represents the process of habitat fragmentation and loss?",
                    options: [
                        "Original forest → Dissection → Perforation → Fragmentation → Attrition",
                        "Original forest → Dissection → Attrition → Fragmentation → Perforation",
                        "Original forest → Dissection → Perforation → Attrition → Fragmentation",
                        "Original forest → Dissection → Fragmentation → Perforation → Attrition"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Soil formation is an example of:",
                    options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
                    correctAnswer: 2
                },
                {
                    question: "Biological control of pest populations is an example of:",
                    options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
                    correctAnswer: 1
                },
                {
                    question: "The acronym HIPPO does not include:",
                    options: ["habitat loss", "invasive species", "pollination", "pollution"],
                    correctAnswer: 2
                },
                {
                    question: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as:",
                    options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
                    correctAnswer: 3
                },
                {
                    question: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as:",
                    options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
                    correctAnswer: 2
                },
                {
                    question: "Captive breeding is an example of:",
                    options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
                    correctAnswer: 1
                },
                {
                    question: "We prefer those areas for the creation of a conservation reserve where the level of threat is:",
                    options: ["very high", "medium", "very low", "non-existent"],
                    correctAnswer: 2
                },
                {
                    question: "According to Malthusian model:",
                    options: [
                        "Population grows in geometric progression, food supply increases in arithmetic progression",
                        "Population grows in geometric progression, food supply increases in geometric progression",
                        "Population grows in arithmetic progression, food supply increases in arithmetic progression",
                        "Population grows in arithmetic progression, food supply increases in geometric progression"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is commonly observed during humanising of nature?",
                    options: ["environmental determinism", "possibilism", "neodeterminism", "stop and go determinism"],
                    correctAnswer: 1
                },
                {
                    question: "Which of these is a pillar of sustainability:",
                    options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is commonly observed in primitive societies?",
                    options: ["environmental determinism", "possibilism", "neodeterminism", "stop and go determinism"],
                    correctAnswer: 0
                },
                {
                    question: "The demographic transition sees a society move from:",
                    options: [
                        "high birth rate, low death rate to low birth rate, high death rate",
                        "low birth rate, high death rate to low birth rate, low death rate",
                        "high birth rate, high death rate to low birth rate, low death rate",
                        "high birth rate, high death rate to low birth rate, high death rate"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "The logistic growth equation curve is:",
                    options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
                    correctAnswer: 2
                },
                {
                    question: "Which of these is a preventive check according to Malthus?",
                    options: ["foresight", "vice", "misery", "flood"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is not a pillar of sustainability?",
                    options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"],
                    correctAnswer: 2
                },
                {
                    question: "The book 'An Essay on the Principle of Population' was written by:",
                    options: ["Darwin", "Malthus", "Spencer", "Owens"],
                    correctAnswer: 1
                },
                {
                    question: "Which of these is a positive check according to Malthus?",
                    options: ["late marriage", "war", "celibacy", "moral restraint"],
                    correctAnswer: 1
                },
                {
                    question: "Hydrogen for nuclear fusion comes under the category of:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 3
                },
                {
                    question: "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
                    options: ["animal manure", "mineral fertiliser", "crops and their decomposition", "human waste"],
                    correctAnswer: 0
                },
                {
                    question: "The part of actual resources that can be developed profitably in the future is a definition of:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 2
                },
                {
                    question: "Timber from forests that is being harvested can be categorised under:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 1
                },
                {
                    question: "Rain gardens are primarily meant to:",
                    options: ["reduce water usage", "increase recharge to groundwater", "protect existing water sources", "increase water flow to streams"],
                    correctAnswer: 1
                },
                {
                    question: "Oil that has not been drilled can be categorised under:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is the largest source of nitrogen oxides in the atmosphere?",
                    options: ["electricity generation", "mobile sources", "industrial processes", "waste disposal"],
                    correctAnswer: 1
                },
                {
                    question: "Those resources that are currently being used after surveying, quantification and qualification is a definition of:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 1
                },
                {
                    question: "Those resources that may be used in the future is a definition of:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 0
                },
                {
                    question: "Low concentration ores come in the category of:",
                    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
                    correctAnswer: 3
                }
                {
                    question: "New Delhi can best be categorised as:",
                    options: ["administrative town", "industrial town", "transport town", "commercial town"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is a factor governing barrier effect of roads?",
                    options: ["traffic intensity", "speed of vehicles", "driver sensitivity", "all of these"],
                    correctAnswer: 3
                },
                {
                    question: "Which of these is a factor governing barrier effect of roads?",
                    options: ["presence and location of animal crossings", "movement pattern of species", "species specific preference of road use", "all of these"],
                    correctAnswer: 3
                },
                {
                    question: "Varanasi can best be categorised as:",
                    options: ["mining town", "garrison town", "educational town", "religious town"],
                    correctAnswer: 3
                },
                {
                    question: "\"The ability to produce a good using fewer inputs than another producer\" is:",
                    options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
                    correctAnswer: 1
                },
                {
                    question: "\"The price of a good that prevails in the world market for that good\" is the definition of:",
                    options: ["export price", "import price", "world price", "domestic price"],
                    correctAnswer: 2
                },
                {
                    question: "Visakhapatnam can best be categorised as:",
                    options: ["administrative town", "industrial town", "transport town", "commercial town"],
                    correctAnswer: 2
                },
                {
                    question: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
                    options: ["land bridges", "canopy bridges", "glider poles", "all of these"],
                    correctAnswer: 3
                },
                {
                    question: "Bhilai can best be categorised as:",
                    options: ["administrative town", "industrial town", "transport town", "commercial town"],
                    correctAnswer: 1
                },
                {
                    question: "\"The ability to produce a good at a lower opportunity cost than another producer\" is a definition of:",
                    options: ["real advantage", "monetary advantage", "comparative advantage", "opportunity advantage"],
                    correctAnswer: 2
                }
                
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;
const AUTO_NEXT_DELAY = 1000 ; // 2 seconds delay

// DOM elements
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const resultsContainer = document.getElementById('results');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

// Initialize quiz
function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Display current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    canAnswer = true;
    
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    feedbackElement.className = 'hidden';
    nextButton.className = 'hidden';
    
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

// Check selected answer
function checkAnswer(selectedIndex) {
    if (!canAnswer) return;
    canAnswer = false;

    const currentQuestion = questions[currentQuestionIndex];
    const options = optionsContainer.children;
    const selectedOption = options[selectedIndex];
    
    // Remove any previous selected state
    Array.from(options).forEach(option => option.classList.remove('selected'));
    selectedOption.classList.add('selected');

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        selectedOption.classList.add('correct');
        feedbackElement.textContent = 'Correct!';
        feedbackElement.className = 'correct';
    } else {
        selectedOption.classList.add('incorrect');
        options[currentQuestion.correctAnswer].classList.add('correct');
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.className = 'incorrect';
    }

    feedbackElement.classList.remove('hidden');
    
    // Automatically move to next question after delay
    if (currentQuestionIndex < questions.length - 1) {
        setTimeout(nextQuestion, AUTO_NEXT_DELAY);
    } else {
        setTimeout(showResults, AUTO_NEXT_DELAY);
    }
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show final results
function showResults() {
    document.getElementById('quiz').classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', () => {
    document.getElementById('quiz').classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    initializeQuiz();
});

// Start the quiz
initializeQuiz(); 