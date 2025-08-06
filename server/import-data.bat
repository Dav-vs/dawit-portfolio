@echo off
echo Importing data to MongoDB Atlas...

echo Importing Hero data...
mongoimport --uri "mongodb+srv://davsis1993:DJ8lKgguUWX70xPP@cluster0.8yuqkkn.mongodb.net/portfolio" --collection hero --file hero.json --jsonArray

echo Importing About data...
mongoimport --uri "mongodb+srv://davsis1993:DJ8lKgguUWX70xPP@cluster0.8yuqkkn.mongodb.net/portfolio" --collection about --file about.json --jsonArray

echo Importing Projects data...
mongoimport --uri "mongodb+srv://davsis1993:DJ8lKgguUWX70xPP@cluster0.8yuqkkn.mongodb.net/portfolio" --collection projects --file projects.json --jsonArray

echo Data import completed!
pause 