import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {
        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })

        test('debe retornar el string vacio', () =>
        {
            const result = titleCase('')
            expect(result).toBe('')
        })


    });

    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })

        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
       
    });

    describe('divide', () => {
        test('debe retornar un numero', () =>
        {
            const result = divide(10,2)
            expect(typeof result).toBe('number')
        })

        test('si entra string devuelve null', () =>
        {
            const result = divide()
            expect(result).toBeNull()
        })

        test('dividir 10/2', () => 
        {
            const result = divide(10,2)
            expect(result).toBe(5)
        })

        test('dividir 10/4', () => 
        {
            const result = divide(10,4)
            expect(result).toBeCloseTo(2.5)
        })

        test('division por 0 devuelve null', () => 
        {
            const result = divide(10,0)
            expect(result).toBeNull()
        })
    })

    describe('isapple', () => {
        test('devuelve boolean', () =>
        {
            const result = isapple()
            expect(typeof result).toBe('boolean')
        })

        test('string manzana devuelve true', () =>
        {
            const result = isapple('manzana')
            expect(result).toBeTruthy()
        })

        test('string manzana devuelve false', () =>
        {
            const result = isapple('pera')
            expect(result).toBeFalsy()
        })
    })

});