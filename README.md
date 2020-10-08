# fa20-cmpe-202-sec-03-team-project-202-team
Waiting for edit!

Github Project Management:

User story => 	Issue\
Task => Task lists\
Epic => Epics\
Points and estimation => 	Weights\
Product backlog => 	Issue lists and priority labels\
Sprint/iteration => 	Milestones\
Burndown chart => 	Burndown charts\
Agile board => 	Issue board

# HomeFinder - Find your next home

## Problem Statement
    Develop a web application that lets users buy, sell or rent homes
    (Something like Zillow.com – it is recommended you visit one of these sites to get familiar with the
    problem space and terminology)

### Requirements
    1. Administrator - the administrator
    2. User (Renter, Landlord, Buyer, Seller) – Renter and Landlord are specific to rental listings;
    Buyer and Seller are specific to Home Sale listings
    3. Realtor – a real-estate agent who can act on behalf of any type of User 

### Usecase(required)
1. <strong>Register/Login</strong>: 
    Available for all roles
2. <strong>
    Approve/Remove users</strong>: The administrator can approve, reject or remove any users if the
    need arises.
3. <strong>Search</strong>: 
    All types of roles can search for Sale or rental listings - based on zip code or street
    address, and/or other attributes – price range, sqft., #bedrooms, #bathrooms, carpet vs
    wooden flooring, home type (apartment/townhome/attached Single Family Home or Detached
    Single), open/closed parking, other amenities, Year built etc.
4. <strong>Save as Favorites</strong>: 
    Users are able to save Favorite searches and Favorite Homes
5. <strong>Sell</strong>: (Realtor or Seller)
    Upload details of home to be listed
    You could list multiple homes if you are a realtor(acting on behalf of multiple sellers)
    Update status or other details of listing(s)
    Schedule open houses
    Review buyers’ applications and approve/reject
    Remove listing
6. <strong>Buy</strong>: (Buyer or Realtor)
    Submit an application with an offer for the home –an email sent to the Seller/seller’s realtor
7. <strong>Rent out (Realtor or Landlord)</strong>: 
    Add new listing, Upload details of home, Update lease terms,
    Availability date, Security deposit, schedule visits, Review renter’s applications and
    approve/reject, update listing details, remove listing
8. <strong>Rent (Renter)</strong>: 
    Submit an application for the lease, including credit score, employment
    information - an email sent to the Landlord/landlord’s realtor

#### Database Class Diagram
    ![Image](./app/src/img/wireframe.jpg)