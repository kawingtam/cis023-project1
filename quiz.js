const questions = [
  {
    number: 1,
    question: "Who was the first American-born president?",
    options: ["George Washington", "Thomas Jefferson", "Martin Van Buren", "John Adams"],
    answer: "Martin Van Buren",
    explanation: "Van Buren was the first president to have been born after the American Revolution, in Kinderhook, New York on December 5, 1782, technically making him the first American-born president. The seven before him were all born in the American colonies."
  },
  {
    number: 2,
    question: "Which president made Christmas a national holiday?",
    options: ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "James Garfield"],
    answer: "Ulysses S. Grant",
    explanation: "On June 28,1870, Grant signed legislation making Christmas a federal holiday, as well as New Year’s Day, Independence Day, and Thanksgiving Day. Grant hoped Christmas and the other holidays would help bond people in the North and South through shared celebrations."
  },
  {
    number: 3,
    question: "“Old Whitey” was the beloved horse of which president?",
    options: ["Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan"],
    answer: "Zachary Taylor",
    explanation: "Old Whitey was nearly as popular as Taylor was—several times while the steed was grazing on the White House lawn, visitors would approach him and pluck a hair from his tail for a souvenir."
  },
  {
    number: 4,
    question: "Which president was a classically trained pianist and played 4 other instruments?",
    options: ["Richard Nixon", "Gerald Ford", "Ronald Reagan", "Jimmy Carter"],
    answer: "Richard Nixon",
    explanation: "Nixon’s mother encouraged him to play piano at an early age and he went on to learn violin, clarinet, saxophone, and accordion. In 1963, his musical talent became a political asset when he performed a song he wrote on “The Jack Paar Program,” which helped to repair his image after losing the California gubernatorial election the year prior."
  },
  {
    number: 5,
    question: "Who was the first and only U.S. president to serve non-consecutive terms?",
    options: ["Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt"],
    answer: "Grover Cleveland",
    explanation: "Between terms, Cleveland moved back to New York City, worked at a law firm, and his wife gave birth to their famous first daughter, Baby Ruth."
  },
  {
    number: 6,
    question: "Which president signed the act creating the United States Marine Band?",
    options: ["Thomas Jefferson", "John Adams", "James Madison", "Andrew Jackson"],
    answer: "John Adams",
    explanation: "Adams signed a congressional act creating the United States Marine Band in 1798, which is now the oldest active professional musical organization in the United States. Known as “The President’s Own,” they played the first ever New Year’s celebration at the president’s house and later at Thomas Jefferson’s inauguration."
  },
  {
    number: 7,
    question: "Which president and his wife attended Napoleon’s coronation at Notre Dame Cathedral?",
    options: ["James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson"],
    answer: "James Monroe",
    explanation: "In 1804, Monroe and his wife, Elizabeth, attended Napoleon’s coronation while he was serving as the American ambassador to Britain and France."
  },
  {
    number: 8,
    question: "Who was the first president to have written a biography of another president?",
    options: ["Abraham Lincoln", "Herbert Hoover", "Franklin D. Roosevelt", "Woodrow Wilson"],
    answer: "Herbert Hoover",
    explanation: "After he left office, Hoover wrote a number of books, including The Ordeal of Woodrow Wilson, the first biography of a president written by another president. Woodrow Wilson had published a biography about George Washington in 1897, but that was before Wilson became president in 1913."
  },
  {
    number: 9,
    question: "Which president had turned down offers to play professional football?",
    options: ["Dwight D. Eisenhower", "Gerald Ford", "Ronald Reagan", "George H. W. Bush"],
    answer: "Gerald Ford",
    explanation: "Ford attended the University of Michigan, where he was a star football player. The team won national titles in both 1932 and 1933. After graduation, he turned down offers to play with both the Detroit Lions and Green Bay Packers. Instead, he took a coaching job at Yale University in 1935 because he also wanted to attend law school. He left after six seasons with a law degree in hand."
  },
  {
    number: 10,
    question: "Who was the first president to attend baseball’s opening day and throw the ceremonial first pitch?",
    options: ["Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Franklin D. Roosevelt"],
    answer: "William Howard Taft",
    explanation: "In 1910, Taft became the first president to attend baseball’s opening day and throw the ceremonial first pitch, a tradition that has been honored by nearly every president since."
  },
  {
    number: 11,
    question: "Which president and his wife received a Siamese cat as a gift from the American consul of Bangkok?",
    options: ["Rutherford B. Hayes", "Grover Cleveland", "Benjamin Harrison", "William McKinley"],
    answer: "Rutherford B. Hayes",
    explanation: "The first Siamese cat to arrive in America was sent as a gift to Hayes and his wife, Lucy, by the American consul in Bangkok. Siam the cat landed at the White House in 1879 after traveling to Hong Kong then San Francisco, and then by train to Washington, DC."
  },
  {
    number: 12,
    question: "Which president was often mocked in the press for his unkempt appearance?",
    options: ["Andrew Johnson", "Abraham Lincoln", "Andrew Jackson", "Ulysses S. Grant"],
    answer: "Abraham Lincoln",
    explanation: "Before being known as the Great Emancipator, Lincoln was known for his disheveled appearance. Newspapers often ridiculed him for it; some called him “hatchet-faced” and described him as lean and gangly. One newspaper referred to his “thatch of wild republican hair” with his “irregular flocks of thick hair carelessly brushed” across his face."
  },
  {
    number: 13,
    question: "Which president hired Louis C. Tiffany—first design director of Tiffany and Co.—for a massive renovation of the White House and its private chambers?",
    options: ["Grover Cleveland", "Chester A. Arthur", "Benjamin Harrison", "James A. Garfield"],
    answer: "Chester A. Arthur",
    explanation: "Arthur hired Tiffany to do all of the redesign. To help cover some of the cost, Arthur had 24 wagon-loads of old furniture, drapes, and other household items (some of which dated back to the Adams administration) sold at auction."
  },
  {
    number: 14,
    question: "Though three presidents (Adams, Jefferson, and Monroe) died on the 4th of July, which president was the only president to have been born on that date?",
    options: ["George Washington", "Thomas Jefferson", "James Madison", "Calvin Coolidge"],
    answer: "Calvin Coolidge",
    explanation: "Coolidge was born on July 4, 1872 in Plymouth Notch, Vermont and is the only president to be born on Independence Day."
  },
  {
    number: 15,
    question: "Which president and his wife met in the fifth grade, were high school sweethearts, but did not marry until their mid-thirties?",
    options: ["Harry S. Truman", "Dwight D. Eisenhower", "Lyndon B. Johnson", "John F. Kennedy"],
    answer: "Harry S. Truman",
    explanation: "On June 28, 1919, Truman married Elizabeth Virginia Wallace, known as Bess, in Independence, Missouri, the town they both lived much of their lives."
  },
  {
    number: 16,
    question: "Which president hated his painted portrait so much that he eventually burned it?",
    options: ["Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G. Harding"],
    answer: "Theodore Roosevelt",
    explanation: "For his official White House portrait, Theodore Roosevelt chose the famed French portraiture artist Theobald Chartran, who had earlier done portraits of the First Lady Edith Roosevelt and Alice Roosevelt. “It was difficult to get the president to sit still,” newspapers reported Chartran said before the painting was unveiled and displayed in France in 1903. “I never had a more restless or more charming sitter.” Roosevelt, however, hated the painting, and after hiding it in a dark hall of the White House for years, he eventually burned it."
  },
  {
    number: 17,
    question: "Which president put up the first Christmas tree in the White House?",
    options: ["Franklin Pierce", "James Buchanan", "Andrew Johnson", "Benjamin Harrison"],
    answer: "Benjamin Harrison",
    explanation: "Harrison had a tight-knit family and loved to amuse and dote on his grandchildren. He put up the first White House Christmas tree in 1889, and was known to put on the Santa suit for entertainment."
  },
  {
    number: 18,
    question: "Which president donated all of his presidential salary (and his congressional salary before that) to charity?",
    options: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "John F. Kennedy"],
    answer: "John F. Kennedy",
    explanation: "Born into wealth and prestige, JFK was one of the richest men to take office. He lived off the Kennedy family’s considerable trusts, so he donated his congressional salary and later his presidential salary to charities like the United Negro College Fund and Boy Scouts and Girl Scouts of America. President Herbert Hoover had also donated his presidential salary during his term in office (1929-1933)."
  },
  {
    number: 19,
    question: "Which president and his wife hold the record for longest married first couple?",
    options: ["Ronald Reagan", "George H. W. Bush", "Bill Clinton", "Jimmy Carter"],
    answer: "Jimmy Carter",
    explanation: "Jimmy Carter married Rosalynn Smith on July 7, 1946, in their hometown of Plains, Georgia. The Carters 74-year marriage makes them the longest married of any first couple. The record was previously held by George H.W. Bush and his wife Barbara, who were married for 73 years and died within months of each other in 2018. The third-longest presidential marriage was that of John and Abigail Adams at 54 years."
  },
  {
    number: 20,
    question: "Who was the first president to ride in a car to his inauguration?",
    options: ["William McKinley", "Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge"],
    answer: "Warren G. Harding",
    explanation: "On March 4, 1921, Harding became the first president to ride to and from his inauguration in an automobile."
  }
];
// Get name from local storage
const name = localStorage.getItem('quizUserName');

