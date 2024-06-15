import { fireEvent, getAllByTestId, render, screen, waitFor } from "@testing-library/react";
import Welcome from "./Welcome";
import fantasy from '../../Books/fantasy.json';
import App from "../App";
import AllTheBooks from "./AllTheBooks";
import { expect } from "vitest";


//ES 1 verifico se è presente Welcome in pagina
test('è visibile il messaggio Welcome?', () => {
   render(<Welcome />) 

   const WelcomeText = screen.getByText(/TailReact/i);

   expect(WelcomeText).toBeInTheDocument();

});


//ES 2
test('verifico che le card siano tante quanto i libri cioè 150',  () => {
    render(<App />);
  
    const cards =  screen.getAllByTestId('card');
  
    expect(cards).toHaveLength(fantasy.length);
  });

  //ES 3
  test('verifico se comment are viene renderizzato correttamente', async () => {
   render(<App />);
 
   const card = await screen.findByText("The Last Wish: Introducing the Witcher");

   fireEvent.click(card);
 
   const CommentArea = screen.getByText(/Create/i);
 
   expect(CommentArea).toBeInTheDocument();
 });

  //ES 4
  test("filtra gli utenti sulla base degli input", async () => {

   render(<App />);


   const input = screen.getByPlaceholderText(/Search.../i);

   
   fireEvent.change(input, { target: { value: "the last" } });

   const filteredCards = await screen.findAllByTestId("card");

   
   expect(filteredCards).toHaveLength(2);

   
   expect(screen.getByText("The Last Wish: Introducing the Witcher")).toBeInTheDocument();
});

//ES 5
test('verifica se al click della card compaia il bordo colorato', async () => {
   render(<App />);
 
   const card = await screen.findByText("The Last Wish: Introducing the Witcher");

   fireEvent.click(card);

   expect(card.closest('.ciccio')).toHaveClass('border-[4px]')
 });

 //ES 6
 test('Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale', async () => {
   render(<App />);

   const card = await screen.findByText("The Last Wish: Introducing the Witcher");

   fireEvent.click(card);

   expect(card.closest('.ciccio')).toHaveClass('border-[4px]')

   const card1 = await screen.findByText("Sword of Destiny (The Witcher)");

   fireEvent.click(card1);

   expect(card.closest('.ciccio')).not.toHaveClass('border-[4px]')

 })

 //ES 7
 test("verifico che non ci siano istanze di commenti al caricamento del DOM", () => {
   render(<App />);

   const comments = screen.queryAllByTestId("comment");

   expect(comments).toHaveLength(0);
});

//ES 8
test("verifico che cliccando su di un libro con recensioni, esse vengano caricate", async () => {

   render(<App />);

   const book = await screen.findByText("Sword of Destiny (The Witcher)");
   fireEvent.click(book);

   const comments = await waitFor(() => screen.findAllByTestId("comment"));

   // Mi aspetto che ci siano più di zero comments
   // Se il test non funziona è perché mancano i commenti
   expect(comments.length).toBeGreaterThan(1);
});