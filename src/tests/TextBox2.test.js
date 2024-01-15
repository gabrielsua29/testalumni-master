import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('Componente TextBox2', () => {
    let box;
    let button;
    //Primero renderizamos el componente: se crea el DOM Virtual
    render(<TextBox2 />);
     //el name de Box lo definimos en su atributo title (fijarse en el código)
     box = screen.getByRole('caja', { name: 'es una caja' });
     //el name del botón es el propio título que le ponemos al botón
     button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
     //comprobamos si la <Box> está en nuestro documento
    
    test('La caja se encuentra en el componente', () => {  
        expect(box).toBeInTheDocument();
    })

    test('El botón se encuentra en el componente', () => {
        expect(button).toBeInTheDocument();
    })

    test('la caja con el texto tiene un color inicial', () => {
  
        expect(box).toHaveStyle({
            backgroundColor: 'black'
        });
    });

    test('comprobar si al pulsar el botón cambia el botón de fondo', async () => {
     
        //usamos el userEvent. Lo primero que debemos hacer es inicializarlo:
        const user = userEvent.setup()
        //simulamos que el usuario clica el botón               
        await user.click(button);
        //Ahora comprobamos que al pulsar en el botón se cambia
        //el color de fondo de la caja (Box) a tomato.
        expect(box).toHaveStyle({
            backgroundColor: 'black'
        });
    });
})