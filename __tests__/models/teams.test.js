'use strict';

const category = require('../../src/models/categories/categories-model');
const categoryGet = require('../../src/models/categories/categories-model');

jest.setTimeout(30000);

describe('Categories model', () => {
    it('can post() a new category', () => {
        let testObj = {name: 'Test'};

        return category.post(testObj)
            .then(record => {
                Object.keys(testObj).forEach(key => {
                    expect(record[key]).toEqual(testObj[key]);
                });

                expect(category.database.length).toEqual(1);
                expect(category.database).toBeTruthy();
            })
            .catch(e => console.error('ERR', e));
    });

    it('can get() a category', () => {
        let testObj = {name: 'Test'};

        return categoryGet.post(testObj)
            .then(record => {
                return categoryGet.get(record.id)
                    .then(cat => {
                        Object.keys(testObj).forEach(key => {
                            expect(cat[1][key]).toEqual(testObj[key]);
                        });
                    });
            });
    });

    it('can update a category', () => {
        let testObj = {name: 'Test'};
        let updatedEntry = {name: 'Updated'};

        return category.post(testObj)
            .then(record => {
                return category.put(record._id, updatedEntry)
                    .then(updated => {
                        Object.keys(updatedEntry).forEach(key => {
                            expect(updated[key]).toEqual(updatedEntry[key]);
                        });
                    })
            })
    });

    it('can delete a category', () => {
        let testObj = {name: 'DeleteTest'};
        let initialDbLength = category.database.length; // H"Liana - adding this because when all tests are run, it fills up the database

        return category.post(testObj)
            .then(record => {
                return category.delete(record._id)
                    .then(cat => {
                        console.log(category.database)
                        expect(cat).toBeUndefined();
                        expect(category.database.length).toEqual(initialDbLength);
                    })
            })
    });

});