# fluffy-umbrella

Live Storybook: [https://pablohpsilva.github.io/fluffy-umbrella/](https://pablohpsilva.github.io/fluffy-umbrella/)

Here's the exercise:

> The goal of the exercise is to create a list of test-takers (test-takers can be seen as users).
>
> _Frontend (HTML/CSS/JS)_. Create a component that enables you to load the data from the service created during step 1 and display the names of the test takers.
>
> Nice to have: The component should be reused to display other kinds of data.

Since it is requested a simple component, this repository is a **UI library** only.

### Why this package name?

No idea. I liked it, that's all.

### Special details

-   I wanted to create the smallest possible react component library. This is why I'm not adding extra dependencies that could require from the project using it css/files/other special loaders. This is simple React and one dependency to help me manage `CVS` files;
-   Running `npm start` will start the storybook;
-   This library is using **peerDependencies** instead of dependencies. You should install them in your project (listed at the end);

## List of tasks

-   [x] Create a component that enables the user to load user data from files and/or a service;
-   [x] Component should be able to display more than just user name;
-   [x] Flexible user data resolver (check `src/hooks/useUserResolver`);
-   [x] Hooks for manipulating and fetching data (check `src/hooks`);
-   [x] Components playground via Storybook;

Fluffy-umbrella offers you out of the box the following:

-   Components
    -   **UserImport**: a full component able to display data from `CSV` or `JSON` files and also retrieve data from a service;
    -   **UserItem**: a component able to show user data;
    -   **UserList**: a component able to show a list of user data;
    -   **DropFile**: you can drop or select any files and get it ready for uploading;
    -   **DropCSVJSONFile**: you can drop or select any `CSV` or `JSON` file and get it ready for uploading;
-   Hooks
    -   **useCSVJSONFileData**: can manipulate a File type object and return it in JSON format. Depends on `csvtojson` package;
    -   **useUserQuery**: can fetch user data from a given service;
    -   **useUserResolver**: can normalize and resolve user data that may vary from one sorce to another and bring forth a unique representation. This hook is the core for data consistency of this library.

## How to use it?

### Development mode

```sh
npm i && npm run install:peers
```

Now you can run the project by

```sh
npm start
```

The command above will launch the Storybook for this library.

### Linking

You can always link this library into your project

```sh
cd fluffly-umbrella && npm i && npm run install:peers && npm link
```

After it, do the following:

```sh
cd go/to/your/project && npm link fluffy-umbrella
```

In your project, you can import the components and hooks like:

```javascript
import { UserImport, useCSVJSONFileData } from 'fluffy-umbrella'
```

### production mode

```sh
npm run build
```

## PeerDependencies

-   React
-   csvtojson

To install in your project do the following:

```
npm i fluffy-umbrella react csvtojson
```
