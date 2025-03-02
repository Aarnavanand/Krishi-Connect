import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { jsonData } from '../components/JSON';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Scheme {
  scheme_name: string;
  description: string;
  source: string;
  tags: string[];
}

// Define state schemes data
const stateSchemes: Record<string, Scheme[]> = {
   "Meghalaya" : [
    {
      "scheme_name": "CM-ASSURE Scheme",
      "description": "The Meghalaya government has approved the 'CM-ASSURE' program, a market intervention initiative aimed at supporting farmers facing price drops for non-perishable crops like areca nut, ginger, and turmeric. This scheme is expected to benefit over 20,000 farmers by stabilizing market prices and ensuring fair compensation.",
      "source": "https://timesofindia.indiatimes.com/city/guwahati/meghalaya-okays-scheme-to-support-farmers-amid-market-volatility/articleshow/117129176.cms",
      "tags": ["Credit Support", "Debt Relief", "Farmer Welfare"]
    },
    {
      "scheme_name": "Green Meghalaya Initiative",
      "description": "Chief Minister Conrad K Sangma emphasized climate change as a justice issue at the Climate Investments Coalition for the Global South. He highlighted community conservation efforts and initiatives like 'Green Meghalaya' to combat climate impacts, advocating for regional cooperation in resource sharing and disaster management.",
      "source": "https://www.devdiscourse.com/article/science-environment/3272384-meghalayas-green-leadership-navigating-climate-justice-and-sustainability",
      "tags": ["Climate Change", "Community Conservation", "Regional Cooperation"]
    },
    {
      "scheme_name": "Meghalaya's Organic Farming Initiatives",
      "description": "To lead the implementation of organic farming policies, the Meghalaya Natural and Organic Society for Livelihood and Innovation in Agriculture (MEGNOLIA) was established on June 1, 2023. This initiative aims to promote organic agriculture practices across the state.",
      "source": "https://www.businessworld.in/article/meghalaya-leads-organic-farming-revolution-with-new-initiatives-partnerships-534161",
      "tags": ["Organic Farming", "Policy Development", "Innovation"]
    },
    {
      "scheme_name": "World Food India 2023 Participation",
      "description": "Meghalaya's agricultural produce, especially millets, took center stage at the 'World Food India 2023' event in New Delhi. Agriculture Minister Dr. Mazel Ampareen Lyngdoh inaugurated the Meghalaya Pavilion, highlighting the state's rich millet diversity in line with the International Year of Millets celebration.",
      "source": "https://hubnetwork.in/millets-in-focus-meghalayas-agrarian-produces-take-centre-stage-at-world-food-india-2023/",
      "tags": ["Agriculture", "International Year of Millets", "Millets"]
    },
    {
      "scheme_name": "MoU with NDDB Mother Dairy",
      "description": "The Meghalaya State Agricultural Marketing Board signed a Memorandum of Understanding with NDDB Mother Dairy to enhance the dairy sector in the state. This collaboration aims to support and develop local dairy initiatives, benefiting farmers and consumers alike.",
      "source": "https://krishijagran.com/news/meghalaya-state-agricultural-marketing-board-government-of-meghalaya-and-nddb-mother-dairy-sign-mou/",
      "tags": ["Dairy", "Collaboration", "Support"]
    },
    {
      "scheme_name": "PRIME Agriculture Response Vehicle Scheme (PRIME-ARVS)",
      "description": "Launched in 2022, the PRIME-ARVS provides financial aid to rural entrepreneurs for purchasing small and medium-sized pickup trucks. This initiative facilitates the transportation of agricultural produce from farms to markets, bridging the gap in the supply chain.",
      "source": "https://www.primemeghalaya.com/prime-agriculture-response-vehicle/",
      "tags": ["Transportation", "Financial Aid", "Supply Chain"]
    },
    {
      "scheme_name": "Agristack Implementation in Meghalaya",
      "description": "The Governor of Meghalaya has notified the State Project Management Unit (PMU) team for implementing Agristack in the state. This initiative aims to digitize agricultural data, enhancing efficiency and decision-making in the agriculture sector.",
      "source": "https://megagriculture.gov.in/",
      "tags": ["Digitalization", "Efficiency", "Decision-Making"]
    },
    {
      "scheme_name": "Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)",
      "description": "MOVCD-NER is a central sector scheme aiming to develop organic value chains in the North East Region, including Meghalaya. The scheme supports farmers through organic certification, infrastructure development, and market linkages.",
      "source": "https://en.wikipedia.org/wiki/Mission_Organic_Value_Chain_Development_for_North_Eastern_Region",
      "tags": ["Organic", "Certification", "Infrastructure Development", "Market Linkages"]
    },
    {
      "scheme_name": "National e-Governance Plan for Agriculture (NeGP-A)",
      "description": "NeGP-A aims to provide information and knowledge networks, developing agriculture services for farmers in a decentralized mode. The scheme includes training, awareness programs, and technology support to enhance agricultural productivity.",
      "source": "https://megagriculture.gov.in/PUBLIC/schemes_ShowSchemesA.aspx?schid=84",
      "tags": ["Information and Knowledge Networks", "Agriculture Services", "Decentralized Mode"]
    },
    {
      "scheme_name": "Agriculture Engineering (Mechanical) Scheme",
      "description": "This scheme provides agricultural machinery such as power tillers, bulldozers, and tractors on hire at subsidized rates. It also offers a 50% subsidy for the purchase of improved farm machinery and equipment, aiming to mechanize and modernize farming practices in Meghalaya.",
      "source": "https://megagriculture.gov.in/PUBLIC/schemes_ShowSchemesA.aspx?schid=58",
      "tags": ["Transportation", "Financial Aid", "Supply Chain"]
    }
  ],

 "Mizoram" : [
    {
      "scheme_name": "Bana Kaih Scheme",
      "description": "Mizoram Governor General (Retired) Vijay Kumar Singh highlighted the state's flagship 'Bana Kaih' or handholding scheme as a vital contribution towards realizing Viksit Bharat 2047 and achieving the United Nations' Sustainable Development Goals (SDGs).",
      "source": "https://timesofindia.indiatimes.com/city/guwahati/mizoram-guv-spotlights-banakaih-schemes-role-in-viksit-bharat/articleshow/118395950.cms",
      "tags": ["Viksit Bharat", "Sustainable Development Goals", "Handholding"  ]
    },
    {
      "scheme_name": "Fostering Climate Resilient Upland Farming System Project",
      "description": "Governor Vijay Kumar Singh announced the 'Fostering Climate Resilient Upland Farming System' project, aiming to increase agricultural income for 55,000 households by enhancing sustainable crop productivity.",
      "source": "https://www.ndtv.com/india-news/mizoram-governor-vijay-kumar-singh-says-agriculture-remains-chief-focus-of-state-government-3790910",
      "tags": ["Climate Resilient", "Upland Farming", "Sustainable Crop Productivity"]
    },
    {
      "scheme_name": "Aeroponic Potato Seed Production Facility",
      "description": "Agriculture & Farmers’ Welfare Minister P.C. Vanlalruata inaugurated Mizoram's first aeroponic system for potato seed production at Thingdawl in Kolasib district, aiming to boost potato cultivation and address seed shortages.",
      "source": "https://nenews.in/mizoram/mizoram-agriculture-minister-inaugurates-aeroponic-potato-seed-production-facility-in-kolasib/17233/",
      "tags": ["Aeroponic System", "Potato Seed Production", "Seed Shortages"]
    },
    {
      "scheme_name": "Millet Production Promotion",
      "description": "The Mizoram government, under Agriculture Minister P.C. Vanlalruata, is taking steps to promote millet production in the state, aligning with the central government's emphasis on millet cultivation.",
      "source": "https://timesofindia.indiatimes.com/india/mizoram-govt-to-take-steps-to-promote-millet-production/articleshow/114471401.cms",
      "tags": ["Millet Production", "Central Government Emphasis", "Cultivation"]
    },
    {
      "scheme_name": "Agricultural Product Procurement Initiative",
      "description": "The Mizoram government has initiated a program to purchase ginger, turmeric, chili, and broomsticks directly from local farmers, aiming to support the agricultural community and fulfill a key electoral promise.",
      "source": "https://www.zeebiz.com/economy-infra/agricultue/news-mizoram-mizoram-capital-mizoram-university-mizoram-ki-rajdhani-farming-mizoram-zoram-peoples-movement-agricultural-upliftment-ginger-turmeric-chilli-298514",
      "tags": ["Agricultural Product Procurement", "Local Farmers", "Electoral Promise"]
    },
    {
      "scheme_name": "Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)",
      "description": "Mizoram is actively participating in the MOVCD-NER, a central sector scheme aimed at developing organic value chains in the North East Region, promoting organic farming practices among local farmers.",
      "source": "https://en.wikipedia.org/wiki/Mission_Organic_Value_Chain_Development_for_North_Eastern_Region",
      "tags": ["Organic Value Chain", "Promoting Organic Farming", "Local Farmers"]
    },
    {
      "scheme_name": "Rashtriya Krishi Vikas Yojana (RKVY)",
      "description": "Since 2007, Mizoram has been implementing the RKVY scheme to ensure holistic development of agriculture and allied sectors, allowing the state to choose development activities as per its agricultural plans.",
      "source": "https://agriculturemizoram.nic.in/pages/rkvy.html",
      "tags": ["Holistic Development", "Agricultural Plans"]
    },
    {
      "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
      "description": "Under SMAM, Mizoram provides assistance to farmers through subsidies for purchasing agricultural tools and equipment like tractors, power tillers, and water pump sets, aiming to enhance mechanization in farming.",
      "source": "https://serchhip.nic.in/schemes/",
      "tags": ["Mechanization", "Farmers", "Subsidies"]
    },
    {
      "scheme_name": "National Adaptation Fund for Climate Change (NAFCC)",
      "description": "Mizoram is implementing NAFCC projects focusing on constructing and renovating water harvesting tanks and developing hill slope terraces to combat climate change impacts on agriculture.",
      "source": "https://serchhip.nic.in/schemes/",
      "tags": ["Climate Change", "Water Harvesting Tanks", "Hill Slope Terraces"]
    },
    {
      "scheme_name": "Focus on Sustainable Agricultural Growth",
      "description": "Governor Vijay Kumar Singh emphasized the state's commitment to sustainable agricultural growth through initiatives like the FOCUS project and the Bana Kaih scheme, aiming to boost farmers' incomes and promote economic development.",
      "source": "https://www.devdiscourse.com/article/headlines/3270756-mizorams-agricultural-revolution-focus-on-sustainability-and-growth",
      "tags": ["Sustainable Growth", "Farmers", "Economic Development"]
    }
  ],
  "Nagaland" : [
    {
      "scheme_name": "NABARD's Credit Projection for Nagaland",
      "description": "The National Bank for Agriculture and Rural Development (NABARD) has projected a credit potential of Rs 2,106.34 crore for priority sector activities in Nagaland for the fiscal year 2025-26. This projection aims to guide financial institutions in allocating funds towards agriculture, MSMEs, and other vital sectors.",
      "source": "https://www.devdiscourse.com/article/headlines/3277967-nabard-projects-rs-2106-crore-credit-boost-for-nagalands-development",
      "tags": ["Credit Potential", "Financial Institutions", "Priority Sector Activities"]
    },
    {
      "scheme_name": "Nagaland's Tuber Crop Production",
      "description": "Nagaland has emerged as the fourth-largest tuber crop-producing state in India, thanks to its favorable climate, fertile soil, and abundant natural resources. The state shows significant potential in cultivating crops like pineapple, ginger, cardamom, kiwi, dragon fruit, banana, and bamboo shoot, along with opportunities in forest honey production.",
      "source": "https://www.morungexpress.com/nagaland-is-fourth-highest-tuber-crop-growing-state-in-india",
      "tags": ["Tuber Crop Production", "Crops", "State"]
    },
    {
      "scheme_name": "State Focus Paper on Credit Potential",
      "description": "The State Focus Paper for Nagaland, released during the State Credit Seminar 2025-26 organized by NABARD, outlines a credit potential of Rs 2,106.34 crore for priority sector activities. This document serves as a roadmap for financial institutions to support agriculture and allied sectors in the state.",
      "source": "https://www.morungexpress.com/state-focus-paper-projects-rs-2106-crore-credit-potential-for-nagaland",
      "tags": ["Credit Potential", "Financial Institutions", "Priority Sector Activities"]
    },
    {
      "scheme_name": "Nagaland's First Organic AC Market",
      "description": "Nagaland is set to inaugurate its first Organic Air-Conditioned Market before Christmas. Located at the NER Agri Expo Site in Dimapur, this facility aims to provide a modern marketplace for organic produce, enhancing the state's agricultural marketing infrastructure.",
      "source": "https://nsamb.in/category/news",
      "tags": ["Organic Air-Conditioned Market", "Modern Marketplace", "Agricultural Marketing Infrastructure"]
    },
    {
      "scheme_name": "Naga Mandi Project",
      "description": "The 'Naga Mandi' project, spanning 10 acres, is being developed through a Public-Private Partnership to establish a wholesale market complex. This initiative aims to streamline agricultural marketing, ensuring efficient resource utilization and compliance with the Nagaland Agriculture Produce Marketing Act 2005.",
      "source": "https://nagalandtribune.in/how-the-10-acres-wholesale-market-complex-naga-mandi-will-benefit-nagaland/",
      "tags": ["Wholesale Market Complex", "Agricultural Marketing", "Resource Utilization"]
    },
    {
      "scheme_name": "Consultations on Oil Palm Cultivation",
      "description": "The Nagaland Agriculture Department has endorsed the need for broad-based stakeholder consultations regarding oil palm cultivation. This move aims to ensure transparent public engagement and critical deliberations on the potential impacts of oil palm farming in the state.",
      "source": "https://www.morungexpress.com/nagaland-agriculture-dept-to-act-on-concerns-over-oil-palm-cultivation",
      "tags": ["Oil Palm Cultivation", "Public Engagement", "Critical Deliberations"]
    },
    {
      "scheme_name": "New Directorate Building for Agriculture Department",
      "description": "The Nagaland Agriculture Department has inaugurated a new directorate building in Kohima. This facility is expected to foster a cohesive work culture among officers and staff, ushering in a new era of excellence in the state's agricultural administration.",
      "source": "https://www.thenagarepublic.com/news/nagaland-news/nagaland-agriculture-department-gets-new-directorate-building/",
      "tags": ["Cohesive Work Culture", "Officer and Staff", "Excellence in Agricultural Administration"]
    },
    {
      "scheme_name": "State Agri Portal Launch",
      "description": "Nagaland has launched the State Agri Portal, a digital platform aimed at providing farmers with timely information and resources. This initiative seeks to enhance agricultural productivity by leveraging technology to disseminate knowledge and best practices.",
      "source": "https://nagafarmer.nagaland.gov.in/",
      "tags": ["Timely Information", "Resources", "Agricultural Productivity"]
    },
    {
      "scheme_name": "Farm Mechanization Efforts",
      "description": "To address the low farm power availability in Nagaland, the state is implementing farm mechanization programs under the Sub-Mission on Agricultural Mechanization (SMAM) and Rashtriya Krishi Vikas Yojana (RKVY). These initiatives aim to boost production and productivity by providing modern machinery to farmers.",
      "source": "https://www.nagafarmer.nagaland.gov.in/news_updates",
      "tags": ["Low Farm Power Availability", "Farm Mechanization Programs", "Modern Machinery"]
    },
    {
      "scheme_name": "Agriculture Department's Official Website",
      "description": "The Nagaland Agriculture Department has an official website that serves as a repository of information on various schemes, programs, and activities. Farmers and stakeholders can access resources and updates pertinent to the state's agricultural sector.",
      "source": "https://agriculture.nagaland.gov.in/",
      "tags": ["Official Website", "Information on Schemes", "Agricultural Sector"]
    }
  ],

  "Maharashtra": [
    {
      "scheme_name": "Mahatma Jyotirao Phule Shetkari Karjamukti Yojana",
      "description": "Loan waiver scheme for farmers with outstanding loans between April 2015 and March 2019",
      "source": "https://maharashtra.gov.in/",
      "tags": ["Credit Support", "Debt Relief", "Farmer Welfare"]
    },
    {
      "scheme_name": "Maharashtra State Rural Livelihoods Mission",
      "description": "Aims to create efficient and effective institutional platforms for rural poor to increase household income",
      "source": "https://msrlm.org/",
      "tags": ["Rural Development", "Livelihood", "Self Help Groups"]
    }
  ],
  "Odisha" : [
    {
      "scheme_name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      "description": "Over 34.98 lakh farmers in Odisha have benefited from the PM-KISAN scheme, receiving financial assistance to support their agricultural activities.",
      "source": "https://www.deccanchronicle.com/nation/over-3498-lakh-odisha-farmers-benefit-from-pm-kisan-scheme-1863221",
      "tags": ["Credit Support", "Debt Relief", "Farmer Welfare"]
    },
    {
      "scheme_name": "Odisha State Budget 2025-26",
      "description": "Chief Minister Mohan Charan Majhi presented a Rs 2.90-lakh crore budget for the fiscal year 2025-26, focusing on agriculture and irrigation, with Rs 37,838 crore allocated to the farm sector.",
      "source": "https://economictimes.indiatimes.com/news/india/odisha-cm-presents-rs-2-90-lakh-crore-budget-for-fy26-focuses-on-agri-irrigation/articleshow/118331589.cms",
      "tags": ["Agriculture", "Irrigation", "Farm Sector"]
    },
    {
      "scheme_name": "Krushi Odisha Mela 2025",
      "description": "The Krushi Odisha Mela 2025, organized by the Department of Agriculture & Farmers’ Empowerment, showcased the state's agricultural innovations and achievements.",
      "source": "https://thenewshashtag.com/odisha-leads-agricultural-innovation-at-krushi-odisha-mela-2025/",
      "tags": ["Agricultural Innovations", "Agricultural Achievements", "State of Odisha"]
    },
    {
      "scheme_name": "MoUs for Agricultural Exports",
      "description": "The Odisha government signed 11 Memorandums of Understanding with private firms to enhance the export of fresh fruits and vegetables, aiming to position the state as a leader in agricultural exports.",
      "source": "https://government.economictimes.indiatimes.com/news/economy/odisha-govt-  signs-11-mous-with-private-firms-to-enhance-fresh-fruits-vegetables-exports/117017701",
      "tags": ["Export", "Private Sector", "Agriculture"]
    },
    {
      "scheme_name": "Crop Loss Compensation",
      "description": "The Odisha government assured farmers of compensation for crop losses due to adverse weather, with plans to disburse relief within 4-5 days.",
      "source": "https://odishatv.in/news/odisha/crop-loss-compensation-to-farmers-in-next-4-5-days-odisha-minister-252950",
      "tags": ["Crop Loss", "Farmers", "Weather"]
    },
    {
      "scheme_name": "New Agricultural Policy",
      "description": "Odisha is set to introduce a new agricultural policy emphasizing organic farming and international exports, aiming to boost sustainable agricultural practices.",
      "source": "https://agrimoon.com/odisha-to-introduce-new-agricultural-policy-emphasising-organic-farming/",
      "tags": ["Agricultural Policy", "Organic Farming", "International Exports"]
    },
    {
      "scheme_name": "Krushi Samrudhi Helpline",
      "description": "The Department of Agriculture & Farmers' Empowerment invited agencies to operate, manage, and maintain Odisha’s digital mobile-based extension service, the Krushi Samrudhi Helpline.",
      "source": "https://agri.odisha.gov.in/news",
      "tags": ["Extension Service", "Digital Mobile-Based", "Agriculture"]
    },
    {
      "scheme_name": "E-Tender for Laptops Procurement",
      "description": "The Odisha government issued an e-tender notice for the procurement of laptops for the fiscal year 2024-25, aiming to enhance technological support in the agriculture sector.",
      "source": "https://agri.odisha.gov.in/news",
      "tags": ["E-Tender", "Laptops", "Agriculture"]
    },
    {
      "scheme_name": "Agricultural Export Potential",
      "description": "Discussions highlighted Odisha's potential in agricultural exports, emphasizing the need for improved infrastructure to tap into export opportunities.",
      "source": "https://odia.krishijagran.com/tag?id=Odisha",
      "tags": ["Agricultural Export", "Infrastructure", "Export Opportunities"]
    },
    {
      "scheme_name": "Cyclone Jawad Impact",
      "description": "Reports indicated that 131 blocks in Odisha were affected by Cyclone Jawad, leading to significant agricultural challenges and prompting relief measures.",
      "source": "https://odia.krishijagran.com/tag?id=Odisha",
      "tags": ["Disaster", "Agricultural Challenges", "Relief Measures"]
    }
  ],
  "Gujarat": [
    {
      "scheme_name": "Mukhyamantri Kisan Sahay Yojana",
      "description": "Financial assistance to farmers affected by natural calamities",
      "source": "https://ikhedut.gujarat.gov.in/",
      "tags": ["Disaster Relief", "Financial Aid", "Crop Insurance"]
    },
    {
      "scheme_name": "Gujarat Green Revolution Company Limited",
      "description": "Promotes micro irrigation systems and agricultural mechanization",
      "source": "https://ggrc.co.in/",
      "tags": ["Irrigation", "Farm Machinery", "Sustainable Farming"]
    }
  ],
  "Punjab": [
    {
      "scheme_name": "Punjab State Farmers Policy",
      "description": "Comprehensive policy for sustainable agriculture and farmer welfare",
      "source": "https://punjab.gov.in/",
      "tags": ["Policy", "Sustainable Farming", "Farmer Welfare"]
    },
    {
      "scheme_name": "Punjab Agri Export Corporation",
      "description": "Facilitates export of agricultural products from Punjab",
      "source": "https://punjabagro.gov.in/",
      "tags": ["Export", "Market Access", "Value Addition"]
    },
    {
      "scheme_name": "Punjab Agriculture Food and Drug Authority Established",
      "description": "The Punjab government has established the Punjab Agriculture Food and Drug Authority in Lahore to implement a testing regime aimed at controlling adulteration and contamination in food, drugs, fertilizers, and pesticides.",
      "source": "https://www.brecorder.com/news/40350225",
      "tags": ["Testing Regime", "Adulteration", "Contamination"]
    },
    {
      "scheme_name": "Punjab's Contribution to National Grain Supply",
      "description": "Punjab continues to be the food basket of Pakistan, meeting 75% of the country's grain needs, highlighting the province's pivotal role in the nation's agriculture sector.",
      "source": "https://www.brecorder.com/news/40350212",
      "tags": ["Food Basket", "Grain Needs", "Agriculture Sector"]
    },
    {
      "scheme_name": "Punjab Seeks US Assistance to Boost Cotton Yield",
      "description": "The Punjab government is collaborating with the United States to enhance cotton production, aiming to improve yield and quality through shared expertise and technology.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Collaboration", "Technology Transfer", "Infrastructure Development"]
    },
    {
      "scheme_name": "University of Agriculture Faisalabad Announces 2024 Merit List",
      "description": "The University of Agriculture Faisalabad has released its merit list for 2024, outlining the selection of students for various agricultural programs.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Selection", "Agricultural Programs", "Merit List"]
    },
    {
      "scheme_name": "Green Tractor Scheme 2024 Winners Announced",
      "description": "The Punjab government has announced the winners of the Green Tractor Scheme 2024, providing tractors to farmers at subsidized rates to promote mechanization.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Winners", "Farmers", "Mechanization"]
    },
    {
      "scheme_name": "Agri App 'UgAi' Launched for Fertilizer Access",
      "description": "Sindh's Agriculture Minister has launched the 'UgAi' mobile application, enabling farmers to access fertilizers more efficiently and transparently.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Mobile Application", "Fertilizers", "Efficiency"]
    },
    {
      "scheme_name": "Major Shift in Agriculture Taxation for 2025",
      "description": "Finance Minister Muhammad Aurangzeb has announced significant changes in agriculture taxation for 2025, aiming to streamline tax processes and benefit the farming community.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Changes", "Tax Processes", "Farming Community"]
    },
    {
      "scheme_name": "Punjab Government Initiates Onion and Tomato Production Boost",
      "description": "The Punjab Agriculture Minister has unveiled plans to increase onion and tomato production to meet domestic demand and reduce reliance on imports.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Plans", "Domestic Demand", "Imports"]
    },
    {
      "scheme_name": "Pakistan and China Sign $382M Agriculture Agreement",
      "description": "Pakistan and China have entered into a $382 million agreement to collaborate on agricultural projects, focusing on technology transfer and infrastructure development.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Collaboration", "Technology Transfer", "Infrastructure Development"]
    },
    {
      "scheme_name": "Pakistan and Russia Forge Agri-Tech Partnership",
      "description": "In a move to strengthen agricultural technology, Pakistan and Russia have signed a deal to enhance cooperation in agri-tech sectors.",
      "source": "https://agriculturepunjab.com/news/",
      "tags": ["Technology Collaboration", "Agri-Tech Sectors", "Cooperation"]
    }
  ],
  "Rajasthan" : [
    {
      "scheme_name": "Kisan Samman Samaroh",
      "description": "Rajasthan Chief Minister Bhajan Lal Sharma reaffirmed the state government's commitment to farmer welfare during the Kisan Samman Samaroh, a national-level program held at the State Agricultural Management Institute in Jaipur.",
      "source": "https://www.daijiworld.com/news/newsDisplay?newsID=1273629",
      "tags": ["Commitment", "Farmer Welfare", "National Program"]
    },
    {
      "scheme_name": "Financial Aid to Farmers",
      "description": "Over Rs 1,400 crore has been transferred to 72 lakh farmers in Rajasthan, demonstrating the government's dedication to supporting the agricultural community.",
      "source": "https://indiatribune.com/over-rs-1400-crore-transferred-to-72-lakh-farmers-in-rajasthan",
      "tags": ["Dedication", "Agricultural Community", "Support"]
    },
    {
      "scheme_name": "Phone Tapping Allegations",
      "description": "Rajasthan Agriculture Minister Kirodi Lal Meena reiterated claims of his phone being tapped and being under CID surveillance, sparking political controversy in the state.",
      "source": "https://english.mathrubhumi.com/news/india/rajasthan-minister-kirodi-lal-meena-claims-party-tapping-his-phone-cid-following-him-1.10368435",
      "tags": ["Political Controversy", "Controversy", "Controversial"]
    },
    {
      "scheme_name": "Annapurna Bhandars Initiative",
      "description": "The Rajasthan government plans to inaugurate 5,000 fair price shops as 'Annapurna Bhandars' by October 31, aiming to enhance food distribution across the state.",
      "source": "https://news.rajasthandirect.com/agriculture",
      "tags": ["Food Distribution", "State", "Aim"]
    },
    {
      "scheme_name": "Monsoon Rainfall Insights",
      "description": "India experienced a four-year high in Southwest monsoon rains, with Rajasthan receiving consistently higher rainfall, attributed to the monsoon trough's position and increased soil moisture.",
      "source": "https://economictimes.indiatimes.com/topic/rajasthan-agriculture-department",
      "tags": ["Rainfall", "Consistently Higher", "Soil Moisture"]
    },
    {
      "scheme_name": "Traditional Rain Forecasting",
      "description": "The red-wattled lapwing, a bird native to India, is believed to predict the monsoon season in Rajasthan based on its nesting habits, a practice validated by an eight-year scientific study.",
      "source": "https://www.thetimes.co.uk/article/bird-that-can-predict-the-rainy-season-in-india-z9zlxxqvk",
      "tags": ["Bird", "Practice", "Validation"]
    },
    {
      "scheme_name": "Shift from Rapeseed Cultivation",
      "description": "Due to unusually high temperatures during the sowing season, farmers in Rajasthan are shifting from rapeseed to more heat-tolerant crops, potentially reducing rapeseed production and increasing reliance on imported cooking oils.",
      "source": "https://www.reuters.com/markets/commodities/indian-farmers-shift-rapeseed-other-crops-temperatures-soar-2024-11-25/",
      "tags": ["Shift", "Rapeseed", "Crops"]
    },
    {
      "scheme_name": "Organic Fertilizer Development",
      "description": "Innovations in Rajasthan's agricultural sector include the development of fertilizers derived from natural products like jaggery, cow dung, and buttermilk, promoting sustainable farming practices.",
      "source": "https://www.krishakjagat.org/tag/rajasthan/",
      "tags": ["Innovations", "Natural Products", "Sustainable"]
    },
    {
      "scheme_name": "Agricultural Department Initiatives",
      "description": "The Rajasthan Agriculture Department continues to implement various schemes and programs aimed at enhancing agricultural productivity and supporting farmers across the state.",
      "source": "https://agriculture.rajasthan.gov.in/agriculture/",
      "tags": ["Department", "Schemes", "Productivity"]
    },
    {
      "scheme_name": "Agricultural News Updates",
      "description": "Stay informed with the latest updates and developments in Rajasthan's agricultural sector, covering topics from policy changes to technological advancements.",
      "source": "https://timesofindia.indiatimes.com/topic/rajasthan-agriculture/news",
      "tags": ["Updates", "Development", "Sector"]
    }
  ],
  "Sikkim" : [
    {
      "scheme_name": "Mero Alaichi, Mero Dhan Initiative",
      "description": "The Government of Sikkim has launched the 'Mero Alaichi, Mero Dhan' initiative to revitalize the large cardamom sector, aiming to restore its significance as a source of wealth and resilience for rural communities.",
      "source": "https://sikkim.gov.in/media/press-release/press-info?id=121611&name=Press+Release+from+Department+of+Science+and+Technology",
      "tags": ["Initiative", "Cardamom", "Significance"]
    },
    {
      "scheme_name": "8th Anniversary of Sikkim as a Fully Organic State",
      "description": "Sikkim celebrated its 8th Organic Day on January 18, 2024, marking eight years since being declared a fully organic state. The milestone reflects the state's commitment to sustainable agriculture and environmental stewardship.",
      "source": "https://www.sikkimexpress.com/news-details/8th-year-of-sikkim-as-a-fully-organic-state",
      "tags": ["Organic", "State", "Commitment"]
    },
    {
      "scheme_name": "Review of Mushroom Farming in Mahjitar",
      "description": "Agriculture Minister Puran Kumar Gurung visited the Mahjitar Mushroom Unit to assess the progress of mushroom farming in the region, emphasizing the state's focus on diversifying agricultural practices.",
      "source": "https://www.sentinelassam.com/north-east-india-news/sikkim-news/sikkim-agriculture-minister-puran-kumar-gurung-reviews-mushroom-farming-in-mahjitar",
      "tags": ["Minister", "Practices", "Focus"]
    },
    {
      "scheme_name": "Sikkim's Organic Farming Revolution",
      "description": "Sikkim's transition to organic farming, initiated in the early 2000s, has positioned the state as a model for sustainable agriculture, highlighting the benefits of chemical-free farming practices.",
      "source": "https://www.sikkimexpress.com/news-details/sikkims-organic-farming-revolution-a-model-for-sustainable-agriculture",
      "tags": ["Transition", "Chemical-Free", "Sustainable"]
    },
    {
      "scheme_name": "Challenges in Sikkim's Organic Farming",
      "description": "Despite being the first fully organic state, Sikkim faces challenges in its organic farming sector, including the need for continuous training and financial support for farmers transitioning from conventional methods.",
      "source": "https://www.sikkimexpress.com/news-details/the-organic-farming-revolution-in-sikkim-opportunities-and-challenges",
      "tags": ["Challenges", "Training", "Support"]
    },
    {
      "scheme_name": "Central Support for Organic Farming",
      "description": "Union Agriculture Minister Shivraj Singh Chouhan assured that the central government will provide adequate financial assistance to promote organic and natural farming in Sikkim.",
      "source": "https://money.rediff.com/news/market/centre-to-fund-organic-farming-in-sikkim-chouhan/18960220241126",
      "tags": ["Minister", "Financial", "Assistance"]
    },
    {
      "scheme_name": "Introduction of Modern Farming Techniques",
      "description": "The Sikkim government is set to launch modern farming techniques, including hydroponics, aquaponics, and rooftop farming, aiming to enhance crop productivity and quality.",
      "source": "https://krishijagran.com/agriculture-world/sikkim-to-launch-modern-technology-of-hydroponics-aquaponics-rooftop-farming-on-february-22/",
      "tags": ["Government", "Technology", "Productivity"]
    },
    {
      "scheme_name": "Virtual Conference on Agriculture",
      "description": "Agriculture Minister Lok Nath Sharma represented Sikkim in a virtual conference with Union Agriculture Minister Narendra Singh Tomar, discussing strategies to enhance the state's agricultural sector.",
      "source": "https://www.sikkim.gov.in/media/news-announcement/news-info?name=Hon%27ble+Minister+for+Agriculture%2C+Horticulture%2C+Animal+Husbandry+and+Veterinary+Services+Departments+Shri+Lok+Nath+Sharma+represented+the+State+of+Sikkim+in+a+virtual+conference+of+the+Chief+Minister%27s+of+States+called+by+the+Hon%27ble+Union+Minister%2C+Agricu",
      "tags": ["Minister", "Virtual", "Sector"]
    },
    {
      "scheme_name": "Sikkim's Organic Policy Framework",
      "description": "The Sikkim State Policy on Organic Farming, established in 2004, laid the foundation for the state's transition to organic agriculture, focusing on environmental and health benefits.",
      "source": "https://www.indiaspend.com/natural-farming/why-the-move-to-organic-is-faltering-in-sikkim-indias-first-fully-organic-state-866550",
      "tags": ["Policy", "Environmental", "Health"]
    },
    {
      "scheme_name": "Official Portal of Sikkim's Agriculture Department",
      "description": "The Agriculture Department of Sikkim provides resources and information to support farmers and promote sustainable agricultural practices in the state.",
      "source": "https://agri.sikkim.gov.in/",
      "tags": ["Department", "Resources", "Practices"]
    }
  ],

  "Tamil Nadu" : [
    {
      "scheme_name": "MFOI Awards at Isha Foundation's Maha Shivaratri Festival",
      "description": "The 'Velliangiri Uzhavan FPO' was recognized at the Maha Shivaratri 2025 event by Isha Foundation in Coimbatore, celebrating their exceptional achievements and highlighting MFOI's role in empowering the agricultural community.",
      "source": "https://krishijagran.com/news/mfoi-awards-shine-at-isha-foundations-maha-shivaratri-festival-in-coimbatore-tamil-nadu/",
      "tags": ["Department", "Resources", "Practices"]
    },
    {
      "scheme_name": "Tamil Nadu Agriculture Budget 2024-25",
      "description": "Tamil Nadu Minister MRK Panneerselvam presented the state's agriculture budget for the fiscal year 2024–25, focusing on supporting agriculture, improving rural livelihoods, and promoting sustainable farming techniques.",
      "source": "https://krishijagran.com/news/tamil-nadu-launches-agriculture-budget-2024-25-prioritizing-sustainability-and-rural-development/",
      "tags": ["Policy", "Environmental", "Health"]
    },
    {
      "scheme_name": "Vivasaya Malar Agricultural Updates",
      "description": "Vivasaya Malar provides comprehensive news and information related to agriculture in Tamil Nadu, covering topics such as farming techniques, crop management, and market trends.",
      "source": "https://www.dinamalar.com/malarkal/vivasaya-malar-agriculture-news-tamil-nadu",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Agriculture News in Tamil by Oneindia",
      "description": "Oneindia Tamil offers the latest agriculture news in Tamil Nadu and India, including information on agriculture issues, subsidies, crop prices, and farming updates.",
      "source": "https://tamil.oneindia.com/agriculture/",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Tamil Nadu Irrigated Agricultural Modernization Project",
      "description": "The Department of Agriculture in Tamil Nadu has launched the Tamil Nadu Irrigated Agricultural Modernization Project, aiming to enhance irrigation infrastructure and promote sustainable farming practices.",
      "source": "https://www.tnagrisnet.tn.gov.in/",
      "tags": ["Policy", "Environmental", "Health"]
    },
    {
      "scheme_name": "Vikatan's Agriculture News Portal",
      "description": "Vikatan provides valuable agriculture news in Tamil, featuring success stories of farmers, guidance, and solutions for agricultural challenges.",
      "source": "https://www.vikatan.com/agriculture",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Dinamani's Agriculture News Updates",
      "description": "Dinamani offers the latest agriculture news today, focusing on Tamil Nadu's agricultural developments and farmer-related news.",
      "source": "https://www.dinamani.com/agriculture/",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "ABP Nadu's Agriculture News in Tamil",
      "description": "ABP Nadu provides agriculture news in Tamil, covering government schemes for farmers, Tamil Nadu farmer news, farming techniques, crop cultivation, and agricultural policies.",
      "source": "https://tamil.abplive.com/agriculture",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "NDTV's Tamil Nadu Agriculture Coverage",
      "description": "NDTV offers the latest news, videos, and information on Tamil Nadu agriculture, covering various aspects of the state's agricultural sector.",
      "source": "https://www.ndtv.com/topic/tamil-nadu-agriculture",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Agriculture News in Tamil by Vikatan",
      "description": "Vikatan provides comprehensive agriculture news in Tamil, including success stories of farmers, guidance, and solutions for agricultural challenges.",
      "source": "https://www.vikatan.com/agriculture",
      "tags": ["News", "Information", "Topics"]
    }
  ],
  "Jharkhand": [
    {
      "scheme_name": "Jharkhand to Eliminate Unsuccessful Agriculture Schemes in 2025-26 Budget",
      "description": "The Jharkhand Agriculture, Animal Husbandry, and Cooperative Department is preparing the 2025-26 budget by evaluating existing schemes. Unsuccessful programs are set to be discontinued, focusing resources on effective initiatives to benefit farmers.",
      "source": "https://avenuemail.in/jharkhand-unsuccessful-agriculture-schemes-to-be-dropped-in-budget-2025-26/",
      "tags": ["Policy", "Agriculture", "Finance"]
    },
    {
      "scheme_name": "New Processing Centre for Forest Produce Inaugurated in Ranchi",
      "description": "Agriculture Minister Shilpi Neha Tirkey inaugurated a central processing and research centre in Ranchi to enhance the packaging and sale of forest produce. This facility aims to boost the rural economy by supporting local farmers and villagers.",
      "source": "https://www.devdiscourse.com/article/headlines/3274455-empowering-jharkhands-rural-economy-new-processing-centre-for-forest-produce-opens",
      "tags": ["Agriculture", "Economy", "Development"]
    },
    {
      "scheme_name": "Statewide Crackdown on Illegal Poppy Cultivation",
      "description": "Jharkhand authorities have destroyed illegal poppy cultivation on 19,000 acres and arrested 190 individuals over two months. This extensive operation reflects the state's commitment to eradicating illicit farming activities.",
      "source": "https://www.devdiscourse.com/article/law-order/3273836-crackdown-on-illicit-poppy-farming-in-jharkhand",
      "tags": ["Law", "Agriculture", "Enforcement"]
    },
    {
      "scheme_name": "Arjun Munda Discusses Industrial and Agricultural Challenges in Jamshedpur",
      "description": "Former Union Minister and ex-Jharkhand Chief Minister Arjun Munda engaged with the Jamshedpur Citizens Forum to address industrial and agricultural issues. The discussion focused on strategies to overcome challenges faced by these sectors.",
      "source": "https://avenuemail.in/arjun-munda-engages-with-jamshedpur-citizens-forum-on-industrial-and-agricultural-challenges/",
      "tags": ["Policy", "Agriculture", "Economy"]
    },
    {
      "scheme_name": "Jharkhand's Priority Sector Lending Credit Potential Projected at ₹88,303 Crore for FY'26",
      "description": "The state's credit potential for priority sector lending in the fiscal year 2025-26 is projected at ₹88,303 crore. Finance Minister Radha Krishna Kishore emphasized the importance of sustainable agricultural practices and infrastructure development to drive economic growth.",
      "source": "https://economictimes.indiatimes.com/news/india/jharkhands-credit-potential-for-priority-sector-lending-in-fy26-projected-at-rs-88303-cr/articleshow/118276445.cms",
      "tags": ["Finance", "Agriculture", "Policy"]
    },
    {
      "scheme_name": "Farm Loan Waiver Up to ₹2 Lakh Announced",
      "description": "Agriculture Minister Dipika Pandey Singh announced a farm loan waiver of up to ₹2 lakh, aiming to provide relief to over 1.91 lakh farmers. This initiative seeks to alleviate financial burdens and support the agricultural community.",
      "source": "https://www.hindustantimes.com/india-news/jharkhand-govt-to-waive-farm-loans-up-to-rs-2-lakh-101718368852304.html",
      "tags": ["Finance", "Policy", "Agriculture"]
    },
    {
      "scheme_name": "14-Point Demand Charter Submitted to Agriculture Minister",
      "description": "Farmers in Haidarnagar presented a 14-point demand charter to Agriculture Minister Shilpi Neha Tirkey. Key demands include agricultural loan waivers, repair of ATIC centers, seed availability, and construction of cold storage facilities.",
      "source": "https://www.livehindustan.com/jharkhand/palamu/story-jharkhand-agriculture-minister-shilpi-neha-tirki-urged-to-address-14-point-demands-for-farmers-in-haidarnagar-201740078471612.html",
      "tags": ["Agriculture", "Farmers", "Policy"]
    },
    {
      "scheme_name": "Significant Reduction in Agriculture Department Budget Utilization",
      "description": "Over the past five years, Jharkhand's Agriculture Department has seen its original budget reduced from ₹15,689 crore to ₹11,000 crore. Despite the cuts, the department has struggled to fully utilize the allocated funds each fiscal year.",
      "source": "https://www.prabhatkhabar.com/state/jharkhand/ranchi/jharkhand-agriculture-budget-cut-by-half-still-entire-amount-is-not-spent",
      "tags": ["Finance", "Agriculture", "Policy"]
    },
    {
      "scheme_name": "Paddy Procurement Halted Due to Storage Crisis",
      "description": "A storage crisis has led to the suspension of paddy procurement at multiple centers across Jharkhand. Despite the establishment of 699 procurement centers with a target of 60 lakh quintals, operations have been disrupted, leaving farmers in distress.",
      "source": "https://www.newkerala.com/news/o/storage-crisis-halts-paddy-procurement-jharkhand-farmers-bear-brunt-976",
      "tags": ["Agriculture", "Farmers", "Logistics"]
    },
    {
      "scheme_name": "86% of Arable Land for Paddy Cultivation Remains Unused Due to Scanty Rainfall",
      "description": "Jharkhand faces a 47% rainfall deficit, resulting in 86% of arable land for paddy cultivation lying fallow. Farmers express concern over potential drought-like conditions for the third consecutive year.",
      "source": "https://www.zeebiz.com/economy-infra/agricultue/news-86-of-jharkhands-arable-land-for-paddy-cultivation-lying-fallow-due-to-scanty-rainfall-304070",
      "tags": ["Agriculture", "Climate", "Farmers"]
    }
  ],

  "Telangana" : [
    {
      "scheme_name": "Telangana's Rs 3.2 Lakh Crore Budget Amid Fiscal Challenges",
      "description": "The Telangana government is preparing a Rs 3.2 lakh crore budget, with a special assembly session expected in early March to pass key bills related to BC reservations and SC categorization.",
      "source": "https://telanganatoday.com/telangana-gears-up-for-rs-3-2-lakh-crore-budget-amid-fiscal-crisis",
      "tags": ["Policy", "Environmental", "Health"]
    },
    {
      "scheme_name": "Fertilizer Shortage Affects Telangana Farmers",
      "description": "Farmers in Telangana are facing fertilizer shortages, leading to long queues at primary agricultural cooperative societies, with many leaving without the necessary urea due to inadequate supply.",
      "source": "https://telanganatoday.com/farmers-in-queues-for-fertilizer-becomes-common-sight-in-telangana",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Revival of Organic Farming in Telangana",
      "description": "Aligning with Prime Minister Narendra Modi's vision under the Paramparagat Krishi Vikas Yojana (PKVY), Telangana is promoting sustainable agricultural practices through a renewed push for organic farming.",
      "source": "https://www.thehansindia.com/telangana/sustainable-shift-towards-nature-the-revival-of-organic-farming-in-telangana-947907",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Postponement of TG EAPCET 2025 Application Process",
      "description": "The Telangana State Council of Higher Education has postponed the TG EAPCET 2025 application process for engineering, pharmacy, and agriculture courses due to technical reasons.",
      "source": "https://www.thehansindia.com/telangana/tg-eapcet-2025-applications-telangana-postpones-application-process-948837",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Telangana's Agriculture Sector Records Phenomenal Growth",
      "description": "Agriculture Minister S Niranjan Reddy attributes the state's agricultural success to Chief Minister K Chandrashekhar Rao, noting an average growth of 15.8% over the last seven years, surpassing the national average of 8.5%.",
      "source": "https://telanganatoday.com/tag/agriculture-sector",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Telangana to Enhance Agriculture with Israeli Technology",
      "description": "Agriculture Minister Tummala Nageswara Rao announced plans to boost Telangana's agricultural sector by integrating advanced Israeli technology, following discussions with representatives from Israeli companies MDHAI and Windponics.",
      "source": "https://www.siasat.com/telangana-to-boost-agriculture-using-israeli-tech-expertise-tummala-3183422/",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Youth Moving Away from Agriculture in Telangana",
      "description": "A significant number of young individuals from agricultural households in Telangana are abandoning farming, with only 55% remaining engaged in agriculture, influenced by various economic and social factors.",
      "source": "https://timesofindia.indiatimes.com/city/hyderabad/youth-abandoning-agriculture-a-crisis-in-telanganas-farming-households/articleshow/114630422.cms",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Telangana to Purchase Additional 25,000 Tons of Soybean",
      "description": "To support farmers, the Telangana government has decided to procure an additional 25,000 tons of soybean, as directed by Agriculture Minister Tummala Nageswara Rao to the state cooperative marketing federation, Markfed.",
      "source": "https://www.siasat.com/telangana-to-purchase-addl-25k-tons-of-soybean-to-benefit-farmers-3149944/",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Evaluation of ACRAT Project in Mamidipalli Village",
      "description": "Project experts from Germany, along with agriculture specialists from Telangana, NGO representatives, and farmers from various villages, conducted a field visit to Mamidipalli to assess the progress of the ACRAT Project.",
      "source": "https://telanganatoday.com/tag/agriculture",
      "tags": ["News", "Information", "Topics"]
    },
    {
      "scheme_name": "Telangana's Agriculture Department Initiatives",
      "description": "The Department of Agriculture in Telangana continues to implement various schemes and programs aimed at enhancing agricultural productivity and supporting farmers across the state.",
      "source": "https://www.agri.telangana.gov.in/",
      "tags": ["News", "Information", "Topics"]
    }
  ],

  "Andhra Pradesh": [
    {
      "scheme_name": "AP Agriculture Budget 2025-26",
      "description": "The Andhra Pradesh government has presented a significant agriculture budget, totaling ₹48,340 crore, aimed at supporting the farming community and enhancing agricultural productivity.",
      "source": "https://www.thehansindia.com/andhra-pradesh/ap-agriculture-budget-2025-26-here-are-allocations-949575",
      "tags": ["Finance", "Agriculture", "Policy"]
    },
    {
      "scheme_name": "Andhra Pradesh Budget Prioritises Agriculture and Water Management",
      "description": "The state budget emphasizes agriculture and water management, with substantial funds allocated for the development of the capital Amravati and promotion of the Telugu language.",
      "source": "https://swarajyamag.com/news-brief/andhra-pradesh-budget-prioritises-agriculture-water-management-funds-allocated-for-capital-amravati-telugu-language",
      "tags": ["Finance", "Agriculture", "Infrastructure"]
    },
    {
      "scheme_name": "AP Agriculture Budget 2024-25",
      "description": "The Andhra Pradesh government unveiled its Agriculture Budget for 2024-25, allocating ₹43,402 crore to support the state's farmers and boost agricultural growth.",
      "source": "https://www.bizzbuzz.news/national/andhrapradesh/ap-agriculture-budget-2024-25-key-allocations-and-initiatives-to-strengthen-andhra-pradeshs-farming-sector-1341879",
      "tags": ["Finance", "Agriculture", "Policy"]
    },
    {
      "scheme_name": "Andhra Pradesh Aims for 30% Growth in Agriculture and Allied Sectors",
      "description": "The state government aims to achieve a 30% growth rate in agriculture and allied sectors by encouraging the cultivation of horticulture crops.",
      "source": "https://www.newindianexpress.com/states/andhra-pradesh/2025/Feb/19/andhra-aims-to-achieve-30-per-cent-growth-in-agriculture-allied-sectors",
      "tags": ["Agriculture", "Economy", "Development"]
    },
    {
      "scheme_name": "Andhra Pradesh Agriculture Minister Hails Drone Technology",
      "description": "Agriculture Minister Kinjarapu Atchannaidu emphasized the transformative impact of drone technology on farming and encouraged youth to pursue agriculture.",
      "source": "https://www.newindianexpress.com/states/andhra-pradesh/2025/Jan/05/andhra-pradesh-agriculture-minister-atchannaidu-hails-transformative-impact-of-drone-tech-on-farming",
      "tags": ["Technology", "Agriculture", "Innovation"]
    },
    {
      "scheme_name": "Natural Farming Model in Andhra Pradesh",
      "description": "The state government launched the Andhra Pradesh Community Managed Natural Farming (APCNF) program as a sustainable alternative to chemical-based agriculture.",
      "source": "https://www.cgiar.org/news-events/news/the-natural-farming-model-of-andhra-pradesh-a-solution-for-sustainable-agriculture-in-india/",
      "tags": ["Sustainability", "Agriculture", "Organic Farming"]
    },
    {
      "scheme_name": "Andhra Pradesh Agriculture Budget Focuses on Farmers' Welfare",
      "description": "The agriculture budget, totaling ₹43,402 crore, aims to boost agricultural growth and address challenges faced by farmers in the region.",
      "source": "https://www.thehansindia.com/andhra-pradesh/andhra-pradesh-agriculture-budget-presented-with-focus-on-farmers-welfare-minister-atchannaidu-920742",
      "tags": ["Finance", "Agriculture", "Farmers' Welfare"]
    },
    {
      "scheme_name": "Kuppam Farmer Demonstrates Benefits of Natural Farming",
      "description": "A farmer in Seegalapalli village showcases a model of biodiversity and sustainability by cultivating over 20 crops using natural farming methods.",
      "source": "https://www.thehansindia.com/andhra-pradesh/kuppam-farmer-proves-natural-farming-productive-profitable-930022",
      "tags": ["Sustainability", "Agriculture", "Organic Farming"]
    },
    {
      "scheme_name": "Pattiseema Lift Irrigation Project",
      "description": "This project connects the Godavari River to the Krishna River, becoming the first river interlinking project in India completed on time without budget enhancements.",
      "source": "https://en.wikipedia.org/wiki/Pattiseema_Lift_Irrigation_Project",
      "tags": ["Irrigation", "Infrastructure", "Water Management"]
    },
    {
      "scheme_name": "Gundlakamma Reservoir Project",
      "description": "An irrigation project across the Gundlakamma river in Prakasam district, aiming to provide irrigation and drinking water facilities.",
      "source": "https://en.wikipedia.org/wiki/Gundlakamma_Reservoir_Project",
      "tags": ["Irrigation", "Infrastructure", "Water Management"]
    }
  ],


  "Karnataka": [
    {
      "scheme_name": "Krishi Bhagya Scheme",
      "description": "Helps farmers construct farm ponds and implement micro-irrigation systems",
      "source": "https://raitamitra.karnataka.gov.in/",
      "tags": ["Water Conservation", "Irrigation", "Sustainable Farming"]
    },
    {
      "scheme_name": "Raitha Siri",
      "description": "Provides financial assistance for farm mechanization",
      "source": "https://krishika.karnataka.gov.in/",
      "tags": ["Farm Machinery", "Financial Aid", "Modernization"]
    }
  ]
};

