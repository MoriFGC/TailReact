import BooksRender from "../components/BooksRender";
import Button from "../components/Button";
import Welcome from "../components/Welcome";



export default function Home({setType, type, text}) {
    return (
        <>
            <Welcome />
            <Button setType={setType} />
            <BooksRender type={type} text={text}/>
        </>
        
    ) 
}