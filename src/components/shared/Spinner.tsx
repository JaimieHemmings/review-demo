import SpinnerGif from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <>
      <img src={SpinnerGif} alt="Loading..." className="block w-[50px] my-12 mx-auto" />
    </>
  )
}

export default Spinner
