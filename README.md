# JS-Discord-Bot
JavaScript discord bot with cool commands and a cool game feature

## General Commands
All commands require the `,` prefix
#### `botinfo`
Displays information about the bot (Date created etc)

#### `serverinfo`
Displays information about the server (Date created, members, roles etc)

#### `whois {@user}`
Displays information about a specified user (Roles, status, defeaned, muted etc)

#### `posts`
Gets posts from my flask application's JSON data and displays them

#### `users`
Gets users from my flask application's JSON data and displays them

#### `report {@user} {reason}`
Submits a report about a specified user for the administrators to review

## Game Commands

#### `coins {@user}`
Displays the amount of coins a specified user has, if user is null it will display your coins

#### `work`
Every 10 seconds a user can work to get a random amount of coins (1-30). There is a 1/100 chance that
the user will be killed at work and will lose 10% of their total coins

#### `crime`
Every 30 minutes a user can commit a crime. There is a 50% chance that they will get away with it and receive
a random amount of coins (1-1500). However if they don't get away with it, they will lose 10% of their coins

#### `rob {@user}`
The user will rob one of their friends (specified). There is a 50% chance that it will be successfull and the user
will recieve 2% of the victims coins. If they're not successfult then they will lose 2% of their coins. 

#### `roll {amount}`
The user can put an amount of their coins to 'bet' on. They will roll a dice and if the result is an even number
then they will recieve 2x the amount of coins they put in. If it's odd then they will lose what they put in.
