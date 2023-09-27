import "./QuoteCard.css"

const QuoteCard = ({quote,handleChangeQuote }) => {
    
    
  return (
   <section className="quoteCard">

    <article className="quoteCard__container">
        <h1 className="quoteCard__title">Infogalax</h1>

       
        <p className="quoteCard__phrase">{quote.phrase}</p>

        <button className="quoteCard__btn" onClick={handleChangeQuote}>Change</button>

    </article>
    
    <footer className="quoteCard__footer">
        Author: {quote.author}
    </footer>

   </section> 
  )
  }
export default QuoteCard