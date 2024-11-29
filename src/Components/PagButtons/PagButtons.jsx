import './pagbuttons.css'

const PagButtons = ({handlePrevious, handleNext}) => {
  return (
    <>
    <ul className='pagination__buttons'>
    <li className='pagination__button-item'>
      <button onClick={handlePrevious}>Previous</button>
    </li>
    <li className='pagination__button-item'>
      <button onClick={handleNext}>Next</button>
    </li>
    </ul>
    </>
  )
}

export default PagButtons