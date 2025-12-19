Paradise Nursery Shopping Cart App
Table of Contents
Introduction
Course Information
Information about the Project
General
Tech Stack
Getting Started
Contact

Introduction
This repository was created as part of IBM's "Developing Front End Apps with React" course.
A React application was created as a final project: Paradise Nursery Shopping Cart App.

With this application, users can select plants in an online plant shop and add them to the shopping cart.

Home screen:

image

After clicking on the “Get Started” button, the selection that the user can make appears.
Examples:

image

image

image

The user receives feedback when making a selection, which improves the user experience.
See, for example, the grayed-out button on selection or the number of products in the shopping cart at the top right.

image

Once the selection has been made, he can display the contents by clicking on the shopping cart.
If necessary, the quantity can be increased or decreased.

image

If the user still has requests and would like to display the product list, they can click on the “Continue Shopping” button.

image

The implementation of the checkout button was not part of the project.
To inform the user of this, an alert is displayed when the button is clicked:
image

More is currently not possible in this application.

(back to top)



Course Information
Title: Developing Front End Apps with React
Type: Final Project
Course Provider: IBM

(back to top)



Information about the Project
General
Client: Myself
Project Goal: Expand the web user interface of the existing React application. Practice working with React, Redux and the Redux Toolkit.
Number of Project Participants: 1 (Cloned repository of IBM. Developed the rest on my own)
Time Period: October, 2024
Industry / Area: Web Development
Role: Developer
Languages: English
Result: Expanded existing React application successfully. Improved understanding of React, Redux and the Redux Toolkit.

Tech Stack
With regard to my role:

HTML
CSS
JavaScript
React
Redux (with Redux Toolkit)
Web Hosting: GitHub Pages
IBM Cloud IDE (based on Theia and Container)
(back to top)



Getting Started
If you want to visit the website: Visit the link in the GitHub repository.

If cloning / forking code: The project was developed using the IBM Cloud IDE.
Setup not tested on private IDE.

Setup description from the course (slightly modified for my own project) in the IBM Cloud IDE:

Clone repository
Change terminal path to folder "paradise-nursery-shopping-cart-app". E.g.:
cd paradise-nursery-shopping-cart-app
Install necessary packages to execute the application using npm:
npm install
Execute this command to run the application, which will start the application server running on port number 4173.
In IBM Cloud IDE there was an extra feature for this, where the port was entered and the application was started.
npm run preview
image

The application can be stopped with Ctrl + C.
Step 4 must be repeated for each change to be visible.

If changes are made to the code, these must be deployed so that they are displayed on the hosted GitHub Pages website.
First install the required packages as in step 3.
Then enter the following command:

npm run deploy
This commits changes in the gh-pages branch and updates the website.
A success message appears in the terminal:

image

(back to top)


Contact
If you have any questions, please feel free to reach out via email: christian-schwanse (at) gmx.net

(back to top)
