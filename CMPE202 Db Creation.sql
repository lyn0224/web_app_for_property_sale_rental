create database CMPE202

use CMPE202
-- ACCOUNT table is to store all users account info
create table ACCOUNT (
ID        INT          NOT NULL,
u_name    VARCHAR(50)
Email     VARCHAR(50)   UNIQUE NOT NULL,
psswd     VARCHAR(300)   UNIQUE NOT NULL,
a_type      CHAR          NOT NULL,
PRIMARY KEY(ID))
/* a_type is account type and it only holds 2 values
   U --> regular users
   R --> realtors
*/

-- REALTOR table is to store realtor's additional info
create table REALTOR (
U_ID       INT          NOT NULL,
Fname      VARCHAR(50)  NOT NULL,
Email      VARCHAR(50)  NOT NULL,
phone      CHAR(10)     NOT NULL,
zipcode    CHAR(5)      NOT NULL,
sales       INT,
rent        INT,
sepcialty   CHAR        NOT NULL,
PRIMARY KEY (U_ID),
FOREIGN KEY (U_ID) REFERENCES ACCOUNT(ID)
					ON DELETE CASCADE  ON UPDATE CASCADE)
-- specialty takes values of either s (for sales) or r (for rents) or b (for both sales/rents)

-- FOR_SALE table stores all info about properties listed for sale
create table FOR_SALE (
U_ID           INT           NOT NULL,
S_ID           INT           NOT NULL,
property_type  VARCHAR(20)   NOT NULL,
apt_num        INT,
street_num     INT           NOT NULL, 
street         VARCHAR(50)   NOT NULL,
city           VARCHAR(15)   NOT NULL,
state          CHAR(2)       NOT NULL,
zip            CHAR(5)       NOT NULL,
S_status       CHAR           NOT NULL,
price          INT            NOT NULL,
bedroom        INT            NOT NULL,
bathroom       INT            NOT NULL,
living         INT            NOT NULL,
parking         INT           NOT NULL,
area            INT            NOT NULL,
pic_path       VARCHAR(100)   NOT NULL,
PRIMARY KEY (U_ID, S_ID),
FOREIGN KEY (U_ID) REFERENCES ACCOUNT(ID)
					ON UPDATE CASCADE  ON DELETE CASCADE)

-- OPEN_HOUSE stores open house time for FOR_SALE properties                 
create table OPEN_HOUSE (
U_ID           INT           NOT NULL,
S_ID           INT           NOT NULL,
from_date       DATETIME      NOT NULL,
to_date         DATETIME      NOT NULL,
PRIMARY KEY (U_ID, S_ID),
FOREIGN KEY (U_ID,S_ID) REFERENCES FOR_SALE(U_ID,S_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE)

                    
-- FOR_RENT table stores all info about properties listed for rental
create table FOR_RENT (
U_ID           INT           NOT NULL,
R_ID           INT           NOT NULL,
property_type  VARCHAR(20)   NOT NULL,
apt_num        INT,
street_num     INT           NOT NULL, 
street         VARCHAR(50)   NOT NULL,
city           VARCHAR(15)   NOT NULL,
state          CHAR(2)       NOT NULL,
zip            CHAR(5)       NOT NULL,
available_date  DATETIME           NOT NULL,
price          INT            NOT NULL,
bedroom        INT            NOT NULL,
bathroom       INT            NOT NULL,
living         INT            NOT NULL,
parking        INT           NOT NULL,
size_sqft       INT            NOT NULL,
pic_path       VARCHAR(100)   NOT NULL,
PRIMARY KEY (U_ID, R_ID),
FOREIGN KEY (U_ID) REFERENCES ACCOUNT(ID)
					ON UPDATE CASCADE  ON DELETE CASCADE)
-- visits arranged for properties listed for rental                    
create table VISIT (
U_ID           INT           NOT NULL,
R_ID           INT           NOT NULL,
v_time         DATETIME      NOT NULL,
PRIMARY KEY (U_ID, R_ID),
FOREIGN KEY (U_ID, R_ID) REFERENCES FOR_RENT(U_ID, R_ID)
					ON UPDATE CASCADE  ON DELETE CASCADE)


