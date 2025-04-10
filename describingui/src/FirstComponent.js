// Write your component below!
function Congratulations()
{
  return (
    <h3>Good job!</h3>
  );
}

export default function Wishes()
{
  return(
    <>
       <h2>Everyone appreciated me</h2>
       <Congratulations />
       <Congratulations />
       <Congratulations />
    </>
  );
 
}