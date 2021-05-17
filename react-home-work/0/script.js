const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(item => item).map(item => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, eu: [a], rus} = sponsors;

const money = (cash=0) => cash.reduce((a, b) => a+b);

function makeBusiness({owner='Sam', director = 'Victor', cash, emp}) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}.\nAnd we have a sponsors: \n${eu} ${rus} unexpected sponsor\nNote. Be careful with ${a}. It's a huge risk.`);
}

makeBusiness({cash: money(cash), emp: employersNames});