import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";


//ES 1 verifico se è presente Welcome in pagina
test('è visibile il messaggio Welcome?', () => {
   render(<Welcome />) 

   const WelcomeText = screen.getByText(/TailReact/i);

   expect(WelcomeText).toBeInTheDocument();

});