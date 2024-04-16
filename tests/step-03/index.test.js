const { readCSV } = require('../../src/csvReader');
const { parseSelectQuery } = require('../../src/queryParser');

test('Read CSV File', async () => {
    const data = await readCSV('./student.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(4);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30');
});

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM student';
    const parsed = parseSelectQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        joinCondition: null,
        joinTable: null,
        joinType: null,
        "limit": null,
        "isDistinct": false,
        "orderByFields": null,
        table: 'student',
        whereClauses: [],
        groupByFields: null,
        "hasAggregateWithoutGroupBy": false,
    });
});