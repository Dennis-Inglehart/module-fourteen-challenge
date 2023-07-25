# Tech Blog

![MySQL](https://img.shields.io/badge/MySQL-%5E8.0.23-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-%5E6.6.5-blue)
![Handlebars.js](https://img.shields.io/badge/Handlebars.js-%5E4.7.7-blue)

Tech blog is everything you could want in a basic blog site.

Users can create an account, login with their account, post blogs while logged in, comment on any extant blog entry while logged in, and log out.

## Screenshot

....work in progress

## Usage Instructions

The usual:

* in the terminal, run the command `npm install`
* in the terminal, run the command `npm start`
* it shouldn't need any dependencies to be installed especially, but y'never know
* it should be running on `http://localhost:3001/`

The Heroku deployment doesn't work (at the time of writing), but here's the link to it anyway: [Heroku link](https://module-fourteen-challenge-f4270abae08c.herokuapp.com/)

Seeding the database is awkward, but once the database is created and seeded, this app will do something. You'll need to have a `.env` file in the root directory, filled out with `DB_NAME=articles_db`, and `DB_USER=[your-name-here]`, and `DB_PASSWORD=[your-password-here]`

### Note on Heroku link

I'm 90% sure that the reason the app won't start on the Heroku deployment is: Heroku is asking Port 3306 if there's a database, and there's supposed to be one (on localhost (127.0.0.1), incidentally), but there's not.

So: if I seeded my own database, my heroku deployment would work. But I am desperately short on time, and can not trouble myself with doing so.

## Future Development

For better or worse, the time constraints on this project left a lot of room for this.

All the code here so far is merely a template. The core functionality is mostly here already, completion is mostly a matter of renaming a bunch of stuff (varuiables, routes, filenames, etc.) and modifying the database so it makes sense.

Also, the entire front end needs to be addressed. But our `main.handlebars` already looks good, so that shouldn't be too big of a deal.

## Accreditation

This code here is modeled heavily after a in-class project in the curriculum content. It's essentially copied whole cloth. The source of the model is: (/14-MVC/01-Activities/28-Stu_Mini-Project/Main)

I myself have made no meaningfulcontributions to any part of the code.
