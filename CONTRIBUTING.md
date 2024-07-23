# Contributing to [Example Open API Docs]

Thank you for your interest in contributing to Example Open API Docs! Please take a moment to review this document before submitting your contributions.

## Table of Contents
- [How to Contribute](#how-to-contribute)
- [Naming Conventions](#naming-conventions)
- [Project Structure](#project-structure)
- [MRs](#mrs)



## How to Contribute

1. Clone the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/feature-name`).
6. Open a merge request.

## Naming Conventions

Please follow these naming conventions for files, folders, and code elements to maintain consistency throughout the project:

### Files and Folders

- For schema files, use PascalCase
- For non-schema files, use lowercase letters and dot to separate words (e.g., `myfile.new.yaml`).
- Folder names should be descriptive and follow the same conventions as non-schema files.
- All of the global constants should be in the `constants.yaml` file and use camelCase

### Code Elements

- **Export Variables:** Use PascalCase (e.g., `LoginRequestBody`, `LoginResponse200`).
- **Global Constants:** Use camelCase (e.g., `myConstant`).


## Project Structure

The project is organized as follows:
```sh
.
├── app.js # web server entry point
├── redocly.yaml # redocly configuration
└── templates
    ├── components
    │   ├── responses # reusable Response Objects.
    │   └── schemas # reusable Schema Objects.
    ├── openapi.yaml # root OpenAPI document
    └── paths # paths and operations for the API
```


## MRs

### Semantic MR titles

We expect you to follow the semantic MR title below:

```
docs: Add information about contributing
^     ^
|     |__ Subject
|________ Prefix
```

Here are all the prefixes you need to know:

| Prefix   | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| feat     | A new feature                                                                                               |
| fix      | A bug fix                                                                                                   |
| docs     | Documentation only changes                                                                                  |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | A code change that improves performance                                                                     |
| test     | Adding missing tests or correcting existing tests                                                           |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Other changes that don't modify src or test files                                                           |
| revert   | Reverts a previous commit                                                                                   |