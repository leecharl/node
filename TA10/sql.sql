create table person (
    person_id serial primary key not null,
    first_name text,
    last_name text,
    dob date
);

create table relationships (
    relationship_id serial primary key not null,
    parent_id int references person(person_id),
    child_id int references person(person_id)
);
