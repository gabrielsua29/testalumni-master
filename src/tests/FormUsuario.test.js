import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('Componente FormUsuario', () => {
    let button, textfield, h2;
    render(<FormUsuario/>)

    button = screen.getByRole('button', {name: 'Submit'})
    textfield = screen.getByRole('texfield', {name: ''})
    h2 = screen.getByRole('h2', {name: 'Rellena el formulario'})

    test('El boton se encuentra en el componente', () => {
        expect(button).toBeInTheDocument();
    })

    test('El textfield se encuenta en el componente', () => {
        expect(textfield).toBeInTheDocument();
    })

    test('El h2 se encuentra en el componente', () => {
        expect(h2).toBeInTheDocument();
    })

})