<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/networking-models/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/networking-models/actions/workflows/codeql-analysis.yml)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Computer Networking Models

It is a composite repositiory to demonstrate below networking models:

-   Http
-   Http2 (SSL)
-   Long-Polling
-   Server-Sent-Event
-   WebSocket

[Report Issue](https://github.com/webceyhan/networking-models/issues) |
[Request Feature](https://github.com/webceyhan/networking-models/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Node.js](https://nodejs.dev/) and `npm` package manager first.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/networking-models.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd networking-models
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm run http            # run http model
npm run http2           # run http2 model
npm run long-polling    # run long-polling model
npm run sse             # run server-sent-event model
npm run websocket       # run websocket model

```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
-   [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)
-   [WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
    - [WS](https://github.com/websockets/ws)
