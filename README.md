# Semantic Health Backend

This is the backend server for the Semantic Health Fullstack Take Home Assignment. The server provides a simple Express API to retrieve graph data for the frontend visualization.

## Project Structure

/backend-task
server.js


## API Endpoints

### GET /graph

Returns a simple graph data consisting of nodes and edges.

#### Response Format:

- **nodes** (Array): An array of nodes, each represented by an object with the following properties:
  - **id** (number): Unique identifier for the node.
  - **label** (string): Label or name of the node.
  - **x** (number): X-coordinate of the node on the graph.
  - **y** (number): Y-coordinate of the node on the graph.

- **edges** (Array): An array of edges, each represented by an object with the following properties:
  - **from** (number): ID of the source node.
  - **to** (number): ID of the target node.
