# Goalify

## Table of Contents
1. [ Introdution ](#intro)
2. [ Goals and Objectives ](#goals)
3. [ Plan of Excution ](#exc)
4. [ Explaination of Solution ](#explain)
5. [ Difficulties ](#diff)
6. [ Conclusion ](#con)
7. [ Demo ](#demo)


<a name="intro"></a>
## 1. Introdution
Goalify is a web application used by users to set their goals, track their progress and achievements, view statistics on their progress, and share that with other users who would also be posting their progress creating some kind of a motivational feedback loop.


<a name="goals"></a>
## 2. Goals and Objectives
The problem: the lack of motivation to get up and pursue whatever any of us is trying to achieve has been a problem for almost everyone. 

Solution: Create an application to assist people put forward objectives and keep tabs on their development towards those objectives. It gives an organized method to follow and track objective advancement through highlights like dashboards and progress bars. Additionally, the platform is a magnificent apparatus for inspiration. 

The app allows users to stay focused on the most critical aspects of their goals. It aids in the identification of potential roadblocks as well as ideas for overcoming them. It can assist in setting more realistic goals and maintaining a happy attitude along the way. Most importantly, uses can share that with other users who would also be posting their progress creating some kind of a motivational feedback loop. 


<a name="exc"></a>
## 3. Plan of Excution 
We first worked on the middleware as it was the most important part and we needed to finalize it to understand how the frontend and the backend will connect to it.
After mostly finishing the middleware, we split into two groups, one group implemented the frontend and another group implemented the backend. During this stage we
also did some small edits to middleware. After finishing, frontend, middleware, backend, and the database services that they used we started working on dockerizing 
the whole app. After finishing the dockerizing some bugs came up that we spent some time to make sure everything is working and to create the demo.

<a name="explain"></a>
## 4. Explaination of Solution
We decided to have one client web app used by users. Another administration interface might be introduced in the future.

We are using ReactJS as our frontend framework since it’s simple and efficient. Typescript and linter were added to make sure the code is easily debugged, easily read, and as clean as possible. Using Redux to store and organize the data retrieved from the backend, making it available to all of the frontend components.

Unit tests using Jest and Enzyme were added to make sure that future changes won’t break the existing code. The SOLID principle was followed to make each of our components visible and with clear responsibilities, each of our components does only one thing at a time.

That client communicates with the backend microservices using a middleware/proxy called user-proxy, which is a Node ExpressJS app responsible for load-balancing and assuring the safety of the backend servers and microservices as well as the user’s data since such data might be sensitive. Typescript and Linter were also added to the middleware for the same purpose explained above. SOLID was also followed, as each of our API middlewares has only one clear job.

User authentication will be done by user-proxy which communicates with its own MongoDB database, this was done to make sure that no one can access any of the backend microservices and databases unless they’re authored and have access to the exact resource they’re trying to access. A middleware function will be called before any of the API middle-points checking the authority of the accessor. 

Here’s a sample diagram of the flow of a test post request to the endpoint/test:

![alt text](https://github.com/Goalify/front-end/blob/main/design.png?raw=true)

After all of the user authentications are handled by the middleware, the valid requests are sent to the core server. 

We have decided to use Flask as the main framework for the core server because of its flexibility and the compatibility it embraces with the latest technologies. Moreover, it is easy and highly scalable on simple projects. Principles such as KISS and SOLID were followed during the development to make the process of debugging and adding new features simpler and more efficient. The core server is connected to a MySQL database, which stores all data except for the users’ credentials. MySQL was selected as it is secure, flexible, and easy to set up. 

Showing how we applied SOLID to our front-end, we only let our classes have a single responsibility. For example class `addGoalModal` is only responsible for adding a new goal. Class `DbClickField` only shows some text that can be edited by pressing twice on the text, and so on. We followed Liskov substitution principle by using typescript since it can easily swap components if they share the same contract. We followed interface segregation principle by having multiple interfaces (e.g. `goal`, `milestone`) instead of designing a single interface to substitute them all. We followed dependency inversion principle by making sure that child classes depended on abstraction from parent classes, for example the `GoalsList` sends functions to the class `GoalItem` and these functions will be used by the child class to edit the goal. `GoalItem` doesn't depend on the implementation of the functions from `GoalsList`. Those functions can be edited without affecting the child class.

We followed KISS principle by not over-engineering anything and using the simplest methods to achieve objectives. We don't for example use any advanced techniques in react in our front-end such as Compound Components, Props Getters, and State Reducer.

Architecture:

![alt text](https://github.com/Goalify/front-end/blob/main/arc.png?raw=true)


Front-End Class Diagram:

![alt text](https://github.com/Goalify/front-end/blob/main/classdiagramfrontend.jpg?raw=true)


<a name="diff"></a>
## 5. Difficulties
We had three main problems during development. First problem was the difficulty connecting docker containers with each other. We were using `localhost` as the DNS names in some
cases and it took us some time to realise that docker changes the DNS names of the services from localhost to their name in the docker-compose file.
After changing the DNS name the services started "seeing" each other.

The second difficulty is that in the machine that we were using to develop our middleware, strange problems were happening and the middleware would fail for no reason.
It turned out that some old configurations were cached by the machine and was interfering with our set up. Luckily, after clearing the cache everything worked out.

The last problem was the development of the app on different machines with different OSs and configuration which caused a lot of compatibility issues during development. We were able to sort everything out eventually.


<a name="con"></a>
## 6. Conclusion


<a name="demo"></a>
## 7. Demo

