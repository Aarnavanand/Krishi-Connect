const tagsList = [
  "Agriculture",
  "Irrigation",
  "Crop Protection",
  "Sustainable Farming",
  "Organic Farming",
  "Market Access",
  "Credit Support",
  "Farm Machinery",
  "Dairy Farming",
  "Beekeeping",
  "Soil Health",
  "Renewable Energy",
  "Horticulture",
  "Livestock Development",
  "Agri-Entrepreneurship",
  "Agri-Tech",
  "Climate Resilience",
  "Post-Harvest Management",
  "Fisheries",
  "Digital Agriculture"
];

// Function to get random tags
const getRandomTags = (num: number) => {
  const shuffled = tagsList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export const jsonData = [
  {
    "scheme_name": "National Pest Surveillance System (NPSS)",
    "description": "Aims to monitor and manage pest populations across the country, providing timely advisories to farmers to prevent crop damage.",
    "source": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2082792",
    "tags": ["Agriculture", "Pest Management", "Farmer"]
  },
  {
    "scheme_name": "AgriSURE – Agri Fund for Startups & Rural Enterprises",
    "description": "A fund established to support startups and rural enterprises in the agriculture sector, promoting innovation and entrepreneurship.",
    "source": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2082792",
    "tags": getRandomTags(3) // Randomly assign 4 tags
  },
  {
    "scheme_name": "Krishi Nivesh Portal (Phase –I)",
    "description": "A portal designed to attract investments in the agriculture sector by providing information on investment opportunities and facilitating ease of doing business.",
    "source": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2082792",
    "tags": getRandomTags(3) // Randomly assign 3 tags
  },
  {
    "scheme_name": "Krishi-DSS Portal",
    "description": "A geospatial platform for Indian agriculture, offering decision support services to farmers and stakeholders.",
    "source": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2082792",
    "tags": getRandomTags(3) // Randomly assign 4 tags
  },
  {
    "scheme_name": "Voluntary Carbon Market (VCM) for Sustainable Agriculture",
    "description": "Introduces a market mechanism for trading carbon credits earned through sustainable agriculture practices.",
    "source": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2082792",
    "tags": getRandomTags(3) // Randomly assign 3 tags
  },
  {
    "scheme_name": "Bharatiya Prakritik Krishi Paddhati (BPKP)",
    "description": "A sub-mission under the Paramparagat Krishi Vikas Yojana (PKVY) promoting natural farming practices to enhance soil health and reduce dependency on chemical inputs.",
    "source": "https://naturalfarming.dac.gov.in/Schemes/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Mission on Edible Oils – Oil Palm (NMEO-OP)",
    "description": "Aims to boost domestic production of edible oils by promoting oil palm cultivation, reducing import dependency.",
    "source": "https://sansad.in/getFile/loksabhaquestions/annex/1714/AU1506.pdf?source=pqals",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Agricultural Infrastructure Fund (AIF)",
    "description": "Provides financial support to agri-entrepreneurs, startups, and farmer groups for developing infrastructure and logistics facilities.",
    "source": "https://www.nabard.org/content1.aspx?catid=23&id=23&mid=530",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "e-Choupal Initiative",
    "description": "A web-based platform by ITC Limited connecting rural farmers directly with markets, providing real-time information and procurement options.",
    "source": "https://en.wikipedia.org/wiki/E-Choupal",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "PM Kusum Scheme",
    "description": "Encourages the use of solar energy in agriculture by providing subsidies for installing solar pumps, reducing reliance on traditional energy sources.",
    "source": "https://en.wikipedia.org/wiki/PM_Kusum_Scheme",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Prime Minister Dhan-Dhaanya Krishi Yojana",
    "description": "Aims to boost agricultural productivity and rural prosperity by implementing multiple schemes, including a special program in 100 low-productivity districts.",
    "source": "https://timesofindia.indiatimes.com/india/budget-2025-26-govt-lines-up-key-schemes-to-boost-credit-access-productivity-self-reliance-farmer-welfare/articleshow/117837007.cms",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Six-Year Mission for Self-Reliance in Pulses",
    "description": "A six-year program to increase pulses production and reduce import dependency by directing state agencies to procure pulses at guaranteed prices.",
    "source": "https://www.reuters.com/world/india/india-budget-india-unveils-long-term-programmes-boost-pulses-cotton-output-2025-02-01/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Enhanced Credit through Kisan Credit Card (KCC)",
    "description": "Increases the subsidized KCC loan limit to ₹5 lakh, benefiting 7.7 crore farmers, fishermen, and dairy farmers.",
    "source": "https://timesofindia.indiatimes.com/india/budget-2025-26-govt-lines-up-key-schemes-to-boost-credit-access-productivity-self-reliance-farmer-welfare/articleshow/117837007.cms",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Agricultural Infrastructure Fund (AIF)",
    "description": "A ₹1 lakh crore fund aimed at providing medium to long-term debt financing for investment in viable projects for post-harvest management infrastructure and community farming assets.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098424",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "description": "Provides financial assistance of ₹6,000 per year to small and marginal farmers, directly transferred to their bank accounts.",
    "source": "https://services.india.gov.in/service/detail/major-schemes-for-farmers",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    "description": "Aims to enhance irrigation coverage and improve water use efficiency in agriculture.",
    "source": "https://www.india.gov.in/spotlight/pradhan-mantri-krishi-sinchayee-yojana",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "description": "A crop insurance scheme that provides financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
    "source": "https://www.pmfby.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "e-NAM (National Agriculture Market)",
    "description": "A pan-India electronic trading portal that networks existing APMC mandis to create a unified national market for agricultural commodities.",
    "source": "https://enam.gov.in/web/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "PM KUSUM Scheme",
    "description": "Aims to provide financial and water security to farmers by promoting the installation of solar pumps and grid-connected solar power plants.",
    "source": "https://mnre.gov.in/pm-kusum",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Atal Bhujal Yojana",
    "description": "Aims to improve groundwater management through community participation in identified priority areas.",
    "source": "https://jalshakti-dowr.gov.in/schemes/atal-bhujal-yojana",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Prime Minister Dhan-Dhaanya Krishi Yojana",
    "description": "A comprehensive initiative targeting 100 low-productivity districts to enhance rural infrastructure, improve irrigation, and promote sustainable farming practices.",
    "source": "https://indianexpress.com/article/india/budget-agriculture-pulses-seeds-vegetables-mission-9811866/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Six-Year Pulses Production Program",
    "description": "Aims to boost pulses production and reduce import dependency by ensuring state agencies procure pulses at guaranteed prices over six years.",
    "source": "https://www.reuters.com/world/india/india-budget-india-unveils-long-term-programmes-boost-pulses-cotton-output-2025-02-01/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Mission on High Yielding Seeds",
    "description": "Focuses on developing and distributing high-yielding seed varieties to enhance crop productivity and ensure food security.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098404",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Makhana Board Establishment",
    "description": "A dedicated board to promote makhana (fox nut) cultivation and processing, particularly benefiting farmers in Bihar.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098404",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Five-Year Cotton Productivity Mission",
    "description": "A mission aimed at enhancing cotton yields, especially focusing on extra-long staple cotton varieties through research and development.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098404",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Kisan Credit Card (KCC) Loan Limit Increase",
    "description": "The government has raised the subsidized KCC loan limit from ₹3 lakh to ₹5 lakh, benefiting approximately 7.7 crore farmers, fishermen, and dairy farmers.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098404",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "12.7 Lakh Metric Tons Urea Plant in Namrup, Assam",
    "description": "A new urea plant with an annual capacity of 12.7 lakh metric tons is set to be established in Namrup, Assam, to boost domestic fertilizer production.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098404",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Framework for Sustainable Fisheries in Andaman & Nicobar and Lakshadweep",
    "description": "A new framework focusing on the sustainable harnessing of fisheries in the Andaman & Nicobar and Lakshadweep islands.",
    "source": "https://pib.gov.in/PressReleasePage.aspx?PRID=2098404",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Mission on Edible Oils – Oil Palm (NMEO-OP)",
    "description": "Aims to boost domestic production of edible oils by promoting oil palm cultivation, reducing import dependency.",
    "source": "https://sansad.in/getFile/loksabhaquestions/annex/1714/AU1506.pdf?source=pqals",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Agricultural Infrastructure Fund (AIF)",
    "description": "Provides financial support to agri-entrepreneurs, startups, and farmer groups for developing infrastructure and logistics facilities.",
    "source": "https://www.nabard.org/content1.aspx?catid=23&id=23&mid=530",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "description": "Income support scheme providing ₹6,000 per year to small and marginal farmers.",
    "source": "https://pmkisan.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "description": "Crop insurance scheme providing financial support to farmers in case of crop failure.",
    "source": "https://pmfby.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Soil Health Card Scheme",
    "description": "Provides soil health cards to farmers, containing information about nutrient status and recommendations for fertilizer use.",
    "source": "https://soilhealth.dac.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Paramparagat Krishi Vikas Yojana (PKVY)",
    "description": "Promotes organic farming through cluster-based approach and Participatory Guarantee System (PGS) certification.",
    "source": "https://pgsindia-ncof.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Agriculture Market (e-NAM)",
    "description": "Online trading platform for agricultural commodities, facilitating better price discovery and market access.",
    "source": "https://enam.gov.in/web/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Kisan Credit Card (KCC)",
    "description": "Provides credit to farmers for agricultural inputs and other related expenses.",
    "source": "https://agricoop.nic.in/en/programmes/agricultural-credit/kisan-credit-card-kcc",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Mission for Sustainable Agriculture (NMSA)",
    "description": "Focuses on sustainable agricultural practices, resource conservation, and climate resilience.",
    "source": "https://nmsa.dac.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Rashtriya Krishi Vikas Yojana (RKVY)",
    "description": "State plan scheme providing flexibility to states in implementing agricultural development programs.",
    "source": "https://rkvy.nic.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    "description": "Aims to enhance water use efficiency and expand irrigation coverage.",
    "source": "https://pmksy.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Mission for Integrated Development of Horticulture (MIDH)",
    "description": "Promotes holistic development of the horticulture sector.",
    "source": "https://midh.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Food Security Mission (NFSM)",
    "description": "Increases production of rice, wheat, pulses, coarse cereals, and nutri-cereals through area expansion and productivity enhancement.",
    "source": "https://nfsm.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "description": "Promotes farm mechanization to improve efficiency and reduce labor costs.",
    "source": "https://agricoop.nic.in/en/programmes/agricultural-engineering/sub-mission-agricultural-mechanization-smam",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Mission on Oilseeds and Oil Palm (NMOOP)",
    "description": "Increases production of oilseeds and oil palm to reduce import dependency.",
    "source": "https://agricoop.nic.in/en/programmes/oilseeds-and-oil-palm/national-mission-oilseeds-and-oil-palm-nmoop",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Dairy Entrepreneurship Development Scheme (DEDS)",
    "description": "Provides financial assistance for setting up dairy farms and related infrastructure.",
    "source": "https://dahd.nic.in/schemes/programmes/dairy-entrepreneurship-development-scheme-deds",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Fisheries and Aquaculture Infrastructure Development Fund (FIDF)",
    "description": "Develops infrastructure for fisheries and aquaculture sector.",
    "source": "https://fidf.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Agricultural Marketing Infrastructure (AMI) Scheme",
    "description": "Develops marketing infrastructure like rural godowns, cold storages, and market yards.",
    "source": "https://agmarknet.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Livestock Mission (NLM)",
    "description": "Develops livestock sector through breed improvement, feed and fodder development, and health services.",
    "source": "https://dahd.nic.in/schemes/programmes/national-livestock-mission",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Bee Keeping Development Committee",
    "description": "Promotes beekeeping for honey production and pollination services.",
    "source": "https://nbhm.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Bamboo Mission (NBM)",
    "description": "Promotes bamboo cultivation and utilization for various purposes.",
    "source": "https://nbm.nic.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Agri Clinics and Agri Business Centres (ACABC)",
    "description": "Provides training and support for setting up agri-clinics and agri-business centers.",
    "source": "https://agricoop.nic.in/en/programmes/extension-and-training/agri-clinics-agri-business-centres-acabc",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",
    "description": "Promotes solar energy use in agriculture by providing subsidies for solar pumps and grid-connected solar power plants.",
    "source": "https://pmkusum.mnre.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Beekeeping & Honey Mission (NBHM)",
    "description": "Focuses on the holistic development of the beekeeping sector to enhance honey production and increase farmers' income.",
    "source": "https://nbhm.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Mission for Protein Supplements (NMPS)",
    "description": "Aims to increase the availability of protein supplements through the promotion of animal husbandry, dairying, and fisheries.",
    "source": "https://dahd.nic.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Agri Infrastructure Fund (AIF)",
    "description": "Provides medium-long term debt financing facility for investments in viable projects for post-harvest management infrastructure and community farming assets.",
    "source": "https://agriinfra.dac.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Formation and Promotion of 10,000 Farmer Producer Organizations (FPOs)",
    "description": "Promotes the formation of FPOs to improve farmers' access to markets, technology, and credit.",
    "source": "https://sfacindia.com/FarmerProducerOrganizations.aspx",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Food Processing Mission (NFPM)",
    "description": "Promotes the development of the food processing sector to reduce wastage and add value to agricultural produce.",
    "source": "https://mofpi.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Sub-Mission on Seeds and Planting Material (SMSP)",
    "description": "Ensures the availability of quality seeds and planting material to farmers.",
    "source": "https://seednet.gov.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Project on Organic Production (NPOP)",
    "description": "Provides certification and support for organic farming practices.",
    "source": "https://apeda.gov.in/apedawebsite/organic/organic_home.htm",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Rashtriya Gokul Mission (RGM)",
    "description": "Focuses on the development and conservation of indigenous bovine breeds.",
    "source": "https://dahd.nic.in/schemes/programmes/rashtriya-gokul-mission",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "National Digital Agriculture Mission (NDAM)",
    "description": "Aims to create a digital ecosystem for agriculture in India.",
    "source": "https://agricoop.nic.in/",
    "tags": getRandomTags(3)
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "description": "Provides financial assistance of ₹6,000 per year to small and marginal farmers, directly transferred to their bank accounts.",
    "source": "https://services.india.gov.in/service/detail/major-schemes-for-farmers",
    "tags": ["Farmer", "Financial Assistance"],
  },
  {
    "scheme_name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "description": "A crop insurance scheme that provides financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
    "source": "https://www.pmfby.gov.in/",
    "tags": ["Farmer", "Insurance", "Crop Protection"]
  },
  {
    "scheme_name": "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    "description": "Aims to enhance irrigation coverage and improve water use efficiency in agriculture.",
    "source": "https://www.india.gov.in/spotlight/pradhan-mantri-krishi-sinchayee-yojana",
    "tags": ["Irrigation", "Water Management", "Farmer"]
  },
  {
    "scheme_name": "Kisan Credit Card (KCC)",
    "description": "Provides credit to farmers for agricultural inputs and other related expenses.",
    "source": "https://www.myscheme.gov.in/schemes/kcc",
    "tags": ["Credit", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "Paramparagat Krishi Vikas Yojana (PKVY)",
    "description": "Promotes organic farming through cluster-based approach and Participatory Guarantee System (PGS) certification.",
    "source": "https://www.myscheme.gov.in/schemes/pkvy",
    "tags": ["Organic Farming", "Sustainable Agriculture", "Farmer"]
  },
  {
    "scheme_name": "Soil Health Card Scheme",
    "description": "Provides soil health cards to farmers, containing information about nutrient status and recommendations for fertilizer use.",
    "source": "https://soilhealth.dac.gov.in/",
    "tags": ["Soil Health", "Farmer", "Sustainable Agriculture"]
  },
  {
    "scheme_name": "e-NAM (National Agriculture Market)",
    "description": "A pan-India electronic trading portal that networks existing APMC mandis to create a unified national market for agricultural commodities.",
    "source": "https://enam.gov.in/web/",
    "tags": ["Market Access", "Farmer", "Digital Platform"]
  },
  {
    "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "description": "Provides financial assistance to farmers for procurement of farm machinery and implements.",
    "source": "https://www.myscheme.gov.in/schemes/smam",
    "tags": ["Farm Machinery", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "National Mission on Oilseeds and Oil Palm (NMOOP)",
    "description": "Aims to increase production of oilseeds and oil palm to reduce import dependency.",
    "source": "https://www.myscheme.gov.in/schemes/nmoop",
    "tags": ["Oilseeds", "Cultivation", "Farmer"]
  },
  {
    "scheme_name": "Agri-Clinics and Agri-Business Centres (ACABC) Scheme",
    "description": "Creates self-employment opportunities for agricultural graduates by supporting them to establish agri-clinics and agri-business centers.",
    "source": "https://www.myscheme.gov.in/schemes/acandabc",
    "tags": ["Entrepreneurship", "Farmer", "Agribusiness"]
  },
  {
    "scheme_name": "National Agriculture Insurance Scheme (NAIS)",
    "description": "Provides insurance coverage and financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
    "source": "https://www.myscheme.gov.in/schemes/nais",
    "tags": ["Insurance", "Farmer", "Crop Protection"]
  },
  {
    "scheme_name": "Agriculture Infrastructure Fund (AIF)",
    "description": "Provides financial support for the development of agriculture infrastructure projects at farm-gate and aggregation points.",
    "source": "https://www.myscheme.gov.in/schemes/aif",
    "tags": ["Infrastructure", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "Integrated Scheme on Agriculture Cooperation (ISAC)",
    "description": "Aims to provide financial assistance for the development of cooperative marketing, processing, storage, and supply of agricultural produce.",
    "source": "https://www.myscheme.gov.in/schemes/isac",
    "tags": ["Cooperative", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "Atma Nirbhar Krishi Yojana (ANKY)",
    "description": "Focuses on promoting self-reliance in the agriculture sector by providing financial assistance for various agricultural activities.",
    "source": "https://www.myscheme.gov.in/schemes/anky",
    "tags": ["Self-Reliance", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "Sub-Mission on Seeds and Planting Material (SMSP)",
    "description": "Ensures the production and supply of quality seeds and planting material to farmers.",
    "source": "https://www.myscheme.gov.in/schemes/ky-smsp",
    "tags": ["Seeds", "Planting Material", "Farmer"]
  },
  {
    "scheme_name": "National Mission for Sustainable Agriculture (NMSA)",
    "description": "Aims to promote sustainable agriculture practices that are climate-resilient and environmentally friendly.",
    "source": "https://www.myscheme.gov.in/schemes/nmsa",
    "tags": ["Sustainable Agriculture", "Climate Resilience", "Farmer"]
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
    "description": "A pension scheme for small and marginal farmers, providing them with a minimum fixed pension upon reaching the age of 60.",
    "source": "https://www.myscheme.gov.in/schemes/pmkmy",
    "tags": ["Pension", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "National Food Security Mission (NFSM)",
    "description": "Aims to increase the production of rice, wheat, pulses, coarse cereals, and commercial crops through area expansion and productivity enhancement.",
    "source": "https://www.myscheme.gov.in/schemes/nfsm",
    "tags": ["Food Security", "Farmer", "Cultivation"]
  },	
  {
    "scheme_name": "National Mission for Sustainable Agriculture (NMSA)",
    "description": "Aims to promote sustainable agriculture practices that are climate-resilient and environmentally friendly.",
    "source": "https://www.myscheme.gov.in/schemes/nmsa",
    "tags": ["Sustainable Agriculture", "Climate Resilience", "Farmer"]
  },
  {
    "scheme_name": "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
    "description": "A pension scheme for small and marginal farmers, providing them with a minimum fixed pension upon reaching the age of 60.",
    "source": "https://www.myscheme.gov.in/schemes/pmkmy",
    "tags": ["Pension", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "National Food Security Mission (NFSM)",
    "description": "Aims to increase the production of rice, wheat, pulses, coarse cereals, and commercial crops through area expansion and productivity enhancement.",
    "source": "https://www.myscheme.gov.in/schemes/nfsm",
    "tags": ["Food Security", "Farmer", "Cultivation"]
  },	
  {
    "scheme_name": "National Mission on Oilseeds and Oil Palm (NMOOP)",
    "description": "Aims to increase production of oilseeds and oil palm to reduce import dependency.",
    "source": "https://www.myscheme.gov.in/schemes/nmoop",
    "tags": ["Oilseeds", "Cultivation", "Farmer"]
  },
  {
    "scheme_name": "Agri-Clinics and Agri-Business Centres (ACABC) Scheme",
    "description": "Creates self-employment opportunities for agricultural graduates by supporting them to establish agri-clinics and agri-business centers.",
    "source": "https://www.myscheme.gov.in/schemes/acandabc",
    "tags": ["Entrepreneurship", "Farmer", "Agribusiness"]
  },
  {
    "scheme_name": "National Agriculture Insurance Scheme (NAIS)",
    "description": "Provides insurance coverage and financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
    "source": "https://www.myscheme.gov.in/schemes/nais",
    "tags": ["Insurance", "Farmer", "Crop Protection"]
  },
  {
    "scheme_name": "Agriculture Infrastructure Fund (AIF)",
    "description": "Provides financial support for the development of agriculture infrastructure projects at farm-gate and aggregation points.",
    "source": "https://www.myscheme.gov.in/schemes/aif",
    "tags": ["Infrastructure", "Farmer", "Financial Assistance"]
  },
  {
    "scheme_name": "Integrated Scheme on Agriculture Cooperation (ISAC)",
    "description": "Aims to provide financial assistance for the development of cooperative marketing, processing, storage, and supply of agricultural produce.",
    "source": "https://www.myscheme.gov.in/schemes/isac",
    "tags": ["Cooperative", "Farmer", "Financial Assistance"]
  },
];

export const Meghalaya = [
  {
    "scheme_name": "CM-ASSURE Scheme",
    "description": "The Meghalaya government has approved the 'CM-ASSURE' program, a market intervention initiative aimed at supporting farmers facing price drops for non-perishable crops like areca nut, ginger, and turmeric. This scheme is expected to benefit over 20,000 farmers by stabilizing market prices and ensuring fair compensation.",
    "source": "https://timesofindia.indiatimes.com/city/guwahati/meghalaya-okays-scheme-to-support-farmers-amid-market-volatility/articleshow/117129176.cms"
  },
  {
    "scheme_name": "Green Meghalaya Initiative",
    "description": "Chief Minister Conrad K Sangma emphasized climate change as a justice issue at the Climate Investments Coalition for the Global South. He highlighted community conservation efforts and initiatives like 'Green Meghalaya' to combat climate impacts, advocating for regional cooperation in resource sharing and disaster management.",
    "source": "https://www.devdiscourse.com/article/science-environment/3272384-meghalayas-green-leadership-navigating-climate-justice-and-sustainability"
  },
  {
    "scheme_name": "Meghalaya's Organic Farming Initiatives",
    "description": "To lead the implementation of organic farming policies, the Meghalaya Natural and Organic Society for Livelihood and Innovation in Agriculture (MEGNOLIA) was established on June 1, 2023. This initiative aims to promote organic agriculture practices across the state.",
    "source": "https://www.businessworld.in/article/meghalaya-leads-organic-farming-revolution-with-new-initiatives-partnerships-534161"
  },
  {
    "scheme_name": "World Food India 2023 Participation",
    "description": "Meghalaya's agricultural produce, especially millets, took center stage at the 'World Food India 2023' event in New Delhi. Agriculture Minister Dr. Mazel Ampareen Lyngdoh inaugurated the Meghalaya Pavilion, highlighting the state's rich millet diversity in line with the International Year of Millets celebration.",
    "source": "https://hubnetwork.in/millets-in-focus-meghalayas-agrarian-produces-take-centre-stage-at-world-food-india-2023/"
  },
  {
    "scheme_name": "MoU with NDDB Mother Dairy",
    "description": "The Meghalaya State Agricultural Marketing Board signed a Memorandum of Understanding with NDDB Mother Dairy to enhance the dairy sector in the state. This collaboration aims to support and develop local dairy initiatives, benefiting farmers and consumers alike.",
    "source": "https://krishijagran.com/news/meghalaya-state-agricultural-marketing-board-government-of-meghalaya-and-nddb-mother-dairy-sign-mou/"
  },
  {
    "scheme_name": "PRIME Agriculture Response Vehicle Scheme (PRIME-ARVS)",
    "description": "Launched in 2022, the PRIME-ARVS provides financial aid to rural entrepreneurs for purchasing small and medium-sized pickup trucks. This initiative facilitates the transportation of agricultural produce from farms to markets, bridging the gap in the supply chain.",
    "source": "https://www.primemeghalaya.com/prime-agriculture-response-vehicle/"
  },
  {
    "scheme_name": "Agristack Implementation in Meghalaya",
    "description": "The Governor of Meghalaya has notified the State Project Management Unit (PMU) team for implementing Agristack in the state. This initiative aims to digitize agricultural data, enhancing efficiency and decision-making in the agriculture sector.",
    "source": "https://megagriculture.gov.in/"
  },
  {
    "scheme_name": "Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)",
    "description": "MOVCD-NER is a central sector scheme aiming to develop organic value chains in the North East Region, including Meghalaya. The scheme supports farmers through organic certification, infrastructure development, and market linkages.",
    "source": "https://en.wikipedia.org/wiki/Mission_Organic_Value_Chain_Development_for_North_Eastern_Region"
  },
  {
    "scheme_name": "National e-Governance Plan for Agriculture (NeGP-A)",
    "description": "NeGP-A aims to provide information and knowledge networks, developing agriculture services for farmers in a decentralized mode. The scheme includes training, awareness programs, and technology support to enhance agricultural productivity.",
    "source": "https://megagriculture.gov.in/PUBLIC/schemes_ShowSchemesA.aspx?schid=84"
  },
  {
    "scheme_name": "Agriculture Engineering (Mechanical) Scheme",
    "description": "This scheme provides agricultural machinery such as power tillers, bulldozers, and tractors on hire at subsidized rates. It also offers a 50% subsidy for the purchase of improved farm machinery and equipment, aiming to mechanize and modernize farming practices in Meghalaya.",
    "source": "https://megagriculture.gov.in/PUBLIC/schemes_ShowSchemesA.aspx?schid=58"
  }
]

export const Mizoram =[
  {
    "scheme_name": "Bana Kaih Scheme",
    "description": "Mizoram Governor General (Retired) Vijay Kumar Singh highlighted the state's flagship 'Bana Kaih' or handholding scheme as a vital contribution towards realizing Viksit Bharat 2047 and achieving the United Nations' Sustainable Development Goals (SDGs).",
    "source": "https://timesofindia.indiatimes.com/city/guwahati/mizoram-guv-spotlights-banakaih-schemes-role-in-viksit-bharat/articleshow/118395950.cms"
  },
  {
    "scheme_name": "Fostering Climate Resilient Upland Farming System Project",
    "description": "Governor Vijay Kumar Singh announced the 'Fostering Climate Resilient Upland Farming System' project, aiming to increase agricultural income for 55,000 households by enhancing sustainable crop productivity.",
    "source": "https://www.ndtv.com/india-news/mizoram-governor-vijay-kumar-singh-says-agriculture-remains-chief-focus-of-state-government-3790910"
  },
  {
    "scheme_name": "Aeroponic Potato Seed Production Facility",
    "description": "Agriculture & Farmers’ Welfare Minister P.C. Vanlalruata inaugurated Mizoram's first aeroponic system for potato seed production at Thingdawl in Kolasib district, aiming to boost potato cultivation and address seed shortages.",
    "source": "https://nenews.in/mizoram/mizoram-agriculture-minister-inaugurates-aeroponic-potato-seed-production-facility-in-kolasib/17233/"
  },
  {
    "scheme_name": "Millet Production Promotion",
    "description": "The Mizoram government, under Agriculture Minister P.C. Vanlalruata, is taking steps to promote millet production in the state, aligning with the central government's emphasis on millet cultivation.",
    "source": "https://timesofindia.indiatimes.com/india/mizoram-govt-to-take-steps-to-promote-millet-production/articleshow/114471401.cms"
  },
  {
    "scheme_name": "Agricultural Product Procurement Initiative",
    "description": "The Mizoram government has initiated a program to purchase ginger, turmeric, chili, and broomsticks directly from local farmers, aiming to support the agricultural community and fulfill a key electoral promise.",
    "source": "https://www.zeebiz.com/economy-infra/agricultue/news-mizoram-mizoram-capital-mizoram-university-mizoram-ki-rajdhani-farming-mizoram-zoram-peoples-movement-agricultural-upliftment-ginger-turmeric-chilli-298514"
  },
  {
    "scheme_name": "Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)",
    "description": "Mizoram is actively participating in the MOVCD-NER, a central sector scheme aimed at developing organic value chains in the North East Region, promoting organic farming practices among local farmers.",
    "source": "https://en.wikipedia.org/wiki/Mission_Organic_Value_Chain_Development_for_North_Eastern_Region"
  },
  {
    "scheme_name": "Rashtriya Krishi Vikas Yojana (RKVY)",
    "description": "Since 2007, Mizoram has been implementing the RKVY scheme to ensure holistic development of agriculture and allied sectors, allowing the state to choose development activities as per its agricultural plans.",
    "source": "https://agriculturemizoram.nic.in/pages/rkvy.html"
  },
  {
    "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "description": "Under SMAM, Mizoram provides assistance to farmers through subsidies for purchasing agricultural tools and equipment like tractors, power tillers, and water pump sets, aiming to enhance mechanization in farming.",
    "source": "https://serchhip.nic.in/schemes/"
  },
  {
    "scheme_name": "National Adaptation Fund for Climate Change (NAFCC)",
    "description": "Mizoram is implementing NAFCC projects focusing on constructing and renovating water harvesting tanks and developing hill slope terraces to combat climate change impacts on agriculture.",
    "source": "https://serchhip.nic.in/schemes/"
  },
  {
    "scheme_name": "Focus on Sustainable Agricultural Growth",
    "description": "Governor Vijay Kumar Singh emphasized the state's commitment to sustainable agricultural growth through initiatives like the FOCUS project and the Bana Kaih scheme, aiming to boost farmers' incomes and promote economic development.",
    "source": "https://www.devdiscourse.com/article/headlines/3270756-mizorams-agricultural-revolution-focus-on-sustainability-and-growth"
  }
]

export const Nagaland = [
  {
    "scheme_name": "NABARD's Credit Projection for Nagaland",
    "description": "The National Bank for Agriculture and Rural Development (NABARD) has projected a credit potential of Rs 2,106.34 crore for priority sector activities in Nagaland for the fiscal year 2025-26. This projection aims to guide financial institutions in allocating funds towards agriculture, MSMEs, and other vital sectors.",
    "source": "https://www.devdiscourse.com/article/headlines/3277967-nabard-projects-rs-2106-crore-credit-boost-for-nagalands-development"
  },
  {
    "scheme_name": "Nagaland's Tuber Crop Production",
    "description": "Nagaland has emerged as the fourth-largest tuber crop-producing state in India, thanks to its favorable climate, fertile soil, and abundant natural resources. The state shows significant potential in cultivating crops like pineapple, ginger, cardamom, kiwi, dragon fruit, banana, and bamboo shoot, along with opportunities in forest honey production.",
    "source": "https://www.morungexpress.com/nagaland-is-fourth-highest-tuber-crop-growing-state-in-india"
  },
  {
    "scheme_name": "State Focus Paper on Credit Potential",
    "description": "The State Focus Paper for Nagaland, released during the State Credit Seminar 2025-26 organized by NABARD, outlines a credit potential of Rs 2,106.34 crore for priority sector activities. This document serves as a roadmap for financial institutions to support agriculture and allied sectors in the state.",
    "source": "https://www.morungexpress.com/state-focus-paper-projects-rs-2106-crore-credit-potential-for-nagaland"
  },
  {
    "scheme_name": "Nagaland's First Organic AC Market",
    "description": "Nagaland is set to inaugurate its first Organic Air-Conditioned Market before Christmas. Located at the NER Agri Expo Site in Dimapur, this facility aims to provide a modern marketplace for organic produce, enhancing the state's agricultural marketing infrastructure.",
    "source": "https://nsamb.in/category/news"
  },
  {
    "scheme_name": "Naga Mandi Project",
    "description": "The 'Naga Mandi' project, spanning 10 acres, is being developed through a Public-Private Partnership to establish a wholesale market complex. This initiative aims to streamline agricultural marketing, ensuring efficient resource utilization and compliance with the Nagaland Agriculture Produce Marketing Act 2005.",
    "source": "https://nagalandtribune.in/how-the-10-acres-wholesale-market-complex-naga-mandi-will-benefit-nagaland/"
  },
  {
    "scheme_name": "Consultations on Oil Palm Cultivation",
    "description": "The Nagaland Agriculture Department has endorsed the need for broad-based stakeholder consultations regarding oil palm cultivation. This move aims to ensure transparent public engagement and critical deliberations on the potential impacts of oil palm farming in the state.",
    "source": "https://www.morungexpress.com/nagaland-agriculture-dept-to-act-on-concerns-over-oil-palm-cultivation"
  },
  {
    "scheme_name": "New Directorate Building for Agriculture Department",
    "description": "The Nagaland Agriculture Department has inaugurated a new directorate building in Kohima. This facility is expected to foster a cohesive work culture among officers and staff, ushering in a new era of excellence in the state's agricultural administration.",
    "source": "https://www.thenagarepublic.com/news/nagaland-news/nagaland-agriculture-department-gets-new-directorate-building/"
  },
  {
    "scheme_name": "State Agri Portal Launch",
    "description": "Nagaland has launched the State Agri Portal, a digital platform aimed at providing farmers with timely information and resources. This initiative seeks to enhance agricultural productivity by leveraging technology to disseminate knowledge and best practices.",
    "source": "https://nagafarmer.nagaland.gov.in/"
  },
  {
    "scheme_name": "Farm Mechanization Efforts",
    "description": "To address the low farm power availability in Nagaland, the state is implementing farm mechanization programs under the Sub-Mission on Agricultural Mechanization (SMAM) and Rashtriya Krishi Vikas Yojana (RKVY). These initiatives aim to boost production and productivity by providing modern machinery to farmers.",
    "source": "https://www.nagafarmer.nagaland.gov.in/news_updates"
  },
  {
    "scheme_name": "Agriculture Department's Official Website",
    "description": "The Nagaland Agriculture Department has an official website that serves as a repository of information on various schemes, programs, and activities. Farmers and stakeholders can access resources and updates pertinent to the state's agricultural sector.",
    "source": "https://agriculture.nagaland.gov.in/"
  }
]

export const Odisha = [
  {
    "scheme_name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "description": "Over 34.98 lakh farmers in Odisha have benefited from the PM-KISAN scheme, receiving financial assistance to support their agricultural activities.",
    "source": "https://www.deccanchronicle.com/nation/over-3498-lakh-odisha-farmers-benefit-from-pm-kisan-scheme-1863221"
  },
  {
    "scheme_name": "Odisha State Budget 2025-26",
    "description": "Chief Minister Mohan Charan Majhi presented a Rs 2.90-lakh crore budget for the fiscal year 2025-26, focusing on agriculture and irrigation, with Rs 37,838 crore allocated to the farm sector.",
    "source": "https://economictimes.indiatimes.com/news/india/odisha-cm-presents-rs-2-90-lakh-crore-budget-for-fy26-focuses-on-agri-irrigation/articleshow/118331589.cms"
  },
  {
    "scheme_name": "Krushi Odisha Mela 2025",
    "description": "The Krushi Odisha Mela 2025, organized by the Department of Agriculture & Farmers’ Empowerment, showcased the state's agricultural innovations and achievements.",
    "source": "https://thenewshashtag.com/odisha-leads-agricultural-innovation-at-krushi-odisha-mela-2025/"
  },
  {
    "scheme_name": "MoUs for Agricultural Exports",
    "description": "The Odisha government signed 11 Memorandums of Understanding with private firms to enhance the export of fresh fruits and vegetables, aiming to position the state as a leader in agricultural exports.",
    "source": "https://government.economictimes.indiatimes.com/news/economy/odisha-govt-signs-11-mous-with-private-firms-to-enhance-fresh-fruits-vegetables-exports/117017701"
  },
  {
    "scheme_name": "Crop Loss Compensation",
    "description": "The Odisha government assured farmers of compensation for crop losses due to adverse weather, with plans to disburse relief within 4-5 days.",
    "source": "https://odishatv.in/news/odisha/crop-loss-compensation-to-farmers-in-next-4-5-days-odisha-minister-252950"
  },
  {
    "scheme_name": "New Agricultural Policy",
    "description": "Odisha is set to introduce a new agricultural policy emphasizing organic farming and international exports, aiming to boost sustainable agricultural practices.",
    "source": "https://agrimoon.com/odisha-to-introduce-new-agricultural-policy-emphasising-organic-farming/"
  },
  {
    "scheme_name": "Krushi Samrudhi Helpline",
    "description": "The Department of Agriculture & Farmers' Empowerment invited agencies to operate, manage, and maintain Odisha’s digital mobile-based extension service, the Krushi Samrudhi Helpline.",
    "source": "https://agri.odisha.gov.in/news"
  },
  {
    "scheme_name": "E-Tender for Laptops Procurement",
    "description": "The Odisha government issued an e-tender notice for the procurement of laptops for the fiscal year 2024-25, aiming to enhance technological support in the agriculture sector.",
    "source": "https://agri.odisha.gov.in/news"
  },
  {
    "scheme_name": "Agricultural Export Potential",
    "description": "Discussions highlighted Odisha's potential in agricultural exports, emphasizing the need for improved infrastructure to tap into export opportunities.",
    "source": "https://odia.krishijagran.com/tag?id=Odisha"
  },
  {
    "scheme_name": "Cyclone Jawad Impact",
    "description": "Reports indicated that 131 blocks in Odisha were affected by Cyclone Jawad, leading to significant agricultural challenges and prompting relief measures.",
    "source": "https://odia.krishijagran.com/tag?id=Odisha"
  }
]
export const Punjab = [
  {
    "scheme_name": "Punjab Agriculture Food and Drug Authority Established",
    "description": "The Punjab government has established the Punjab Agriculture Food and Drug Authority in Lahore to implement a testing regime aimed at controlling adulteration and contamination in food, drugs, fertilizers, and pesticides.",
    "source": "https://www.brecorder.com/news/40350225"
  },
  {
    "scheme_name": "Punjab's Contribution to National Grain Supply",
    "description": "Punjab continues to be the food basket of Pakistan, meeting 75% of the country's grain needs, highlighting the province's pivotal role in the nation's agriculture sector.",
    "source": "https://www.brecorder.com/news/40350212"
  },
  {
    "scheme_name": "Punjab Seeks US Assistance to Boost Cotton Yield",
    "description": "The Punjab government is collaborating with the United States to enhance cotton production, aiming to improve yield and quality through shared expertise and technology.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "University of Agriculture Faisalabad Announces 2024 Merit List",
    "description": "The University of Agriculture Faisalabad has released its merit list for 2024, outlining the selection of students for various agricultural programs.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "Green Tractor Scheme 2024 Winners Announced",
    "description": "The Punjab government has announced the winners of the Green Tractor Scheme 2024, providing tractors to farmers at subsidized rates to promote mechanization.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "Agri App 'UgAi' Launched for Fertilizer Access",
    "description": "Sindh's Agriculture Minister has launched the 'UgAi' mobile application, enabling farmers to access fertilizers more efficiently and transparently.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "Major Shift in Agriculture Taxation for 2025",
    "description": "Finance Minister Muhammad Aurangzeb has announced significant changes in agriculture taxation for 2025, aiming to streamline tax processes and benefit the farming community.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "Punjab Government Initiates Onion and Tomato Production Boost",
    "description": "The Punjab Agriculture Minister has unveiled plans to increase onion and tomato production to meet domestic demand and reduce reliance on imports.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "Pakistan and China Sign $382M Agriculture Agreement",
    "description": "Pakistan and China have entered into a $382 million agreement to collaborate on agricultural projects, focusing on technology transfer and infrastructure development.",
    "source": "https://agriculturepunjab.com/news/"
  },
  {
    "scheme_name": "Pakistan and Russia Forge Agri-Tech Partnership",
    "description": "In a move to strengthen agricultural technology, Pakistan and Russia have signed a deal to enhance cooperation in agri-tech sectors.",
    "source": "https://agriculturepunjab.com/news/"
  }
]

export const Rajasthan = [
  {
    "scheme_name": "Kisan Samman Samaroh",
    "description": "Rajasthan Chief Minister Bhajan Lal Sharma reaffirmed the state government's commitment to farmer welfare during the Kisan Samman Samaroh, a national-level program held at the State Agricultural Management Institute in Jaipur.",
    "source": "https://www.daijiworld.com/news/newsDisplay?newsID=1273629"
  },
  {
    "scheme_name": "Financial Aid to Farmers",
    "description": "Over Rs 1,400 crore has been transferred to 72 lakh farmers in Rajasthan, demonstrating the government's dedication to supporting the agricultural community.",
    "source": "https://indiatribune.com/over-rs-1400-crore-transferred-to-72-lakh-farmers-in-rajasthan"
  },
  {
    "scheme_name": "Phone Tapping Allegations",
    "description": "Rajasthan Agriculture Minister Kirodi Lal Meena reiterated claims of his phone being tapped and being under CID surveillance, sparking political controversy in the state.",
    "source": "https://english.mathrubhumi.com/news/india/rajasthan-minister-kirodi-lal-meena-claims-party-tapping-his-phone-cid-following-him-1.10368435"
  },
  {
    "scheme_name": "Annapurna Bhandars Initiative",
    "description": "The Rajasthan government plans to inaugurate 5,000 fair price shops as 'Annapurna Bhandars' by October 31, aiming to enhance food distribution across the state.",
    "source": "https://news.rajasthandirect.com/agriculture"
  },
  {
    "scheme_name": "Monsoon Rainfall Insights",
    "description": "India experienced a four-year high in Southwest monsoon rains, with Rajasthan receiving consistently higher rainfall, attributed to the monsoon trough's position and increased soil moisture.",
    "source": "https://economictimes.indiatimes.com/topic/rajasthan-agriculture-department"
  },
  {
    "scheme_name": "Traditional Rain Forecasting",
    "description": "The red-wattled lapwing, a bird native to India, is believed to predict the monsoon season in Rajasthan based on its nesting habits, a practice validated by an eight-year scientific study.",
    "source": "https://www.thetimes.co.uk/article/bird-that-can-predict-the-rainy-season-in-india-z9zlxxqvk"
  },
  {
    "scheme_name": "Shift from Rapeseed Cultivation",
    "description": "Due to unusually high temperatures during the sowing season, farmers in Rajasthan are shifting from rapeseed to more heat-tolerant crops, potentially reducing rapeseed production and increasing reliance on imported cooking oils.",
    "source": "https://www.reuters.com/markets/commodities/indian-farmers-shift-rapeseed-other-crops-temperatures-soar-2024-11-25/"
  },
  {
    "scheme_name": "Organic Fertilizer Development",
    "description": "Innovations in Rajasthan's agricultural sector include the development of fertilizers derived from natural products like jaggery, cow dung, and buttermilk, promoting sustainable farming practices.",
    "source": "https://www.krishakjagat.org/tag/rajasthan/"
  },
  {
    "scheme_name": "Agricultural Department Initiatives",
    "description": "The Rajasthan Agriculture Department continues to implement various schemes and programs aimed at enhancing agricultural productivity and supporting farmers across the state.",
    "source": "https://agriculture.rajasthan.gov.in/agriculture/"
  },
  {
    "scheme_name": "Agricultural News Updates",
    "description": "Stay informed with the latest updates and developments in Rajasthan's agricultural sector, covering topics from policy changes to technological advancements.",
    "source": "https://timesofindia.indiatimes.com/topic/rajasthan-agriculture/news"
  }
]
export const Sikkim = [
  {
    "scheme_name": "Mero Alaichi, Mero Dhan Initiative",
    "description": "The Government of Sikkim has launched the 'Mero Alaichi, Mero Dhan' initiative to revitalize the large cardamom sector, aiming to restore its significance as a source of wealth and resilience for rural communities.",
    "source": "https://sikkim.gov.in/media/press-release/press-info?id=121611&name=Press+Release+from+Department+of+Science+and+Technology"
  },
  {
    "scheme_name": "8th Anniversary of Sikkim as a Fully Organic State",
    "description": "Sikkim celebrated its 8th Organic Day on January 18, 2024, marking eight years since being declared a fully organic state. The milestone reflects the state's commitment to sustainable agriculture and environmental stewardship.",
    "source": "https://www.sikkimexpress.com/news-details/8th-year-of-sikkim-as-a-fully-organic-state"
  },
  {
    "scheme_name": "Review of Mushroom Farming in Mahjitar",
    "description": "Agriculture Minister Puran Kumar Gurung visited the Mahjitar Mushroom Unit to assess the progress of mushroom farming in the region, emphasizing the state's focus on diversifying agricultural practices.",
    "source": "https://www.sentinelassam.com/north-east-india-news/sikkim-news/sikkim-agriculture-minister-puran-kumar-gurung-reviews-mushroom-farming-in-mahjitar"
  },
  {
    "scheme_name": "Sikkim's Organic Farming Revolution",
    "description": "Sikkim's transition to organic farming, initiated in the early 2000s, has positioned the state as a model for sustainable agriculture, highlighting the benefits of chemical-free farming practices.",
    "source": "https://www.sikkimexpress.com/news-details/sikkims-organic-farming-revolution-a-model-for-sustainable-agriculture"
  },
  {
    "scheme_name": "Challenges in Sikkim's Organic Farming",
    "description": "Despite being the first fully organic state, Sikkim faces challenges in its organic farming sector, including the need for continuous training and financial support for farmers transitioning from conventional methods.",
    "source": "https://www.sikkimexpress.com/news-details/the-organic-farming-revolution-in-sikkim-opportunities-and-challenges"
  },
  {
    "scheme_name": "Central Support for Organic Farming",
    "description": "Union Agriculture Minister Shivraj Singh Chouhan assured that the central government will provide adequate financial assistance to promote organic and natural farming in Sikkim.",
    "source": "https://money.rediff.com/news/market/centre-to-fund-organic-farming-in-sikkim-chouhan/18960220241126"
  },
  {
    "scheme_name": "Introduction of Modern Farming Techniques",
    "description": "The Sikkim government is set to launch modern farming techniques, including hydroponics, aquaponics, and rooftop farming, aiming to enhance crop productivity and quality.",
    "source": "https://krishijagran.com/agriculture-world/sikkim-to-launch-modern-technology-of-hydroponics-aquaponics-rooftop-farming-on-february-22/"
  },
  {
    "scheme_name": "Virtual Conference on Agriculture",
    "description": "Agriculture Minister Lok Nath Sharma represented Sikkim in a virtual conference with Union Agriculture Minister Narendra Singh Tomar, discussing strategies to enhance the state's agricultural sector.",
    "source": "https://www.sikkim.gov.in/media/news-announcement/news-info?name=Hon%27ble+Minister+for+Agriculture%2C+Horticulture%2C+Animal+Husbandry+and+Veterinary+Services+Departments+Shri+Lok+Nath+Sharma+represented+the+State+of+Sikkim+in+a+virtual+conference+of+the+Chief+Minister%27s+of+States+called+by+the+Hon%27ble+Union+Minister%2C+Agricu"
  },
  {
    "scheme_name": "Sikkim's Organic Policy Framework",
    "description": "The Sikkim State Policy on Organic Farming, established in 2004, laid the foundation for the state's transition to organic agriculture, focusing on environmental and health benefits.",
    "source": "https://www.indiaspend.com/natural-farming/why-the-move-to-organic-is-faltering-in-sikkim-indias-first-fully-organic-state-866550"
  },
  {
    "scheme_name": "Official Portal of Sikkim's Agriculture Department",
    "description": "The Agriculture Department of Sikkim provides resources and information to support farmers and promote sustainable agricultural practices in the state.",
    "source": "https://agri.sikkim.gov.in/"
  }
]
export const Tamil_Nadu = [
  {
    "scheme_name": "MFOI Awards at Isha Foundation's Maha Shivaratri Festival",
    "description": "The 'Velliangiri Uzhavan FPO' was recognized at the Maha Shivaratri 2025 event by Isha Foundation in Coimbatore, celebrating their exceptional achievements and highlighting MFOI's role in empowering the agricultural community.",
    "source": "https://krishijagran.com/news/mfoi-awards-shine-at-isha-foundations-maha-shivaratri-festival-in-coimbatore-tamil-nadu/"
  },
  {
    "scheme_name": "Tamil Nadu Agriculture Budget 2024-25",
    "description": "Tamil Nadu Minister MRK Panneerselvam presented the state's agriculture budget for the fiscal year 2024–25, focusing on supporting agriculture, improving rural livelihoods, and promoting sustainable farming techniques.",
    "source": "https://krishijagran.com/news/tamil-nadu-launches-agriculture-budget-2024-25-prioritizing-sustainability-and-rural-development/"
  },
  {
    "scheme_name": "Vivasaya Malar Agricultural Updates",
    "description": "Vivasaya Malar provides comprehensive news and information related to agriculture in Tamil Nadu, covering topics such as farming techniques, crop management, and market trends.",
    "source": "https://www.dinamalar.com/malarkal/vivasaya-malar-agriculture-news-tamil-nadu"
  },
  {
    "scheme_name": "Agriculture News in Tamil by Oneindia",
    "description": "Oneindia Tamil offers the latest agriculture news in Tamil Nadu and India, including information on agriculture issues, subsidies, crop prices, and farming updates.",
    "source": "https://tamil.oneindia.com/agriculture/"
  },
  {
    "scheme_name": "Tamil Nadu Irrigated Agricultural Modernization Project",
    "description": "The Department of Agriculture in Tamil Nadu has launched the Tamil Nadu Irrigated Agricultural Modernization Project, aiming to enhance irrigation infrastructure and promote sustainable farming practices.",
    "source": "https://www.tnagrisnet.tn.gov.in/"
  },
  {
    "scheme_name": "Vikatan's Agriculture News Portal",
    "description": "Vikatan provides valuable agriculture news in Tamil, featuring success stories of farmers, guidance, and solutions for agricultural challenges.",
    "source": "https://www.vikatan.com/agriculture"
  },
  {
    "scheme_name": "Dinamani's Agriculture News Updates",
    "description": "Dinamani offers the latest agriculture news today, focusing on Tamil Nadu's agricultural developments and farmer-related news.",
    "source": "https://www.dinamani.com/agriculture/"
  },
  {
    "scheme_name": "ABP Nadu's Agriculture News in Tamil",
    "description": "ABP Nadu provides agriculture news in Tamil, covering government schemes for farmers, Tamil Nadu farmer news, farming techniques, crop cultivation, and agricultural policies.",
    "source": "https://tamil.abplive.com/agriculture"
  },
  {
    "scheme_name": "NDTV's Tamil Nadu Agriculture Coverage",
    "description": "NDTV offers the latest news, videos, and information on Tamil Nadu agriculture, covering various aspects of the state's agricultural sector.",
    "source": "https://www.ndtv.com/topic/tamil-nadu-agriculture"
  },
  {
    "scheme_name": "Agriculture News in Tamil by Vikatan",
    "description": "Vikatan provides comprehensive agriculture news in Tamil, including success stories of farmers, guidance, and solutions for agricultural challenges.",
    "source": "https://www.vikatan.com/agriculture"
  }
]

export const Telangana = [
  {
    "scheme_name": "Telangana's Rs 3.2 Lakh Crore Budget Amid Fiscal Challenges",
    "description": "The Telangana government is preparing a Rs 3.2 lakh crore budget, with a special assembly session expected in early March to pass key bills related to BC reservations and SC categorization.",
    "source": "https://telanganatoday.com/telangana-gears-up-for-rs-3-2-lakh-crore-budget-amid-fiscal-crisis"
  },
  {
    "scheme_name": "Fertilizer Shortage Affects Telangana Farmers",
    "description": "Farmers in Telangana are facing fertilizer shortages, leading to long queues at primary agricultural cooperative societies, with many leaving without the necessary urea due to inadequate supply.",
    "source": "https://telanganatoday.com/farmers-in-queues-for-fertilizer-becomes-common-sight-in-telangana"
  },
  {
    "scheme_name": "Revival of Organic Farming in Telangana",
    "description": "Aligning with Prime Minister Narendra Modi's vision under the Paramparagat Krishi Vikas Yojana (PKVY), Telangana is promoting sustainable agricultural practices through a renewed push for organic farming.",
    "source": "https://www.thehansindia.com/telangana/sustainable-shift-towards-nature-the-revival-of-organic-farming-in-telangana-947907"
  },
  {
    "scheme_name": "Postponement of TG EAPCET 2025 Application Process",
    "description": "The Telangana State Council of Higher Education has postponed the TG EAPCET 2025 application process for engineering, pharmacy, and agriculture courses due to technical reasons.",
    "source": "https://www.thehansindia.com/telangana/tg-eapcet-2025-applications-telangana-postpones-application-process-948837"
  },
  {
    "scheme_name": "Telangana's Agriculture Sector Records Phenomenal Growth",
    "description": "Agriculture Minister S Niranjan Reddy attributes the state's agricultural success to Chief Minister K Chandrashekhar Rao, noting an average growth of 15.8% over the last seven years, surpassing the national average of 8.5%.",
    "source": "https://telanganatoday.com/tag/agriculture-sector"
  },
  {
    "scheme_name": "Telangana to Enhance Agriculture with Israeli Technology",
    "description": "Agriculture Minister Tummala Nageswara Rao announced plans to boost Telangana's agricultural sector by integrating advanced Israeli technology, following discussions with representatives from Israeli companies MDHAI and Windponics.",
    "source": "https://www.siasat.com/telangana-to-boost-agriculture-using-israeli-tech-expertise-tummala-3183422/"
  },
  {
    "scheme_name": "Youth Moving Away from Agriculture in Telangana",
    "description": "A significant number of young individuals from agricultural households in Telangana are abandoning farming, with only 55% remaining engaged in agriculture, influenced by various economic and social factors.",
    "source": "https://timesofindia.indiatimes.com/city/hyderabad/youth-abandoning-agriculture-a-crisis-in-telanganas-farming-households/articleshow/114630422.cms"
  },
  {
    "scheme_name": "Telangana to Purchase Additional 25,000 Tons of Soybean",
    "description": "To support farmers, the Telangana government has decided to procure an additional 25,000 tons of soybean, as directed by Agriculture Minister Tummala Nageswara Rao to the state cooperative marketing federation, Markfed.",
    "source": "https://www.siasat.com/telangana-to-purchase-addl-25k-tons-of-soybean-to-benefit-farmers-3149944/"
  },
  {
    "scheme_name": "Evaluation of ACRAT Project in Mamidipalli Village",
    "description": "Project experts from Germany, along with agriculture specialists from Telangana, NGO representatives, and farmers from various villages, conducted a field visit to Mamidipalli to assess the progress of the ACRAT Project.",
    "source": "https://telanganatoday.com/tag/agriculture"
  },
  {
    "scheme_name": "Telangana's Agriculture Department Initiatives",
    "description": "The Department of Agriculture in Telangana continues to implement various schemes and programs aimed at enhancing agricultural productivity and supporting farmers across the state.",
    "source": "https://www.agri.telangana.gov.in/"
  }
]
export const Tripura =[
  {
    "scheme_name": "Tripura Targets 80% Irrigation Coverage",
    "description": "The Tripura government aims to achieve 80% irrigation coverage of cultivable land in the coming years to boost agricultural productivity and double farmers' incomes.",
    "source": "https://menafn.com/1109220420/Tripura-Govt-Aims-80-Pc-Irrigation-Coverage-To-Boost-Agriculture-CM-Saha"
  },
  {
    "scheme_name": "Expansion of Bamboo Cultivation",
    "description": "Tripura plans to expand bamboo cultivation to 45,000 hectares over the next five years, enhancing industrial supply and focusing on improving transportation and supply chains.",
    "source": "https://www.devdiscourse.com/article/headlines/3274748-tripuras-bamboo-boom-a-five-year-expansion-plan"
  },
  {
    "scheme_name": "Promotion of Organic Farming",
    "description": "The state government has set a target to cultivate organic farming on approximately 50,000 hectares, with plans to export Bird's Eye Chilli to Germany.",
    "source": "https://tripuratoday.in/2024/09/28/tripura-targets-50000-hectares-for-organic-farming/"
  },
  {
    "scheme_name": "Revival of Waterfalls for Irrigation",
    "description": "Tripura plans to revive nearly 250 waterfalls to enhance irrigation and support agriculture, with data collection underway from various departments.",
    "source": "https://indianexpress.com/article/india/tripura-revive-250-waterfalls-minister-ratan-lal-nath-9826892/"
  },
  {
    "scheme_name": "Inauguration of Krishi Vigyan Mela",
    "description": "Agriculture Minister Ratan Lal Nath inaugurated the Krishi Vigyan Mela, emphasizing efforts to boost farmers' income through support from Krishi Vigyan Kendra.",
    "source": "https://www.northeasttoday.in/2025/02/06/tripuras-agriculture-minister-ratan-lal-nath-inaugurates-krishi-vigyan-mela-highlights-efforts-to-boost-farmers-income/"
  },
  {
    "scheme_name": "First Export of Organic Bird's Eye Chilli",
    "description": "Tripura marked its first export of 2,000 kg of organic Bird's Eye Chilli to Visakhapatnam, highlighting the state's progress in organic farming.",
    "source": "https://www.northeasttoday.in/2025/01/17/agriculture-minister-ratan-lal-nath-flags-off-tripuras-first-export-of-2000-kg-organic-bird-eye-chilli-to-visakhapatnam/"
  },
  {
    "scheme_name": "Floods Cause Extensive Agricultural Damage",
    "description": "Recent floods and landslides in Tripura have caused damage worth over Rs 707.41 crore, destroying crops on nearly 68,826 hectares and affecting 141,406 farmers.",
    "source": "https://economictimes.indiatimes.com/news/india/tripura-floods-crops-electrical-assets-worth-over-rs-707-crore-damaged/articleshow/112768119.cms"
  },
  {
    "scheme_name": "Government's Commitment to Agricultural Self-Sufficiency",
    "description": "Agriculture Minister Ratan Lal Nath emphasized the government's commitment to achieving self-sufficiency in agriculture and doubling farmers' incomes during the 53rd Annual Conference of the Tripura Agricultural Graduates Association.",
    "source": "https://tripurachronicle.in/local-news/govt-aims-for-agricultural-self-sufficiency-doubling-farmer-incomes-ratan/"
  },
  {
    "scheme_name": "Bamboo Industry Expansion",
    "description": "Maharashtra's Pankaja Munde praised Tripura's bamboo industry's strides during her visit to the Bamboo Processing Centre, focusing on overcoming challenges and promoting craftsmanship through specialized training.",
    "source": "https://www.devdiscourse.com/article/headlines/3269886-tripuras-bamboo-surge-crafting-careers-and-sustainability"
  },
  {
    "scheme_name": "Agriculture Department Initiatives",
    "description": "The Department of Agriculture and Farmers Welfare in Tripura continues to implement various schemes and programs aimed at enhancing agricultural productivity and supporting farmers across the state.",
    "source": "https://agri.tripura.gov.in/"
  }
]

export const Uttarakhand=[
  {
    "scheme_name": "Uttarakhand Bans Land Purchase by Outsiders for Agriculture and Horticulture",
    "description": "The Uttarakhand government has imposed an interim ban on the purchase of agricultural and horticultural land by individuals from outside the state. This decision aims to protect local interests and preserve the state's cultural heritage.",
    "source": "https://www.hindustantimes.com/cities/dehradun-news/uttarakhand-bans-land-purchase-by-outsiders-for-agriculture-horticulture-101704104301692.html"
  },
  {
    "scheme_name": "Uttarakhand Assembly Approves Bill Restricting Agricultural Land Sales to Outsiders",
    "description": "The Uttarakhand Assembly has passed a bill prohibiting the sale of agricultural land to non-residents in 11 out of 13 districts. This legislative move seeks to regulate land purchases and maintain environmental balance within the state.",
    "source": "https://indianexpress.com/article/india/agricultural-land-uttarakhand-assembly-nod-9849188/"
  },
  {
    "scheme_name": "Decline in Uttarakhand's Organic Exports by 66%",
    "description": "Exports of organic products from Uttarakhand have experienced a significant 66% decline, raising concerns about the sustainability of the state's organic farming sector. Industry experts emphasize the need for government intervention to revitalize this crucial industry.",
    "source": "https://money.rediff.com/news/market/uttarakhand-organic-exports-plunge-66-coii/22692920250225"
  },
  {
    "scheme_name": "Uttarakhand's Economic Growth: Emerging as an Industrial Powerhouse",
    "description": "Uttarakhand is rapidly emerging as a key player in India's economy, with significant contributions from diverse industries, including agriculture. The state's investor-friendly policies and strategic location have fueled industrial expansion, positioning it as a promising hub for future development.",
    "source": "https://www.devdiscourse.com/article/headlines/3278610-uttarakhand-indias-rising-economic-powerhouse"
  },
  {
    "scheme_name": "Uttarakhand Government Enhances Land Laws to Protect Cultural Heritage",
    "description": "The Uttarakhand government has passed an amendment to the Uttar Pradesh Zamindari Abolition and Land Reforms Act, 1950, strengthening land laws to protect the state's cultural heritage and environmental balance. This legislation aims to regulate land purchases and preserve state interests.",
    "source": "https://economictimes.indiatimes.com/news/india/uttarakhand-passes-bill-banning-sale-of-land-to-outsiders-cm-pushkar-singh-dhami-calls-it-historic/articleshow/118455445.cms"
  },
  {
    "scheme_name": "Uttarakhand Limits Agricultural Land Sales Amid Protests and Tourism Development",
    "description": "In response to local protests, Uttarakhand has introduced land laws preventing the sale of agricultural land to individuals from outside the state. This move aims to protect local resources and address concerns over unchecked tourism development.",
    "source": "https://news.mongabay.com/2024/04/uttarakhand-limits-agricultural-land-sales-amid-protests-tourism-development/"
  },
  {
    "scheme_name": "Uttarakhand Cabinet Approves New Land Law Restricting Sales to Outsiders",
    "description": "The Uttarakhand cabinet has approved a revised land law with stricter provisions, including banning the sale of horticultural and agricultural land to outsiders in most districts. This decision is part of efforts to safeguard local interests and resources.",
    "source": "https://www.hindustantimes.com/cities/dehradun-news/ukhand-cabinet-approves-new-land-law-sale-of-agricultural-land-to-outsiders-banned-101739964983591.html"
  },
  {
    "scheme_name": "Uttarakhand's Economic Surge: A New Industrial Powerhouse in India",
    "description": "Uttarakhand is transforming into a key economic player in India, with booming industries in sectors such as automotive, pharmaceuticals, and IT. Aided by investor-friendly policies and strategic location, the state offers significant growth potential and has established itself as a prime investment destination.",
    "source": "https://www.devdiscourse.com/article/headlines/3278612-uttarakhands-economic-surge-a-new-industrial-powerhouse-in-india"
  },
  {
    "scheme_name": "Big Dampener for 'Outsiders' Seeking to Buy Agricultural Land in Uttarakhand",
    "description": "Uttarakhand has restricted non-residents from purchasing agricultural and horticultural land in 11 districts to protect state resources and heritage. The proposed legislation reinstates a 12.5-acre purchase limit and mandates stricter monitoring of land transactions.",
    "source": "https://economictimes.indiatimes.com/news/india/big-dampener-for-outsiders-seeking-to-buy-agri-land-in-uttarakhand/articleshow/118415015.cms"
  },
  {
    "scheme_name": "Uttarakhand Bans Sale of Agricultural Land to Outsiders",
    "description": "The Uttarakhand government has banned the purchase of agricultural and horticultural land by individuals from other states until a detailed public hearing is conducted. This decision follows protests by social organizations concerned about large-scale land sales to outsiders.",
    "source": "https://timesofindia.indiatimes.com/city/dehradun/ukhand-bans-agri-land-purchase-by-outsiders/articleshow/106462357.cms"
  }
]
export const West_Bengal = [
  {
    "scheme_name": "Rainwater Harvesting Transforms Agriculture in West Bengal's Saline Lands",
    "description": "In the Pathar Pratima block of West Bengal, self-help groups are utilizing rainwater harvesting to combat groundwater salinity, leading to improved crop yields and increased agricultural profitability.",
    "source": "https://www.devdiscourse.com/article/headlines/3278348-rainwater-harvesting-transforms-agriculture-in-west-bengals-saline-lands"
  },
  {
    "scheme_name": "Horti Food Festival 2025: A Collaborative Platform for Horticulture Growth",
    "description": "The Horti Food Festival 2025 in West Bengal has established a platform bringing together farmers, investors, and government officials to boost the horticulture sector through idea exchange and trade opportunities.",
    "source": "https://www.devdiscourse.com/article/headlines/3272232-uniting-forces-for-horticulture-growth-a-new-era-begins"
  },
  {
    "scheme_name": "West Bengal's Potato Crisis: Ban on Inter-State Movement Threatens Growers",
    "description": "A ban on interstate potato movement in West Bengal is leading to unsold stockpiles, financial strain on farmers, and challenges for the cold storage industry.",
    "source": "https://economictimes.indiatimes.com/news/economy/agriculture/west-bengals-potato-crisis-ban-on-inter-state-movement-threatens-growers-cold-storages/articleshow/116404384.cms"
  },
  {
    "scheme_name": "Decline in West Bengal's Rice Production Affects National Output",
    "description": "West Bengal's rice production has decreased from 15.88 million tonnes in 2019-20 to 11.52 million tonnes in 2023-24, impacting India's overall rice output.",
    "source": "https://ricenewstoday.com/fall-in-west-bengal-output-drags-indias-rice-production/"
  },
  {
    "scheme_name": "West Bengal Aims to Double Agricultural Exports by 2030",
    "description": "The West Bengal government plans to double exports of agricultural and allied products by 2030, identifying export clusters across the state to enhance processing and production.",
    "source": "https://www.business-standard.com/article/economy-policy/west-bengal-aiming-at-doubling-exports-of-agriculture-allied-products-by-2030-122042101022_1.html"
  },
  {
    "scheme_name": "Farmers in West Bengal Shift to Banana, Lentils, and Maize Cultivation",
    "description": "Due to better profitability, West Bengal farmers are transitioning from wheat to crops like banana, lentils, and maize, with maize cultivation area increasing from 264,000 hectares to 400,000 hectares over five years.",
    "source": "https://www.downtoearth.org.in/agriculture/west-bengal-farmers-shift-from-wheat-to-lucrative-banana-lentils-and-maize-cultivation-95302"
  },
  {
    "scheme_name": "No Farmer Suicides in West Bengal, Focus on Agricultural Diversification",
    "description": "West Bengal reports zero farmer suicides and is focusing on diversifying agriculture, promoting farm mechanization, and exporting special aromatic rice varieties.",
    "source": "https://economictimes.indiatimes.com/news/politics-and-nation/no-farmer-suicides-in-west-bengal-says-minister-for-agriculture-sobhondeb-chattopadhyay/articleshow/104408120.cms"
  },
  {
    "scheme_name": "West Bengal's Horticulture Sector Seeks Common Growth Platform",
    "description": "Officials emphasize the need for a unified platform to accelerate growth in West Bengal's horticulture sector by facilitating collaboration among farmers, investors, and the government.",
    "source": "https://money.rediff.com/news/market/horticulture-sector-in-bengal-common-platform-for-growth/22502320250220"
  },
  {
    "scheme_name": "West Bengal Minister Moves Privilege Motion Against Opposition Leader",
    "description": "Agriculture and Parliamentary Affairs Minister Sovandeb Chattopadhyay has filed a privilege motion against the Leader of Opposition for alleged misconduct in the Assembly.",
    "source": "https://www.orissapost.com/bengal-minister-moves-privilege-motion-against-lop-for-misconduct/"
  },
  {
    "scheme_name": "Agriculture News in Bengali",
    "description": "Stay updated with the latest agriculture and farming news in Bengali, covering current events and developments in West Bengal's agricultural sector.",
    "source": "https://www.sangbadpratidin.in/category/farming/"
  }
]
