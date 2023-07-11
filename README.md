<p><img src='https://github.com/lastiknastik/avito/blob/master/public/logo-project.png'/></p>

# About SkyVito

Final individual project. Online classifieds app similar to Avito.

## Before you begin

1. Install and run [https://www.docker.com](Docker)
2. Download backend project via [this link](https://drive.google.com/file/d/1pFE-NRANTsWmQwTyURjHXuECMmoKCFjO/view)
3. Unzip backend project and run `docker-compose -f docker-compose-backend.yaml up -d` command in unzipped directory using terminal (second run may be required)
   > To stop backend run `docker-compose down` in terminal window
4. Install dependencies by running `npm install` in vs studio code terminal

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Used technologies

JavaScript, React, Redux

## Implemented scope

1. Main page
2. Authentication
3. Sign up and sign in. Known bugs: forms does not have validation
4. Profile page
5. Advertisement page
6. Create new Advertisement
7. Advertisement withdrawal
8. Advertisement editing
9. Log out
