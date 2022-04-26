# User Management Application

## Description

Angular user management web application written in TypeScript that demonstrates CRUD operations. Application uses the [Go REST online public API](https://gorest.co.in). A redux-style state management layer handles storing the authenticated user, the list of users, and the page status of the user list and detail screens.

[View App](https://d2ms4femv3hpqr.cloudfront.net/)
### Login
Login crendentials are passed to auth store via a dispatched action on valid form submission. The store calls the auth service to validate the user credentials. 

Hardcoded Login credentials:
- Email: admin@anycompany.com
- Password: password
### User List
An action is dispatched on load of the user list screen. The user store listens for this action and retrieves the users from a service call to the API. The list screen selects the user state slice and an Angular Material Table is utilized for display and sorting capabilities.

### User Detail
For the user detail screen, a route guard ensures that the user id is valid. This comparison is done against the user state slice. If time was of no limit, the workflow would first check the user state slice for the id. If not found, would then check against an API call before proceeding. On load, the route is checked for the id param. If not found, this is a "create" page and a blank form is shown. If found, an action is dipatched to load that user's info.

### Deployment
Deployed to an Amazon S3 Bucket and distributed by Amazon Cloudfront.

## To-Do List

1. App Framework
   - Utilize Angular CLI :heavy_check_mark:
   - State Management: NGXS :heavy_check_mark:
   - UI Framework: Angular Material :heavy_check_mark:
2. Login Screen
   - UI :heavy_check_mark:
   - Add Form (utilize Angular Material UI) :heavy_check_mark:
   - Add Form Validation :heavy_check_mark:
   - Add error messaging :x:
3. Users List Screen
   - UI :heavy_check_mark:
   - Get Data :heavy_check_mark:
   - Loading "Skeleton" :x:
   - Pagination :x:
   - Edit User UI notification / animation :x:
   - Sortable Table (utilize Angular Material UI) :heavy_check_mark:
   - Add New User feature :heavy_check_mark:
   - Delete User feature :heavy_check_mark:
4. User Detail Screen
   - UI :heavy_check_mark:
   - Get Data :heavy_check_mark:
   - Create :heavy_check_mark:
   - Edit :heavy_check_mark:
   - Add Form Validation :heavy_check_mark:
5. Jazz up UI :heavy_check_mark:
6. Jazz up UI more :x:
7. Title Service :x:
8. Create API layer :x:
9. Unit Tests :x:
10. Documentation :heavy_check_mark:
11. Deployment
    - Amazon S3 :heavy_check_mark:
    - Amazon Cloudfront :heavy_check_mark:
    - Add custom error responses to handle Angular routing :heavy_check_mark:
