# Dashboard

- `/` [DONE]
  - todays orders statistics (remote and local)
    - table with 2 rows (remote + local)
    - 2 columns in row (number + number)
  - list of events and reservations planned for today
    - list from static table (hour, table, type: event/booking

# Login [DONE]

- `/login`
  - login and password input fields
  - login button (links to dashboard)

# Table availability view [DONE]

- `/tables`
  - date and hour choice field [done]
  - table for events and reservations [done]
    - each column = 1 table
    - each row = 30 minutes
    - resembles week view in Google Calendar where in columns instead of days of the week are numbers of tables
- `/tables/booking/:id` [done]
  - contains all information regarding the booking
  - allows to edit and save changes
- `/tables/booking/new` [done]
  - by analogy with the above, without the information part
- `/tables/events/:id` [done]
  - by analogy with the above, but for events
- `/tables/events/new` [done]
  - by analogy with the above, for events and without the information part

# Waiter view [DONE]

- `/waiter` [done]
  - table [done]
    - tables in rows [done]
    - in columns various information (status, time from last activity) [done]
    - in last column actions available for chosen table [done]
- `/waiter/order/new` [done]
  - number of table (editable)
  - products menu
  - options for chosen table
  - order (products and price)
  - order total amount
- `/waiter/order/:id` [done]
  - as above

# Kitchen view [DONE]

- `/kitchen`
  - list of orders sorted according to time of placement
  - list must contain:
    - table number || remote order number
    - full information about order products and prices
  - it must be possible to mark the order as completed on the list