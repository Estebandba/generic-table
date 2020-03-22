## Generic Table Component

Simple app that demos a generic reusable table component with the usage of the API https://randomuser.me/.

The table component comes with a set of props that can be declared in order for it to render. Some props are required and others are optionals.

**Please read below to find  the necessary setup:**

```
<Table 
    data={array}
    headerFields={array}
    maxHeight={string}
    maxWidth={string}
>
```

## Props

`data`: must be an array of objects containing all the data that should be presented in the body of the table. This prop is `required`.
`headerFields`: must be an array of strings containing all the fields that should be presented in the header of the table. This prop is `required`.
`maxHeight`: must be a string containing the max height wanted for the table. If not specified, this one defaults to `700px`. This prop is ` not required`.
`maxWidth`: must be a string containing the max width wanted for the table. If not specified, this one defaults to `100%`. This prop is ` not required`.

## Features

The features of the table are `column resizing`, `sorting by ascending and descending order` and `lazy-loading` to load the table's data by chunk.

## Libraries/frameworks featured:

- **Front-end:**
    `React`
    `react-column-resizer`
    `lodash`

- **Unit Test:**
    `Jest`
    `Enzyme`
    `check-prop-types`
    `prop-types`

## Available Scripts

In the project directory, you can run:

### `npm start`

- To run the front-end run `npm start` in the directory of the project.

### `npm test`

- To run the test scripts run `npm test` in the directory of the project.

## References:

- https://www.npmjs.com/package/react-column-resizer
- https://lodash.com/docs/4.17.15





