### Hack@Princeton 2021

Our project is split among the following repositories:
1. Front end (this repository)
2. Back end #1 (Heroku) https://github.com/SreehariRamMohan/happn-be
3. Back end #2 (Google Cloud) https://github.com/SreehariRamMohan/happn-gcloud

Please note, the website is no longer hosted on google cloud, but both servers & the front end can be run locally. 

**Demo video**: https://www.youtube.com/watch?v=8h03zvQXdjE



### What it is

Happn is a new approach to social media that automates the process of meeting new people. After responding to a set of questions, we use an AI model to match you with similar-minded people. You can chat with and engage with new people directly through our website. 

Our matching algorithm works by using an NLP sentence embedding model (credit to FB Research, InferSent) to convert each response into a vector in embedding space. We then use cosine similarity to match each user with other users who share similar interests.



### How it's built

- We built our front end with React, Javascript, and Material UI.

- We have two backend Flask servers.
  - Our first flask server handles user metadata API calls as well as websocket communication for user chat. This server communicates with MongoDB to store user information, as well as serving as a proxy to flask server #2 (which is connected to a powerful VM instance on google cloud)
  - Our second flask server handles machine learning computations using our sentence embedding model. We use sqlite3 to store sentence embeddings associated with mongo user IDs, iterating over the database to find similar matches (where similar is defined by cosine similarity)



### Login

![Alt text](readme_res/login.png?raw=true "Login")



### Questionnaire

Users respond to 5 questions, which we then analyze to provide them with 5 matches who they can chat with / engage with. 

![Alt text](readme_res/questionnaire.png?raw=true "Questionnaire")



### Profile

Profiles are originally hidden from matches, aspects of your profile are selectively shown to matches as the conversation continues. 

![Alt text](readme_res/profile.png?raw=true "Profile")



### Chatting

We originally hide all personal profile information from matches, this is revealed slowly as messages are interchanged. 

![Alt text](readme_res/chat.png?raw=true "Chat")

