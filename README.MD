# Project OBA :gear:

_Shields that represent my project - They change over time._

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square) ![Activity](https://img.shields.io/github/last-commit/TristanVarewijck/TechDefined) ![Isseus](https://img.shields.io/github/issues/TristanVarewijck/TechDefined) ![Language](https://img.shields.io/github/languages/top/TristanVarewijck/TechDefined) ![Count](https://img.shields.io/github/languages/count/TristanVarewijck/TechDefined?color=#a55eea) ![NPM](https://img.shields.io/npm/v/npm) ![MIT-License](https://img.shields.io/apm/l/vim-mode)

## Project OBA Concept Design :pencil2:

![TechDefined-concept-design](https://github.com/TristanVarewijck/OBA-PROJECT/blob/main/assets/images/concept-display.png)

## Live Demo :clapper:

See the latest updated demo here:
[Link to DEMO](https://tristanvarewijck.github.io/TechDefined/).

---

## Description :label:

For the project OBA, I have to make a singelpage web-application with the focus of creating new concepts what can be done with the current API. For the project i decided to make a netflix inspired application. The application is about renting and searching movies from the OBA inside a app.

---

## Table of Contents :arrow_right_hook:

- [Features](#features)
- [API](#api)
- [ToDoList](#todolist)
- [Usage](#Usage)
- [Meta](#meta)
- [License](#license)

---

## Features

:chains: Features for this app are mainly still under construction.

1. **Search** <br>
   Search for the Movies you are interested in.
2. **Detail**
   See detailed information about a Movie
3. **Filter**
   Filter between movies formats.

---

## API

<img src="https://github.com/TristanVarewijck/OBA-PROJECT/blob/main/assets/images/logo.png" alt="newsapi-logo" width="200px"/>

For this project i am using the api from the [OBA](https://www.oba.nl/) <br>
To search on the app im using the endpoints below with the following params:

This one is so i can search articles for specific topics:
[https://zoeken.oba.nl/api/v1/}](https://zoeken.oba.nl/api/v1/)

|  Key  |    q     | authorization | refine |    facet    | output |
| :---: | :------: | :-----------: | :----: | :---------: | :----: |
| value | {queary} |    {auth}     |  true  | type(movie) |  json  |

https://zoeken.oba.nl/api/v1/search/?q=
${endpoint}${query}&authorization=\${auth}&refine=true&facet=type(movie)&output=json}

---

## ToDoList

In addition to the features that are now available, there are also additional features and tweaks that can make the app better. Do you have ideas let them know in a [PR](https://github.com/TristanVarewijck/OBA-PROJECT/pulls) :white_check_mark:

- [ ] Keep-scroll position
- [ ] Reponsiveness
- [ ] More filters

---

## Usage

For using this app yourself you need to follow the following steps:

### 1. Clone Repo locally

```
git clone https://github.com/TristanVarewijck/OBA-PROJECT.git
```

### 2. Connect your API key

If you want to connect with the API you have to fill in your own personal {apiKey}.

```
${endpoint}${query}&authorization=${auth}&refine=true&facet=type(movie)&output=json}
```

### 3. Run on Localhost

For easily running this project on your localhost you can use a VSCODE extension named: <br>
[live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

After installing this extension make sure to reload en hit the "Go Live" button.

### Thats it! :smile:

---

## Meta

Tristan Varewijck <br>
:email: [Tristan.varewijck@gmail.com](Tristan.varewijck@gmail.com) ||
:large_blue_diamond: [https://www.linkedin.com/in/tristanvarewijck-1999/](https://www.linkedin.com/in/tristanvarewijck-1999/)

![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

---

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/TristanVarewijck/TechDefined/blob/master/LICENSE) for the full details.
