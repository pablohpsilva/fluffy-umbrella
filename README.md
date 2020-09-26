# fluffy-umbrella

Here's the exercise:

> The goal of the exercise is to create a list of test-takers (test-takers can be seen as users).
>
> _Frontend (HTML/CSS/JS)_. Create a component that enables you to load the data from the service created during step 1 and display the names of the test takers.
>
> Nice to have: The component should be reused to display other kinds of data.

Since it is requested a simple component, this repository is a **UI library** only.

## Special details

-   Running `npm start` will start the storybook;
-   This library is using **peerDependencies** instead of dependencies. You should install them in your project (listed at the end);
-

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

## PeerDependencies

-   React
-   cvstojson

To install in your project do the following:

```
npm i fluffy-umbrella react cvstojson
```
