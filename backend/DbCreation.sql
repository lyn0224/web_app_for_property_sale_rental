create database CMPE202;

use CMPE202;

-- ACCOUNT table is to store all users account info
create table ACCOUNT (
ID        INT          NOT NULL AUTO_INCREMENT,
username  VARCHAR(200)   UNIQUE NOT NULL,
Email     VARCHAR(200)   UNIQUE NOT NULL,
psswd     VARCHAR(200)   NOT NULL,
a_type      CHAR          NOT NULL,
approved  CHAR            NOT NULL,
PRIMARY KEY(ID));
/* a_type is account type and it only holds 2 values
   U --> regular users
   R --> realtors
   A --> admin
   
   approved is status of user account
   Y --> approved by admin
   P --> pending approval
*/

-- REALTOR table is to store realtor's additional info
create table REALTOR (
U_ID       INT          UNIQUE NOT NULL,
Fname      VARCHAR(50)  NOT NULL,
Lname      VARCHAR(50)  NOT NULL,
Email      VARCHAR(50)  UNIQUE NOT NULL,
phone      CHAR(10)     UNIQUE NOT NULL,
zipcode    CHAR(5)      NOT NULL,
sales       INT,
rent        INT,
sepcialty   CHAR        NOT NULL,
PRIMARY KEY (U_ID),
FOREIGN KEY (U_ID) REFERENCES ACCOUNT(ID)
					ON DELETE CASCADE  ON UPDATE CASCADE);
-- specialty takes values of either s (for sales) or r (for rents) or b (for both sales/rents)

-- FOR_SALE table stores all info about properties listed for sale
create table FOR_SALE (
S_ID           INT    NOT NULL AUTO_INCREMENT,
Owner_ID       INT           NOT NULL,
Realtor_ID     INT,
property_type  CHAR          NOT NULL,
apt_num        INT           ,
street_num     INT           NOT NULL, 
street         VARCHAR(100)   NOT NULL,
city           VARCHAR(15)   NOT NULL,
state          CHAR(2)       NOT NULL,
zip            CHAR(5)       NOT NULL,
sale_status       CHAR       NOT NULL,
price          INT            NOT NULL,
bedroom        INT            NOT NULL,
bathroom       INT            NOT NULL,
livingroom         INT            NOT NULL,
flooring       VARCHAR(20)    NOT NULL,
parking         INT           NOT NULL,
area            INT            NOT NULL,
year_built      INT           NOT NULL,
pic_dir       VARCHAR(100)   NOT NULL,
PRIMARY KEY (S_ID),
FOREIGN KEY (Owner_ID) REFERENCES ACCOUNT(ID)
					ON UPDATE CASCADE  ON DELETE CASCADE,
FOREIGN KEY (Realtor_ID) REFERENCES REALTOR(U_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE);
/* property_type is property type and it can be following
   A --> apartment
   H --> house
   T --> town house
   
   sale_status
   S --> Sold
   A --> Available
   
   flooring --> carpet/wood
   
   pic_dir --> folder directory of the photos
*/

-- Favorite_search
create table favorite_search(
U_ID           INT           NOT NULL,
search_type    CHAR          NOT NULL,
min_price      INT,
max_price      INT,
bedroom        INT,
bathroom       INT,
home_type      CHAR,
zip_code       INT,
FOREIGN KEY (U_ID) REFERENCES ACCOUNT(ID)
					ON DELETE CASCADE  ON UPDATE CASCADE);
/*
search_type 
S --> search for properties on sale
R --> search for properties on rental
*/

-- Favorite_home
create table favorite_home(
U_ID           INT           NOT NULL,
home_type      CHAR          NOT NULL,
properity_id   INT           NOT NULL,
FOREIGN KEY (U_ID) REFERENCES ACCOUNT(ID)
					ON DELETE CASCADE  ON UPDATE CASCADE);
/*
home_type 
S --> homes on sale
R --> homes on rent
*/
                    
-- OPEN_HOUSE stores open house time for FOR_SALE properties                 
create table OPEN_HOUSE (
S_ID           INT           NOT NULL,
from_date       DATETIME      NOT NULL,
to_date         DATETIME      NOT NULL,
PRIMARY KEY (S_ID),
FOREIGN KEY (S_ID) REFERENCES FOR_SALE(S_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE);

create table BUYER_APPLICATION(
Buyer_ID       INT           NOT NULL,
property_ID           INT           NOT NULL,
Fname          VARCHAR(50)   NOT NULL,
Lname          VARCHAR(50)   NOT NULL,
offer_price    INT           NOT NULL,
offer_status   CHAR          NOT NULL,
PRIMARY KEY (Buyer_ID, property_ID),
FOREIGN KEY (Buyer_ID) REFERENCES ACCOUNT(ID)
					ON UPDATE CASCADE  ON DELETE CASCADE,
FOREIGN KEY (property_ID) REFERENCES FOR_SALE(S_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE);
/*
offer_status 
	P --> pending
    R --> rejected
    A --> approved
*/
                    
-- FOR_RENT table stores all info about properties listed for rental
create table FOR_RENT (
R_ID           INT           NOT NULL auto_increment,
Owner_ID           INT           NOT NULL,
Realtor_ID     INT,
property_type  CHAR   NOT NULL,
apt_num        INT,
street_num     INT           NOT NULL, 
street         VARCHAR(100)   NOT NULL,
city           VARCHAR(15)   NOT NULL,
state          CHAR(2)       NOT NULL,
zip            CHAR(5)       NOT NULL,
available_date  DATETIME      NOT NULL,
rate          INT            NOT NULL,
lease_term     INT            NOT NULL,
security_deposit INT          NOT NULL,
bedroom        INT            NOT NULL,
bathroom       INT            NOT NULL,
living         INT            NOT NULL,
parking        INT             NOT NULL,
flooring       VARCHAR(50)     NOT NULL,
size_sqft       INT            NOT NULL,
year_built     INT             NOT NULL,
ammenities     text,
pic_dir       VARCHAR(100)   NOT NULL,
PRIMARY KEY (R_ID),
FOREIGN KEY (Owner_ID) REFERENCES ACCOUNT(ID)
					ON UPDATE CASCADE  ON DELETE CASCADE,
FOREIGN KEY (Realtor_ID) REFERENCES REALTOR(U_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE);
/*
lease_term --> interms of months
*/

-- visits arranged for properties listed for rental by property owner                
create table VISIT (
property_ID           INT           NOT NULL,
start_time      DATETIME      NOT NULL,
end_time        DATETIME     NOT NULL,
PRIMARY KEY(property_ID),
FOREIGN KEY (property_ID) REFERENCES FOR_RENT(R_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE);
/*
app_status --> status of visit application
*/

create table RENTER_APPLICATION(
RENTER_ID       INT           NOT NULL,
property_ID           INT           NOT NULL,
Fname          VARCHAR(50)   NOT NULL,
Lname          VARCHAR(50)   NOT NULL,
credit_score   INT           NOT NULL,
employement    CHAR          NOT NULL,
employer       VARCHAR(100),
annual_salary  INT,
request_status  CHAR         NOT NULL,
PRIMARY KEY (Renter_ID, property_ID),
FOREIGN KEY (Renter_ID) REFERENCES ACCOUNT(ID)
					ON UPDATE CASCADE  ON DELETE CASCADE,
FOREIGN KEY (property_ID) REFERENCES FOR_RENT(R_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE);
/*
offer_status 
	P --> pending
    R --> rejected
    A --> approved
*/
