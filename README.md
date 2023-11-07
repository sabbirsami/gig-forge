## Gig Forge

```javascript
https://sami-gig-forge.web.app/
```

## Project features

1. Show job card Browse By Category. When user clicked on bid button it will redirect job details page.
2. : When the 'Bid on the project' button is clicked, data will be stored in a MongoDB database. Once the data is saved, it will show a toast and after that user will be redirected to the My Bids page.
3. In My bids page user will see all the bid information. And bit status initially is pending. If the job owner rejects the bid then status will be canceled. Or if the bid is accepted by the job owner (who posted this job) status is in progress. If the status is in progress the complete button is enabled. After clicking the complete button, status is complete and the complete button will disappear again.
4. In Bid Requests page job owner will see all the bid requests made by the users on their posted jobs in tabular format in this page. Initially accept button and reject button will be enabled. after clicking the Reject button the status will be changed to canceled after clicking the Accept button the status  will be updated to in progress and both accept button and reject button will disappear In the place of these buttons a progress bar will be visible containing the current status of the job.
5. Some routes are private/protected route. If the user is not logged in, the private route redirects to the login page and when user login he/she will redirect where he/she came from.
6. Implement password validation:
    - is less than 6 characters
    - don't have a capital letter
    - don't have a special character
7. show message when successfully login/register and show error message for:
    - password doesn't match
    - email doesn't match
8. Once logged in, the user name, profile picture and the logout button should appear on the header. If the user clicks on the logout button, make sure to log him/her out.
9. The website title will be changed according to the route you are clicking.