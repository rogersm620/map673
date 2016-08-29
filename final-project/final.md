# Final Project Summary: Texas Paddling Trails Map

**What is the purpose of this product?**

The Texas Parks and Wildlife Department (TPWD) has developed paddling trails throughout the state of Texas for the use and enjoyment of recreational paddlers (canoe, kayak, and other non-motorized craft). All of these recreational paddling trails are available to view online with static maps and directions to access points (with GPS coordinates). However there is currently no way to access all of these trails, without loading each individual webpages. The purpose of this product is to make available all of the Texas Paddling Trails on one interactive map. 

**User Profile**

Recreational paddlers span the range of technology users from the beginner, to highly advanced. The goal for this project will be to develop a map that is easy to understand for even the most novice of user, while still providing useful information for all. Users will be able to select a trail, view the paddling distance, and river access points (put in and take out). The generated map will be dynamic, with the goal to provide functionality on both desktop and mobile platforms, as it is likely that accessing the map will often be done while on, or in transit to, the water. 

**User Interaction Scenario**

A user wants to go paddling on one of the Texas Paddling Trails. They load their boat onto their vehicle, pack all their gear inside, and possibly even a lunch, but still need to determine where they want to go. The user will then open the interactive Texas Paddling Trails Map on their mobile device. They will browse the map using pinch and zoom functionality , and select a trail to use (or possibly click on a button that will automatically select the trail closest to them using a Geolocation API). Clicking the trail will give the location of put in and take out sites, and the distance of the trail.

**Data Source**

1. All put in and take out points are currently available to the public via the Texas Paddling Trails website (inland) at http://tpwd.texas.gov/fishboat/boat/paddlingtrails/inland/ on individual trail webpages. A Paddling Trails data file is not currently available on the Texas Parks and Wildlife website, but is being obtained through the TPWD GIS lab with no restrictions on use.
2. Shapefiles for significant rivers, waterbodies, and state boundaries from TPWD will also be utilized in the making of the map.

**Technology Stack**

1. Data will be processed using QGIS and OpenOffice/Excel.
2. Data will most likely be stored in GeoJSON format, and accessed through a Carto Database.
3. The map will be generated using Leaflet, JQuery, and likely Carto.js. Other Javascript libraries may also be used.
4. The map will also utilize HTML, CSS, and possibly an HTML Geolocation API. OpenStreetMap base map tiles will be used.
5. The map will be hosted on GitHub or a current SquareSpace account and accessed through the domain campfiremapping.com (this domain currently points to my MAP 672 portfolio).
 
 **Thematic Representation**
 
 Map will consist of dots representing put-in and take-out points, and lines representing the paddling trails. Paddling trails will be stylized to stand out from the rivers drawn on the base map tiles.
 
 **Content**
 
 1. Paddling trails will be displayed in line form.
 2. Put-in and Take-out points will be displayed as circles/dots.
 3. A base map displaying major roads and waterways will be used to give reference.
 4. Trail name, distance, and put-in/take-out points will display in a info box.
 5. "Find Closest" button will use geolocation to select closest trail.
 
 **Functional Requirements**
 
 1. Put-in/take-out data will load data from a CSV.
 2. Paddling trail data will load from a GeoJSON.
 3. Data layers will load above base map tiles.
 4. User location data will be pulled from browser using HTML5 geolocation, when clicked, and identify closest trail and pop up info for it.
 5. Trail information will load into popup box when trail is selected (see drawing below).
 
 **Anticipated User Interaction**
 
 This map will be designed to be interacted with by mobile device ("mobile first"). Interactions will be kept simple, with few options. The map will be touch interface friendly; pinch/zoom navigation will be enabled, and trail data will be available via click rather than with hover function. Buttons will be large enough to be touched, rather using a mouse pointer. Map bounds will be set to Texas borders. Every effort will be made to reduce file size to increase loading speed and be "data friendly" for mobile users.
 
 **Drawings**
 [paper_proto](images/P_20160828_175829.jpg)
