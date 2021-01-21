# [Jasmine](https://www.npmjs.com/package/jasmine)

- Jasmine is a unit testing framework. We will be using it to pass test cases to our algorithms to see if your algorithms return the expected result.

## Setup

- you must have [Node.js](https://nodejs.org/en/download/) installed

### Clone a repo that already has jasmine initialized

1. `git clone URL/TO/REPO.git` (url can be found on the repos GitHub page by clicking the top right code button)
   - this will create a new folder at the location your terminal is open to, the folder will be named after the repository
2. `cd repo_name`
3. `npm i` to install the dependencies (jasmine) listed in the `package.json` that came the cloned project.

### Initialize a new project and install jasmine

1. If you haven't already, run: `npm init` in your algos project folder
2. `npm i jasmine`
   - this should have created a `package.json` file that has `jasmine` and version number listed in it.
3. copy over the spec folder, or to create your own

## Run Jasmine

- add the following to `package.json`

  - ```json
    "scripts": {
      "test": "node_modules/.bin/jasmine"
    },
    ```

    - this allows you to run `npm test` in the terminal open to your project folder
    - alternatively, to test a single `Spec` file: `npm test path/to/fileNameSpec.js`
      - you can type `npm test` with a space after `test`, then drag and drop the file after the space to auto fill the path
