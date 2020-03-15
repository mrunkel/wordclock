# PlusForta, GmbH CraftCMS

# Prerequisites

* The [devtools](https://bits.pfdev.de/projects/TOOL/repos/devtools/browse) project must be up and running on your
  machine.
* mysql and mysqldump (from Oracle, *not* from MariaDB) must be installed on your machine. [Instructions here](#mysql) 

# Getting Started
* Clone this repo to your local computer
* Switch the staging branch
* Copy the contents of this [sheet](https://docs.google.com/spreadsheets/d/169cR637qSSb07I-2AgRHK4tepnt3OECzJzW)
  and paste it into a .env file in the root of this project. 
* run scripts/getdb.sh
* start the containers with `docker-compose up -d`

That's it. It's up and running.   You can access the sites directly at:

* [https://local-kv.pfdev.de](https://local-kv.pfdev.de)
* [https://local-aak.pfdev.de](https://local-aak.pfdev.de)

The craft panel is accessible at [https://local-kv.pfdev.de/panel](https://local-kv.pfdev.de/panel)

If you'd like, you can also access the site through browserSync at [http://localhost:3010](http://localhost:3010)

# <a name="mysql">Setting up the mysql client</a>
You need the latest mysql client from Oracle in order to download the database from the staging server. 
## For MacOS

1. `brew install mysql-client`
1. `brew info mysql-client`
1. There will be a command similar to `echo 'export PATH="/usr/local/opt/mysql-client/bin:$PATH"' >> ~/.zshrc` displayed.
   Copy and paste that command into your shell.
1. Close and open your shell.  Verify that mysql --version doesn't mention about mariadb.    

## For Windows

1. No fucking clue, maybe here: https://dev.mysql.com/downloads/shell/
# wordclock
