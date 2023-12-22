Website Name: Task Management Website

Website Live Link (Firebase): https://task-management-auth-4059b.web.app/

Alternative Live Link (Netlify): https://658547c0e2582c9f68e19b7d--fanciful-arithmetic-d565b4.netlify.app/ 

Server Live Link (Vercel, if requires): https://task-management-server-jet.vercel.app/ 

This website is implemented on the concept of task management. React, React Router, Node, Express, MongoDB, Firebase authentication tools and technologies are used to implement the task management website. The main features of this website are described below:

Features: 

* A navbar with home, dashboard, features, and pricing routes is implemented. 
* A footer with social links is implemented.
* A banner section with background image and let's explore button has been created. When the user clicks on the let's explore button, it will redirected to dashboard. But if the user is not logged in, then it will redirects to login page.
* Firebase authentication has been implemented for user login. If the user has no account then there is register page to create account. Password validation added. Example password: 1234567Mnpq$ 
* User dashboard is a private route. So, user needs to login first to visit dashboard.
* At the user dashboard, there is a profile section to see user profile. Create tasks option has been implemented to create new task. When the user create task it will display at To Do list. At to do list, there are four options, ongoing, completed, edit and delete. When the user clicks on ongoing, the task will display at Ongoing list page. If the user clicks on completed, the task will display at Completed list page. User can see his completed tasks at previous task page also. When user clicks on edit, then user will be able to edit task. If the user clicks on delete, a confirmation will be shown and if user confirms to delete, task will be deleted. 