const AgroNews: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedScheme, setSelectedScheme] = useState<'central' | 'state'>('central');
  const [selectedState, setSelectedState] = useState<string>('Maharashtra');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const states = Object.keys(stateSchemes);

  const schemes = useMemo(() => {
    return selectedScheme === 'central' ? jsonData : stateSchemes[selectedState];
  }, [selectedScheme, selectedState]);

  const totalItems = schemes ? schemes.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const currentSchemes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return schemes ? schemes.slice(startIndex, endIndex) : [];
  }, [schemes, currentPage, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
            ${currentPage === i 
              ? isDarkMode
                ? 'bg-neon-green text-dark-earth-brown font-bold'
                : 'bg-farm-green text-white font-bold'
              : isDarkMode
                ? 'bg-dark-earth-brown text-soft-white hover:bg-opacity-80'
                : 'bg-golden-beige text-dark-gray hover:bg-opacity-80'
            }`}
        >
          {i}
        </button>
      );
    }
    
    return pageNumbers;
  };

  const renderSchemes = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {currentSchemes.map((scheme: Scheme, index: number) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg
              ${isDarkMode ? 'bg-dark-earth-brown hover:bg-opacity-90' : 'bg-golden-beige hover:bg-opacity-90'}`}
          >
            <h3 className={`text-xl font-bold mb-3 
              ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>
              {scheme.scheme_name}
            </h3>
            
            <p className={`mb-4 
              ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>
              {scheme.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {scheme.tags && scheme.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className={`px-3 py-1 rounded-full text-sm
                    ${isDarkMode 
                      ? 'bg-neon-green text-dark-earth-brown' 
                      : 'bg-farm-green text-white'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <a
              href={scheme.source}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm
                ${isDarkMode 
                  ? 'text-warm-amber hover:text-opacity-80' 
                  : 'text-harvest-orange hover:text-opacity-80'}`}
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`max-w-7xl mx-auto p-6 ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>
      <h1 className="text-3xl font-bold mb-8">Agricultural Schemes</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex gap-4">
          <button
            onClick={() => {
              setSelectedScheme('central');
              setCurrentPage(1);
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-colors
              ${selectedScheme === 'central'
                ? isDarkMode
                  ? 'bg-neon-green text-dark-earth-brown'
                  : 'bg-farm-green text-white'
                : isDarkMode
                  ? 'bg-dark-earth-brown text-soft-white hover:bg-opacity-90'
                  : 'bg-golden-beige text-dark-gray hover:bg-opacity-90'}`}
          >
            Central Schemes
          </button>
          
          <button
            onClick={() => {
              setSelectedScheme('state');
              setCurrentPage(1);
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-colors
              ${selectedScheme === 'state'
                ? isDarkMode
                  ? 'bg-neon-green text-dark-earth-brown'
                  : 'bg-farm-green text-white'
                : isDarkMode
                  ? 'bg-dark-earth-brown text-soft-white hover:bg-opacity-90'
                  : 'bg-golden-beige text-dark-gray hover:bg-opacity-90'}`}
          >
            State Schemes
          </button>
        </div>
        
        {selectedScheme === 'state' && (
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setCurrentPage(1);
            }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors
              ${isDarkMode
                ? 'bg-dark-earth-brown text-soft-white border-neon-green'
                : 'bg-golden-beige text-dark-gray border-farm-green'} 
              border-2 focus:outline-none`}
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        )}
      </div>

      {/* Results count */}
      <div className={`mb-4 ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>
        Found {totalItems} schemes
      </div>

      {renderSchemes()}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
              ${isDarkMode 
                ? 'bg-dark-earth-brown text-soft-white hover:bg-opacity-80' 
                : 'bg-golden-beige text-dark-gray hover:bg-opacity-80'}`}
          >
            <ChevronLeft size={20} />
          </button>
          
          {renderPageNumbers()}
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
              ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
              ${isDarkMode 
                ? 'bg-dark-earth-brown text-soft-white hover:bg-opacity-80' 
                : 'bg-golden-beige text-dark-gray hover:bg-opacity-80'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AgroNews;
