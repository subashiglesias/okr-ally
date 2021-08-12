import React from "react";

const INITIAL_STATE = {
    okr: {
        okrResults: {
            COM0010: {
                id: 'COM0010',
                category: 'Company',
                title: 'Research and improve customer satisfaction',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0011: {
                id: 'COM0011',
                category: 'Company',
                title: 'Exceed Net Promoter Score (NPS) of over 8.0',
                metric_name: 'NPS',
                metric_start: '0',
                metric_target: '8',
                parent_objective_id: 'COM0010',
                archived: ''
            },
            COM0012: {
                id: 'COM0012',
                category: 'Company',
                title: 'Get 1000 survey responses to annual satisfaction survey',
                metric_name: 'Survey Responses',
                metric_start: '0',
                metric_target: '1000',
                parent_objective_id: 'COM0010',
                archived: ''
            },
            COM0013: {
                id: 'COM0013',
                category: 'Company',
                title: 'Conduct 50 phone interviews with top customers',
                metric_name: 'Interview conducted',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'COM0010',
                archived: ''
            },
            COM0014: {
                id: 'COM0014',
                category: 'Company',
                title: 'Conduct 15 phone interviews with recently churned customers',
                metric_name: 'Customers interviewed',
                metric_start: '0',
                metric_target: '15',
                parent_objective_id: 'COM0010',
                archived: ''
            },
            COM0015: {
                id: 'COM0015',
                category: 'Company',
                title: 'Present an action plan of 10 improvements for next quarter',
                metric_name: 'Improvements proposed',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'COM0010',
                archived: ''
            },
            COM0020: {
                id: 'COM0020',
                category: 'Company',
                title: 'Achieve record revenues while increasing profitability',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0021: {
                id: 'COM0021',
                category: 'Company',
                title: 'Hit quarterly revenue of over $1000000',
                metric_name: '$',
                metric_start: '0',
                metric_target: '1000000',
                parent_objective_id: 'COM0020',
                archived: ''
            },
            COM0022: {
                id: 'COM0022',
                category: 'Company',
                title: 'Start sales in 2 new countries and achieve first quarter revenues totaling over $100000',
                metric_name: '$',
                metric_start: '0',
                metric_target: '100000',
                parent_objective_id: 'COM0020',
                archived: ''
            },
            COM0023: {
                id: 'COM0023',
                category: 'Company',
                title: 'Increase gross profit margin % from 54% to 63%',
                metric_name: 'Profit margin %',
                metric_start: '54',
                metric_target: '63',
                parent_objective_id: 'COM0020',
                archived: ''
            },
            COM0030: {
                id: 'COM0030',
                category: 'Company',
                title: 'Increase recurring revenues',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0031: {
                id: 'COM0031',
                category: 'Company',
                title: 'Reach monthly recurring revenue ($ MRR) of $250000',
                metric_name: '$MRP',
                metric_start: '0',
                metric_target: '250000',
                parent_objective_id: 'COM0030',
                archived: ''
            },
            COM0032: {
                id: 'COM0032',
                category: 'Company',
                title: 'Increase the share of monthly subscriptions vs one-time contracts sold to 85%',
                metric_name: '%',
                metric_start: '80',
                metric_target: '85',
                parent_objective_id: 'COM0030',
                archived: ''
            },
            COM0033: {
                id: 'COM0033',
                category: 'Company',
                title: 'Increase average subscription size to at least $295 per month',
                metric_name: '$',
                metric_start: '0',
                metric_target: '295',
                parent_objective_id: 'COM0030',
                archived: ''
            },
            COM0034: {
                id: 'COM0034',
                category: 'Company',
                title: 'Increase annual renewals to 75%',
                metric_name: 'Renewal Rate',
                metric_start: '70',
                metric_target: '75',
                parent_objective_id: 'COM0030',
                archived: ''
            },
            COM0035: {
                id: 'COM0035',
                category: 'Company',
                title: 'Reduce churn % to less than 1% monthly',
                metric_name: 'Churn %',
                metric_start: '3',
                metric_target: '1',
                parent_objective_id: 'COM0030',
                archived: ''
            },
            COM0040: {
                id: 'COM0040',
                category: 'Company',
                title: 'Improve internal employee engagement',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0041: {
                id: 'COM0041',
                category: 'Company',
                title: 'Conduct 3 monthly meetings',
                metric_name: 'Monthly meetings',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'COM0040',
                archived: ''
            },
            COM0042: {
                id: 'COM0042',
                category: 'Company',
                title: 'Interview 48 employees on their needs for improving our work culture.',
                metric_name: 'Employees interviewed',
                metric_start: '0',
                metric_target: '48',
                parent_objective_id: 'COM0040',
                archived: ''
            },
            COM0043: {
                id: 'COM0043',
                category: 'Company',
                title: 'Implement using OKRs and Ally software in all teams',
                metric_name: 'Teams implementing OKRs',
                metric_start: '0',
                metric_target: '23',
                parent_objective_id: 'COM0040',
                archived: ''
            },
            COM0044: {
                id: 'COM0044',
                category: 'Company',
                title: 'Reach weekly employee satisfaction score of at least 4.7 points',
                metric_name: 'Satisfaction score',
                metric_start: '0',
                metric_target: '4.7',
                parent_objective_id: 'COM0040',
                archived: ''
            },
            COM0050: {
                id: 'COM0050',
                category: 'Company',
                title: 'Successfully launch version 3 of our main product',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0051: {
                id: 'COM0051',
                category: 'Company',
                title: 'Get over 10000 new signups',
                metric_name: 'New Signups',
                metric_start: '0',
                metric_target: '10000',
                parent_objective_id: 'COM0050',
                archived: ''
            },
            COM0052: {
                id: 'COM0052',
                category: 'Company',
                title: 'Get published product reviews in over 15 publications',
                metric_name: 'Publications',
                metric_start: '0',
                metric_target: '15',
                parent_objective_id: 'COM0050',
                archived: ''
            },
            COM0053: {
                id: 'COM0053',
                category: 'Company',
                title: 'Achieve sign-up to % trial ratio of over 25%',
                metric_name: 'Trial ratio',
                metric_start: '0',
                metric_target: '25',
                parent_objective_id: 'COM0050',
                archived: ''
            },
            COM0054: {
                id: 'COM0054',
                category: 'Company',
                title: 'Achieve trial to % paid ratio of over 50%',
                metric_name: 'Paid  ratio',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'COM0050',
                archived: ''
            },
            COM0070: {
                id: 'COM0070',
                category: 'Company',
                title: '"Simplify & clarify our product',
                metric_name: ' messaging',
                metric_start: ' presentation of things we do"',
                metric_target: '%',
                parent_objective_id: '',
                archived: ''
            },
            COM0071: {
                id: 'COM0071',
                category: 'Company',
                title: '25 on-site user-testing sessions to understand key product misunderstandings',
                metric_name: 'User-testing sessions',
                metric_start: '0',
                metric_target: '25',
                parent_objective_id: 'COM0070',
                archived: ''
            },
            COM0072: {
                id: 'COM0072',
                category: 'Company',
                title: '10 tests of our recent infographics and slide decks for customer understanding',
                metric_name: 'Tests',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'COM0070',
                archived: ''
            },
            COM0073: {
                id: 'COM0073',
                category: 'Company',
                title: 'Get 1000 answers to an online user survey sent to all last quarter\'s signups',
                metric_name: 'Survey responses',
                metric_start: '0',
                metric_target: '1000',
                parent_objective_id: 'COM0070',
                archived: ''
            },
            COM0074: {
                id: 'COM0074',
                category: 'Company',
                title: 'Conduct a team hackathon to create and publish full portfolio of product materials',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'COM0070',
                archived: ''
            },
            COM0075: {
                id: 'COM0075',
                category: 'Company',
                title: 'Present an action plan for next quarter\'s messaging improvements',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'COM0070',
                archived: ''
            },
            COM0080: {
                id: 'COM0080',
                category: 'Company',
                title: 'Finish raising new capital for our growth needs',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0081: {
                id: 'COM0081',
                category: 'Company',
                title: 'E-mail and phone outreach to 100 VCs and seed funds',
                metric_name: 'VCs',
                metric_start: '0',
                metric_target: '100',
                parent_objective_id: 'COM0080',
                archived: ''
            },
            COM0082: {
                id: 'COM0082',
                category: 'Company',
                title: 'Get at least 30 second contact meetings or conference calls',
                metric_name: 'Second contact meetings',
                metric_start: '0',
                metric_target: '30',
                parent_objective_id: 'COM0080',
                archived: ''
            },
            COM0083: {
                id: 'COM0083',
                category: 'Company',
                title: 'Solicit at least 3 term sheets of our minimum required terms',
                metric_name: 'Term sheets',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'COM0080',
                archived: ''
            },
            COM0084: {
                id: 'COM0084',
                category: 'Company',
                title: 'Close an investment round with the minimum of $10 million pre-money',
                metric_name: '%',
                metric_start: '0',
                metric_target: '100',
                parent_objective_id: 'COM0080',
                archived: ''
            },
            COM0090: {
                id: 'COM0090',
                category: 'Company',
                title: 'Be excellent - improve to be the best in whatever we do',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            COM0091: {
                id: 'COM0091',
                category: 'Company',
                title: 'All 13 teams to have an internal brainstorm meeting:',
                metric_name: 'Teams doing internal brainstorming',
                metric_start: '0',
                metric_target: '13',
                parent_objective_id: 'COM0090',
                archived: ''
            },
            COM0092: {
                id: 'COM0092',
                category: 'Company',
                title: 'Benchmark everything related to product to 10 key competitors',
                metric_name: 'Benchmarked competitors',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'COM0090',
                archived: ''
            },
            COM0093: {
                id: 'COM0093',
                category: 'Company',
                title: 'Survey 100 customers on their thoughts where we need to be better',
                metric_name: 'Customers Surveyed',
                metric_start: '0',
                metric_target: '100',
                parent_objective_id: 'COM0090',
                archived: ''
            },
            COM0094: {
                id: 'COM0094',
                category: 'Company',
                title: 'Create an action list of 10 company-wide improvement activities',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'COM0090',
                archived: ''
            },
            SLS0010: {
                id: 'SLS0010',
                category: 'Sales',
                title: 'Achieve record revenues while increasing profitability',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            SLS0011: {
                id: 'SLS0011',
                category: 'Sales',
                title: 'Hit quarterly revenue of over $100000',
                metric_name: '$',
                metric_start: '0',
                metric_target: '100000',
                parent_objective_id: 'SLS0010',
                archived: ''
            },
            SLS0012: {
                id: 'SLS0012',
                category: 'Sales',
                title: 'Start sales in 2 new countries and achieve first quarter revenues totaling over $100000',
                metric_name: '$',
                metric_start: '0',
                metric_target: '100000',
                parent_objective_id: 'SLS0010',
                archived: ''
            },
            SLS0013: {
                id: 'SLS0013',
                category: 'Sales',
                title: 'Increase gross profit % margin from 23% to 54%',
                metric_name: '% margin',
                metric_start: '23',
                metric_target: '54',
                parent_objective_id: 'SLS0010',
                archived: ''
            },
            SLS0020: {
                id: 'SLS0020',
                category: 'Sales',
                title: 'Increase recurring revenues',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            SLS0021: {
                id: 'SLS0021',
                category: 'Sales',
                title: 'Reach monthly recurring revenue ($ MRR) of $250k',
                metric_name: '$ MRP',
                metric_start: '0',
                metric_target: '250000',
                parent_objective_id: 'SLS0020',
                archived: ''
            },
            SLS0022: {
                id: 'SLS0022',
                category: 'Sales',
                title: 'Increase the share of monthly subscriptions vs one-time contracts sold to 85%',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0020',
                archived: ''
            },
            SLS0023: {
                id: 'SLS0023',
                category: 'Sales',
                title: 'Increase average subscription size to at least $295 per month',
                metric_name: '$ ',
                metric_start: '0',
                metric_target: '295',
                parent_objective_id: 'SLS0020',
                archived: ''
            },
            SLS0024: {
                id: 'SLS0024',
                category: 'Sales',
                title: 'Increase % annual renewals to 75%',
                metric_name: 'Annual renewal %',
                metric_start: '0',
                metric_target: '75',
                parent_objective_id: 'SLS0020',
                archived: ''
            },
            SLS0025: {
                id: 'SLS0025',
                category: 'Sales',
                title: 'Reduce churn % to less than 1% monthly',
                metric_name: 'Churn %',
                metric_start: '0',
                metric_target: '1',
                parent_objective_id: 'SLS0020',
                archived: ''
            },
            SLS0030: {
                id: 'SLS0030',
                category: 'Sales',
                title: 'Kickstart sales process activity indicator improvements',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            SLS0031: {
                id: 'SLS0031',
                category: 'Sales',
                title: 'Increase calls per salesperson to 6300 per quarter',
                metric_name: 'Calls per Salesperson',
                metric_start: '0',
                metric_target: '6300',
                parent_objective_id: 'SLS0030',
                archived: ''
            },
            SLS0032: {
                id: 'SLS0032',
                category: 'Sales',
                title: 'Achieve at least 315 demo calls per salesperson per quarter',
                metric_name: 'Demo calls per Salesperson',
                metric_start: '0',
                metric_target: '315',
                parent_objective_id: 'SLS0030',
                archived: ''
            },
            SLS0033: {
                id: 'SLS0033',
                category: 'Sales',
                title: 'At least 33% of online signups % reached via calling them back',
                metric_name: '% online signups',
                metric_start: '0',
                metric_target: '33',
                parent_objective_id: 'SLS0030',
                archived: ''
            },
            SLS0034: {
                id: 'SLS0034',
                category: 'Sales',
                title: 'Have each salesperson spend at least 84 hours per month on support chat',
                metric_name: 'Hours on support chat',
                metric_start: '0',
                metric_target: '84',
                parent_objective_id: 'SLS0030',
                archived: ''
            },
            SLS0040: {
                id: 'SLS0040',
                category: 'Sales',
                title: 'Collect more accurate sales leads data',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            SLS0041: {
                id: 'SLS0041',
                category: 'Sales',
                title: 'Create the list of lead metrics and scripted questions to collect in CRM',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0040',
                archived: ''
            },
            SLS0042: {
                id: 'SLS0042',
                category: 'Sales',
                title: 'Make sure at least 75% of leads have the obligatory question answers filled in',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0040',
                archived: ''
            },
            SLS0043: {
                id: 'SLS0043',
                category: 'Sales',
                title: 'With development automate the data collection from our backend to CRM',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0040',
                archived: ''
            },
            SLS0044: {
                id: 'SLS0044',
                category: 'Sales',
                title: 'Redesign signup form to ask for 3 new obligatory screening questions',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0040',
                archived: ''
            },
            SLS0050: {
                id: 'SLS0050',
                category: 'Sales',
                title: 'Increase the quality of our sales approach',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            SLS0051: {
                id: 'SLS0051',
                category: 'Sales',
                title: 'Make sure at least 50% of signups % called back in first 24 hours',
                metric_name: '% of  Signups called',
                metric_start: '50',
                metric_target: '100',
                parent_objective_id: 'SLS0050',
                archived: ''
            },
            SLS0052: {
                id: 'SLS0052',
                category: 'Sales',
                title: 'Have all salespeople listen in to at least 10 product demos of other team members',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0050',
                archived: ''
            },
            SLS0053: {
                id: 'SLS0053',
                category: 'Sales',
                title: 'Create a best practices sales process document with minimum allowed service levels',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'SLS0050',
                archived: ''
            },
            MKT0010: {
                id: 'MKT0010',
                category: 'Marketing',
                title: '"Simplify & clarify our product',
                metric_name: ' messaging',
                metric_start: ' presentation of things we do"',
                metric_target: '%',
                parent_objective_id: '',
                archived: ''
            },
            MKT0011: {
                id: 'MKT0011',
                category: 'Marketing',
                title: '25 on-site user-testing sessions to understand key product misunderstandings',
                metric_name: 'User-testing sessions',
                metric_start: '0',
                metric_target: '25',
                parent_objective_id: 'MKT0010',
                archived: ''
            },
            MKT0012: {
                id: 'MKT0012',
                category: 'Marketing',
                title: '10 tests of our recent infographics and slide decks for customer understanding',
                metric_name: 'Tests',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'MKT0010',
                archived: ''
            },
            MKT0013: {
                id: 'MKT0013',
                category: 'Marketing',
                title: 'Get 1000 answers to an online user survey sent to all last quarter\'s signups',
                metric_name: 'Survey responses',
                metric_start: '0',
                metric_target: '1000',
                parent_objective_id: 'MKT0010',
                archived: ''
            },
            MKT0014: {
                id: 'MKT0014',
                category: 'Marketing',
                title: 'Conduct a team hackathon to create and publish full portfolio of product materials',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'MKT0010',
                archived: ''
            },
            MKT0015: {
                id: 'MKT0015',
                category: 'Marketing',
                title: 'Present an action plan for next quarter\'s messaging improvements',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'MKT0010',
                archived: ''
            },
            MKT0020: {
                id: 'MKT0020',
                category: 'Marketing',
                title: 'Achieve record metrics in all areas of marketing',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            MKT0021: {
                id: 'MKT0021',
                category: 'Marketing',
                title: '170000 website visitors',
                metric_name: 'Website visitors',
                metric_start: '0',
                metric_target: '170000',
                parent_objective_id: 'MKT0020',
                archived: ''
            },
            MKT0022: {
                id: 'MKT0022',
                category: 'Marketing',
                title: '23000 signups',
                metric_name: 'Signups',
                metric_start: '0',
                metric_target: '23000',
                parent_objective_id: 'MKT0020',
                archived: ''
            },
            MKT0023: {
                id: 'MKT0023',
                category: 'Marketing',
                title: '7500 trials',
                metric_name: 'Trials',
                metric_start: '0',
                metric_target: '7500',
                parent_objective_id: 'MKT0020',
                archived: ''
            },
            MKT0024: {
                id: 'MKT0024',
                category: 'Marketing',
                title: '3500 new paid customers',
                metric_name: 'New paid customers',
                metric_start: '0',
                metric_target: '3500',
                parent_objective_id: 'MKT0020',
                archived: ''
            },
            MKT0025: {
                id: 'MKT0025',
                category: 'Marketing',
                title: 'Maximum paid user acquisition cost of $25',
                metric_name: 'Acquistion cost',
                metric_start: '0',
                metric_target: '25',
                parent_objective_id: 'MKT0020',
                archived: ''
            },
            MKT0030: {
                id: 'MKT0030',
                category: 'Marketing',
                title: 'Successfully implement the weekly newsletter',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            MKT0031: {
                id: 'MKT0031',
                category: 'Marketing',
                title: '"Finalize the content strategy',
                metric_name: ' key messages and topic structure for next 6 months"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: 'MKT0030'
            },
            MKT0032: {
                id: 'MKT0032',
                category: 'Marketing',
                title: '"Grow subscriber base at least 5% per week',
                metric_name: ' getting to 50000 readers"',
                metric_start: 'Readers',
                metric_target: '0',
                parent_objective_id: '50000',
                archived: 'MKT0030'
            },
            MKT0033: {
                id: 'MKT0033',
                category: 'Marketing',
                title: 'Increase the CTR% to above industry average 3.5%',
                metric_name: 'CTR%',
                metric_start: '0',
                metric_target: '3.5',
                parent_objective_id: 'MKT0030',
                archived: ''
            },
            MKT0040: {
                id: 'MKT0040',
                category: 'Marketing',
                title: 'Activate user-testing of our content',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            MKT0041: {
                id: 'MKT0041',
                category: 'Marketing',
                title: 'Talk to 10 external editors to receive feedback on our articles and infographics',
                metric_name: 'External editors interviewed',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'MKT0040',
                archived: ''
            },
            MKT0042: {
                id: 'MKT0042',
                category: 'Marketing',
                title: 'Conduct 21 face to face content testing & interview sessions with users',
                metric_name: 'User tests completed',
                metric_start: '0',
                metric_target: '21',
                parent_objective_id: 'MKT0040',
                archived: ''
            },
            MKT0043: {
                id: 'MKT0043',
                category: 'Marketing',
                title: 'Organize an online survey with min 100 answers to rate our various content',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'MKT0040',
                archived: ''
            },
            MKT0050: {
                id: 'MKT0050',
                category: 'Marketing',
                title: 'Improve our content and its distribution',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            MKT0051: {
                id: 'MKT0051',
                category: 'Marketing',
                title: 'Implement 12 new channels/mediums where to post old or new content',
                metric_name: 'New channels implemented',
                metric_start: '0',
                metric_target: '12',
                parent_objective_id: 'MKT0050',
                archived: ''
            },
            MKT0052: {
                id: 'MKT0052',
                category: 'Marketing',
                title: 'Get 60 marketing takeaways from reading 1h of marketing materials a day',
                metric_name: 'Marketing take aways',
                metric_start: '0',
                metric_target: '60',
                parent_objective_id: 'MKT0050',
                archived: ''
            },
            MKT0053: {
                id: 'MKT0053',
                category: 'Marketing',
                title: '1 test from a product review site for paid promotion',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'MKT0050',
                archived: ''
            },
            MKT0060: {
                id: 'MKT0060',
                category: 'Marketing',
                title: 'Understand our customers and analyze their behavior',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            MKT0061: {
                id: 'MKT0061',
                category: 'Marketing',
                title: 'Conduct 12 online client surveys and analyze the results',
                metric_name: 'Client surveys conducted',
                metric_start: '0',
                metric_target: '12',
                parent_objective_id: 'MKT0060',
                archived: ''
            },
            MKT0062: {
                id: 'MKT0062',
                category: 'Marketing',
                title: 'Map our customer journey to understand what influences their buying decision.',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'MKT0060',
                archived: ''
            },
            MKT0063: {
                id: 'MKT0063',
                category: 'Marketing',
                title: 'Map and analyze all of our current marketing channels and give at least 10 recommendations to improve them.',
                metric_name: 'Recommendations',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'MKT0060',
                archived: ''
            },
            FIN0010: {
                id: 'FIN0010',
                category: 'Finance',
                title: 'Improve annual budgeting and business planning',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            FIN0011: {
                id: 'FIN0011',
                category: 'Finance',
                title: 'Conduct a day-long planning session with each division manager ',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'FIN0010',
                archived: ''
            },
            FIN0012: {
                id: 'FIN0012',
                category: 'Finance',
                title: 'Receive business line budget proposals before Sept 1st',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'FIN0010',
                archived: ''
            },
            FIN0013: {
                id: 'FIN0013',
                category: 'Finance',
                title: 'Have each business line manager start using our online dashboards ',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'FIN0010',
                archived: ''
            },
            FIN0014: {
                id: 'FIN0014',
                category: 'Finance',
                title: 'Close the final budget by November 30th',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'FIN0010',
                archived: ''
            },
            FIN0020: {
                id: 'FIN0020',
                category: 'Finance',
                title: 'Finish raising new capital for growth needs',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            FIN0021: {
                id: 'FIN0021',
                category: 'Finance',
                title: 'E-mail and phone outreach to 100 VCs and seed funds',
                metric_name: 'VCs',
                metric_start: '0',
                metric_target: '100',
                parent_objective_id: 'FIN0020',
                archived: ''
            },
            FIN0022: {
                id: 'FIN0022',
                category: 'Finance',
                title: 'Get at least 30 second contact meetings or conference calls',
                metric_name: 'Second contacts',
                metric_start: '0',
                metric_target: '30',
                parent_objective_id: 'FIN0020',
                archived: ''
            },
            FIN0023: {
                id: 'FIN0023',
                category: 'Finance',
                title: 'Solicit at least 3 term sheets of our minimum required terms',
                metric_name: 'Term sheets',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'FIN0020',
                archived: ''
            },
            FIN0024: {
                id: 'FIN0024',
                category: 'Finance',
                title: 'Close an investment round with the minimum of $10 million pre-money',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'FIN0020',
                archived: ''
            },
            HR0010: {
                id: 'HR0010',
                category: 'People',
                title: 'Improve internal employee engagement',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            HR0011: {
                id: 'HR0011',
                category: 'People',
                title: 'Conduct 3 monthly meetings',
                metric_name: 'Monthly meetings',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'HR0010',
                archived: ''
            },
            HR0012: {
                id: 'HR0012',
                category: 'People',
                title: 'Interview 48 employees on their needs for improving our work culture.',
                metric_name: 'Employees interviewed',
                metric_start: '0',
                metric_target: '48',
                parent_objective_id: 'HR0010',
                archived: ''
            },
            HR0013: {
                id: 'HR0013',
                category: 'People',
                title: 'Implement using OKRs and Ally software in all teams',
                metric_name: 'Teams implementing OKRs',
                metric_start: '0',
                metric_target: '23',
                parent_objective_id: 'HR0010',
                archived: ''
            },
            HR0014: {
                id: 'HR0014',
                category: 'People',
                title: 'Reach weekly employee satisfaction score of at least 4.7 points',
                metric_name: 'Satisfaction score',
                metric_start: '0',
                metric_target: '4.7',
                parent_objective_id: 'HR0010',
                archived: ''
            },
            HR0030: {
                id: 'HR0030',
                category: 'People',
                title: 'Recruitment outreach campaign for engineering',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            HR0031: {
                id: 'HR0031',
                category: 'People',
                title: 'Conduct career day seminars in 5 universities',
                metric_name: 'Universities',
                metric_start: '0',
                metric_target: '5',
                parent_objective_id: 'HR0030',
                archived: ''
            },
            HR0032: {
                id: 'HR0032',
                category: 'People',
                title: 'Harvest Linkedin to collect 250 potential new candidates',
                metric_name: 'Candidates',
                metric_start: '0',
                metric_target: '250',
                parent_objective_id: 'HR0030',
                archived: ''
            },
            HR0033: {
                id: 'HR0033',
                category: 'People',
                title: 'Organise an open career day at the office with at least 50 participants',
                metric_name: 'Participants',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'HR0030',
                archived: ''
            },
            HR0034: {
                id: 'HR0034',
                category: 'People',
                title: 'Redesign and publish our careers and jobs website section',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'HR0030',
                archived: ''
            },
            HR0040: {
                id: 'HR0040',
                category: 'People',
                title: 'Define and promote company culture and values',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            HR0041: {
                id: 'HR0041',
                category: 'People',
                title: 'Survey all employees on our current values (min 75 answers received)',
                metric_name: 'Survey responses',
                metric_start: '0',
                metric_target: '75',
                parent_objective_id: 'HR0040',
                archived: ''
            },
            HR0042: {
                id: 'HR0042',
                category: 'People',
                title: '"With 3 separate teams',
                metric_name: ' conduct brainstorm sessions to redefine our culture"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: 'HR0040'
            },
            HR0043: {
                id: 'HR0043',
                category: 'People',
                title: 'Design and promote our new values on intranet and in office environment',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'HR0040',
                archived: ''
            },
            HR0050: {
                id: 'HR0050',
                category: 'People',
                title: 'Improve satisfaction with receptionist’s work',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            HR0051: {
                id: 'HR0051',
                category: 'People',
                title: 'Decrease number of complaints and negative feedback per quarter from 15 to 5',
                metric_name: 'Negative feedbacks',
                metric_start: '15',
                metric_target: '5',
                parent_objective_id: 'HR0050',
                archived: ''
            },
            HR0052: {
                id: 'HR0052',
                category: 'People',
                title: 'Increase positive feedback items and praise from 5 to 15 per quarter',
                metric_name: 'Postive feedback items',
                metric_start: '5',
                metric_target: '15',
                parent_objective_id: 'HR0050',
                archived: ''
            },
            HR0053: {
                id: 'HR0053',
                category: 'People',
                title: 'Increase end-user satisfaction rating from 4.0 to 4.5',
                metric_name: 'Satisfaction score',
                metric_start: '4',
                metric_target: '4.5',
                parent_objective_id: 'HR0050',
                archived: ''
            },
            HR0070: {
                id: 'HR0070',
                category: 'People',
                title: 'Design and launch internal Employee Academy',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            HR0071: {
                id: 'HR0071',
                category: 'People',
                title: 'Survey 15 team leaders on our educational needs and gaps',
                metric_name: 'Surveys completed',
                metric_start: '0',
                metric_target: '15',
                parent_objective_id: 'HR0070',
                archived: ''
            },
            HR0072: {
                id: 'HR0072',
                category: 'People',
                title: 'Talk to 3 other companies HR Directors on how they do internal education',
                metric_name: 'Conversations',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'HR0070',
                archived: ''
            },
            HR0073: {
                id: 'HR0073',
                category: 'People',
                title: 'Define 10 training modules and design content for each',
                metric_name: 'Training modules',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'HR0070',
                archived: ''
            },
            HR0074: {
                id: 'HR0074',
                category: 'People',
                title: 'Conduct the first 3-day team offsite to test out the Academy curriculum',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'HR0070',
                archived: ''
            },
            PRO0010: {
                id: 'PRO0010',
                category: 'Product Management',
                title: 'Successfully launch version 3 of our main product',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            PRO0011: {
                id: 'PRO0011',
                category: 'Product Management',
                title: 'Get over 10000 new signups',
                metric_name: 'New Signups',
                metric_start: '0',
                metric_target: '10000',
                parent_objective_id: 'PRO0010',
                archived: ''
            },
            PRO0012: {
                id: 'PRO0012',
                category: 'Product Management',
                title: 'Get published product reviews in over 15 publications',
                metric_name: 'Publications',
                metric_start: '0',
                metric_target: '15',
                parent_objective_id: 'PRO0010',
                archived: ''
            },
            PRO0013: {
                id: 'PRO0013',
                category: 'Product Management',
                title: 'Achieve sign-up to % trial ratio of over 25%',
                metric_name: 'Signup to Trial ratio',
                metric_start: '0',
                metric_target: '25',
                parent_objective_id: 'PRO0010',
                archived: ''
            },
            PRO0014: {
                id: 'PRO0014',
                category: 'Product Management',
                title: 'Achieve trial to % paid ratio of over 50%',
                metric_name: 'Trial to Paid  ratio',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'PRO0010',
                archived: ''
            },
            PRO0020: {
                id: 'PRO0020',
                category: 'Product Management',
                title: '"Research',
                metric_name: ' analyze & understand what our users and non-users really think"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            PRO0021: {
                id: 'PRO0021',
                category: 'Product Management',
                title: 'Sales team to conduct 50 phone interviews with key accounts',
                metric_name: 'Phone interviews',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'PRO0020',
                archived: ''
            },
            PRO0022: {
                id: 'PRO0022',
                category: 'Product Management',
                title: 'Support team to conduct 50 phone interviews with churned accounts',
                metric_name: 'Phone interviews',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'PRO0020',
                archived: ''
            },
            PRO0023: {
                id: 'PRO0023',
                category: 'Product Management',
                title: 'Product management to interview 25 external team leaders (non-users)',
                metric_name: 'Interviews',
                metric_start: '0',
                metric_target: '25',
                parent_objective_id: 'PRO0020',
                archived: ''
            },
            PRO0024: {
                id: 'PRO0024',
                category: 'Product Management',
                title: 'Design team conduct 30 web-based user testing sessions on new and old users',
                metric_name: 'User-testing sessions',
                metric_start: '0',
                metric_target: '30',
                parent_objective_id: 'PRO0020',
                archived: ''
            },
            PRO0030: {
                id: 'PRO0030',
                category: 'Product Management',
                title: 'Activate user-testing of our product',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            PRO0031: {
                id: 'PRO0031',
                category: 'Product Management',
                title: 'Conduct at least 21 face to face user testing & interview sessions',
                metric_name: 'Interviews',
                metric_start: '0',
                metric_target: '21',
                parent_objective_id: 'PRO0030',
                archived: ''
            },
            PRO0032: {
                id: 'PRO0032',
                category: 'Product Management',
                title: 'Receive at least 15 video interviews from Usertesting.com',
                metric_name: 'Interviews',
                metric_start: '0',
                metric_target: '15',
                parent_objective_id: 'PRO0030',
                archived: ''
            },
            PRO0040: {
                id: 'PRO0040',
                category: 'Product Management',
                title: 'Implement new 360-degree product planning process',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            PRO0041: {
                id: 'PRO0041',
                category: 'Product Management',
                title: '"Document clear role division between sales',
                metric_name: ' marketing',
                metric_start: ' design and development"',
                metric_target: '%',
                parent_objective_id: '',
                archived: ''
            },
            PRO0042: {
                id: 'PRO0042',
                category: 'Product Management',
                title: '"Decide on and document the process of input methods to and from sales',
                metric_name: ' marketing',
                metric_start: ' design and development back into product management"',
                metric_target: '%',
                parent_objective_id: '',
                archived: ''
            },
            PRO0043: {
                id: 'PRO0043',
                category: 'Product Management',
                title: 'Integrate user testing into all activities in product planning and design phase',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'PRO0040',
                archived: ''
            },
            PRO0044: {
                id: 'PRO0044',
                category: 'Product Management',
                title: 'Integrate user testing into pre-launch testing phase',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'PRO0040',
                archived: ''
            },
            ENG0010: {
                id: 'ENG0010',
                category: 'Engineering',
                title: 'Improve our testing procedures',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            ENG0011: {
                id: 'ENG0011',
                category: 'Engineering',
                title: 'Implement test-driven development in 3 new development teams',
                metric_name: 'Teams',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'ENG0010',
                archived: ''
            },
            ENG0012: {
                id: 'ENG0012',
                category: 'Engineering',
                title: 'Increase unit test coverage to 75% of code',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0010',
                archived: ''
            },
            ENG0013: {
                id: 'ENG0013',
                category: 'Engineering',
                title: 'Conduct a security assessment of our codebase using automated tools',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0010',
                archived: ''
            },
            ENG0014: {
                id: 'ENG0014',
                category: 'Engineering',
                title: 'User-test page prototypes on 12 people',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0010',
                archived: ''
            },
            ENG0015: {
                id: 'ENG0015',
                category: 'Engineering',
                title: 'Make sure satisfaction score of product management to testing team is at least 7.5',
                metric_name: 'Satisfaction score',
                metric_start: '0',
                metric_target: '7.5',
                parent_objective_id: 'ENG0010',
                archived: ''
            },
            ENG0016: {
                id: 'ENG0016',
                category: 'Engineering',
                title: 'Discover at least 100 bugs and open issues in old code not reviewed in 6 months',
                metric_name: 'Bugs uncovered',
                metric_start: '0',
                metric_target: '100',
                parent_objective_id: 'ENG0010',
                archived: ''
            },
            ENG0020: {
                id: 'ENG0020',
                category: 'Engineering',
                title: 'Review and improve our data security procedures',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            ENG0021: {
                id: 'ENG0021',
                category: 'Engineering',
                title: '"For learning',
                metric_name: ' review security policies of 5 other companies"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: 'ENG0020'
            },
            ENG0022: {
                id: 'ENG0022',
                category: 'Engineering',
                title: 'Conduct external penetration testing using at least 2 different software packages',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0020',
                archived: ''
            },
            ENG0023: {
                id: 'ENG0023',
                category: 'Engineering',
                title: 'Document our backup policies and make sure they get implemented',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0020',
                archived: ''
            },
            ENG0024: {
                id: 'ENG0024',
                category: 'Engineering',
                title: 'Guarantee uptime and availability of 99.95%',
                metric_name: 'Uptime',
                metric_start: '0',
                metric_target: '99.95',
                parent_objective_id: 'ENG0020',
                archived: ''
            },
            ENG0030: {
                id: 'ENG0030',
                category: 'Engineering',
                title: 'Refactor our old user management module',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            ENG0031: {
                id: 'ENG0031',
                category: 'Engineering',
                title: 'Survey 5 external API users regarding issues with our authentication',
                metric_name: 'API users',
                metric_start: '0',
                metric_target: '5',
                parent_objective_id: 'ENG0030',
                archived: ''
            },
            ENG0032: {
                id: 'ENG0032',
                category: 'Engineering',
                title: 'Discuss the user management code usage with 5 engineers having used it in production',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0030',
                archived: ''
            },
            ENG0033: {
                id: 'ENG0033',
                category: 'Engineering',
                title: 'Rewrite and launch new version of our user management module',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0030',
                archived: ''
            },
            ENG0034: {
                id: 'ENG0034',
                category: 'Engineering',
                title: 'Rewrite the API user authentication for new version',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ENG0030',
                archived: ''
            },
            ADM0020: {
                id: 'ADM0020',
                category: 'Administration',
                title: 'Be excellent - improve to be the best in whatever we do',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            ADM0021: {
                id: 'ADM0021',
                category: 'Administration',
                title: 'All 13 teams to have an internal brainstorm meeting:',
                metric_name: 'Teams doing internal brainstorming',
                metric_start: '0',
                metric_target: '13',
                parent_objective_id: 'ADM0020',
                archived: ''
            },
            ADM0022: {
                id: 'ADM0022',
                category: 'Administration',
                title: 'Benchmark everything related to product to 10 key competitors',
                metric_name: 'Benchmarked competitors',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'ADM0020',
                archived: ''
            },
            ADM0023: {
                id: 'ADM0023',
                category: 'Administration',
                title: 'Survey 100 customers on their thoughts where we need to be better',
                metric_name: 'Customers Surveyed',
                metric_start: '0',
                metric_target: '100',
                parent_objective_id: 'ADM0020',
                archived: ''
            },
            ADM0024: {
                id: 'ADM0024',
                category: 'Administration',
                title: 'Create an action list of 10 company-wide improvement activities',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0020',
                archived: ''
            },
            ADM0030: {
                id: 'ADM0030',
                category: 'Administration',
                title: 'Implement regular usage of OKRs and Ally',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            ADM0031: {
                id: 'ADM0031',
                category: 'Administration',
                title: 'Conduct an all-hands team meeting to introduce OKRs and Ally software',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0030',
                archived: ''
            },
            ADM0032: {
                id: 'ADM0032',
                category: 'Administration',
                title: 'Everyone keeps their forms up to date at all times',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0030',
                archived: ''
            },
            ADM0033: {
                id: 'ADM0033',
                category: 'Administration',
                title: 'People give regular feedback to others weekly',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0030',
                archived: ''
            },
            ADM0034: {
                id: 'ADM0034',
                category: 'Administration',
                title: 'Get well acquainted with & configure Ally',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0030',
                archived: ''
            },
            ADM0010: {
                id: 'ADM0010',
                category: 'Administration',
                title: 'Improve internal document management',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            ADM0011: {
                id: 'ADM0011',
                category: 'Administration',
                title: 'Choose and launch new document sharing platform',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0010',
                archived: ''
            },
            ADM0012: {
                id: 'ADM0012',
                category: 'Administration',
                title: 'Have each of 17 teams create their own directory structure for documents',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'ADM0010',
                archived: ''
            },
            ADM0013: {
                id: 'ADM0013',
                category: 'Administration',
                title: 'Move 75% of existing % of documents from file servers to new system',
                metric_name: '% of documents',
                metric_start: '0',
                metric_target: '75',
                parent_objective_id: 'ADM0010',
                archived: ''
            },
            CS0010: {
                id: 'CS0010',
                category: 'Customer Success',
                title: 'Research and improve customer satisfaction',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            CS0011: {
                id: 'CS0011',
                category: 'Customer Success',
                title: 'Exceed Net Promoter Score (NPS) of over 8.0',
                metric_name: 'NPS',
                metric_start: '0',
                metric_target: '8',
                parent_objective_id: 'CS0010',
                archived: ''
            },
            CS0012: {
                id: 'CS0012',
                category: 'Customer Success',
                title: 'Get 1000 survey responses to annual satisfaction survey',
                metric_name: 'Survey Responses',
                metric_start: '0',
                metric_target: '1000',
                parent_objective_id: 'CS0010',
                archived: ''
            },
            CS0013: {
                id: 'CS0013',
                category: 'Customer Success',
                title: 'Conduct 50 phone interviews with top customers',
                metric_name: 'Interview conducted',
                metric_start: '0',
                metric_target: '50',
                parent_objective_id: 'CS0010',
                archived: ''
            },
            CS0014: {
                id: 'CS0014',
                category: 'Customer Success',
                title: 'Conduct 15 phone interviews with recently churned customers',
                metric_name: 'Customers interviewed',
                metric_start: '0',
                metric_target: '15',
                parent_objective_id: 'CS0010',
                archived: ''
            },
            CS0015: {
                id: 'CS0015',
                category: 'Customer Success',
                title: 'Present an action plan of 10 improvements for next quarter',
                metric_name: 'Improvements proposed',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'CS0010',
                archived: ''
            },
            CS0020: {
                id: 'CS0020',
                category: 'Customer Success',
                title: 'Improve satisfaction with support team\'s work',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            CS0021: {
                id: 'CS0021',
                category: 'Customer Success',
                title: 'Decrease number of complaints and negative feedback per quarter from 15 to 5',
                metric_name: 'Negative feedback received',
                metric_start: '15',
                metric_target: '5',
                parent_objective_id: 'CS0020',
                archived: ''
            },
            CS0022: {
                id: 'CS0022',
                category: 'Customer Success',
                title: 'Increase positive feedback items and praise from 5 to 15 per quarter',
                metric_name: 'Positive feedback received',
                metric_start: '5',
                metric_target: '15',
                parent_objective_id: 'CS0020',
                archived: ''
            },
            CS0023: {
                id: 'CS0023',
                category: 'Customer Success',
                title: 'Increase end-user satisfaction rating from 4.0 to 4.5',
                metric_name: 'Satisfaction score',
                metric_start: '4',
                metric_target: '4.5',
                parent_objective_id: 'CS0020',
                archived: ''
            },
            DSG0010: {
                id: 'DSG0010',
                category: 'Design',
                title: 'Redesign and launch our new landing page',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            DSG0011: {
                id: 'DSG0011',
                category: 'Design',
                title: 'Test existing landing page and sub-pages on external users for understanding issues',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'DSG0010',
                archived: ''
            },
            DSG0012: {
                id: 'DSG0012',
                category: 'Design',
                title: 'Conduct stakeholder interviews with 10 people from sales and marketing',
                metric_name: 'Stakeholder interviews',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'DSG0010',
                archived: ''
            },
            DSG0013: {
                id: 'DSG0013',
                category: 'Design',
                title: '"Design new version of our site structure',
                metric_name: ' navigation and all pages"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: 'DSG0010'
            },
            DSG0014: {
                id: 'DSG0014',
                category: 'Design',
                title: 'User-test page prototypes on 12 people',
                metric_name: 'Tests completed',
                metric_start: '0',
                metric_target: '12',
                parent_objective_id: 'DSG0010',
                archived: ''
            },
            DSG0015: {
                id: 'DSG0015',
                category: 'Design',
                title: '"With development and marketing',
                metric_name: ' launch by November 1st"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: 'DSG0010'
            },
            DSG0016: {
                id: 'DSG0016',
                category: 'Design',
                title: 'Increase visitor to % sign-up ratio from 9% to 15%',
                metric_name: '% sign-up ratio',
                metric_start: '9',
                metric_target: '15',
                parent_objective_id: 'DSG0010',
                archived: ''
            },
            DSG0020: {
                id: 'DSG0020',
                category: 'Design',
                title: 'Support marketing and sales with design deliverables',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            DSG0021: {
                id: 'DSG0021',
                category: 'Design',
                title: '12 infographic and slide sets',
                metric_name: 'Slide sets',
                metric_start: '0',
                metric_target: '12',
                parent_objective_id: 'DSG0020',
                archived: ''
            },
            DSG0022: {
                id: 'DSG0022',
                category: 'Design',
                title: '1 special campaign marketing minisite',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'DSG0020',
                archived: ''
            },
            DSG0023: {
                id: 'DSG0023',
                category: 'Design',
                title: '10 product & support PDF documents',
                metric_name: 'Support documents',
                metric_start: '0',
                metric_target: '10',
                parent_objective_id: 'DSG0020',
                archived: ''
            },
            DSG0024: {
                id: 'DSG0024',
                category: 'Design',
                title: '"2 PDF e-books',
                metric_name: ' white papers or case studies"',
                metric_start: 'Artifacts delivered',
                metric_target: '0',
                parent_objective_id: '2',
                archived: 'DSG0020'
            },
            DSG0030: {
                id: 'DSG0030',
                category: 'Design',
                title: 'Promote our design team as the best place to work',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            DSG0031: {
                id: 'DSG0031',
                category: 'Design',
                title: 'Apply for 5 external design competitions',
                metric_name: 'External design competitions',
                metric_start: '0',
                metric_target: '5',
                parent_objective_id: 'DSG0030',
                archived: ''
            },
            DSG0032: {
                id: 'DSG0032',
                category: 'Design',
                title: 'Publish 2 open source design and UI/UX freebies',
                metric_name: 'Freebies published',
                metric_start: '0',
                metric_target: '2',
                parent_objective_id: 'DSG0030',
                archived: ''
            },
            DSG0033: {
                id: 'DSG0033',
                category: 'Design',
                title: 'Conduct 3 monthly designer meetups at our office',
                metric_name: 'Monthly designer meetups',
                metric_start: '0',
                metric_target: '3',
                parent_objective_id: 'DSG0030',
                archived: ''
            },
            DSG0040: {
                id: 'DSG0040',
                category: 'Design',
                title: 'Become a strongly design driven company',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: '',
                archived: ''
            },
            DSG0041: {
                id: 'DSG0041',
                category: 'Design',
                title: '"Establish a set of live brand and design guides and assets',
                metric_name: ' as PDF and online"',
                metric_start: '%',
                metric_target: '',
                parent_objective_id: '',
                archived: 'DSG0040'
            },
            DSG0042: {
                id: 'DSG0042',
                category: 'Design',
                title: '"Set budget for design software',
                metric_name: ' online presence accounts (like Dribbble)',
                metric_start: ' and premium resources that make no sense to create ourselves (mockup templates',
                metric_target: ' wireframe kits',
                parent_objective_id: ' stock photos and illustrations)"',
                archived: '%'
            },
            DSG0043: {
                id: 'DSG0043',
                category: 'Design',
                title: 'Run at least 1 Google Sprint http://www.gv.com/sprint/',
                metric_name: '%',
                metric_start: '',
                metric_target: '',
                parent_objective_id: 'DSG0040',
                archived: ''
            }
        },
        parentIds: [
            'COM0010',
            'COM0020',
            'COM0030',
            'COM0040',
            'COM0050',
            'COM0070',
            'COM0080',
            'COM0090',
            'SLS0010',
            'SLS0020',
            'SLS0030',
            'SLS0040',
            'SLS0050',
            'MKT0010',
            'MKT0020',
            'MKT0030',
            'MKT0031',
            'MKT0040',
            'MKT0050',
            'MKT0060',
            'FIN0010',
            'FIN0020',
            'HR0010',
            'HR0030',
            'HR0040',
            'HR0042',
            'HR0050',
            'HR0070',
            'PRO0010',
            'PRO0020',
            'PRO0030',
            'PRO0040',
            'PRO0041',
            'PRO0042',
            'ENG0010',
            'ENG0020',
            'ENG0021',
            'ENG0030',
            'ADM0020',
            'ADM0030',
            'ADM0010',
            'CS0010',
            'CS0020',
            'DSG0010',
            'DSG0013',
            'DSG0015',
            'DSG0020',
            'DSG0030',
            'DSG0040',
            'DSG0041'
        ],
        parentWithChildren: {
            '2': [
                'DSG0024'
            ],
            '50000': [
                'MKT0032'
            ],
            COM0010: [
                'COM0011',
                'COM0012',
                'COM0013',
                'COM0014',
                'COM0015'
            ],
            COM0020: [
                'COM0021',
                'COM0022',
                'COM0023'
            ],
            COM0030: [
                'COM0031',
                'COM0032',
                'COM0033',
                'COM0034',
                'COM0035'
            ],
            COM0040: [
                'COM0041',
                'COM0042',
                'COM0043',
                'COM0044'
            ],
            COM0050: [
                'COM0051',
                'COM0052',
                'COM0053',
                'COM0054'
            ],
            COM0070: [
                'COM0071',
                'COM0072',
                'COM0073',
                'COM0074',
                'COM0075'
            ],
            COM0080: [
                'COM0081',
                'COM0082',
                'COM0083',
                'COM0084'
            ],
            COM0090: [
                'COM0091',
                'COM0092',
                'COM0093',
                'COM0094'
            ],
            SLS0010: [
                'SLS0011',
                'SLS0012',
                'SLS0013'
            ],
            SLS0020: [
                'SLS0021',
                'SLS0022',
                'SLS0023',
                'SLS0024',
                'SLS0025'
            ],
            SLS0030: [
                'SLS0031',
                'SLS0032',
                'SLS0033',
                'SLS0034'
            ],
            SLS0040: [
                'SLS0041',
                'SLS0042',
                'SLS0043',
                'SLS0044'
            ],
            SLS0050: [
                'SLS0051',
                'SLS0052',
                'SLS0053'
            ],
            MKT0010: [
                'MKT0011',
                'MKT0012',
                'MKT0013',
                'MKT0014',
                'MKT0015'
            ],
            MKT0020: [
                'MKT0021',
                'MKT0022',
                'MKT0023',
                'MKT0024',
                'MKT0025'
            ],
            MKT0030: [
                'MKT0033'
            ],
            MKT0040: [
                'MKT0041',
                'MKT0042',
                'MKT0043'
            ],
            MKT0050: [
                'MKT0051',
                'MKT0052',
                'MKT0053'
            ],
            MKT0060: [
                'MKT0061',
                'MKT0062',
                'MKT0063'
            ],
            FIN0010: [
                'FIN0011',
                'FIN0012',
                'FIN0013',
                'FIN0014'
            ],
            FIN0020: [
                'FIN0021',
                'FIN0022',
                'FIN0023',
                'FIN0024'
            ],
            HR0010: [
                'HR0011',
                'HR0012',
                'HR0013',
                'HR0014'
            ],
            HR0030: [
                'HR0031',
                'HR0032',
                'HR0033',
                'HR0034'
            ],
            HR0040: [
                'HR0041',
                'HR0043'
            ],
            HR0050: [
                'HR0051',
                'HR0052',
                'HR0053'
            ],
            HR0070: [
                'HR0071',
                'HR0072',
                'HR0073',
                'HR0074'
            ],
            PRO0010: [
                'PRO0011',
                'PRO0012',
                'PRO0013',
                'PRO0014'
            ],
            PRO0020: [
                'PRO0021',
                'PRO0022',
                'PRO0023',
                'PRO0024'
            ],
            PRO0030: [
                'PRO0031',
                'PRO0032'
            ],
            PRO0040: [
                'PRO0043',
                'PRO0044'
            ],
            ENG0010: [
                'ENG0011',
                'ENG0012',
                'ENG0013',
                'ENG0014',
                'ENG0015',
                'ENG0016'
            ],
            ENG0020: [
                'ENG0022',
                'ENG0023',
                'ENG0024'
            ],
            ENG0030: [
                'ENG0031',
                'ENG0032',
                'ENG0033',
                'ENG0034'
            ],
            ADM0020: [
                'ADM0021',
                'ADM0022',
                'ADM0023',
                'ADM0024'
            ],
            ADM0030: [
                'ADM0031',
                'ADM0032',
                'ADM0033',
                'ADM0034'
            ],
            ADM0010: [
                'ADM0011',
                'ADM0012',
                'ADM0013'
            ],
            CS0010: [
                'CS0011',
                'CS0012',
                'CS0013',
                'CS0014',
                'CS0015'
            ],
            CS0020: [
                'CS0021',
                'CS0022',
                'CS0023'
            ],
            DSG0010: [
                'DSG0011',
                'DSG0012',
                'DSG0014',
                'DSG0016'
            ],
            DSG0020: [
                'DSG0021',
                'DSG0022',
                'DSG0023'
            ],
            DSG0030: [
                'DSG0031',
                'DSG0032',
                'DSG0033'
            ],
            ' stock photos and illustrations)"': [
                'DSG0042'
            ],
            DSG0040: [
                'DSG0043'
            ]
        },
        showLoader: false,
        category: [
            'Company',
            'Sales',
            'Marketing',
            'Finance',
            'People',
            'Product Management',
            'Engineering',
            'Administration',
            'Customer Success',
            'Design'
        ]
    }
}

const CHILDREN_MODAL = [<span key={1}><b>id:</b> COM0013</span>, <span key={2}><b>category:</b> Company</span>, <span key={3}><b>title:</b> Conduct 50 phone interviews with top customers</span>]

module.exports = {
    INITIAL_STATE,
    CHILDREN_MODAL,
}