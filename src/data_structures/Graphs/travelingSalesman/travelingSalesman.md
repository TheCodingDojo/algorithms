# Traveling Salesman

## Overview

Given a list of cities and the distances between each pair of cities, what is
the shortest possible route that visits each city exactly once and returns to
the origin city?

### In Technical Terms

Given a complete graph with weighted edges (as an adjacency matrix) what is the
Hamiltonian cycle (path that visits every node once) of minimum cost?

### Time Complexity

- Brute Force - O(n!) - Factorial, checks every possible path.
- Dynamic Programming: O(n^2 \* 2^n)

| n   | n!              | n^2 \* 2^n |
| --- | --------------- | ---------- |
| 1   | 1               | 2          |
| 2   | 2               | 16         |
| 3   | 6               | 72         |
| 4   | 24              | 256        |
| 5   | 120             | 800        |
| 6   | 720             | 2304       |
| ... | ...             | ...        |
| 15  | 1307674368000   | 7372800    |
| 16  | 20922789888000  | 16777216   |
| 17  | 355687428096000 | 37879808   |

### Dynamic Programming Approach
