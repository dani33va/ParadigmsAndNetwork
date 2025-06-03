export const codeSections = {
  // Caesar Cipher
  CaesarCipher: {
    Python: [
        {
        explanation: "Procedural programming is a paradigm centered around organizing code as a sequence of procedures (functions or subroutines) that execute in a step-by-step manner.",
        codeLines: []
      },
      {
        explanation: "In this case, as the code is quite simple, the entire program revolves around a single function, caesar(), which handles both encoding and decoding.",
        codeLines: [[3],[26,30]]
      },
      {
        explanation: "The code is imperative in nature, following a step-by-step flow. Each step is explicit, with no hidden logic. We can see it first adjust the shift (if decoding), normalizes k, and then constructs and applies the translation.",
        codeLines: [[4,9],[19,23]]
      },
      {
        explanation: "As is common and good practice in his paradigm there is no shared state, data gets passed as arguments (s, k, decode), without any global variable. Local variables such as uppercase_shifted or translation_table are not accessible from outside the function.",
        codeLines: [[26,30]]
      }
    ],
    Java: [
          {
        explanation: "Object-Oriented Programming (OOP) is a paradigm that structures code around objects, instances of classes that bundle data (attributes) and behavior (methods) into a single entity.",
        codeLines: []
      },
      {
        explanation: "For this application, two classes are used, Main, the entry point for the application and CaesarCipher, in charge on encapsulating cypher logic",
        codeLines: [[4],[18],[21],[52]]
      },
      {
        explanation: "We can see a clear example of encapsulation in CaesarCipher, as you can only interact with this class objects through the public methodes encode() and decode() and are given read access to the state through getShift(). ",
        codeLines: [[22],[31],[44],[49]]
      },
      {
        explanation: "The class also provides a layer of abstraction, the Main does not need to know how encoding or decoding works, it just needs to call the methods encode() or decode().",
        codeLines: [[11,12],[31,42]]
      },
      {
        explanation: "This organization of the code allows for a possible future implementation of other cyphers through inheritance or the creation of an interface, allowing for more flexibility of the code, changing cyphers without implementing serious modifications for the main code.",
        codeLines: []
      },
    ],
    FSharp: [
      {
        explanation: "Functional programming is a style of coding that focuses on using pure functions (which always give the same output for the same input) and avoids changing data or state.",
        codeLines: []
      },
      {
        explanation: "The code is built around pure functions with no side effects. Functions such as shiftChar takes a character and shift amount, and returns transformed character. cipher applies shiftChar to each character in a string.",
        codeLines: [[4,8],]
      },
      {
        explanation: "All data is immutable, as input strings are never modified, with each transformation creating new strings. There are not any mutable variables or states.",
        codeLines: [[29,31], [6,7]]
      },
      {
        explanation: "Function composition can be clearly seen as small, focused functions get combined enabling more complex behaviour (shiftChar → cipher → encrypt/decrypt → performCipher)",
        codeLines: [[13],[10,11],[4,8]]
      },
      {
        explanation: "Higher order functions can be seen for example as String.map applies shiftChar to each character.",
        codeLines: [[11]]
      },
      {
        explanation: "The impure part of the code is contained into Program.run, where printfn (I/O) is used.",
        codeLines: [[25],[37,42]]
      },
    ],
    Prolog: [
      {
        explanation: "The logic paradigm in programming is a declarative approach where programs are expressed as a set of logical rules and facts, and computation proceeds by deriving answers to queries based on logical inference.",
        codeLines: []
      },
      {
        explanation: 'The program is built around predicates that declare relationships between inputs and outputs. Unlike functions, these predicates do not "return" values, they succeed or fail based on whether the relation holds.',
        codeLines: [[18,26]]
      },
      {
        explanation: "There are no loops, iteration is implicit through functions such as maplist.",
        codeLines: [[6],[11]]
      },
    ],
  },
  
  // Bulls and Cows
  BullsAndCows: {
    Python: [
      {
        explanation: "Procedural programming is a paradigm centered around organizing code as a sequence of procedures (functions or subroutines) that execute in a step-by-step manner.",
        codeLines: []
      },
      {
        explanation: "This code is clearly function centric:\ngenerate_random_number() → Creates the target number with unique digits.\nget_valid_guess() → Handles user input and validation.\ncount_bulls_and_cows() → Computes the game’s feedback (Bulls/Cows).\nplay_game() → Orchestrates the main game loop.\nEach method has a clear single responsibility, breaking the more complex problem into small components.",
        codeLines: [[3],[8],[16],[26]]
      },
      {
        explanation: "The program starts its execution in the last line of the code, calling the play game function, that calls each one of the other functions as needed. These functions do not rely on shared state (e.g., global variables). Instead, they communicate strictly through parameters and return values, for example, size is provided as parameter for generate_random_number() and the sequence of digits is returned. Procedures use local variables instead, where they store information relevant for the function itself, such as digits in generate_random_number() or guesses in play_game().",
        codeLines: [[16,23]]
      },
    ],
    Java:[
     {
        explanation: "Object-Oriented Programming (OOP) is a paradigm that structures code around objects—instances of classes that bundle data (attributes) and behavior (methods) into a single entity.",
        codeLines: []
      },
      {
        explanation: "The program is organized around classes, each representing a distinct entity with its own state and behavior:\nBullsAndCowsGame: Entry point that creates and starts the Game.\nNumberGenerator: Handles random number generation (a reusable utility).\nGame: Manages the game’s core logic (target number, guesses, and evaluation).\nGuessResult: A lightweight object encapsulating the outcome of a guess (Bulls/Cows).\nEach class has a single responsibility and manages its own state without exposing any unneeded information to other classes.",
        codeLines: [[3],[8],[14],[76],[78],[98],[103],[122]]
      },
      {
        explanation: "Encapsulation is achieved, for example in the class Game, by hiding its internal state (targetNumber, guesses, input) as private fields, and not allowing other methods to access it. The only access it leaves is for other methods to call the constructor, that generates a new instance of the class (a new game) or the method play(), that initiates the logic and procedures behind the game.",
        codeLines: [[15,17],[19],[25],[45],[59]]
      },
     {
        explanation: "Abstraction, another objective of OOP,  is clear in classes like NumberGenerator, as other classes don’t need to know how numbers are generated, they just call generateRandomNumber()",
        codeLines: [[19,23]]
      },
    ],
    FSharp:[
      {
        explanation: "Functional programming is a style of coding that focuses on using pure functions (which always give the same output for the same input) and avoids changing data or state.",
        codeLines: []
      },
      {
        explanation: "Most functions in the code are pure, meaning that they depend only on their inputs (no hidden state) and they do not modify the external state. An example for it is countScore, where you introduce the guess the user made and it returns the number of bulls and cows. Given the same guess, it will always return the same score.",
        codeLines: [[25,29]]
      },
      {
        explanation: "ReadImput for example (by need) is a non-pure function, as it is not deterministic, as the output depends on the user and it also interacts with the “outside world” by printing information in the console.",
        codeLines: [[45,51]]
      },
      {
        explanation: "Another important aspect of functional programming is immutability. All data (target, guess, intermediate lists) is never modified after creation. lineToList converts a string into a new list rather than modifying the original.",
        codeLines: [[32,36]]
      },
        {
        explanation: "Recursion is generally recommended instead of using loops in this paradigm. That is why gameLoop uses recursion to repeat the game logic until the player wins.",
        codeLines: [[52,62]]
      },
        {
        explanation: "We can also see an example of a higher-order function in the use of List.sumBy as it is taking a mapping function that transforms every element of the list to a integer as an argument. In this case this is used for transforming the input into 0 or 1 to count if they are part of the target.",
        codeLines: [[23]]
      },

    ],
    Prolog:[
      {
        explanation: "The logic paradigm in programming is a declarative approach where programs are expressed as a set of logical rules and facts, and computation proceeds by deriving answers to queries based on logical inference.",
        codeLines: []
      },
      {
        explanation: "In this paradigm, the code is entirely built around predicates, they check if conditions are met for it being true. study(Solution, Guess, Bulls, Cows) :- for example is  logical statement that holds true when conditions are met.",
        codeLines: [[37,56]]
      },
      {
        explanation: "It is declarative in nature, it just declares constraints, and lets the engine solve them. choose(Solution) constrains digits from 1 to 9 (Max is Digits + 1) and enforces uniqueness (all_distinct(Solution)).",
        codeLines: [[29,35]]
      },
      {
        explanation: "The control of flow is implicit, all conditions must hold true for the predicate to succeed. Backtracking is also implemented. For example, the repeat in find solution, forces backtracking to that point until all conditions are met.",
        codeLines: [[29,35]]
      },

    ]

  },
  
  
  Maze_Generation: {
    Python: [
      {
        explanation: "Procedural programming is a paradigm centered around organizing code as a sequence of procedures (functions or subroutines) that execute in a step-by-step manner.In this code there are two functions, make_maze(w, h) the main function that generates and returns the maze and walk(x, y), a nested helper that implements depth-first search (DFS) to carve paths. Each function handles a specific sub-task, typical of procedural decomposition.",
        codeLines: [[3],[8]]
      },
      {
        explanation: "The state of the different variables is managed directly, through loops and recursion, as it can be clearly seen when vis, ver and hor are modified by walk(). ",
        codeLines: [[13,17]]
      },
      {
        explanation: "Flow control is achieved through conditionals (if vis[yy][xx]: continue),  loops and recursion.",
        codeLines: [[13,17]]
      }
    ],
    Java:[
     {
        explanation: "Object-Oriented Programming (OOP) is a paradigm that structures code around objects, instances of classes that bundle data (attributes) and behavior (methods) into a single entity. The code is organized into several classes, Cell, Direction, Maze, MazeGenerator, and Maze renderer.",
        codeLines: [[7],[50],[76],[114],[157]]
      },
      {
        explanation: "Each instance of these classes contains some information and functions that are purpose built, for example Cell hides its walls from the rest of the code (as it is only relevant for it) and exposes controlled methods such as removeWall() and hasWall(). ",
        codeLines: [[158,178]]
      },
      {
        explanation: "A concept related to encapsulation is abstraction, where, using the same example, other classes don’t need to know how walls are stored, they just need to call hasWall(). How the class manages it internally is not important for the rest of the classes.",
        codeLines: [[55],[61]]
      },
      {
        explanation: "Code made this way is highly reusable, the enum direction can be used for any other gid-based application. It is also really flexible, as a class can be changed internally, in a way that if it still does its basic functionality, the code would still work.",
        codeLines: [[114,118],[150,154]]
      },
      {
        explanation: "Even though  it is outside the scope of this project, if we wanted to make the code a bit more complex (I don’t do it because it would be really hard to replicate in prolog or F#), we could include more algorithms using polymorphism, we would just have to create a new generate() or do it through interfaces, where we could create different variants of MazeAlgorithm.",
        codeLines: []
      }
    ],
    FSharp:[
      {
        explanation: " Functional programming is a style of coding that focuses on using pure functions (which always give the same output for the same input) and avoids changing data or state.",
        codeLines: []
      },
      {
        explanation: "Most functions in the code are pure, like removeWallBetween, a function that returns a new maze with updated walls instead of mutating the original or neighbors, that helps filter maze coordinates. However, there is a need for impure functions, as IO is necessary to show the maze created.",
        codeLines: [[35,43]]
      },
      {
        explanation: "Data structores are immutable, Maze can not change so a new one is created each time a wall is removed, as can be seen in visit and processNeighbors",
        codeLines: [[49,60]]
      },
      {
        explanation: "It does not use loops, instead it uses recursion.",
        codeLines: [[49],[55,60]]
      },
    ],
    Prolog:[
      {
        explanation: "The logic paradigm in programming is a declarative approach where programs are expressed as a set of logical rules and facts, and computation proceeds by deriving answers to queries based on logical inference.",
        codeLines: []
      },
      {
        explanation: "The program consists entirely of predicates that define relationships. search is a recursive predicate that generates the maze paths and search is a recursive predicate that generates the maze paths",
        codeLines: [[32,38]]
      },
      {
        explanation: "There are no loops, so backtracking is used in predicates like nextcell, where next unifies coordinates with neighboring cells.",
        codeLines: [[58,65]]
      } 
    ]
  },
  
  nQueens: {
    Python: [
      {
        explanation: "Procedural programming is a paradigm centered around organizing code as a sequence of procedures (functions or subroutines) that execute in a step-by-step manner.",
        codeLines: []
      },
      {
        explanation: "The program is organized around functions with clear purposes.  under_attack(col, queens) checks if a queen placement is valid and  solve(n) generates solutions. ",
        codeLines: [[3],[7]]
      },
      {
        explanation: "The code is imperative, with a step-by-step execution. The solutions space is explicitily initiated, then iterated in through nested loops and conditionals and the valid solution is returned and then printed.",
        codeLines: [[8,10],[15]]
      },
      {
        explanation: "The flow is controlled thorughh conditionals, where for loops iterate over rows and columns and a function, that returns a Boolean is used for filtering valid and invalid params",
        codeLines: [[10,14]]
      },
      {
        explanation: "States are mutable, where solutions is updated iteratively to track the valid queen positions.",
        codeLines: [[10,14]]
      },
    ],
    Java:[
     {
        explanation: "Object-Oriented Programming (OOP) is a paradigm that structures code around objects, instances of classes that bundle data (attributes) and behavior (methods) into a single entity.",
        codeLines: []
      },
      {
        explanation: "In this code we can find three classes. Chessboard  manages the board state (queens array), implements the solver algorithm (solve()) and validates moves (isSafe()). SolutionPrinter handles output formatting (separation of concerns). NQueensSolver is the entry point that orchestrates the solution.",
        codeLines: [[3],[11],[55]]
      },
      {
        explanation: "Queens and size are private, external code can’t modify them directly. State is modified only via public methods (solve()). This is called encapsulation.",
        codeLines: [[12],[22],[33,39]]
      },
      {
        explanation: "Clases hide their internal implementation. Chessboard for example does not make how queens are stored public nor the details of the backtracking implementation.",
        codeLines: [[11,14],[22]]
      },
      {
        explanation: "Each Chessboard instance maintains its own queens positions and its tracker, allowing even for the creation of different Chessboards with different internal states.",
        codeLines: [[12,14]]
      },
    ],
    FSharp:[
      {
        explanation: "Functional programming is a style of coding that focuses on using pure functions (which always give the same output for the same input) and avoids changing data or state.",
        codeLines: []
      },
      {
        explanation: "Some of the pure functions are noCollisionGivenDir, that takes inputs and returns bool without side effects, goodAddition checks the validity of positions and extendSolution transforms the solutions.",
        codeLines: [[9,10],[12,13]]
      },
      {
        explanation: "Data structures are inmutable. Solutions grow via num :: ps that creates new lists, never modifies.",
        codeLines: [[18]]
      },
      {
        explanation: "Function composition can be seen in for example goodAddition, that combines noCollisionGivenDir and List.forall that check directions and aggregates checks respectively",
        codeLines: [[9,10]]
      },
      {
        explanation: "There are no loops, recursion is used. ",
        codeLines: [[1,3]]
      }
    ],
    Prolog:[
      {
        explanation: "The logic paradigm in programming is a declarative approach where programs are expressed as a set of logical rules and facts, and computation proceeds by deriving answers to queries based on logical inference.",
        codeLines: []
      },
      {
        explanation: "The program consists entirely of logical predicates. solution(Queens) for example declares a solution exists if Queens is a valid permutation and safe.",
        codeLines: [[1,3]]
      },
      {
        explanation: "It is clearly declarative. Using the same example, solutions are expressed as constraints, the solution predicate proves that queens must be a permutations and that safemust be true.",
        codeLines: [[1,3]]
      },
      {
        explanation: "It works through backtracking, where permutation generates all possible queen arrangements and safe prunes invalid placements via backtracking. There are no loops, recursion and backtracking is used instead.",
        codeLines: [[7,9]]
      }
    ]
  }
};