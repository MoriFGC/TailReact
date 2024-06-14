import { screen, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("filtra i libri sulla base dell'input", async () => {

    render(<SearchBar />);

    // Trova l'input di ricerca utilizzando il suo attributo placeholder
    const input = screen.getByPlaceholderText(/Search.../i);

    fireEvent.change(input, { target: { value: "the" } });

    // Attendi che vengano trovati tutti gli elementi "heading" di livello 3 (h3)
    const books = await screen.findAllByTestId('cards')

    // Verifica che ci sia un solo utente renderizzato
    expect(books).toHaveLength(2);

    // Verifica che l'utente "Leanne Graham" sia presente nella lista
    expect(screen.getByText("The Last Wish")).toBeInTheDocument();
  });