import calculate from "./calculate";

describe('calculator function', ()=>{
    const calcObj = {
        total: null,
        next: null,
        operation: null

    };
    test('adds a decimal when on .', ()=>{
        expect(calculate(calcObj, '.')).toStrictEqual({next: '0.', operation: null, total: null})
    })

    test('= returns the result of the number', ()=>{
        const firstObj = {
            total: 1,
            next: 3,
            operation: "+"
        };
        expect(calculate(firstObj, '=' )).toStrictEqual({next: null, operation: null, total: '4'})
    })
    test('returns either a positive or a negative when you enter -+', ()=>{
        const secondObject = {
            total: null,
            next: 3,
            operation: null,
        };
        expect(calculate(secondObject, '+/-')).toStrictEqual({next: '-1', operation: null, total: null})

    })

  
})