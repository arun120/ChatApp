# ChatApp

Chat Application that supports multiple chatrooms.

# Architecture

User/Process ---- send data to websocket in server(websocketController) ----> Log data in MessageDB(static DB) ---> Broadcast to all in current Chatroom

User Joining a Existing Chatroom

Retrieve data from static DB and display ----> register broadcast listeners ----> free to access chat



chat/{id} -> access Chatroom with the given id


# Command Start the App
1) npm install (First Time Only)
2)npm start

# Endpoints

http://localhost:3000/chat/{id} , change the id to access different chatrooms. 

# Example
http://localhost:3000/chat/1
http://localhost:3000/chat/2
http://localhost:3000/chat/3