// Define numberOfQuestions
const numberOfQuestions = 5; // Change this to the desired number of questions

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the questions array
shuffleArray(questions);

// Select a subset of shuffled questions
const selectedQuestions = questions.slice(0, numberOfQuestions);

const questionsPerPage = 1; // Number of questions per quiz page
const maxQuestions = numberOfQuestions; // Maximum number of questions for the quiz
let currentQuestionIndex = 0;
let score = 0;

const questionDiv = document.getElementById('question');
const optionsForm = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
  if (currentQuestionIndex < maxQuestions) {
      const currentQuestion = selectedQuestions[currentQuestionIndex];
      questionDiv.textContent = `Question ${currentQuestionIndex + 1} of ${maxQuestions}: ${currentQuestion.question}`;
      optionsForm.innerHTML = '';

      // Display options
      currentQuestion.options.forEach((option, index) => {
          const optionInput = document.createElement('input');
          optionInput.type = 'radio';
          optionInput.name = 'option';
          optionInput.value = index;
          optionInput.id = `option_${index}`;

          const optionLabel = document.createElement('label');
          optionLabel.htmlFor = `option_${index}`;
          optionLabel.textContent = option;

          const optionWrapper = document.createElement('div');
          optionWrapper.appendChild(optionInput);
          optionWrapper.appendChild(optionLabel);

          optionsForm.appendChild(optionWrapper);
      });

      // Show previous button if not the first question
      if (currentQuestionIndex > 0) {
        previousBtn.style.display = 'block';
      } else {
        previousBtn.style.display = 'none'; // Hide previous button if it's the first question
      }
  } else {
      // If the maximum number of questions is reached, redirect to result page
      redirectToResultPage();
  }
}


// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
  if (currentQuestionIndex < maxQuestions) {
      const currentQuestion = selectedQuestions[currentQuestionIndex];
      questionDiv.textContent = `Question ${currentQuestionIndex + 1} of ${maxQuestions}: ${currentQuestion.question}`;
      optionsForm.innerHTML = '';

      // Display options
      currentQuestion.options.forEach((option, index) => {
          const optionInput = document.createElement('input');
          optionInput.type = 'radio';
          optionInput.name = 'option';
          optionInput.value = index;
          optionInput.id = `option_${index}`;

          const optionLabel = document.createElement('label');
          optionLabel.htmlFor = `option_${index}`;
          optionLabel.textContent = option;

          const optionWrapper = document.createElement('div');
          optionWrapper.appendChild(optionInput);
          optionWrapper.appendChild(optionLabel);

          optionsForm.appendChild(optionWrapper);
      });
  } else {
      // If the maximum number of questions is reached, redirect to result page
      redirectToResultPage();
  }
}

// Function to handle answer submission
submitBtn.addEventListener('click', () => submitAnswer());

function submitAnswer() {
  const selectedOptionIndex = parseInt(document.querySelector('input[name="option"]:checked').value);
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  // Store the user's selected answer index in the question object
  currentQuestion.userAnswerIndex = selectedOptionIndex;

  // Compare the selected option with the correct answer
  if (currentQuestion.options[selectedOptionIndex] === currentQuestion.answer) {
      score++;
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if the maximum number of questions is reached
  if (currentQuestionIndex < maxQuestions) {
    // If not, load the next question
    loadQuestion();
  } else {
    // If so, hide submit button and display next button
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'block';
  }
}



// Function to handle moving to the next question
nextBtn.addEventListener('click', () => {
  // Reset options form
  optionsForm.reset();

  // Load next question
  loadQuestion();

  // Hide next button and display submit button
  nextBtn.style.display = 'none';
  submitBtn.style.display = 'block';
});

function redirectToResultPage() {
  // Redirect to result page with name, score, and questions parameters
  window.location.href = `result.html?name=${encodeURIComponent(name)}&score=${score}&questions=${encodeURIComponent(JSON.stringify(selectedQuestions))}`;
}