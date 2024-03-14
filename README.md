# https://travelwp-b7eb6.web.app/

# Admin Dashboard Page (Protected)

When an admin clicks on the Dashboard, he/she will be redirected to a page where there
will be the following routes:

1. My Profile
2. Add Package
3. Manage Users
   My Profile - Show relevant information here.
   Add Package - Add Packages will take relevant information discussed in Package
   Details Page using a form.
   Manage Users - Show relevant information here with Role (by default User/ Tourist)
   in a tabular form with 2 buttons: Make Admin and Make Tour Guide. If an admin clicks on
   any of the buttons, both of them will be disabled and the Role will be changed
   according to it.

# Tour Guide Dashboard Page (Protected)

When a tour guide clicks on the Dashboard, he/she will be redirected to a page where
there will be the following routes:

1. My Profile
2. My Assigned Tours
   My Profile - Show the tour guide’s information and picture. Below, keep a form for
   adding a guide’s profile as discussed in the Tour Guide’s Profile Page .
   My Assigned Tours - A tour guide will be able to see all the assigned tours in tabular
   form. Each row will have the name of the package, tourist name, tour date, tour price,
   an Accept button and a Reject button. If the tour guide clicks on the Reject button, the
   In Review status will be changed to Rejected and if a tour guide clicks on the Accept
   button, the status will be changed from In Review to Accepted in My Bookings page of
   a tourist.

# Tourist Dashboard Page (Protected)

When a tourist clicks on the Dashboard, he/she will be redirected to a page where there
will be the following routes:

1. My Profile
2. My Bookings
3. My Wishlist
   My Profile - show the user’s information and picture. Below, keep a form for adding a
   story.
   My Bookings - A user will be able to see all the bookings in tabular form. Each row will
   have the name of the package, tour guide name, tour date, tour price, status(In Review/
   Rejected/ Accepted) , a Pay button, a Cancel button and an Apply button. The Cancel
   button will only appear for the rows that will have the In Review status and Pay button
   will only be enabled when the status will change from In Review to Accepted. The Apply
   button will be disabled. See the challenge in point 4 bonus.
   My Wishlist: This section will show a table of all the packages added by clicking on
   the heart icon and also have twoButton: Delete, Visit Details. By clicking delete button,
   a user can delete a wishlist and by clicking the Visit Details button, a user can visit the
   package details page.

# Tour Guide Profile Page

name, profile picture, contact details, education, skills, work experience, etc.
