My application is completely built on javscript.



Front end tool with libraries-
ReactJS
react-router-dom for routing the components
axios for making API calls




Back end tool with libraries-
cors crossorigin  
dotenv for saving environment variables
express for making rest apis
mongoose ORM for making schema and models
nodemon 
--------------------------------------------------------------------------------------xxxxxxxx--------------------------------------------------------
DESCRIPTION

I have created the dataset and not used a third party API for this project. The dataset is contained in the serverfile named as flight.json.

After importing the dataset using mongodb I created a schema and respectively a model for the data using the mongoose ORM. the datamodel contains all the data about a flight like flightid,name and updates which should be mentioned. 

Flightid will be unique as that is unique key and can be used in this case as a method to differentiate between several flights.

After that I created the API, particularly a GET request because we had to display the data and not post or delete anything. 

Furthermore, I also created another API request to display data of a particular flight bu using the flight_id.

After creating the get request and creating an end point, I used thunderclient for checking if the API hits.

Then I created the frontend aspect of the project on ReactJS. Using Axios I called the API on the frontend. The display is in the form of list where every data is visible of a particular flight.


