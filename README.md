# Cruel Maps
> "It's not about the destination, it's about the _Journey_" – Us, 2024

## Value Proposition
Tired of taking the same boring route home everday? Feel like spicing things up?

Look no further than Cruel Maps!

Give us a destination and we guarantee that your journey will be exhilaratingly eerie.



## Overview
<img width="400" align="right" alt="Screenshot 2024-01-28 at 8 27 48 PM" src="https://github.com/Anant1902/cruel-maps/assets/19762596/8d4093a1-c050-4d22-9900-4ee6e2401030">

### What it does

Given a start and end point, the app then suggests a creepy route.

### How we built it

There are several components to the app. First, a user interface that receives inputs on the start and end destination.

Next, we connect the OpenAI api and send these inputs to generate routes. OpenAI returns us coordinates of stops along the route and with Google maps we attain the final route.

### Challenges we ran into

Because of OpenAI's recently updated documentation we found it hard to find the best and fastest way to connect our app to the OpenAI api. It was difficult to debug problems encountered as well as we did not know if it was a problem with having slightly outdated code or something else.

### Accomplishments that we're proud of

Fixing errors. This project idea is also probably the hundredth idea that we have explored during the Hackathon so we're happy to have settled on a fun idea that we like.

### What we learned

It is easier to ideate than execute.

### What's next for cruel maps

Actually making it useful. Maybe coming up with scenic routes or culturally rich routes (routes that people actually want to go on).

## Usage Instructions

Wanna try out Cruel Maps yourself? Make sure you have [npm](https://www.npmjs.com) installed on your machine before you continue!

1. Clone the repo
```sh
git clone <URL>
```

2. Install the packages needed for the project
```sh
npm install expo
```

3. Run the project
```sh
npx expo start
```

4. Follow the instructions to view the application on your preferred platform.

## Notes
This project was ideated, coded, debugged and demo-ed in a span of 24 hours, as part of [Hack'n'Roll 24](https://hacknroll.nushackers.org).

Find our submission devpost (and team information) [here](https://devpost.com/software/cruel-maps).
