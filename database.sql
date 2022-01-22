CREATE TABLE tasks (
"id" serial primary key,
"task" varchar(250) not null,
"completionStatus" boolean default false
);

INSERT INTO tasks ("task", "completionStatus")
VALUES ('Vacuum apartment', false),
('Go for a run', false),
('Walk the dog', false),
('Shovel the driveway', false),
('Take out the trash', false);
