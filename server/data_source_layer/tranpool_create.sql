CREATE TABLE nhl.owners (
owners_id INT NOT NULL AUTO_INCREMENT,
email VARCHAR(255),
passwords VARCHAR(255),
firstName VARCHAR(255),
lastName VARCHAR(255),
PRIMARY KEY(owners_id)
);

CREATE TABLE nhl.team(
team_id INT NOT NULL AUTO_INCREMENT,
owners_id INT,
team_name VARCHAR(255), 
PRIMARY KEY (team_id),
FOREIGN KEY (owners_id) REFERENCES owners(owners_id)
);

CREATE TABLE nhl.roster(
roster_id INT NOT NULL AUTO_INCREMENT,
team_id INT,
PRIMARY KEY(roster_id),
FOREIGN KEY(team_id) REFERENCES team(team_id)
);

CREATE TABLE nhl.player(
id INT NOT NULL AUTO_INCREMENT,
roster_id INT ,
firstName VARCHAR(255),
lastName VARCHAR(255),
team VARCHAR(255),
positions ENUM('LW','C', 'RW', 'D', 'G'),
cap INT,
active BOOLEAN,
PRIMARY KEY (id),
FOREIGN KEY	(roster_id) REFERENCES roster(roster_id)	
);