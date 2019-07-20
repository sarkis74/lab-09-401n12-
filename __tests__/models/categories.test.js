'use strict';

const rootDir = process.cwd();
const teams = require(`${rootDir}/src/models/teams/teams-model.js`);

const supergoose = require('../supergoose.js');

jest.setTimeout(30000);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Team Model', () => {
    it('can post() a new team', () => {
        let obj = {name:'TestTeam'};
        return teams.post(obj)
            .then(record => {
                Object.keys(obj).forEach(key =>{
                    expect(record[key]).toEqual(obj[key]);
                });
            });
    });

    it('can get() a team', () => {
        let obj = {name:'TestTeam'};
        return teams.post(obj)
            .then(record => {
                return teams.get(record._id)
                    .then(team => {
                        Object.keys(obj).forEach(key =>{
                            expect(team[0][key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can update a team', () => {
        let obj = {name:'TestTeam'};
        let newTest = {name: 'UpdatedTest'};
        return teams.post(obj)
            .then(record => {
                return teams.put(record._id, newTest)
                    .then(updated => {
                        expect(updated.name).toEqual(newTest.name);
                    })
            })
    });

    it('can delete a team', () => {
        let test = {name:'TestTeam'};
        return teams.post(test)
            .then(record => {
                return teams.delete(record._id)
                    .then(deleted => {
                        expect(deleted.name).toEqual(test.name);
                    })
            })
    });

});