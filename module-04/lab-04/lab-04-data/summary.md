# Project Summary: Kenyan Ministry of Health healthcare facility map

**What is the purpose of this product?**

The country of Kenya is in the midst of transition. Currently, the Kenyan government working to implement the Vision 2030 plan to create "a globally competitive and prosperous country with a high quality of life", and transition from a third world country to an industrialized, middle income country. Part of this strategic plan is to provide a comprehensive, affordable, and efficiently integrated healthcare system, and thus improve the overall livelihood of all citizens.

Healthcare in Kenya is provided by a collection of organizations including the Ministry of Health (MOH), other public institutions, faith-based missionary organizations, non-governmental organizations (NGOs), and private practice. With the support of private, NGO, and missionary based organizations, the MOH plans to focus on preventative medicine at the community level, developing a robust infrastructure countrywide, improving the quality of service, and providing access to those excluded from health care for financial or other reasons. The MOH has developed the Health Sector Strategic and Investment Plan (KHSSP) to address these needs (now on its second term).

The MOH, as part of the KHSSP II, has integrated all state-run health programs into a single system that attempts to address improvement of health by utilizing a tiered health care delivery system. This plan is referred to as the Kenya Package for Health (KEPH) and has defined the following health care levels:

1. KEPH 1 (Community Level): All services most effectively delivered within the community. All non-facility based health services are classified as community level.
2. KEPH 2 (Primary Care Level): First physical health care facility level. Comprised of dispensaries, health centers, maternity/nursing homes. Most health care needs should be addressed at this level.
3. KEPH 3 (County Level): First level hospitals, who provided complementary services to KEPH 2 facilities, including inpatient, and other comprehensive services.
4. KEPH 4 (National Level): Tertiary level hospitals with highly specialized services, including but not limited to surgical, neurology, oncology, and internal medicine.

As part of their Vision 2030 plan, the Kenyan MOH is focusing on extending KEPH services and ensuring availability to congregate settings (schools, prisons, refuge camps), at risk populations, hard to reach areas of the country, and urban areas. To reach this goal, the MOH has requested an interactive map to explore the spatial distribution of different KEPH level facilities throughout the country. Distribution must account for population centers and large uninhabited areas, so the map design must incorporate cities, roads, and other important information (e.g. national parks and wildlife refuges).

**What are the goals for this product?**

Produce a map that displays required information in a manner that is intuitively functional, and allows users to interact with the information in a useful way.

**What will the users get from this product?**

An ability to see how their facilities, at each service level, are distributed throughout the country, and determine areas that are underserved, where their focus can be most useful. The ability to select data based on KEPH service level will allow users to find areas that may be covered by lower level facilities, but are lacking access to upper level facilities.

**Content Requirements:**

1. Basemap of Kenya, including major cities/roads/features
2. Point data overlay featuring MOH run facilities
3. Facilities differentiated by KEPH level, selectable by user (slider, form, or selectable legend selection?)
4. Site specific information presented to user upon interaction (Name, KEPH level, county, sub-county ward, constituency)

**Functional Requirements:**

1. Map with slip tiles and data layers
2. User zoomable and moveable within scope of county
3. Markers colored based on KEPH level
4. User ability to select displayed data based on KEPH level
5. Popup displaying selected point data information
6. (Possible) clustering of dense marker areas on lower zoom levels
