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
    // Floyd's Tortoise and Hare Algorithm
    {
        question: "What is a Floyd's Tortoise and Hare algorithm used for in the context of linked lists?",
        options: ["Sorting", "Loop Detection", "Merging", "Reverse the linked list"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a characteristic of a linked list with no loop?",
        options: ["The list is empty", "The last node points to NULL", "It has only one node", "All nodes point to the same address"],
        correctAnswer: 1
    },
    {
        question: "In a linked list with a loop, how does Floyd's Tortoise and Hare algorithm detect the loop?",
        options: ["By reversing the linked list", "By using a hash table", "By comparing node values", "By detecting a cycle in the linked list"],
        correctAnswer: 3
    },
    {
        question: "What is the time complexity of Floyd's Tortoise and Hare algorithm for loop detection in a linked list?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctAnswer: 0
    },
    {
        question: "Which of the following data structures is commonly used for loop detection in linked lists?",
        options: ["Array", "Stack", "Hash Table", "Queue"],
        correctAnswer: 2
    },
    // Bitonic DLL
    {
        question: "What is a Bitonic sequence in the context of sorting?",
        options: ["A sequence with both ascending and descending parts", "A strictly increasing sequence", "A sequence with only equal elements", "A random sequence"],
        correctAnswer: 0
    },
    {
        question: "Which sorting algorithm is typically used for sorting a Bitonic sequence?",
        options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2
    },
    {
        question: "In Bitonic DLL, what is the role of the merging step in the sorting process?",
        options: ["To rearrange elements in descending order", "To split the list into subproblems", "To combine two sorted halves into a single sorted list", "To remove duplicates from the list"],
        correctAnswer: 2
    },
    {
        question: "What is the time complexity of sorting a Bitonic DLL using the Bitonic Sort algorithm?",
        options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
        correctAnswer: 0
    },
    {
        question: "Which step is critical for achieving the bitonic property in a Bitonic DLL?",
        options: ["Merging", "Sorting", "Splitting", "Reversing"],
        correctAnswer: 2
    },
    // Segregate Even & Odd Nodes
    {
        question: "Which of the following is an efficient approach to segregate even and odd nodes in a linked list?",
        options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Iterative traversal"],
        correctAnswer: 3
    },
    {
        question: "What is the key idea behind segregating even and odd nodes in a linked list?",
        options: ["Sorting based on node values", "Rearranging nodes based on index", "Grouping nodes based on parity", "Removing duplicate nodes"],
        correctAnswer: 2
    },
    {
        question: "In the context of linked lists, what is the significance of maintaining the relative order of even and odd nodes during segregation?",
        options: ["It does not matter", "Required for stability", "Reduces time complexity", "Improves space complexity"],
        correctAnswer: 1
    },
    {
        question: "Which time complexity is achievable for the even-odd segregation algorithm in a linked list?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
        correctAnswer: 0
    },
    {
        question: "What is the role of pointers in the segregation of even and odd nodes in a linked list?",
        options: ["To perform arithmetic operations", "To maintain the order of nodes", "To implement recursion", "To access neighboring nodes"],
        correctAnswer: 1
    },
    // Merge Sort for DLL
    {
        question: "Why is Merge Sort a preferred choice for sorting a doubly linked list?",
        options: ["It has a lower space complexity", "It is an in-place sorting algorithm", "It works well with linked lists", "It has a faster average case time complexity"],
        correctAnswer: 2
    },
    {
        question: "What is the key step in the merge sort algorithm for doubly linked lists?",
        options: ["Partitioning the list", "Merging sorted sublists", "Swapping adjacent elements", "Reversing the list"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of the merge step in the merge sort algorithm for doubly linked lists?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        correctAnswer: 0
    },
    {
        question: "How does merge sort maintain stability during sorting in a doubly linked list?",
        options: ["By using random pivot elements", "By comparing node values", "By maintaining the original order of equal elements", "By reversing the list at the end"],
        correctAnswer: 2
    },
    {
        question: "What is the space complexity of the merge sort algorithm for doubly linked lists?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        correctAnswer: 0
    },
    // Minimum Stack
    {
        question: "What is the primary advantage of a minimum stack over a regular stack?",
        options: ["Faster push and pop operations", "Reduced space complexity", "Quick access to the minimum element", "Support for parallel processing"],
        correctAnswer: 2
    },
    {
        question: "How is the minimum element updated in a minimum stack when a new element is pushed onto it?",
        options: ["By comparing with the top element", "By keeping a separate list of minimum elements", "By using a hash table", "By iterating through the entire stack"],
        correctAnswer: 1
    },
    {
        question: "In the context of a minimum stack, what is the time complexity of the push operation?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 0
    },
    {
        question: "What is a potential limitation of a minimum stack compared to a regular stack?",
        options: ["Higher time complexity for push operation", "Increased space complexity", "Limited support for dynamic resizing", "Inability to handle negative numbers"],
        correctAnswer: 1
    },
    {
        question: "How does a minimum stack ensure constant-time retrieval of the minimum element?",
        options: ["By using a hash table", "By storing the minimum value with each element", "By performing a linear search", "By using a priority queue"],
        correctAnswer: 1
    },
    // The Celebrity Problem
    {
        question: "In the Celebrity Problem, what is the definition of a 'celebrity'?",
        options: ["A famous person", "A person who knows everyone", "A person who is known by everyone", "A person with a large social media following"],
        correctAnswer: 2
    },
    {
        question: "What is the primary objective in solving the Celebrity Problem?",
        options: ["Identifying the most famous person", "Determining if a person is famous", "Finding a person who knows the most people", "Identifying a person known by everyone"],
        correctAnswer: 3
    },
    {
        question: "Which data structure is commonly used to solve the Celebrity Problem efficiently?",
        options: ["Stack", "Queue", "Graph", "Array"],
        correctAnswer: 0
    },
    {
        question: "What is the time complexity of the efficient algorithm for solving the Celebrity Problem?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctAnswer: 0
    },
    {
        question: "What is the significance of the elimination step in the Celebrity Problem algorithm?",
        options: ["Reducing time complexity", "Avoiding unnecessary comparisons", "Ensuring a celebrity is found", "Minimizing space complexity"],
        correctAnswer: 1
    },
    // Iterative Tower of Hanoi
    {
        question: "What is the minimum number of moves required to solve the Tower of Hanoi problem with n disks?",
        options: ["n", "2^n - 1", "2n", "n!"],
        correctAnswer: 1
    },
    {
        question: "In the iterative solution to the Tower of Hanoi, what data structure is commonly used to simulate the recursive calls?",
        options: ["Stack", "Queue", "Linked List", "Priority Queue"],
        correctAnswer: 0
    },
    {
        question: "What is the key idea behind the iterative Tower of Hanoi algorithm?",
        options: ["Using dynamic programming", "Simulating recursive calls with a stack", "Dividing the problem into subproblems", "Sorting the disks based on size"],
        correctAnswer: 1
    },
    {
        question: "How does the time complexity of the iterative Tower of Hanoi algorithm compare to the recursive solution?",
        options: ["It is higher", "It is lower", "It is the same", "It depends on the number of disks"],
        correctAnswer: 2
    },
    {
        question: "What is the role of the auxiliary peg in the iterative Tower of Hanoi algorithm?",
        options: ["Storing the smallest disk", "Facilitating the movement of disks", "Preventing the use of additional memory", "Representing the destination peg"],
        correctAnswer: 1
    },
    // Stock Span Problem
    {
        question: "What does the Stock Span Problem aim to calculate?",
        options: ["Total stock value", "Maximum stock price", "Minimum stock price", "The span of each stock's price"],
        correctAnswer: 3
    },
    {
        question: "In the context of the Stock Span Problem, what does the 'span' of a stock refer to?",
        options: ["The price of the stock", "The difference between the highest and lowest prices", "The number of consecutive days the stock price is less than a certain threshold", "The number of consecutive days the stock price is greater than or equal to the current day"],
        correctAnswer: 3
    },
    {
        question: "Which data structure is commonly used to efficiently solve the Stock Span Problem?",
        options: ["Stack", "Queue", "Hash Table", "Linked List"],
        correctAnswer: 0
    },
    {
        question: "How does the Stock Span Problem algorithm utilize a stack to calculate the spans of stock prices?",
        options: ["By maintaining a running sum", "By storing indices in the stack", "By sorting the stock prices", "By using a priority queue"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of the Stock Span Problem algorithm using a stack?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctAnswer: 0
    },
    // Priority Queue using DLL
    {
        question: "What is a DLL (Doubly Linked List) commonly used for in the context of data structures?",
        options: ["To represent a binary tree", "To implement a queue", "To store a collection of elements with quick access to the middle", "To facilitate hash table operations"],
        correctAnswer: 2
    },
    {
        question: "What is the key advantage of using a doubly linked list to implement a priority queue?",
        options: ["Reduced space complexity", "Faster insertion and deletion operations", "Quick access to the minimum element", "Improved cache locality"],
        correctAnswer: 1
    },
    {
        question: "How is the priority maintained in a priority queue implemented using a doubly linked list?",
        options: ["By using a separate array for priorities", "By comparing node values", "By using a binary heap", "By sorting the linked list"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of the insertion operation in a priority queue implemented using a doubly linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 2
    },
    {
        question: "What is a potential drawback of using a doubly linked list for a priority queue compared to other data structures?",
        options: ["Higher time complexity for insertion", "Increased space complexity", "Limited support for dynamic resizing", "Inability to handle duplicate priorities"],
        correctAnswer: 0
    },
    // Sort Without Extra Space
    {
        question: "In the context of sorting without extra space, which sorting algorithm is often used?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
        correctAnswer: 0
    },
    {
        question: "What is the primary challenge in implementing a sorting algorithm without using extra space?",
        options: ["Handling duplicate elements", "Achieving stability", "Minimizing time complexity", "In-place rearrangement of elements"],
        correctAnswer: 3
    },
    {
        question: "How does an in-place sorting algorithm differ from other sorting algorithms?",
        options: ["It uses additional arrays for sorting", "It rearranges elements within the existing array without using extra space", "It always has a lower time complexity", "It requires more memory compared to other algorithms"],
        correctAnswer: 1
    },
    {
        question: "Which sorting algorithm can be adapted for in-place sorting without using extra space efficiently?",
        options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
        correctAnswer: 2
    },
    {
        question: "What is a potential drawback of in-place sorting algorithms in terms of time complexity?",
        options: ["Higher time complexity compared to other algorithms", "Limited support for parallel processing", "Increased space complexity", "Averages case time complexity may be higher"],
        correctAnswer: 0
    },
    // Max Sliding Window
    {
        question: "In the context of the Max Sliding Window problem, what does the 'sliding window' represent?",
        options: ["A graphical representation of the array", "A fixed-size subarray moving through the main array", "The maximum value in the entire array", "The minimum value in the entire array"],
        correctAnswer: 1
    },
    {
        question: "What is the primary objective of the Max Sliding Window problem?",
        options: ["Finding the maximum element in the array", "Identifying the position of the maximum element", "Determining the maximum element in each subarray of a fixed size", "Sorting the array in descending order"],
        correctAnswer: 2
    },
    {
        question: "Which data structure is commonly used to efficiently solve the Max Sliding Window problem?",
        options: ["Stack", "Queue", "Hash Table", "Linked List"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of the efficient algorithm for solving the Max Sliding Window problem?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctAnswer: 0
    },
    {
        question: "What is the significance of using a doubly-ended queue (deque) in the Max Sliding Window algorithm?",
        options: ["To minimize space complexity", "To maintain a running sum", "To efficiently track the maximum element in the sliding window", "To sort the elements in the window"],
        correctAnswer: 2
    },
    // Stack Permutations
    {
        question: "In the context of stack permutations, what does a valid permutation represent?",
        options: ["A random arrangement of elements", "A sequence of elements in ascending order", "A sequence of elements that can be obtained by performing stack operations", "A sequence of elements with no duplicates"],
        correctAnswer: 2
    },
    {
        question: "What is the key property of a stack permutation that distinguishes it from other permutations?",
        options: ["It always starts with the maximum element", "It always ends with the minimum element", "It can be obtained by a specific sequence of push and pop operations on a stack", "It contains only odd or even elements"],
        correctAnswer: 2
    },
    {
        question: "What is the significance of using a stack in checking whether a given permutation is valid?",
        options: ["To reduce time complexity", "To maintain the order of elements", "To simulate the permutation process", "To sort the elements"],
        correctAnswer: 2
    },
    {
        question: "How does the concept of a stack permutation relate to the properties of a stack data structure?",
        options: ["It guarantees constant-time push and pop operations", "It ensures that elements are always sorted", "It follows the Last In, First Out (LIFO) principle", "It minimizes space complexity"],
        correctAnswer: 2
    },
    {
        question: "What is the time complexity of checking whether a given permutation is a valid stack permutation?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctAnswer: 0
    },
    // Recover the BST
    {
        question: "What is the primary purpose of recovering a Binary Search Tree (BST)?",
        options: ["To optimize its search operation", "To ensure its structural integrity after modifications", "To reduce its memory consumption", "To increase its traversal speed"],
        correctAnswer: 1
    },
    {
        question: "Which of the following operations can lead to the need for recovering a BST?",
        options: ["Insertion", "Deletion", "Searching", "Traversal"],
        correctAnswer: 1
    },
    {
        question: "In a Binary Search Tree, what property must be maintained after a node deletion?",
        options: ["In-order traversal property", "Pre-order traversal property", "Post-order traversal property", "Binary search property"],
        correctAnswer: 3
    },
    {
        question: "Which of the following algorithms can be used for recovering a BST after a deletion?",
        options: ["Breadth-first search (BFS)", "Depth-first search (DFS)", "In-order traversal", "Dijkstra's algorithm"],
        correctAnswer: 2
    },
    {
        question: "What does the in-order traversal of a BST produce?",
        options: ["Nodes in sorted order", "Nodes in reverse sorted order", "Nodes in random order", "Nodes in the order they were inserted"],
        correctAnswer: 0
    },
    // Views of tree
    {
        question: "What is the view of a tree?",
        options: ["The way the tree is displayed on the screen", "The total number of nodes in the tree", "The representation of the tree from a particular direction", "The height of the tree"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT a type of tree view?",
        options: ["Level order view", "Pre-order view", "In-order view", "Post-order view"],
        correctAnswer: 1
    },
    {
        question: "What does the level order view of a tree display?",
        options: ["Nodes at odd levels", "Nodes at even levels", "Nodes at every level, from left to right", "Nodes at the root level only"],
        correctAnswer: 2
    },
    {
        question: "Which view of a tree displays nodes as they are encountered during a depth-first traversal?",
        options: ["In-order view", "Pre-order view", "Post-order view", "Level order view"],
        correctAnswer: 1
    },
    {
        question: "In the post-order view of a binary tree, when is a node visited?",
        options: ["Before visiting its left child", "After visiting its left child", "Before visiting its right child", "After visiting its right child"],
        correctAnswer: 3
    },
    // BFS
    {
        question: "What is Breadth-First Search (BFS) primarily used for?",
        options: ["Finding the shortest path in a weighted graph", "Traversing and searching tree or graph data structures", "Sorting elements in an array", "Determining the longest path in a directed acyclic graph (DAG)"],
        correctAnswer: 1
    },
    {
        question: "In BFS, which data structure is typically used to store the vertices of the graph or tree?",
        options: ["Stack", "Queue", "Priority queue", "Linked list"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of BFS when applied to an adjacency matrix representation of a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
        correctAnswer: 2
    },
    {
        question: "In BFS, which vertices are explored first?",
        options: ["Vertices with lower degree", "Vertices with higher degree", "Vertices with the lowest value", "Vertices with the highest value"],
        correctAnswer: 2
    },
    {
        question: "What is the order of traversal in BFS?",
        options: ["Depth-first", "Pre-order", "Post-order", "Level-order"],
        correctAnswer: 3
    },
    // DFS
    {
        question: "What is Depth-First Search (DFS) primarily used for?",
        options: ["Finding the shortest path in a weighted graph", "Traversing and searching tree or graph data structures", "Sorting elements in an array", "Determining the longest path in a directed acyclic graph (DAG)"],
        correctAnswer: 1
    },
    {
        question: "Which data structure is typically used for implementing DFS?",
        options: ["Queue", "Stack", "Priority queue", "Linked list"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of DFS when applied to an adjacency list representation of a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
        correctAnswer: 2
    },
    {
        question: "In DFS, which traversal strategy is employed to explore neighboring vertices?",
        options: ["Depth-first traversal", "In-order traversal", "Level-order traversal", "Post-order traversal"],
        correctAnswer: 0
    },
    {
        question: "What is the order of traversal in DFS?",
        options: ["Depth-first", "Pre-order", "Post-order", "Level-order"],
        correctAnswer: 0
    },
    // Binomial heap
    {
        question: "What is a binomial tree?",
        options: ["A tree where each node has at most two children", "A tree where each node has exactly two children", "A tree with a specific ordering of nodes", "A tree used in binary search algorithms"],
        correctAnswer: 1
    },
    {
        question: "Which operation is NOT supported efficiently by a binomial heap?",
        options: ["Insertion", "Deletion", "Union", "Search"],
        correctAnswer: 3
    },
    {
        question: "In a binomial heap, what is the time complexity of inserting a new element?",
        options: ["O(log n)", "O(n)", "O(log^2 n)", "O(1)"],
        correctAnswer: 0
    },
    {
        question: "What is the maximum height of a binomial tree with n nodes?",
        options: ["n", "2n", "log_2 n", "log_2 (n+1)"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is a property of a binomial tree of order k?",
        options: ["It has k children", "It has 2^k nodes", "It has k+1 nodes", "It has 2^{k+1} - 1 nodes"],
        correctAnswer: 1
    },
    // Winner tree
    {
        question: "What is the purpose of a winner tree?",
        options: ["To store elements in a sorted order", "To efficiently find the maximum (or minimum) element among a set of elements", "To balance binary search trees", "To implement priority queues"],
        correctAnswer: 1
    },
    {
        question: "In a winner tree, what do the leaves represent?",
        options: ["Internal nodes", "The maximum element", "The elements themselves", "The minimum element"],
        correctAnswer: 2
    },
    {
        question: "How are winner trees commonly used in algorithms?",
        options: ["For graph traversal", "For heap sort", "For tournament-style algorithms", "For binary search"],
        correctAnswer: 2
    },
    {
        question: "Which node of a winner tree contains the overall winner?",
        options: ["Root node", "Leaf nodes", "Internal nodes", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What operation is performed to construct a winner tree?",
        options: ["Merge", "Compare", "Split", "Rotate"],
        correctAnswer: 1
    },
    // Bellman-Ford algorithm
    {
        question: "What is the Bellman-Ford algorithm used for?",
        options: ["Finding the shortest path in a weighted directed graph with negative edge weights", "Sorting elements in an array", "Implementing a priority queue", "Searching for an element in a binary search tree"],
        correctAnswer: 0
    },
    {
        question: "Which data structure is commonly used to represent graphs in the Bellman-Ford algorithm?",
        options: ["Arrays", "Linked lists", "Hash tables", "Adjacency matrices or adjacency lists"],
        correctAnswer: 3
    },
    {
        question: "What is the time complexity of the Bellman-Ford algorithm?",
        options: ["O(V)", "O(V log V)", "O(V + E)", "O(V^2)"],
        correctAnswer: 2
    },
    {
        question: "In the context of the Bellman-Ford algorithm, what does 'V' represent?",
        options: ["The number of vertices in the graph", "The number of edges in the graph", "The maximum possible weight of an edge", "The source vertex"],
        correctAnswer: 0
    },
    {
        question: "What does the Bellman-Ford algorithm initialize the shortest distance to each vertex with?",
        options: ["Positive infinity", "Negative infinity", "Zero", "The weight of the source vertex to itself"],
        correctAnswer: 0
    },
    // Dial's algorithm
    {
        question: "What is the Dial's Algorithm used for?",
        options: ["Finding the maximum flow in a network", "Sorting elements in an array", "Finding the shortest path in a graph with non-negative edge weights", "Detecting negative cycles in a graph"],
        correctAnswer: 2
    },
    {
        question: "Which data structure does the Dial's Algorithm utilize?",
        options: ["Arrays", "Linked lists", "Priority queues", "Stacks"],
        correctAnswer: 0
    },
    {
        question: "What does each bucket in the Dial's Algorithm contain?",
        options: ["Vertices", "Edges", "Distances from the source vertex", "Paths"],
        correctAnswer: 0
    },
    {
        question: "How are the buckets indexed in the Dial's Algorithm?",
        options: ["By vertex IDs", "By vertex distances from the source", "By edge weights", "By vertex degrees"],
        correctAnswer: 1
    },
    {
        question: "What is the time complexity of the Dial's Algorithm?",
        options: ["O(V)", "O(V log V)", "O(V + E)", "O(E log V)"],
        correctAnswer: 2
    },
    // Topological sort
    {
        question: "What is topological sorting used for?",
        options: ["Finding shortest paths in a graph", "Detecting cycles in a graph", "Ordering tasks with dependencies", "Generating minimum spanning trees"],
        correctAnswer: 2
    },
    {
        question: "Which of the following data structures is commonly used to implement topological sorting?",
        options: ["Queue", "Stack", "Array", "Heap"],
        correctAnswer: 1
    },
    {
        question: "In a directed acyclic graph (DAG), topological sorting results in:",
        options: ["A linear ordering of vertices", "A minimum spanning tree", "A cyclic dependency graph", "A binary search tree"],
        correctAnswer: 0
    },
    {
        question: "Which algorithm is commonly used to perform topological sorting?",
        options: ["Breadth-first search (BFS)", "Depth-first search (DFS)", "Dijkstra's algorithm", "Prim's algorithm"],
        correctAnswer: 1
    },
    {
        question: "In topological sorting, vertices with no incoming edges are processed:",
        options: ["First", "Last", "Randomly", "In any order"],
        correctAnswer: 0
    },
    // Vertical order traversal
    {
        question: "What does vertical order traversal of a binary tree involve?",
        options: ["Traversing the tree level by level", "Visiting nodes from left to right", "Exploring nodes from top to bottom", "Grouping nodes based on their horizontal distance from the root"],
        correctAnswer: 3
    },
    {
        question: "Which data structure is commonly used to perform vertical order traversal?",
        options: ["Array", "Queue", "Stack", "Linked list"],
        correctAnswer: 1
    },
    {
        question: "In vertical order traversal, nodes at the same horizontal distance are visited in which order?",
        options: ["Random", "Pre-order", "Level-order", "Post-order"],
        correctAnswer: 2
    },
    {
        question: "What is the time complexity of vertical order traversal in a binary tree with n nodes?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
        correctAnswer: 0
    },
    {
        question: "Which traversal technique is typically used to implement vertical order traversal?",
        options: ["Depth-first traversal", "Breadth-first traversal", "In-order traversal", "Pre-order traversal"],
        correctAnswer: 1
    },
    // Boundary traversal
    {
        question: "What does boundary traversal of a binary tree involve?",
        options: ["Visiting all nodes in a left-to-right order", "Exploring nodes from top to bottom", "Traversing only the nodes on the boundary of the tree", "Processing nodes in a bottom-up manner"],
        correctAnswer: 2
    },
    {
        question: "Which of the following nodes is included in the boundary traversal of a binary tree?",
        options: ["Only leaf nodes", "Only internal nodes", "Both leaf and internal nodes", "Neither leaf nor internal nodes"],
        correctAnswer: 2
    },
    {
        question: "In boundary traversal, in what order are the nodes visited?",
        options: ["Pre-order", "In-order", "Post-order", "Level-order"],
        correctAnswer: 0
    },
    {
        question: "What is the time complexity of boundary traversal in a binary tree with n nodes?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
        correctAnswer: 0
    },
    {
        question: "Which traversal technique is typically used to implement boundary traversal?",
        options: ["Depth-first traversal", "Breadth-first traversal", "In-order traversal", "Pre-order traversal"],
        correctAnswer: 0
    },
    // Heap sort
    {
        question: "What is heap sort primarily used for?",
        options: ["Sorting linked lists", "Sorting arrays", "Searching in trees", "Graph traversal"],
        correctAnswer: 1
    },
    {
        question: "Which data structure is used to implement heap sort?",
        options: ["Queue", "Stack", "Heap", "Linked list"],
        correctAnswer: 2
    },
    {
        question: "What type of heap is typically used in heap sort?",
        options: ["Max heap", "Min heap", "Binary tree", "AVL tree"],
        correctAnswer: 0
    },
    {
        question: "What is the time complexity of heap sort in the worst-case scenario?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
        correctAnswer: 1
    },
    {
        question: "In heap sort, which operation is used to ensure that the heap property is maintained?",
        options: ["Insertion", "Deletion", "Heapify", "Merge"],
        correctAnswer: 2
    },
    // K-Array heap
    {
        question: "What is a K-ary heap?",
        options: ["A binary tree where each node has at most K children", "A heap with K elements in each level", "A tree where each node has exactly K children", "A heap with K elements in total"],
        correctAnswer: 0
    },
    {
        question: "In a K-ary heap, what is the maximum number of elements in the last level if there are N elements in total?",
        options: ["K", "K - 1", "N % K", "K^2"],
        correctAnswer: 2
    },
    {
        question: "Which operation has a time complexity of O(log K) in a K-ary heap?",
        options: ["Insertion", "Deletion", "Building a heap", "Finding the minimum element"],
        correctAnswer: 0
    },
    {
        question: "How is a K-ary heap represented in memory?",
        options: ["As a binary tree", "As an array", "As a linked list", "As a balanced tree"],
        correctAnswer: 1
    },
    {
        question: "What is the height of a K-ary heap with N elements?",
        options: ["log(N)", "log(K, N)", "N/K", "log(K) + log(N)"],
        correctAnswer: 1
    }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;
const AUTO_NEXT_DELAY = 1000; // 2 seconds delay

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