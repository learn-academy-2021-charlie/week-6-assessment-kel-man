# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key?
    Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Because it is the belongs_to association that is missing, you would create and run a migration called AddBelongsToAnimalToSighting that changes the sighting table to have the
                `t.belongs_to :animal` association. Rails knows what to do with this, and adds an integer value of animal_id to the sighting table. This animal_id integer is the foreign key and
                is part of the Sighting model. If you also forgot to add the other half of the association, all that is needed is to add a line to the Animal model file that states `has_many :sightings`
                The above migration will not execute if the Animal model is missing this association declaration.

  Researched answer:



2. Which RESTful API routes must always be passed params? Why?

  Your answer: PATCH and DELETE must be given params on a strict technical basis. This is because both these actions MUST refer to a specific data entry or series of entries. However, in a properly formatted
              API, POST should also require params because validations should be in place to disallow the creation of entries containing no data. GET is the consolidation of several REST actions and can be
              passed params to direct it to the `edit` or `show` methods, but can also be used without params in order to access the index of all entries.

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: `rails g model` creates a migration that creates a table which inherits from ActiveRecord::Base when run. This command can accept an indefinite amount of arguments to describe the columns and associations of said table.
               `rails g controller` will create an empty boilerplate controller for a model that inherits from ApplicationController.
               `rails g migration` will create a migration that changes an already existing table. Technically one could also use this to create a new table, but this would be inefficient as `rails g model` does some of this work for us.
               `rails g resource` will generate a model, routes, and controller for a new table. If one of these already exists, this command will fail.

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students
Method: index
Action: Displays a list of all entries to the Student table, or a list of entries according to behavior defined by the index method(i.e. all entries by this user if necessary to protect info)

method="POST"   /students
Method: create
Action: Attempts to create a new entry to the Student table with given params. If validations are in place, this entry may fail. If so, conventions usually dictate that the user is redirected to the place they sent the query from

method="GET"    /students/new
Method: new
Action: Creates an empty object from class Student and directs the user to a form view where they can modify the attributes of this entry before attempting to post it.

method="GET"    /students/2
Method: show
Action: Displays one specific database entry from table Student with id:2

method="GET"    /students/edit/2
Method: edit
Action: Finds the Student entry with id:2 and then redirects the user to a form view where the values of the Student model are already populated by the current values held in the database, so the user may edit the entry

method="PATCH"  /students/2
Method: update
Action: Takes the given params and updates the Student entry with id:2 with the new values defined by the user in the edit form.

method="DELETE" /students/2
Method: destroy
Action: Destroys the Student entry with id:2 from the database, if it exists. Typically, if this entry is nonexistent then a 404 error code will be sent to the user. If this call is successful, the user could be redirected to the index.



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories]
    (https://www.atlassian.com/agile/project-management/user-stories).

    -- As a user, I can see a list of all my to-do tasks with their current status(complete, incomplete, in progress, etc.). This view should be clearly and easily understandable.
    -- As a user, I can add a new task to my to-do list
    -- As a user, I can delete an item from the to-do list.
    -- As a user, I can select a task from my list to display it in more detail
    -- As a user, I can edit the content or status of an item on my list through its individual view
    -- As a user, I can assign each task to one or more teammates(including myself)
    -- As a user, I can view a list of only the tasks belonging to me
    -- As a user, I can add and view a projected time of completion for a task
    -- As a user, I can add an actual time-to-complete value to a task upon marking it complete
    -- As a user, I can see a comparison of all projected completion times and all actual completion times that shows if my team is on schedule
