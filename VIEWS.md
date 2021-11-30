# Dashboard

- `/`
  - todays orders statistics (remote and local)
  - list of events and reservations planned for today

# Login [DONE]

- `/login`
  - login and password input fields
  - login button (links to dashboard)

# Table availability view

- `/tables`
  - date and hour choice field
  - table for events and reservations
    - each column = 1 table
    - each row = 30 minutes
    - resembles week view in Google Calendar where in columns instead of days of the week are numbers of tables
- `/tables/booking/:id`
  - contains all information regarding the booking
  - allows to edit and save changes
- `/tables/booking/new`
  - by analogy with the above, without the information part
- `/tables/events/:id`
  - by analogy with the above, but for events
- `/tables/events/new`
  - by analogy with the above, for events and without the information part

# Waiter view

- `/waiter`
  - table
    - tables in rows
    - in columns various information (status, time from last activity)
    - in last column actions available for chosen table
- `/waiter/order/new`
  - number of table (editable)
  - products menu
  - options for chosen table
  - order (products and price)
  - order total amount
- `/waiter/order/:id`
  - as above

# Kitchen view

- `/kitchen` [DONE]
  - list of orders sorted according to time of placement
  - list must contain:
    - table number || remote order number
    - full information about order products and prices
  - it must be possible to mark the order as completed on the list