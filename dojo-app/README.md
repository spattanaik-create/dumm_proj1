# Dojo 1.6 App

This is a simple single-page application using the Dojo 1.6.1 toolkit. This application uses legacy Dojo syntax patterns (dojo.provide/dojo.require) and is designed to be upgraded to Dojo 1.17+ by an AI agent package updater.

## Key Differences from Modern Dojo

This application uses **Dojo 1.6.1** which has significant syntax differences from modern Dojo (1.17+):

- **Module System**: Uses `dojo.provide()` and `dojo.require()` instead of AMD (`define`/`require`)
- **Module Loading**: Synchronous loading with `dojo.require()` instead of asynchronous AMD modules
- **Data Stores**: Uses `dojo.data.ItemFileReadStore` instead of `dojo/store/Memory`
- **Grids**: Uses `dojox.grid.DataGrid` instead of `dgrid/OnDemandGrid`
- **Initialization**: Uses `dojo.addOnLoad()` instead of `require(["dojo/domReady!"], ...)`
- **Configuration**: Uses `djConfig` attribute instead of `dojoConfig` object

## Setup

The Dojo 1.6.1 library is already included in the `dojo/dojo-release-1.6.1/` directory.

## How to Run

1.  Make sure you have Python 3 installed on your system.
2.  Open a terminal and navigate to the root directory of this project.
3.  Start a simple HTTP server by running the following command:

    ```bash
    python3 -m http.server
    ```

4.  Open your web browser and navigate to [http://localhost:8000](http://localhost:8000).

You should see the application running with the legacy Dojo 1.6 interface.
